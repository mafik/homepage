#include "rooster.cc"
#include <set>

struct RoosterEntry {
  Pal pal;
  PalOrigin origin;
};

vector<Pal> initial_pals;

struct CompactRoosterEntry {
  Pal pal;
  // 2 bytes of padding
  int parent1;
  int parent2;
  float attempts;
};

vector<CompactRoosterEntry> compact_rooster;

struct BestPalsEntry {
  uint32_t rooster_index = 0xffffffff;
  float score = 0;
};

vector<BestPalsEntry> best_pals;

Rooster rooster;

static void ExportRooster() {
  compact_rooster.resize(rooster.size());
  phmap::flat_hash_map<Pal, int> pal_to_index;
  int i = 0;
  for (auto &[pal, origin] : rooster) {
    pal_to_index[pal] = i++;
  }
  for (auto &[pal, origin] : rooster) {
    int child = pal_to_index[pal];
    int parent1 = pal_to_index[origin.parent1];
    int parent2 = pal_to_index[origin.parent2];
    compact_rooster[child] = {pal, parent1, parent2, origin.attempts};
  }
}

phmap::flat_hash_set<Pal> parents_queue;
vector<RoosterEntry> add_to_rooster;
phmap::flat_hash_map<Pal, float> children;

struct BreedStatus {
  int iter = 0;
  int parents_queue_size;
  int rooster_size;
} breed_status;

extern "C" BreedStatus *BreedStart() {
  parents_queue.clear();
  add_to_rooster.clear();
  children.clear();
  rooster.clear();
  for (auto pal : initial_pals) {
    parents_queue.emplace(pal);
    rooster[pal] = {pal, pal, 0};
  }
  breed_status.iter = 0;
  breed_status.parents_queue_size = parents_queue.size();
  breed_status.rooster_size = rooster.size();
  return &breed_status;
}

extern "C" float ScoreExternal(Pal &);

static void ScorePals() {
  best_pals.clear();

  vector<float> scores;
  vector<uint32_t> sort_by_score;
  scores.reserve(compact_rooster.size());
  sort_by_score.reserve(compact_rooster.size());
  for (int i = 0; i < compact_rooster.size(); ++i) {
    scores.push_back(ScoreExternal(compact_rooster[i].pal));
    sort_by_score.push_back(i);
  }

  auto sort_by_score_fn = [&](int a, int b) {
    if (scores[a] == scores[b]) {
      return compact_rooster[a].attempts <
             compact_rooster[b].attempts; // ascending attempts
    }
    return scores[a] > scores[b]; // descending score
  };
  sort(sort_by_score.begin(), sort_by_score.end(), sort_by_score_fn);

  phmap::flat_hash_set<Pal> visited;
  int best_score_i = 0;
  while (best_score_i < compact_rooster.size()) {
    uint32_t i = sort_by_score[best_score_i];
    if (scores[i] <= 0.0f) {
      break;
    }
    Pal pal = compact_rooster[i].pal;
    Pal opposite = {pal.id, Opposite(pal.gender), pal.traits};
    if (visited.contains(pal) || visited.contains(opposite)) {
      best_score_i++;
      continue;
    }
    visited.insert(pal);
    visited.insert(opposite);
    if (!best_pals.empty()) {
      if (compact_rooster[i].attempts >=
          compact_rooster[best_pals.back().rooster_index].attempts) {
        best_score_i++;
        continue;
      }
    }
    best_pals.emplace_back(i, scores[i]);
  }
}

extern "C" BreedStatus *BreedStep(int max_steps) {
  for (int step = 0; !parents_queue.empty() && step < max_steps; ++step) {
    breed_status.iter++;
    auto a_it = [&]() {
      auto best_it = parents_queue.begin();
      for (auto it = parents_queue.begin(); it != parents_queue.end(); ++it) {
        if (rooster[*it].attempts < rooster[*best_it].attempts) {
          best_it = it;
        }
      }
      return best_it;
    }();
    auto a = *a_it;
    parents_queue.erase(a_it);
    add_to_rooster.clear();
    for (auto &b_it : rooster) {
      Pal b = b_it.first;
      if (b == a) {
        continue;
      }
      float parent_attempts = rooster[a].attempts + rooster[b].attempts;
      children.clear();
      Cross(a, b, children);

      for (auto [child, attempts] : children) {
        // Actual number of attempts must account for the attempts to create
        // parents
        float total_attempts = parent_attempts + attempts;
        // if (total_attempts > MaxAttempts) {
        //   continue;
        // }
        if (auto child_it = rooster.find(child); child_it != rooster.end()) {
          if (child_it->second.attempts > total_attempts) {
            // We've found a better path for this Pal!
            add_to_rooster.emplace_back(child, PalOrigin{a, b, total_attempts});
          }
        } else {
          add_to_rooster.emplace_back(child, PalOrigin{a, b, total_attempts});
        }
      }
    }
    for (auto &[pal, origin] : add_to_rooster) {
      bool added = false;
      if (auto pal_it = rooster.find(pal); pal_it != rooster.end()) {
        if (pal_it->second.attempts > origin.attempts) {
          // We've found a better path for this Pal!
          pal_it->second = origin;
          added = true;
        }
      } else {
        rooster.emplace(pal, origin);
        added = true;
      }
      if (added) {
        // If the new child was added to the rooster, also try to use it as a
        // parent next
        parents_queue.emplace(pal);
      }
    }
  }
  if (parents_queue.empty()) {
    ExportRooster();
    ScorePals();
  }

  breed_status.parents_queue_size = parents_queue.size();
  breed_status.rooster_size = rooster.size();
  return &breed_status;
}

extern "C" Pal *ReservePalArray(int n) {
  initial_pals.resize(n);
  return initial_pals.data();
}

extern "C" uint32_t RoosterSize() { return compact_rooster.size(); }

extern "C" CompactRoosterEntry *RoosterData() { return compact_rooster.data(); }

extern "C" uint32_t BestPalsSize() { return best_pals.size(); }

extern "C" BestPalsEntry *BestPalsData() { return best_pals.data(); }
