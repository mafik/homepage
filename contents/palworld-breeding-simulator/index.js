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

// Hashtables used for encoding Palworld identifiers to our C++ enum values.
let EncodeIDName = {};

let EncodeTrait = {};
EncodeTrait.undefined = 0;

let EncodeGender = {};
EncodeGender["EPalGenderType::Male"] = 0;
EncodeGender["EPalGenderType::Female"] = 1;

let CharacterIDToIDName = {
  Anubis: "Anubis",
  Boss_Anubis: "Anubis",
  FlameBuffalo: "Arsox",
  BOSS_FlameBuffalo: "Arsox",
  BlackMetalDragon: "Astegon",
  BOSS_BlackMetalDragon: "Astegon",
  GYM_ThunderDragonMan: "Axel & Orserk",
  BlueDragon: "Azurobe",
  BOSS_BlueDragon: "Azurobe",
  BadCatgirl: "Bad Catgirl",
  BOSS_BadCatgirl: "Bad Catgirl",
  ThunderBird: "Beakon",
  BOSS_ThunderBird: "Beakon",
  BeardedDragon: "Bearded Dragon",
  BOSS_BeardedDragon: "Bearded Dragon",
  SoldierBee: "Beegarde",
  BOSS_SoldierBee: "Beegarde",
  KingBahamut: "Blazamut",
  BOSS_KingBahamut: "Blazamut",
  Manticore: "Blazehowl",
  BOSS_Manticore: "Blazehowl",
  Manticore_Dark: "Blazehowl Noct",
  BOSS_Manticore_Dark: "Blazehowl Noct",
  BlueberryFairy: "Blueberry Fairy",
  BOSS_BlueberryFairy: "Blueberry Fairy",
  ElecLion: "Boltmane",
  BOSS_ElecLion: "Boltmane",
  LittleBriarRose: "Bristla",
  BOSS_LittleBriarRose: "Bristla",
  SakuraSaurus: "Broncherry",
  BOSS_SakuraSaurus: "Broncherry",
  SakuraSaurus_Water: "Broncherry Aqua",
  BOSS_SakuraSaurus_Water: "Broncherry Aqua",
  BrownRabbit: "Brown Rabbit",
  BOSS_BrownRabbit: "Brown Rabbit",
  Ronin: "Bushi",
  BOSS_Ronin: "Bushi",
  BerryGoat: "Caprity",
  BOSS_BerryGoat: "Caprity",
  PinkCat: "Cattiva",
  BOSS_PinkCat: "Cattiva",
  DarkCrow: "Cawgnito",
  BOSS_DarkCrow: "Cawgnito",
  FlyingManta: "Celaray",
  BOSS_FlyingManta: "Celaray",
  ChickenPal: "Chikipi",
  BOSS_ChickenPal: "Chikipi",
  WeaselDragon: "Chillet",
  BOSS_WeaselDragon: "Chillet",
  CuteButterfly: "Cinnamoth",
  BOSS_CuteButterfly: "Cinnamoth",
  WoolFox: "Cremis",
  BOSS_WoolFox: "Cremis",
  WhiteTiger: "Cryolinx",
  BOSS_WhiteTiger: "Cryolinx",
  DreamDemon: "Daedream",
  BOSS_DreamDemon: "Daedream",
  DarkMutant: "Dark Mutant",
  BOSS_DarkMutant: "Dark Mutant",
  RaijinDaughter: "Dazzi",
  BOSS_RaijinDaughter: "Dazzi",
  NegativeKoala: "Depresso",
  BOSS_NegativeKoala: "Depresso",
  DrillGame: "Digtoise",
  BOSS_DrillGame: "Digtoise",
  FlowerDinosaur: "Dinossom",
  BOSS_FlowerDinosaur: "Dinossom",
  FlowerDinosaur_Electric: "Dinossom Lux",
  BOSS_FlowerDinosaur_Electric: "Dinossom Lux",
  Garm: "Direhowl",
  BOSS_Garm: "Direhowl",
  BlackFurDragon: "Dragostrophe",
  BOSS_BlackFurDragon: "Dragostrophe",
  LazyCatfish: "Dumud",
  BOSS_LazyCatfish: "Dumud",
  Deer: "Eikthyrdeer",
  BOSS_Deer: "Eikthyrdeer",
  Deer_Ground: "Eikthyrdeer Terra",
  BOSS_Deer_Ground: "Eikthyrdeer Terra",
  QueenBee: "Elizabee",
  BOSS_QueenBee: "Elizabee",
  FairyDragon: "Elphidran",
  BOSS_FairyDragon: "Elphidran",
  FairyDragon_Water: "Elphidran Aqua",
  BOSS_FairyDragon_Water: "Elphidran Aqua",
  Horus: "Faleris",
  BOSS_Horus: "Faleris",
  FeatherOstrich: "Feather Ostrich",
  BOSS_FeatherOstrich: "Feather Ostrich",
  CatVampire: "Felbat",
  BOSS_CatVampire: "Felbat",
  FengyunDeeper: "Fenglope",
  BOSS_FengyunDeeper: "Fenglope",
  LavaGirl: "Flambelle",
  BOSS_LavaGirl: "Flambelle",
  FlowerRabbit: "Flopie",
  BOSS_FlowerRabbit: "Flopie",
  IceFox: "Foxcicle",
  BOSS_IceFox: "Foxcicle",
  Kitsunebi: "Foxparks",
  BOSS_Kitsunebi: "Foxparks",
  IceHorse: "Frostallion",
  BOSS_IceHorse: "Frostallion",
  IceHorse_Dark: "Frostallion Noct",
  BOSS_IceHorse_Dark: "Frostallion Noct",
  BluePlatypus: "Fuack",
  BOSS_BluePlatypus: "Fuack",
  CuteMole: "Fuddler",
  BOSS_CuteMole: "Fuddler",
  Eagle: "Galeclaw",
  BOSS_Eagle: "Galeclaw",
  SharkKid: "Gobfin",
  BOSS_SharkKid: "Gobfin",
  SharkKid_Fire: "Gobfin Ignis",
  BOSS_SharkKid_Fire: "Gobfin Ignis",
  GoldenHorse: "Golden Horse",
  BOSS_GoldenHorse: "Golden Horse",
  Gorilla: "Gorirat",
  BOSS_Gorilla: "Gorirat",
  GrassDragon: "Grass Dragon",
  BOSS_GrassDragon: "Grass Dragon",
  NaughtyCat: "Grintale",
  BOSS_NaughtyCat: "Grintale",
  ElecPanda: "Grizzbolt",
  BOSS_ElecPanda: "Grizzbolt",
  GuardianDog: "Guardian Dog",
  BOSS_GuardianDog: "Guardian Dog",
  PlantSlime_Flower: "Gumoss",
  PlantSlime: "Gumoss",
  BOSS_PlantSlime_Flower: "Gumoss",
  BOSS_PlantSlime: "Gumoss",
  WindChimes: "Hangyu",
  BOSS_WindChimes: "Hangyu",
  WindChimes_Ice: "Hangyu Cryst",
  BOSS_WindChimes_Ice: "Hangyu Cryst",
  HadesBird: "Helzephyr",
  BOSS_HadesBird: "Helzephyr",
  WizardOwl: "Hoocrates",
  BOSS_WizardOwl: "Hoocrates",
  KingAlpaca_Ice: "Ice Kingpaca",
  BOSS_KingAlpaca_Ice: "Ice Kingpaca",
  VolcanicMonster_Ice: "Ice Reptyro",
  BOSS_VolcanicMonster_Ice: "Ice Reptyro",
  Baphomet: "Incineram",
  BOSS_Baphomet: "Incineram",
  Baphomet_Dark: "Incineram Noct",
  BOSS_Baphomet_Dark: "Incineram Noct",
  JetDragon: "Jetragon",
  BOSS_JetDragon: "Jetragon",
  Hedgehog: "Jolthog",
  BOSS_Hedgehog: "Jolthog",
  Hedgehog_Ice: "Jolthog Cryst",
  BOSS_Hedgehog_Ice: "Jolthog Cryst",
  Umihebi: "Jormuntide",
  BOSS_Umihebi: "Jormuntide",
  Umihebi_Fire: "Jormuntide Ignis",
  BOSS_Umihebi_Fire: "Jormuntide Ignis",
  CatMage: "Katress",
  BOSS_CatMage: "Katress",
  Kelpie: "Kelpsea",
  BOSS_Kelpie: "Kelpsea",
  Kelpie_Fire: "Kelpsea Ignis",
  BOSS_Kelpie_Fire: "Kelpsea Ignis",
  NegativeOctopus: "Killamari",
  BOSS_NegativeOctopus: "Killamari",
  KingAlpaca: "Kingpaca",
  BOSS_KingAlpaca: "Kingpaca",
  AmaterasuWolf: "Kitsun",
  BOSS_AmaterasuWolf: "Kitsun",
  SheepBall: "Lamball",
  Sheepball: "Lamball",
  BOSS_SheepBall: "Lamball",
  BOSS_Sheepball: "Lamball",
  LizardMan: "Leezpunk",
  BOSS_LizardMan: "Leezpunk",
  LizardMan_Fire: "Leezpunk Ignis",
  BOSS_LizardMan_Fire: "Leezpunk Ignis",
  Carbunclo: "Lifmunk",
  BOSS_Carbunclo: "Lifmunk",
  GYM_LilyQueen: "Lily & Lyleen",
  Werewolf: "Loupmoon",
  BOSS_Werewolf: "Loupmoon",
  PinkLizard: "Lovander",
  BOSS_PinkLizard: "Lovander",
  Mutant: "Lunaris",
  BOSS_Mutant: "Lunaris",
  LilyQueen: "Lyleen",
  BOSS_LilyQueen: "Lyleen",
  LilyQueen_Dark: "Lyleen Noct",
  BOSS_LilyQueen_Dark: "Lyleen Noct",
  GrassMammoth: "Mammorest",
  BOSS_GrassMammoth: "Mammorest",
  GrassMammoth_Ice: "Mammorest Cryst",
  BOSS_GrassMammoth_Ice: "Mammorest Cryst",
  GhostBeast: "Maraith",
  BOSS_GhostBeast: "Maraith",
  GYM_Horus: "Marcus & Faleris",
  Bastet: "Mau",
  BOSS_Bastet: "Mau",
  Bastet_Ice: "Mau Cryst",
  BOSS_Bastet_Ice: "Mau Cryst",
  Alpaca: "Melpaca",
  BOSS_Alpaca: "Melpaca",
  DarkScorpion: "Menasting",
  BOSS_DarkScorpion: "Menasting",
  GrassPanda: "Mossanda",
  BOSS_GrassPanda: "Mossanda",
  GrassPanda_Electric: "Mossanda Lux",
  BOSS_GrassPanda_Electric: "Mossanda Lux",
  CowPal: "Mozzarina",
  BOSS_CowPal: "Mozzarina",
  BlackCentaur: "Necromus",
  BOSS_BlackCentaur: "Necromus",
  HawkBird: "Nitewing",
  BOSS_HawkBird: "Nitewing",
  NightFox: "Nox",
  BOSS_NightFox: "Nox",
  ThunderDragonMan: "Orserk",
  BOSS_ThunderDragonMan: "Orserk",
  SaintCentaur: "Paladius",
  BOSS_SaintCentaur: "Paladius",
  Penguin: "Pengullet",
  BOSS_Penguin: "Pengullet",
  CaptainPenguin: "Penking",
  BOSS_CaptainPenguin: "Penking",
  FlowerDoll: "Petallia",
  BOSS_FlowerDoll: "Petallia",
  PinkKangaroo: "Pink Kangaroo",
  BOSS_PinkKangaroo: "Pink Kangaroo",
  FireKirin: "Pyrin",
  BOSS_FireKirin: "Pyrin",
  FireKirin_Dark: "Pyrin Noct",
  BOSS_FireKirin_Dark: "Pyrin Noct",
  SkyDragon: "Quivern",
  BOSS_SkyDragon: "Quivern",
  RedArmorBird: "Ragnahawk",
  BOSS_RedArmorBird: "Ragnahawk",
  ThunderDog: "Rayhound",
  BOSS_ThunderDog: "Rayhound",
  IceDeer: "Reindrix",
  BOSS_IceDeer: "Reindrix",
  LazyDragon: "Relaxaurus",
  BOSS_LazyDragon: "Relaxaurus",
  LazyDragon_Electric: "Relaxaurus Lux",
  BOSS_LazyDragon_Electric: "Relaxaurus Lux",
  VolcanicMonster: "Reptyro",
  BOSS_VolcanicMonster: "Reptyro",
  PinkRabbit: "Ribbuny",
  BOSS_PinkRabbit: "Ribbuny",
  RobinHood: "Robinquill",
  BOSS_RobinHood: "Robinquill",
  RobinHood_Ground: "Robinquill Terra",
  BOSS_RobinHood_Ground: "Robinquill Terra",
  FlameBambi: "Rooby",
  BOSS_FlameBambi: "Rooby",
  Boar: "Rushoar",
  BOSS_Boar: "Rushoar",
  ScorpionMan: "Scorpion Man",
  BOSS_ScorpionMan: "Scorpion Man",
  BlackGriffon: "Shadowbeak",
  BOSS_BlackGriffon: "Shadowbeak",
  WhiteMoth: "Sibelyx",
  BOSS_WhiteMoth: "Sibelyx",
  SifuDog: "Sifu Dog",
  BOSS_SifuDog: "Sifu Dog",
  ElecCat: "Sparkit",
  BOSS_ElecCat: "Sparkit",
  Serpent: "Surfent",
  BOSS_Serpent: "Surfent",
  Serpent_Ground: "Surfent Terra",
  BOSS_Serpent_Ground: "Surfent Terra",
  Suzaku: "Suzaku",
  BOSS_Suzaku: "Suzaku",
  Suzaku_Water: "Suzaku Aqua",
  BOSS_Suzaku_Water: "Suzaku Aqua",
  MopBaby: "Swee",
  BOSS_MopBaby: "Swee",
  MopKing: "Sweepa",
  BOSS_MopKing: "Sweepa",
  Monkey: "Tanzee",
  BOSS_Monkey: "Tanzee",
  Ganesha: "Teafant",
  BOSS_Ganesha: "Teafant",
  TentacleTurtle: "Tentacle Turtle",
  BOSS_TentacleTurtle: "Tentacle Turtle",
  ColorfulBird: "Tocotoco",
  BOSS_ColorfulBird: "Tocotoco",
  CatBat: "Tombat",
  BOSS_CatBat: "Tombat",
  Kirin: "Univolt",
  BOSS_Kirin: "Univolt",
  VioletFairy: "Vaelet",
  BOSS_VioletFairy: "Vaelet",
  BirdDragon: "Vanwyrm",
  BOSS_BirdDragon: "Vanwyrm",
  BirdDragon_Ice: "Vanwyrm Cryst",
  BOSS_BirdDragon_Ice: "Vanwyrm Cryst",
  GrassRabbitMan: "Verdash",
  BOSS_GrassRabbitMan: "Verdash",
  GYM_BlackGriffon: "Victor & Shadowbeak",
  CuteFox: "Vixy",
  BOSS_CuteFox: "Vixy",
  HerculesBeetle: "Warsect",
  BOSS_HerculesBeetle: "Warsect",
  WaterLizard: "Water Lizard",
  BOSS_WaterLizard: "Water Lizard",
  WingGolem: "Wing Golem",
  BOSS_WingGolem: "Wing Golem",
  FoxMage: "Wixen",
  BOSS_FoxMage: "Wixen",
  SweetsSheep: "Woolipop",
  BOSS_SweetsSheep: "Woolipop",
  Yeti: "Wumpo",
  BOSS_Yeti: "Wumpo",
  Yeti_Grass: "Wumpo Botan",
  BOSS_Yeti_Grass: "Wumpo Botan",
  GYM_ElecPanda: "Zoe & Grizzbolt"
};

