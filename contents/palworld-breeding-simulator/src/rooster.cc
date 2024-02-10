#define _CRT_SECURE_NO_WARNINGS

#include "pals.cc"
#include "parallel_hashmap/phmap.h"
#include <span>
#include <vector>

struct PalOrigin {
  Pal parent1, parent2;
  float attempts;
};

static ID GetUniqueComboChildID(Pal a, Pal b) {
  auto a_id = a.id;
  auto b_id = b.id;
  if (a_id == Relaxaurus && b_id == Sparkit)
    return RelaxaurusLux;
  if (a_id == Incineram && b_id == Maraith)
    return IncineramNoct;
  if (a_id == Mau && b_id == Pengullet)
    return MauCryst;
  if (a_id == Vanwyrm && b_id == Foxcicle)
    return VanwyrmCryst;
  if (a_id == Eikthyrdeer && b_id == Hangyu)
    return EikthyrdeerTerra;
  if (a_id == Elphidran && b_id == Surfent)
    return ElphidranAqua;
  if (a_id == Pyrin && b_id == Katress)
    return PyrinNoct;
  if (a_id == Mammorest && b_id == Wumpo)
    return MammorestCryst;
  if (a_id == Mossanda && b_id == Grizzbolt)
    return MossandaLux;
  if (a_id == Dinossom && b_id == Rayhound)
    return DinossomLux;
  if (a_id == Jolthog && b_id == Pengullet)
    return JolthogCryst;
  if (a_id == Frostallion && b_id == Helzephyr)
    return FrostallionNoct;
  if (a_id == Kingpaca && b_id == Reindrix)
    return IceKingpaca;
  if (a_id == Lyleen && b_id == Menasting)
    return LyleenNoct;
  if (a_id == Leezpunk && b_id == Flambelle)
    return LeezpunkIgnis;
  if (a_id == Blazehowl && b_id == Felbat)
    return BlazehowlNoct;
  if (a_id == Robinquill && b_id == Fuddler)
    return RobinquillTerra;
  if (a_id == Broncherry && b_id == Fuack)
    return BroncherryAqua;
  if (a_id == Surfent && b_id == Dumud)
    return SurfentTerra;
  if (a_id == Gobfin && b_id == Rooby)
    return GobfinIgnis;
  if (a_id == Suzaku && b_id == Jormuntide)
    return SuzakuAqua;
  if (a_id == Reptyro && b_id == Foxcicle)
    return IceReptyro;
  if (a_id == Hangyu && b_id == Swee)
    return HangyuCryst;
  if (a_id == Mossanda && b_id == Petallia)
    return Lyleen;
  if (a_id == Vanwyrm && b_id == Anubis)
    return Faleris;
  if (a_id == Mossanda && b_id == Rayhound)
    return Grizzbolt;
  if (a_id == Grizzbolt && b_id == Relaxaurus)
    return Orserk;
  if (a_id == Kitsun && b_id == Astegon)
    return Shadowbeak;
  return LastID;
}

static ID GetChildID(Pal a, Pal b) {
  auto a_id = a.id;
  auto b_id = b.id;
  if (a_id == b_id)
    return a_id;
  if (ID unique_id = GetUniqueComboChildID(a, b); unique_id != LastID) {
    return unique_id;
  }
  if (ID unique_id = GetUniqueComboChildID(b, a); unique_id != LastID) {
    return unique_id;
  }
  auto a_rank = Rank(a_id);
  auto b_rank = Rank(b_id);
  auto child_rank = (a_rank + b_rank) / 2;
  return RankToID(child_rank);
}

