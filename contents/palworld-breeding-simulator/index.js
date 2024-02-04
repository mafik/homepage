let root = document.getElementById('simulator');

class Pal {
  constructor(id, gender, t0, t1, t2, t3) {
    this.id = id;
    this.gender = gender;
    this.traits = [t0, t1, t2, t3];
  }
  static FromCpp(ptr) {
    return new Pal(
      Module.HEAPU8[ptr], // id
      Module.HEAPU8[ptr + 1], // gender
      Module.HEAPU8[ptr + 2], // t0
      Module.HEAPU8[ptr + 3], // t1
      Module.HEAPU8[ptr + 4], // t2
      Module.HEAPU8[ptr + 5]); // t3
  }
}

let genders = ['♂', '♀'];

let pals = [];
if ('pals' in localStorage) {
  pals = JSON.parse(localStorage.pals);
}

let rooster = [];
function RoosterFromCpp() {
  // First get size from `uint32_t RoosterSize()`
  let size = Module.ccall('RoosterSize', 'number', [], []);
  // Get ptr from `CompactRoosterEntry *RoosterData()`
  let ptr = Module.ccall('RoosterData', 'number', [], []);
  // Now read the data from array of
  // struct CompactRoosterEntry {
  //   Pal pal;
  //   int parent1;
  //   int parent2;
  //   float attempts;
  // };
  // Each entry is 20 bytes long
  rooster = [];
  for (let i = 0; i < size; i++) {
    let base = ptr + i * 20;
    let entry = {};
    entry.pal = Pal.FromCpp(base);
    entry.parent1 = Module.getValue(base + 8, 'i32');
    entry.parent2 = Module.getValue(base + 12, 'i32');
    entry.attempts = Module.getValue(base + 16, 'float');
    rooster.push(entry);
  }
}

let best_pals = [];
function BestPalsFromCpp() {
  let size = Module.ccall('BestPalsSize', 'number', [], []);
  let ptr = Module.ccall('BestPalsData', 'number', [], []);
  best_pals = [];
  for (let i = 0; i < size; i++) {
    // Each entry is 8 bytes: 4 byte pal index + 4 byte float score
    let base = ptr + i * 8;
    let entry = {};
    entry.index = Module.getValue(base, 'i32');
    entry.score = Module.getValue(base + 4, 'float');
    best_pals.push(entry);
  }
}

// Create the pals table
let table = document.createElement('table');
table.id = 'pals';
simulator.appendChild(table);
// Create the header row
let header = document.createElement('tr');
table.appendChild(header);
let headers = ['Name', 'Gender', 'Trait 1', 'Trait 2', 'Trait 3', 'Trait 4', 'Actions'];
for (let h of headers) {
  let th = document.createElement('th');
  th.appendChild(document.createTextNode(h));
  header.appendChild(th);
}
// Create the tbody
let tbody = document.createElement('tbody');
table.appendChild(tbody);

let tfoot = document.createElement('tfoot');
table.appendChild(tfoot);

let IDName, TraitName;

function PalsToTable() {
  tbody.innerHTML = '';
  for (let pal of pals) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td = document.createElement('td');
    td.appendChild(document.createTextNode(IDName(pal.id)));
    tr.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(genders[pal.gender]));
    tr.appendChild(td);
    for (let t of pal.traits) {
      td = document.createElement('td');
      td.appendChild(document.createTextNode(TraitName(t)));
      tr.appendChild(td);
    }
    td = document.createElement('td');
    let remove = document.createElement('input');
    remove.type = 'button';
    remove.value = 'Remove';
    remove.onclick = function () {
      pals.splice(pals.indexOf(pal), 1);
      localStorage.pals = JSON.stringify(pals);
      PalsToTable();
    };
    td.appendChild(remove);
    tr.appendChild(td);
  }
}