let PassiveSkillToTraitName = {
  ElementResist_Normal_1_PAL: "Abnormal",
  ElementResist_Dark_1_PAL: "Cheery",
  ElementResist_Dragon_1_PAL: "Dragonkiller",
  ElementResist_Ice_1_PAL: "Heated Body",
  ElementResist_Fire_1_PAL: "Suntan Lover",
  ElementResist_Leaf_1_PAL: "Botanical Barrier",
  ElementResist_Earth_1_PAL: "Earthquake Resistant",
  ElementResist_Thunder_1_PAL: "Insulated Body",
  ElementResist_Aqua_1_PAL: "Waterproof",
  ElementBoost_Normal_1_PAL: "Zen Mind",
  ElementBoost_Dark_1_PAL: "Veil of Darkness",
  ElementBoost_Dragon_1_PAL: "Blood of the Dragon",
  ElementBoost_Ice_1_PAL: "Coldblooded",
  ElementBoost_Fire_1_PAL: "Pyromaniac",
  ElementBoost_Leaf_1_PAL: "Fragrant Foliage",
  ElementBoost_Earth_1_PAL: "Power of Gaia",
  ElementBoost_Thunder_1_PAL: "Capacitor",
  ElementBoost_Aqua_1_PAL: "Hydromaniac",
  ElementBoost_Normal_2_PAL: "Celestial Emperor",
  ElementBoost_Dark_2_PAL: "Lord of the Underworld",
  ElementBoost_Dragon_2_PAL: "Divine Dragon",
  ElementBoost_Ice_2_PAL: "Ice Emperor",
  ElementBoost_Fire_2_PAL: "Flame Emperor",
  ElementBoost_Leaf_2_PAL: "Spirit Emperor",
  ElementBoost_Earth_2_PAL: "Earth Emperor",
  ElementBoost_Thunder_2_PAL: "Lord of Lightning",
  ElementBoost_Aqua_2_PAL: "Lord of the Sea",
  PAL_ALLAttack_up1: "Brave",
  PAL_ALLAttack_up2: "Ferocious",
  PAL_ALLAttack_down1: "Coward",
  PAL_ALLAttack_down2: "Pacifist",
  Deffence_up1: "Hard Skin",
  Deffence_up2: "Burly Body",
  Deffence_down1: "Downtrodden",
  Deffence_down2: "Brittle",
  TrainerMining_up1: "Mine Foreman",
  TrainerLogging_up1: "Logging Foreman",
  TrainerATK_UP_1: "Vanguard",
  TrainerWorkSpeed_UP_1: "Motivational Leader",
  TrainerDEF_UP_1: "Stronghold Strategist",
  PAL_Sanity_Down_1: "Positive Thinker",
  PAL_Sanity_Down_2: "Workaholic",
  PAL_Sanity_Up_1: "Unstable",
  PAL_Sanity_Up_2: "Destructive",
  PAL_FullStomach_Down_1: "Dainty Eater",
  PAL_FullStomach_Down_2: "Diet Lover",
  PAL_FullStomach_Up_1: "Glutton",
  PAL_FullStomach_Up_2: "Bottomless Stomach",
  CraftSpeed_up1: "Serious",
  CraftSpeed_up2: "Artisan",
  CraftSpeed_down1: "Clumsy",
  CraftSpeed_down2: "Slacker",
  MoveSpeed_up_1: "Nimble",
  MoveSpeed_up_2: "Runner",
  MoveSpeed_up_3: "Swift",
  PAL_CorporateSlave: "Work Slave",
  PAL_rude: "Hooligan",
  Noukin: "Musclehead",
  PAL_oraora: "Aggressive",
  PAL_conceited: "Conceited",
  PAL_masochist: "Masochist",
  PAL_sadist: "Sadist",
  Rare: "Lucky",
  Legend: "Legend"
};