static void GetGenderOdds(ID id, pair<Gender, float> odds[2]) {
  switch (id) {
  case Kingpaca:
    odds[0] = {Male, 0.9};
    break;
  case IceKingpaca:
    odds[0] = {Male, 0.9};
    break;
  case Warsect:
    odds[0] = {Male, 0.8};
    break;
  case Lovander:
    odds[0] = {Male, 0.3};
    break;
  case Lyleen:
    odds[0] = {Male, 0.3};
    break;
  case LyleenNoct:
    odds[0] = {Male, 0.3};
    break;
  case Dazzi:
    odds[0] = {Male, 0.2};
    break;
  case Mozzarina:
    odds[0] = {Male, 0.2};
    break;
  case Elizabee:
    odds[0] = {Male, 0.1};
    break;
  case Beegarde:
    odds[0] = {Male, 0.1};
    break;
  default:
    odds[0] = {Male, 0.5};
    break;
  }
  odds[1] = {Female, 1 - odds[0].second};
}

struct WeightedValue {
  float weight;
  size_t value;
};

constexpr static WeightedValue NumInheritedTraits[] = {
    {0.4, 1},
    {0.3, 2},
    {0.2, 3},
    {0.1, 4},
};

static float CombinationCount(int n, int k) {
  static float cache[100][100] = {};
  if (cache[n][k] != 0)
    return cache[n][k];
  float ret = 1;
  for (int i = 0; i < k; ++i) {
    ret *= (n - i);
    ret /= (i + 1);
  }
  cache[n][k] = ret;
  return ret;
}

static void Combinations(span<Trait> pool, int n,
                         function<void(span<Trait>)> cb) {
  vector<Trait> combination;
  combination.reserve(n);
  function<void(int)> recurse = [&](int offset) {
    if (combination.size() == n) {
      cb(combination);
      return;
    }
    for (int i = offset; i < pool.size(); ++i) {
      combination.push_back(pool[i]);
      recurse(i + 1);
      combination.pop_back();
    }
  };
  recurse(0);
}

static void Cross(Pal a, Pal b, phmap::flat_hash_map<Pal, float> &children) {
  if (a.gender == b.gender) {
    return;
  }

  Pal child;
  child.id = GetChildID(a, b);

  pair<Gender, float> genders[2];
  GetGenderOdds(child.id, genders);

  vector<Trait> parents_traits_pool;
  for (auto t : a.traits) {
    if (t == NoTrait)
      continue;
    parents_traits_pool.push_back(t);
  }
  for (auto t : b.traits) {
    if (t == NoTrait)
      continue;
    if (find(parents_traits_pool.begin(), parents_traits_pool.end(), t) !=
        parents_traits_pool.end())
      continue;
    parents_traits_pool.push_back(t);
  }

  for (auto [gender, gender_prob] : genders) {
    float gp = gender_prob;
    child.gender = gender;

    for (auto &num_inherited_traits : NumInheritedTraits) {
      float inherited_traits_prob = num_inherited_traits.weight;
      // pick up to n traits from parents_traits
      size_t n = min(num_inherited_traits.value, parents_traits_pool.size());
      float inherited_combination_count =
          CombinationCount(parents_traits_pool.size(), n);
      Combinations(parents_traits_pool, n, [&](span<Trait> inherited_traits) {
        for (auto t : inherited_traits) {
          if (BadTraits[t]) {
            return; // Breeding Pals with meh traits only slows down the
                    // search
          }
        }

        float child_probability =
            gp * inherited_traits_prob / inherited_combination_count *
            (inherited_traits.size() == 4
                 ? 1
                 : 0.4); // 40% probability for no random traits
        int i = 0;
        for (auto t : inherited_traits) {
          child.traits[i++] = t;
        }
        for (; i < 4; ++i) {
          child.traits[i] = NoTrait;
        }
        sort(child.traits.begin(), child.traits.end());
        children[child] += child_probability;
      });
    }
  }

  // Convert probability to number of attempts
  for (auto &[child, attempts] : children) {
    attempts = 1. / attempts;
  }
}

static bool Contains(span<Trait> traits, Trait t) {
  return find(traits.begin(), traits.end(), t) != traits.end();
}

using Rooster = phmap::flat_hash_map<Pal, PalOrigin>;