function PalsToCpp() {
  let pals_ptr = Module.ccall('ReservePalArray', 'number', ['number'], [pals.length]);
  for (let i = 0; i < pals.length; i++) {
    let pal = pals[i];
    Module.setValue(pals_ptr + i * 6, pal.id, 'i8');
    Module.setValue(pals_ptr + i * 6 + 1, pal.gender, 'i8');
    for (let j = 0; j < 4; j++) {
      Module.setValue(pals_ptr + i * 6 + 2 + j, pal.traits[j], 'i8');
    }
  }
}

simulator.appendChild(document.createElement('hr'));

let metric_buttons = document.createElement('div');
simulator.appendChild(metric_buttons);

simulator.appendChild(document.createElement('hr'));

let best_pals_div = document.createElement('div');
best_pals_div.id = 'best_pals';
simulator.appendChild(best_pals_div);

let progress = null;

function Main() {
  let metric_count = Module.ccall('MetricCount', 'number', [], []);
  for (let i = 0; i < metric_count; i++) {
    let metric_name = Module.ccall('MetricName', 'string', ['number'], [i]);
    let metric_btn = document.createElement('input');
    metric_btn.type = 'button';
    metric_btn.value = 'Find Best ' + metric_name;
    metric_btn.onclick = function () {
      BreedStart(i);
    };
    metric_buttons.appendChild(metric_btn);
  }

  // Fetch the list of pals from C++ side
  let id_count = Module.ccall('IDCount', 'number', [], []);
  IDName = Module.cwrap('IDName', 'string', ['number']);
  // Fetch the list of traits from C++ side
  let trait_count = Module.ccall('TraitCount', 'number', [], []);
  TraitName = Module.cwrap('TraitName', 'string', ['number']);
  // Prepare the form for adding new pals
  // Add the id selection
  let id_select = document.createElement('select');
  id_select.id = 'id_select';
  for (let i = 0; i < id_count; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = IDName(i);
    id_select.appendChild(option);
  }
  let tfoot_tr = document.createElement('tr');
  tfoot.appendChild(tfoot_tr);
  let AddToTfoot = function (element) {
    let tfoot_td = document.createElement('td');
    tfoot_td.appendChild(element);
    tfoot_tr.appendChild(tfoot_td);
  };
  AddToTfoot(id_select);

  // Add the select field for the gender
  let gender_select = document.createElement('select');
  gender_select.id = 'gender';
  for (let i = 0; i < 2; i++) {
    let gender_option = document.createElement('option');
    gender_option.value = i;
    gender_option.text = genders[i];
    gender_select.appendChild(gender_option);
  }
  AddToTfoot(gender_select);
  // Add the select fields for the traits
  let trait_selects = [];
  for (let t = 0; t < 4; ++t) {
    let trait_select = document.createElement('select');
    trait_select.id = `trait{i}_select`;
    for (let i = 0; i < trait_count; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = TraitName(i);
      trait_select.appendChild(option);
    }
    AddToTfoot(trait_select);
    trait_selects.push(trait_select);
  }
  let ResetTraits = function () {
    for (let t = 0; t < 4; ++t) {
      trait_selects[t].selectedIndex = 0;
    }
  };
  // When ID changes, reset the traits
  id_select.onchange = ResetTraits;
  // Add the submit button
  let submit = document.createElement('input');
  submit.type = 'button';
  submit.value = 'Add';
  submit.onclick = function () {
    pals.push(new Pal(
      id_select.value,
      gender_select.value,
      trait_selects[0].value,
      trait_selects[1].value,
      trait_selects[2].value,
      trait_selects[3].value));
    localStorage.pals = JSON.stringify(pals);
    PalsToTable();
  };
  AddToTfoot(submit);

  PalsToTable();
}

function PalToHtml(index) {
  let pal = rooster[index].pal;
  let div = document.createElement('div');
  div.classList.add('pal');
  let name = document.createElement('span');
  name.appendChild(document.createTextNode(IDName(pal.id)));
  div.appendChild(name);
  let gender = document.createElement('span');
  gender.appendChild(document.createTextNode(genders[pal.gender]));
  div.appendChild(gender);
  for (let t of pal.traits) {
    if (t == 0) continue;
    let trait = document.createElement('span');
    trait.classList.add('trait');
    trait.appendChild(document.createTextNode(TraitName(t)));
    div.appendChild(trait);
  }
  return div;
}