let dropZone = document.body;

dropZone.addEventListener('dragover', function (e) {
  e.stopPropagation();
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
});

dropZone.addEventListener('drop', function (e) {
  e.stopPropagation();
  e.preventDefault();

  let files = e.dataTransfer.files; // Array of all files

  for (let i = 0, file; file = files[i]; i++) {
    let reader = new FileReader();

    reader.onload = function (e) {
      let contents = e.target.result;
      let extracted = PalworldSavExtractCharacters(contents);
      console.log('Extracted characters', extracted);
      pals = [];
      for (let e of extracted) {
        try {
          if (typeof e.CharacterID === 'undefined') {
            continue;
          }
          let name = CharacterIDToIDName[e.CharacterID];
          let id = EncodeIDName[name];
          if (typeof id === 'undefined') {
            console.log('Unknown CharacterID', e.CharacterID, name, id);
            continue;
          }
          let skill_list = e.PassiveSkillList || [];
          let pal = new Pal(
            id,
            EncodeGender[e.Gender],
            EncodeTrait[PassiveSkillToTraitName[skill_list[0]]],
            EncodeTrait[PassiveSkillToTraitName[skill_list[1]]],
            EncodeTrait[PassiveSkillToTraitName[skill_list[2]]],
            EncodeTrait[PassiveSkillToTraitName[skill_list[3]]],
          );
          pals.push(pal);
        } catch (ex) {
          console.error(ex, e);
        }
      }
      localStorage.pals = JSON.stringify(pals);
      PalsToTable();
    };

    reader.readAsArrayBuffer(file);
  }
});

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

  // Fetch the list of pals & traits from C++ side
  let id_count = Module.ccall('IDCount', 'number', [], []);
  let trait_count = Module.ccall('TraitCount', 'number', [], []);

  IDName = Module.cwrap('IDName', 'string', ['number']);
  TraitName = Module.cwrap('TraitName', 'string', ['number']);

  for (let i = 0; i < id_count; i++) {
    EncodeIDName[IDName(i)] = i;
  }

  for (let i = 0; i < trait_count; i++) {
    EncodeTrait[TraitName(i)] = i;
  }

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