// Perform dfs on the breeding tree for the given pal and return the sequence of pals to breed.
function CreatePlan(index) {
  let plan = [];
  let visited = new Set();
  let dfs = function (index) {
    if (visited.has(index)) return;
    visited.add(index);
    let pal = rooster[index];
    if (pal.parent1 != index && pal.parent2 != index) {
      dfs(pal.parent1);
      dfs(pal.parent2);
      plan.push(index);
    }
  };
  dfs(index);
  return plan;
}

function BreedStart(metric) {
  let metric_name = Module.ccall('MetricName', 'string', ['number'], [metric]);
  best_pals_div.innerHTML = `Finding best ${metric_name}...`;
  progress = document.createElement('progress');
  best_pals_div.appendChild(progress);
  PalsToCpp();
  Module.ccall('BreedStart', 'void', ['number'], [metric]);
  setTimeout(BreedStep, 0);
}


function BreedFinish() {
  progress = null;
  RoosterFromCpp();
  BestPalsFromCpp();
  best_pals_div.innerHTML = '';
  let entry_i = 1;
  for (let entry of best_pals) {
    let div = document.createElement('div');
    // TODO: add <summary> & contents
    let details = document.createElement('details');
    div.appendChild(details);
    let summary = document.createElement('summary');
    details.appendChild(summary);
    summary.appendChild(document.createTextNode(`${entry_i++}. `));
    let pal_html = PalToHtml(entry.index);
    summary.appendChild(pal_html);
    let plan = CreatePlan(entry.index);
    let total_attempts = 0;
    for (let i = 0; i < plan.length; i++) {
      let child_index = plan[i];
      let parent1_index = rooster[child_index].parent1;
      let parent2_index = rooster[child_index].parent2;
      let attempts = rooster[child_index].attempts - rooster[parent1_index].attempts - rooster[parent2_index].attempts;
      if (i == plan.length - 1) {
        // last child can be either male or female so we can divide the number of attempts by 2
        attempts /= 2;
      }
      total_attempts += attempts;
    }
    summary.appendChild(document.createTextNode(` with score of ${entry.score.toFixed(2)} (~${Math.round(total_attempts)} 🎂):`));
    for (let i = 0; i < plan.length; i++) {
      let child_index = plan[i];
      let breeding_step = document.createElement('div');
      let parent1_index = rooster[child_index].parent1;
      let parent2_index = rooster[child_index].parent2;
      let attempts = rooster[child_index].attempts - rooster[parent1_index].attempts - rooster[parent2_index].attempts;
      if (i == plan.length - 1) {
        // last child can be either male or female so we can divide the number of attempts by 2
        attempts /= 2;
      }
      breeding_step.appendChild(PalToHtml(parent1_index));
      breeding_step.appendChild(document.createTextNode('❤️'));
      breeding_step.appendChild(PalToHtml(parent2_index));
      breeding_step.appendChild(document.createTextNode('➔🥚'));
      breeding_step.appendChild(PalToHtml(child_index));
      breeding_step.appendChild(document.createTextNode(` (~${Math.round(attempts)} 🎂)`));
      details.appendChild(breeding_step);
    }
    best_pals_div.appendChild(div);
  }
}


function BreedStep() {
  let status_ptr = Module.ccall('BreedStep', 'number', ['number'], [20]);
  let iter = Module.getValue(status_ptr, 'i32');
  let queue_size = Module.getValue(status_ptr + 4, 'i32');
  let rooster_size = Module.getValue(status_ptr + 8, 'i32');
  if (queue_size > 0) {
    let max = Math.max(rooster_size, queue_size);
    let val = max - queue_size;
    progress.max = max;
    progress.value = val;
    progress.title = `${val} / ${max}`;
    setTimeout(BreedStep, 0);
  } else {
    BreedFinish();
  }
}

var Module = {
  onRuntimeInitialized: Main
};
