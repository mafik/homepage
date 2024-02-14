// Define aliases for traits (should match C++ side)
const TraitToStr = [
  "-",
  "Abnormal",
  "Cheery",
  "Dragonkiller",
  "Heated Body",
  "Suntan Lover",
  "Botanical Barrier",
  "Earthquake Resistant",
  "Insulated Body",
  "Waterproof",
  "Zen Mind",
  "Veil of Darkness",
  "Blood of the Dragon",
  "Coldblooded",
  "Pyromaniac",
  "Fragrant Foliage",
  "Power of Gaia",
  "Capacitor",
  "Hydromaniac",
  "Celestial Emperor",
  "Lord of the Underworld",
  "Divine Dragon",
  "Ice Emperor",
  "Flame Emperor",
  "Spirit Emperor",
  "Earth Emperor",
  "Lord of Lightning",
  "Lord of the Sea",
  "Brave",
  "Ferocious",
  "Coward",
  "Pacifist",
  "Hard Skin",
  "Burly Body",
  "Downtrodden",
  "Brittle",
  "Mine Foreman",
  "Logging Foreman",
  "Vanguard",
  "Motivational Leader",
  "Stronghold Strategist",
  "Positive Thinker",
  "Workaholic",
  "Unstable",
  "Destructive",
  "Dainty Eater",
  "Diet Lover",
  "Glutton",
  "Bottomless Stomach",
  "Serious",
  "Artisan",
  "Clumsy",
  "Slacker",
  "Nimble",
  "Runner",
  "Swift",
  "Work Slave",
  "Hooligan",
  "Musclehead",
  "Aggressive",
  "Conceited",
  "Masochist",
  "Sadist",
  "Lucky",
  "Legend"
];

const NoTrait = 0,
  Abnormal = 1,
  Cheery = 2,
  Dragonkiller = 3,
  HeatedBody = 4,
  SuntanLover = 5,
  BotanicalBarrier = 6,
  EarthquakeResistant = 7,
  InsulatedBody = 8,
  Waterproof = 9,
  ZenMind = 10,
  VeilOfDarkness = 11,
  BloodOfTheDragon = 12,
  Coldblooded = 13,
  Pyromaniac = 14,
  FragrantFoliage = 15,
  PowerOfGaia = 16,
  Capacitor = 17,
  Hydromaniac = 18,
  CelestialEmperor = 19,
  LordOfTheUnderworld = 20,
  DivineDragon = 21,
  IceEmperor = 22,
  FlameEmperor = 23,
  SpiritEmperor = 24,
  EarthEmperor = 25,
  LordOfLightning = 26,
  LordOfTheSea = 27,
  Brave = 28,
  Ferocious = 29,
  Coward = 30,
  Pacifist = 31,
  HardSkin = 32,
  BurlyBody = 33,
  Downtrodden = 34,
  Brittle = 35,
  MineForeman = 36,
  LoggingForeman = 37,
  Vanguard = 38,
  MotivationalLeader = 39,
  StrongholdStrategist = 40,
  PositiveThinker = 41,
  Workaholic = 42,
  Unstable = 43,
  Destructive = 44,
  DaintyEater = 45,
  DietLover = 46,
  Glutton = 47,
  BottomlessStomach = 48,
  Serious = 49,
  Artisan = 50,
  Clumsy = 51,
  Slacker = 52,
  Nimble = 53,
  Runner = 54,
  Swift = 55,
  WorkSlave = 56,
  Hooligan = 57,
  Musclehead = 58,
  Aggressive = 59,
  Conceited = 60,
  Masochist = 61,
  Sadist = 62,
  Lucky = 63,
  Legend = 64,
  TraitCount = 65;

// Define aliases for CharacterIDs
const IDToStr = [
  "Lamball",
  "Cattiva",
  "Chikipi",
  "Lifmunk",
  "Foxparks",
  "Fuack",
  "Sparkit",
  "Tanzee",
  "Rooby",
  "Pengullet",
  "Penking",
  "Jolthog",
  "Jolthog Cryst",
  "Gumoss",
  "Gumoss (Special)",
  "Vixy",
  "Hoocrates",
  "Teafant",
  "Depresso",
  "Cremis",
  "Daedream",
  "Rushoar",
  "Nox",
  "Fuddler",
  "Killamari",
  "Mau",
  "Mau Cryst",
  "Celaray",
  "Direhowl",
  "Tocotoco",
  "Flopie",
  "Mozzarina",
  "Bristla",
  "Gobfin",
  "Gobfin Ignis",
  "Hangyu",
  "Hangyu Cryst",
  "Mossanda",
  "Mossanda Lux",
  "Woolipop",
  "Caprity",
  "Melpaca",
  "Eikthyrdeer",
  "Eikthyrdeer Terra",
  "Nitewing",
  "Ribbuny",
  "Incineram",
  "Incineram Noct",
  "Cinnamoth",
  "Arsox",
  "Dumud",
  "Cawgnito",
  "Leezpunk",
  "Leezpunk Ignis",
  "Loupmoon",
  "Galeclaw",
  "Robinquill",
  "Robinquill Terra",
  "Gorirat",
  "Beegarde",
  "Elizabee",
  "Grintale",
  "Swee",
  "Sweepa",
  "Chillet",
  "Univolt",
  "Foxcicle",
  "Pyrin",
  "Pyrin Noct",
  "Reindrix",
  "Rayhound",
  "Kitsun",
  "Dazzi",
  "Lunaris",
  "Dinossom",
  "Dinossom Lux",
  "Surfent",
  "Surfent Terra",
  "Maraith",
  "Digtoise",
  "Tombat",
  "Lovander",
  "Flambelle",
  "Vanwyrm",
  "Vanwyrm Cryst",
  "Bushi",
  "Beakon",
  "Ragnahawk",
  "Katress",
  "Wixen",
  "Verdash",
  "Vaelet",
  "Sibelyx",
  "Elphidran",
  "Elphidran Aqua",
  "Kelpsea",
  "Kelpsea Ignis",
  "Azurobe",
  "Cryolinx",
  "Blazehowl",
  "Blazehowl Noct",
  "Relaxaurus",
  "Relaxaurus Lux",
  "Broncherry",
  "Broncherry Aqua",
  "Petallia",
  "Reptyro",
  "Ice Reptyro",
  "Kingpaca",
  "Ice Kingpaca",
  "Mammorest",
  "Mammorest Cryst",
  "Wumpo",
  "Wumpo Botan",
  "Warsect",
  "Fenglope",
  "Felbat",
  "Quivern",
  "Blazamut",
  "Helzephyr",
  "Astegon",
  "Menasting",
  "Anubis",
  "Jormuntide",
  "Jormuntide Ignis",
  "Suzaku",
  "Suzaku Aqua",
  "Grizzbolt",
  "Lyleen",
  "Lyleen Noct",
  "Faleris",
  "Orserk",
  "Shadowbeak",
  "Paladius",
  "Necromus",
  "Frostallion",
  "Frostallion Noct",
  "Jetragon"
];

const Lamball = 0,
  Cattiva = 1,
  Chikipi = 2,
  Lifmunk = 3,
  Foxparks = 4,
  Fuack = 5,
  Sparkit = 6,
  Tanzee = 7,
  Rooby = 8,
  Pengullet = 9,
  Penking = 10,
  Jolthog = 11,
  JolthogCryst = 12,
  Gumoss = 13,
  GumossSpecial = 14,
  Vixy = 15,
  Hoocrates = 16,
  Teafant = 17,
  Depresso = 18,
  Cremis = 19,
  Daedream = 20,
  Rushoar = 21,
  Nox = 22,
  Fuddler = 23,
  Killamari = 24,
  Mau = 25,
  MauCryst = 26,
  Celaray = 27,
  Direhowl = 28,
  Tocotoco = 29,
  Flopie = 30,
  Mozzarina = 31,
  Bristla = 32,
  Gobfin = 33,
  GobfinIgnis = 34,
  Hangyu = 35,
  HangyuCryst = 36,
  Mossanda = 37,
  MossandaLux = 38,
  Woolipop = 39,
  Caprity = 40,
  Melpaca = 41,
  Eikthyrdeer = 42,
  EikthyrdeerTerra = 43,
  Nitewing = 44,
  Ribbuny = 45,
  Incineram = 46,
  IncineramNoct = 47,
  Cinnamoth = 48,
  Arsox = 49,
  Dumud = 50,
  Cawgnito = 51,
  Leezpunk = 52,
  LeezpunkIgnis = 53,
  Loupmoon = 54,
  Galeclaw = 55,
  Robinquill = 56,
  RobinquillTerra = 57,
  Gorirat = 58,
  Beegarde = 59,
  Elizabee = 60,
  Grintale = 61,
  Swee = 62,
  Sweepa = 63,
  Chillet = 64,
  Univolt = 65,
  Foxcicle = 66,
  Pyrin = 67,
  PyrinNoct = 68,
  Reindrix = 69,
  Rayhound = 70,
  Kitsun = 71,
  Dazzi = 72,
  Lunaris = 73,
  Dinossom = 74,
  DinossomLux = 75,
  Surfent = 76,
  SurfentTerra = 77,
  Maraith = 78,
  Digtoise = 79,
  Tombat = 80,
  Lovander = 81,
  Flambelle = 82,
  Vanwyrm = 83,
  VanwyrmCryst = 84,
  Bushi = 85,
  Beakon = 86,
  Ragnahawk = 87,
  Katress = 88,
  Wixen = 89,
  Verdash = 90,
  Vaelet = 91,
  Sibelyx = 92,
  Elphidran = 93,
  ElphidranAqua = 94,
  Kelpsea = 95,
  KelpseaIgnis = 96,
  Azurobe = 97,
  Cryolinx = 98,
  Blazehowl = 99,
  BlazehowlNoct = 100,
  Relaxaurus = 101,
  RelaxaurusLux = 102,
  Broncherry = 103,
  BroncherryAqua = 104,
  Petallia = 105,
  Reptyro = 106,
  IceReptyro = 107,
  Kingpaca = 108,
  IceKingpaca = 109,
  Mammorest = 110,
  MammorestCryst = 111,
  Wumpo = 112,
  WumpoBotan = 113,
  Warsect = 114,
  Fenglope = 115,
  Felbat = 116,
  Quivern = 117,
  Blazamut = 118,
  Helzephyr = 119,
  Astegon = 120,
  Menasting = 121,
  Anubis = 122,
  Jormuntide = 123,
  JormuntideIgnis = 124,
  Suzaku = 125,
  SuzakuAqua = 126,
  Grizzbolt = 127,
  Lyleen = 128,
  LyleenNoct = 129,
  Faleris = 130,
  Orserk = 131,
  Shadowbeak = 132,
  Paladius = 133,
  Necromus = 134,
  Frostallion = 135,
  FrostallionNoct = 136,
  Jetragon = 137,
  LastID = 138;

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
  static ToCpp(pal, ptr) {
    Module.HEAPU8[ptr] = pal.id;
    Module.HEAPU8[ptr + 1] = pal.gender;
    Module.HEAPU8[ptr + 2] = pal.traits[0];
    Module.HEAPU8[ptr + 3] = pal.traits[1];
    Module.HEAPU8[ptr + 4] = pal.traits[2];
    Module.HEAPU8[ptr + 5] = pal.traits[3];
  }
  static HasType(pal, type) {
    return Stats[pal.id].type1 === type || Stats[pal.id].type2 === type;
  }
}

// Define aliases for types
const NoType = 0,
  Normal = 1,
  Leaf = 2,
  Fire = 3,
  Water = 4,
  Electricity = 5,
  Dark = 6,
  Earth = 7,
  Ice = 8,
  Dragon = 9;

const TypeToStr = [
  "-",
  "Normal",
  "Leaf",
  "Fire",
  "Water",
  "Electricity",
  "Dark",
  "Earth",
  "Ice",
  "Dragon"
];

let Stats = Array(LastID);
{
  Stats[Lamball] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 1, food_requirement: 2, rank: 1470, hp: 70, melee: 70, shot: 70, defence: 70, price: 1000, stamina: 100 };
  Stats[Cattiva] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 1, lumbering: 0, mining: 1, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 2, rank: 1460, hp: 70, melee: 70, shot: 70, defence: 70, price: 1000, stamina: 100 };
  Stats[Chikipi] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 1, food_requirement: 1, rank: 1500, hp: 60, melee: 70, shot: 60, defence: 60, price: 1000, stamina: 100 };
  Stats[Lifmunk] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 1, electric: 0, handiwork: 1, gathering: 1, lumbering: 1, mining: 0, medicine: 1, cooling: 0, transporting: 0, farming: 0, food_requirement: 1, rank: 1430, hp: 75, melee: 70, shot: 70, defence: 70, price: 1010, stamina: 100 };
  Stats[Foxparks] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 1, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 2, rank: 1400, hp: 65, melee: 70, shot: 75, defence: 70, price: 1040, stamina: 100 };
  Stats[Fuack] = { type1: Water, type2: NoType, nocturnal: false, kindling: 0, watering: 1, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 2, rank: 1330, hp: 60, melee: 80, shot: 80, defence: 60, price: 1120, stamina: 100 };
  Stats[Sparkit] = { type1: Electricity, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 1, handiwork: 1, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 2, rank: 1410, hp: 60, melee: 60, shot: 75, defence: 70, price: 1030, stamina: 100 };
  Stats[Tanzee] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 1, electric: 0, handiwork: 1, gathering: 1, lumbering: 1, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 2, rank: 1250, hp: 80, melee: 100, shot: 70, defence: 70, price: 1280, stamina: 100 };
  Stats[Rooby] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 1, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 3, rank: 1155, hp: 75, melee: 100, shot: 70, defence: 75, price: 2950, stamina: 100 };
  Stats[Pengullet] = { type1: Water, type2: Ice, nocturnal: false, kindling: 0, watering: 1, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 1, transporting: 1, farming: 0, food_requirement: 2, rank: 1350, hp: 70, melee: 70, shot: 75, defence: 70, price: 1080, stamina: 100 };
  Stats[Penking] = { type1: Water, type2: Ice, nocturnal: false, kindling: 0, watering: 2, planting: 0, electric: 0, handiwork: 2, gathering: 0, lumbering: 0, mining: 2, medicine: 0, cooling: 2, transporting: 2, farming: 0, food_requirement: 8, rank: 520, hp: 95, melee: 70, shot: 95, defence: 95, price: 5410, stamina: 100 };
  Stats[Jolthog] = { type1: Electricity, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 1, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 2, rank: 1370, hp: 70, melee: 70, shot: 75, defence: 70, price: 1060, stamina: 100 };
  Stats[JolthogCryst] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 1, transporting: 0, farming: 0, food_requirement: 2, rank: 1360, hp: 70, melee: 70, shot: 75, defence: 80, price: 1070, stamina: 100 };
  Stats[Gumoss] = { type1: Leaf, type2: Earth, nocturnal: false, kindling: 0, watering: 0, planting: 1, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 1, rank: 1240, hp: 70, melee: 100, shot: 70, defence: 70, price: 1310, stamina: 100 };
  Stats[GumossSpecial] = { type1: Leaf, type2: Earth, nocturnal: false, kindling: 0, watering: 0, planting: 1, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 1, rank: 1240, hp: 70, melee: 100, shot: 70, defence: 70, price: 1310, stamina: 100 };
  Stats[Vixy] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 1, food_requirement: 1, rank: 1450, hp: 70, melee: 70, shot: 70, defence: 70, price: 1000, stamina: 100 };
  Stats[Hoocrates] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 3, rank: 1390, hp: 70, melee: 70, shot: 70, defence: 80, price: 1050, stamina: 100 };
  Stats[Teafant] = { type1: Water, type2: NoType, nocturnal: false, kindling: 0, watering: 1, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 2, rank: 1490, hp: 70, melee: 70, shot: 60, defence: 70, price: 1000, stamina: 100 };
  Stats[Depresso] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 0, mining: 1, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 2, rank: 1380, hp: 70, melee: 70, shot: 70, defence: 70, price: 1050, stamina: 100 };
  Stats[Cremis] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 1, food_requirement: 2, rank: 1455, hp: 70, melee: 100, shot: 70, defence: 75, price: 1420, stamina: 100 };
  Stats[Daedream] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 3, rank: 1230, hp: 70, melee: 100, shot: 75, defence: 60, price: 1330, stamina: 100 };
  Stats[Rushoar] = { type1: Earth, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 1, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 3, rank: 1130, hp: 80, melee: 100, shot: 70, defence: 70, price: 1680, stamina: 100 };
  Stats[Nox] = { type1: Dark, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 2, rank: 1180, hp: 75, melee: 70, shot: 85, defence: 70, price: 1480, stamina: 100 };
  Stats[Fuddler] = { type1: Earth, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 0, mining: 1, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 2, rank: 1220, hp: 65, melee: 100, shot: 80, defence: 50, price: 1360, stamina: 100 };
  Stats[Killamari] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 2, farming: 0, food_requirement: 3, rank: 1290, hp: 60, melee: 100, shot: 60, defence: 70, price: 1200, stamina: 100 };
  Stats[Mau] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 1, food_requirement: 1, rank: 1480, hp: 70, melee: 70, shot: 60, defence: 70, price: 1000, stamina: 100 };
  Stats[MauCryst] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 1, transporting: 0, farming: 1, food_requirement: 1, rank: 1440, hp: 70, melee: 70, shot: 65, defence: 70, price: 1010, stamina: 100 };
  Stats[Celaray] = { type1: Water, type2: NoType, nocturnal: false, kindling: 0, watering: 1, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 3, rank: 870, hp: 80, melee: 100, shot: 70, defence: 80, price: 2860, stamina: 100 };
  Stats[Direhowl] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 3, rank: 1060, hp: 80, melee: 110, shot: 90, defence: 75, price: 1920, stamina: 70 };
  Stats[Tocotoco] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 2, rank: 1340, hp: 60, melee: 80, shot: 75, defence: 70, price: 1090, stamina: 100 };
  Stats[Flopie] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 1, electric: 0, handiwork: 1, gathering: 1, lumbering: 0, mining: 0, medicine: 1, cooling: 0, transporting: 1, farming: 0, food_requirement: 3, rank: 1280, hp: 75, melee: 100, shot: 65, defence: 70, price: 1220, stamina: 100 };
  Stats[Mozzarina] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 1, food_requirement: 3, rank: 910, hp: 90, melee: 100, shot: 50, defence: 80, price: 2620, stamina: 100 };
  Stats[Bristla] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 1, electric: 0, handiwork: 1, gathering: 1, lumbering: 0, mining: 0, medicine: 2, cooling: 0, transporting: 1, farming: 0, food_requirement: 5, rank: 1320, hp: 80, melee: 80, shot: 80, defence: 80, price: 1140, stamina: 100 };
  Stats[Gobfin] = { type1: Water, type2: NoType, nocturnal: false, kindling: 0, watering: 2, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 3, rank: 1090, hp: 90, melee: 90, shot: 90, defence: 75, price: 1840, stamina: 100 };
  Stats[GobfinIgnis] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 2, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 3, rank: 1100, hp: 90, melee: 90, shot: 90, defence: 75, price: 1800, stamina: 100 };
  Stats[Hangyu] = { type1: Earth, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 2, farming: 0, food_requirement: 2, rank: 1420, hp: 80, melee: 70, shot: 70, defence: 70, price: 1020, stamina: 100 };
  Stats[HangyuCryst] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 1, transporting: 2, farming: 0, food_requirement: 2, rank: 1422, hp: 80, melee: 70, shot: 80, defence: 70, price: 1020, stamina: 100 };
  Stats[Mossanda] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 2, electric: 0, handiwork: 2, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 5, rank: 430, hp: 100, melee: 100, shot: 90, defence: 90, price: 6200, stamina: 100 };
  Stats[MossandaLux] = { type1: Electricity, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 2, handiwork: 2, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 5, rank: 390, hp: 100, melee: 100, shot: 100, defence: 100, price: 6610, stamina: 100 };
  Stats[Woolipop] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 1, food_requirement: 2, rank: 1190, hp: 70, melee: 70, shot: 70, defence: 90, price: 1450, stamina: 100 };
  Stats[Caprity] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 2, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 1, food_requirement: 4, rank: 930, hp: 100, melee: 70, shot: 70, defence: 90, price: 2510, stamina: 100 };
  Stats[Melpaca] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 1, food_requirement: 3, rank: 890, hp: 90, melee: 90, shot: 75, defence: 90, price: 2740, stamina: 100 };
  Stats[Eikthyrdeer] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 920, hp: 95, melee: 70, shot: 80, defence: 80, price: 2620, stamina: 100 };
  Stats[EikthyrdeerTerra] = { type1: Earth, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 900, hp: 95, melee: 70, shot: 80, defence: 80, price: 2680, stamina: 100 };
  Stats[Nitewing] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 2, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 420, hp: 100, melee: 100, shot: 95, defence: 80, price: 6300, stamina: 100 };
  Stats[Ribbuny] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 2, rank: 1310, hp: 75, melee: 100, shot: 65, defence: 70, price: 1160, stamina: 100 };
  Stats[Incineram] = { type1: Fire, type2: Dark, nocturnal: true, kindling: 1, watering: 0, planting: 0, electric: 0, handiwork: 2, gathering: 0, lumbering: 0, mining: 1, medicine: 0, cooling: 0, transporting: 2, farming: 0, food_requirement: 4, rank: 590, hp: 95, melee: 150, shot: 100, defence: 85, price: 4780, stamina: 100 };
  Stats[IncineramNoct] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 2, gathering: 0, lumbering: 0, mining: 1, medicine: 0, cooling: 0, transporting: 2, farming: 0, food_requirement: 4, rank: 580, hp: 95, melee: 150, shot: 105, defence: 85, price: 4870, stamina: 100 };
  Stats[Cinnamoth] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 2, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 1, cooling: 0, transporting: 0, farming: 0, food_requirement: 3, rank: 490, hp: 70, melee: 100, shot: 80, defence: 80, price: 5700, stamina: 100 };
  Stats[Arsox] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 2, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 1, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 790, hp: 85, melee: 100, shot: 95, defence: 95, price: 3520, stamina: 100 };
  Stats[Dumud] = { type1: Earth, type2: NoType, nocturnal: false, kindling: 0, watering: 1, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 2, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 4, rank: 895, hp: 100, melee: 100, shot: 70, defence: 95, price: 4690, stamina: 100 };
  Stats[Cawgnito] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 1, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 1080, hp: 75, melee: 80, shot: 95, defence: 80, price: 1840, stamina: 100 };
  Stats[Leezpunk] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 3, rank: 1120, hp: 80, melee: 90, shot: 80, defence: 50, price: 1720, stamina: 100 };
  Stats[LeezpunkIgnis] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 1, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 3, rank: 1140, hp: 80, melee: 90, shot: 80, defence: 50, price: 1640, stamina: 100 };
  Stats[Loupmoon] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 2, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 950, hp: 80, melee: 130, shot: 100, defence: 80, price: 2400, stamina: 100 };
  Stats[Galeclaw] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 2, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 4, rank: 1030, hp: 75, melee: 120, shot: 85, defence: 60, price: 2010, stamina: 100 };
  Stats[Robinquill] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 1, electric: 0, handiwork: 2, gathering: 2, lumbering: 1, mining: 0, medicine: 1, cooling: 0, transporting: 2, farming: 0, food_requirement: 3, rank: 1020, hp: 90, melee: 100, shot: 105, defence: 80, price: 2050, stamina: 100 };
  Stats[RobinquillTerra] = { type1: Leaf, type2: Earth, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 2, gathering: 2, lumbering: 1, mining: 0, medicine: 1, cooling: 0, transporting: 2, farming: 0, food_requirement: 3, rank: 1000, hp: 90, melee: 100, shot: 105, defence: 80, price: 2150, stamina: 100 };
  Stats[Gorirat] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 3, rank: 1040, hp: 90, melee: 110, shot: 95, defence: 90, price: 2010, stamina: 100 };
  Stats[Beegarde] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 1, electric: 0, handiwork: 1, gathering: 1, lumbering: 1, mining: 0, medicine: 1, cooling: 0, transporting: 2, farming: 1, food_requirement: 3, rank: 1070, hp: 80, melee: 100, shot: 90, defence: 90, price: 1880, stamina: 100 };
  Stats[Elizabee] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 2, electric: 0, handiwork: 2, gathering: 2, lumbering: 1, mining: 0, medicine: 2, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 330, hp: 90, melee: 100, shot: 105, defence: 100, price: 6830, stamina: 100 };
  Stats[Grintale] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 2, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 4, rank: 510, hp: 110, melee: 100, shot: 80, defence: 80, price: 5510, stamina: 100 };
  Stats[Swee] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 1, transporting: 0, farming: 0, food_requirement: 2, rank: 1300, hp: 60, melee: 100, shot: 60, defence: 60, price: 1180, stamina: 100 };
  Stats[Sweepa] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 2, lumbering: 0, mining: 0, medicine: 0, cooling: 2, transporting: 0, farming: 0, food_requirement: 3, rank: 410, hp: 100, melee: 100, shot: 90, defence: 90, price: 6400, stamina: 100 };
  Stats[Chillet] = { type1: Ice, type2: Dragon, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 1, transporting: 0, farming: 0, food_requirement: 3, rank: 800, hp: 90, melee: 100, shot: 80, defence: 80, price: 3450, stamina: 100 };
  Stats[Univolt] = { type1: Electricity, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 2, handiwork: 0, gathering: 0, lumbering: 1, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 680, hp: 80, melee: 110, shot: 105, defence: 105, price: 4280, stamina: 100 };
  Stats[Foxcicle] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 2, transporting: 0, farming: 0, food_requirement: 3, rank: 760, hp: 90, melee: 100, shot: 95, defence: 105, price: 3730, stamina: 100 };
  Stats[Pyrin] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 2, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 1, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 360, hp: 100, melee: 110, shot: 95, defence: 90, price: 6720, stamina: 100 };
  Stats[PyrinNoct] = { type1: Fire, type2: Dark, nocturnal: true, kindling: 2, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 1, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 240, hp: 100, melee: 110, shot: 95, defence: 90, price: 7270, stamina: 100 };
  Stats[Reindrix] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 2, transporting: 0, farming: 0, food_requirement: 7, rank: 880, hp: 100, melee: 80, shot: 85, defence: 110, price: 2800, stamina: 100 };
  Stats[Rayhound] = { type1: Electricity, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 2, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 740, hp: 90, melee: 100, shot: 100, defence: 80, price: 3880, stamina: 100 };
  Stats[Kitsun] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 2, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 4, rank: 830, hp: 100, melee: 70, shot: 115, defence: 100, price: 3170, stamina: 100 };
  Stats[Dazzi] = { type1: Electricity, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 1, handiwork: 1, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 2, rank: 1210, hp: 70, melee: 110, shot: 80, defence: 70, price: 1390, stamina: 100 };
  Stats[Lunaris] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 3, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 2, rank: 1110, hp: 90, melee: 80, shot: 100, defence: 90, price: 1760, stamina: 100 };
  Stats[Dinossom] = { type1: Leaf, type2: Dragon, nocturnal: false, kindling: 0, watering: 0, planting: 2, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 6, rank: 820, hp: 110, melee: 90, shot: 85, defence: 90, price: 3240, stamina: 100 };
  Stats[DinossomLux] = { type1: Electricity, type2: Dragon, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 2, handiwork: 0, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 6, rank: 810, hp: 110, melee: 90, shot: 90, defence: 90, price: 3380, stamina: 100 };
  Stats[Surfent] = { type1: Water, type2: NoType, nocturnal: false, kindling: 0, watering: 2, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 560, hp: 90, melee: 70, shot: 90, defence: 80, price: 5050, stamina: 100 };
  Stats[SurfentTerra] = { type1: Earth, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 550, hp: 90, melee: 70, shot: 90, defence: 100, price: 5140, stamina: 100 };
  Stats[Maraith] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 2, lumbering: 0, mining: 1, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 3, rank: 1150, hp: 75, melee: 50, shot: 105, defence: 80, price: 1570, stamina: 100 };
  Stats[Digtoise] = { type1: Earth, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 3, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 850, hp: 80, melee: 80, shot: 95, defence: 120, price: 2980, stamina: 100 };
  Stats[Tombat] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 2, lumbering: 0, mining: 2, medicine: 0, cooling: 0, transporting: 2, farming: 0, food_requirement: 5, rank: 750, hp: 95, melee: 100, shot: 95, defence: 80, price: 3810, stamina: 100 };
  Stats[Lovander] = { type1: Normal, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 2, gathering: 0, lumbering: 0, mining: 1, medicine: 2, cooling: 0, transporting: 2, farming: 0, food_requirement: 5, rank: 940, hp: 120, melee: 70, shot: 70, defence: 70, price: 2450, stamina: 100 };
  Stats[Flambelle] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 1, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 1, food_requirement: 2, rank: 1405, hp: 60, melee: 100, shot: 70, defence: 80, price: 2500, stamina: 100 };
  Stats[Vanwyrm] = { type1: Fire, type2: Dark, nocturnal: true, kindling: 1, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 6, rank: 660, hp: 90, melee: 100, shot: 115, defence: 90, price: 4360, stamina: 150 };
  Stats[VanwyrmCryst] = { type1: Ice, type2: Dark, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 2, transporting: 3, farming: 0, food_requirement: 6, rank: 620, hp: 90, melee: 100, shot: 120, defence: 95, price: 4610, stamina: 150 };
  Stats[Bushi] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 2, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 1, lumbering: 3, mining: 0, medicine: 0, cooling: 0, transporting: 2, farming: 0, food_requirement: 4, rank: 640, hp: 80, melee: 100, shot: 125, defence: 80, price: 4520, stamina: 100 };
  Stats[Beakon] = { type1: Electricity, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 2, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 7, rank: 220, hp: 105, melee: 100, shot: 115, defence: 80, price: 7490, stamina: 160 };
  Stats[Ragnahawk] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 3, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 7, rank: 380, hp: 95, melee: 100, shot: 105, defence: 120, price: 6720, stamina: 150 };
  Stats[Katress] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 2, gathering: 0, lumbering: 0, mining: 0, medicine: 2, cooling: 0, transporting: 2, farming: 0, food_requirement: 5, rank: 700, hp: 90, melee: 100, shot: 105, defence: 90, price: 4120, stamina: 100 };
  Stats[Wixen] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 2, watering: 0, planting: 0, electric: 0, handiwork: 3, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 2, farming: 0, food_requirement: 5, rank: 1160, hp: 90, melee: 50, shot: 110, defence: 80, price: 1540, stamina: 100 };
  Stats[Verdash] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 2, electric: 0, handiwork: 3, gathering: 3, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 2, farming: 0, food_requirement: 3, rank: 990, hp: 90, melee: 100, shot: 115, defence: 90, price: 2200, stamina: 100 };
  Stats[Vaelet] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 2, electric: 0, handiwork: 2, gathering: 2, lumbering: 0, mining: 0, medicine: 3, cooling: 0, transporting: 1, farming: 0, food_requirement: 3, rank: 1050, hp: 100, melee: 100, shot: 100, defence: 120, price: 1960, stamina: 100 };
  Stats[Sibelyx] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 2, cooling: 2, transporting: 0, farming: 1, food_requirement: 5, rank: 450, hp: 110, melee: 90, shot: 90, defence: 100, price: 5900, stamina: 100 };
  Stats[Elphidran] = { type1: Dragon, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 6, rank: 540, hp: 110, melee: 80, shot: 80, defence: 90, price: 5230, stamina: 130 };
  Stats[ElphidranAqua] = { type1: Dragon, type2: Water, nocturnal: false, kindling: 0, watering: 3, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 6, rank: 530, hp: 115, melee: 80, shot: 80, defence: 95, price: 5320, stamina: 130 };
  Stats[Kelpsea] = { type1: Water, type2: NoType, nocturnal: false, kindling: 0, watering: 1, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 1, rank: 1260, hp: 70, melee: 100, shot: 70, defence: 70, price: 1260, stamina: 100 };
  Stats[KelpseaIgnis] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 1, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 1, rank: 1270, hp: 70, melee: 100, shot: 70, defence: 70, price: 1240, stamina: 100 };
  Stats[Azurobe] = { type1: Water, type2: Dragon, nocturnal: false, kindling: 0, watering: 3, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 6, rank: 500, hp: 110, melee: 70, shot: 100, defence: 100, price: 5600, stamina: 100 };
  Stats[Cryolinx] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 3, transporting: 0, farming: 0, food_requirement: 7, rank: 130, hp: 100, melee: 140, shot: 100, defence: 110, price: 8440, stamina: 100 };
  Stats[Blazehowl] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 3, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 710, hp: 105, melee: 100, shot: 110, defence: 80, price: 4040, stamina: 100 };
  Stats[BlazehowlNoct] = { type1: Fire, type2: Dark, nocturnal: true, kindling: 3, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 670, hp: 105, melee: 100, shot: 115, defence: 80, price: 4360, stamina: 100 };
  Stats[Relaxaurus] = { type1: Dragon, type2: Water, nocturnal: false, kindling: 0, watering: 2, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 7, rank: 280, hp: 110, melee: 110, shot: 100, defence: 70, price: 10240, stamina: 100 };
  Stats[RelaxaurusLux] = { type1: Dragon, type2: Electricity, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 3, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 1, farming: 0, food_requirement: 7, rank: 270, hp: 110, melee: 110, shot: 110, defence: 75, price: 10380, stamina: 100 };
  Stats[Broncherry] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 3, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 860, hp: 120, melee: 80, shot: 90, defence: 100, price: 2920, stamina: 100 };
  Stats[BroncherryAqua] = { type1: Leaf, type2: Water, nocturnal: false, kindling: 0, watering: 3, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 840, hp: 120, melee: 80, shot: 95, defence: 100, price: 3110, stamina: 100 };
  Stats[Petallia] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 3, electric: 0, handiwork: 2, gathering: 2, lumbering: 0, mining: 0, medicine: 2, cooling: 0, transporting: 1, farming: 0, food_requirement: 3, rank: 780, hp: 100, melee: 100, shot: 95, defence: 100, price: 3590, stamina: 100 };
  Stats[Reptyro] = { type1: Fire, type2: Earth, nocturnal: false, kindling: 3, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 3, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 320, hp: 110, melee: 100, shot: 105, defence: 120, price: 6940, stamina: 100 };
  Stats[IceReptyro] = { type1: Ice, type2: Earth, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 3, medicine: 0, cooling: 3, transporting: 0, farming: 0, food_requirement: 5, rank: 230, hp: 110, melee: 100, shot: 105, defence: 130, price: 7380, stamina: 100 };
  Stats[Kingpaca] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 470, hp: 120, melee: 100, shot: 85, defence: 90, price: 5800, stamina: 100 };
  Stats[IceKingpaca] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 3, transporting: 0, farming: 0, food_requirement: 7, rank: 440, hp: 120, melee: 100, shot: 85, defence: 90, price: 6100, stamina: 100 };
  Stats[Mammorest] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 2, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 2, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 8, rank: 300, hp: 150, melee: 100, shot: 85, defence: 90, price: 9450, stamina: 100 };
  Stats[MammorestCryst] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 2, medicine: 0, cooling: 2, transporting: 0, farming: 0, food_requirement: 8, rank: 290, hp: 150, melee: 100, shot: 85, defence: 90, price: 9580, stamina: 100 };
  Stats[Wumpo] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 2, gathering: 0, lumbering: 3, mining: 0, medicine: 0, cooling: 2, transporting: 4, farming: 0, food_requirement: 8, rank: 460, hp: 140, melee: 100, shot: 80, defence: 100, price: 5900, stamina: 100 };
  Stats[WumpoBotan] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 1, electric: 0, handiwork: 2, gathering: 0, lumbering: 3, mining: 0, medicine: 0, cooling: 0, transporting: 4, farming: 0, food_requirement: 8, rank: 480, hp: 140, melee: 100, shot: 80, defence: 110, price: 5700, stamina: 100 };
  Stats[Warsect] = { type1: Earth, type2: Leaf, nocturnal: false, kindling: 0, watering: 0, planting: 1, electric: 0, handiwork: 1, gathering: 0, lumbering: 3, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 6, rank: 340, hp: 120, melee: 100, shot: 100, defence: 120, price: 6830, stamina: 100 };
  Stats[Fenglope] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 6, rank: 980, hp: 110, melee: 110, shot: 110, defence: 90, price: 2250, stamina: 100 };
  Stats[Felbat] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 3, cooling: 0, transporting: 0, farming: 0, food_requirement: 5, rank: 1010, hp: 100, melee: 100, shot: 105, defence: 110, price: 2100, stamina: 100 };
  Stats[Quivern] = { type1: Dragon, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 2, lumbering: 0, mining: 2, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 4, rank: 350, hp: 105, melee: 100, shot: 100, defence: 100, price: 6830, stamina: 220 };
  Stats[Blazamut] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 3, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 4, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 9, rank: 10, hp: 100, melee: 150, shot: 125, defence: 120, price: 10520, stamina: 100 };
  Stats[Helzephyr] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 8, rank: 190, hp: 100, melee: 100, shot: 125, defence: 100, price: 7840, stamina: 170 };
  Stats[Astegon] = { type1: Dragon, type2: Dark, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 1, gathering: 0, lumbering: 0, mining: 4, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 9, rank: 150, hp: 100, melee: 100, shot: 125, defence: 125, price: 8200, stamina: 300 };
  Stats[Menasting] = { type1: Dark, type2: Earth, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 3, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 260, hp: 100, melee: 100, shot: 100, defence: 130, price: 7050, stamina: 100 };
  Stats[Anubis] = { type1: Earth, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 4, gathering: 0, lumbering: 0, mining: 3, medicine: 0, cooling: 0, transporting: 2, farming: 0, food_requirement: 6, rank: 570, hp: 120, melee: 130, shot: 130, defence: 100, price: 4960, stamina: 100 };
  Stats[Jormuntide] = { type1: Dragon, type2: Water, nocturnal: false, kindling: 0, watering: 4, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 310, hp: 130, melee: 150, shot: 120, defence: 100, price: 9320, stamina: 100 };
  Stats[JormuntideIgnis] = { type1: Dragon, type2: Fire, nocturnal: false, kindling: 4, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 315, hp: 130, melee: 150, shot: 130, defence: 100, price: 9500, stamina: 100 };
  Stats[Suzaku] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 3, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 8, rank: 50, hp: 120, melee: 100, shot: 105, defence: 105, price: 9840, stamina: 350 };
  Stats[SuzakuAqua] = { type1: Water, type2: NoType, nocturnal: false, kindling: 0, watering: 3, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 8, rank: 30, hp: 125, melee: 100, shot: 105, defence: 105, price: 10110, stamina: 350 };
  Stats[Grizzbolt] = { type1: Electricity, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 3, handiwork: 2, gathering: 0, lumbering: 2, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 7, rank: 200, hp: 105, melee: 120, shot: 100, defence: 100, price: 7720, stamina: 100 };
  Stats[Lyleen] = { type1: Leaf, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 4, electric: 0, handiwork: 3, gathering: 2, lumbering: 0, mining: 0, medicine: 3, cooling: 0, transporting: 0, farming: 0, food_requirement: 6, rank: 250, hp: 110, melee: 100, shot: 110, defence: 105, price: 7160, stamina: 100 };
  Stats[LyleenNoct] = { type1: Dark, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 3, gathering: 2, lumbering: 0, mining: 0, medicine: 3, cooling: 0, transporting: 0, farming: 0, food_requirement: 6, rank: 210, hp: 110, melee: 100, shot: 110, defence: 115, price: 7610, stamina: 100 };
  Stats[Faleris] = { type1: Fire, type2: NoType, nocturnal: false, kindling: 3, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 8, rank: 370, hp: 100, melee: 100, shot: 105, defence: 110, price: 6720, stamina: 230 };
  Stats[Orserk] = { type1: Dragon, type2: Electricity, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 4, handiwork: 2, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 3, farming: 0, food_requirement: 7, rank: 140, hp: 100, melee: 100, shot: 130, defence: 100, price: 8320, stamina: 100 };
  Stats[Shadowbeak] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 1, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 8, rank: 60, hp: 120, melee: 130, shot: 120, defence: 140, price: 9060, stamina: 250 };
  Stats[Paladius] = { type1: Normal, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 2, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 9, rank: 80, hp: 130, melee: 110, shot: 120, defence: 145, price: 8810, stamina: 100 };
  Stats[Necromus] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 2, mining: 2, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 9, rank: 70, hp: 130, melee: 100, shot: 145, defence: 120, price: 8930, stamina: 100 };
  Stats[Frostallion] = { type1: Ice, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 0, lumbering: 0, mining: 0, medicine: 0, cooling: 4, transporting: 0, farming: 0, food_requirement: 7, rank: 120, hp: 140, melee: 100, shot: 140, defence: 120, price: 8440, stamina: 300 };
  Stats[FrostallionNoct] = { type1: Dark, type2: NoType, nocturnal: true, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 4, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 7, rank: 100, hp: 140, melee: 100, shot: 140, defence: 135, price: 8560, stamina: 300 };
  Stats[Jetragon] = { type1: Dragon, type2: NoType, nocturnal: false, kindling: 0, watering: 0, planting: 0, electric: 0, handiwork: 0, gathering: 3, lumbering: 0, mining: 0, medicine: 0, cooling: 0, transporting: 0, farming: 0, food_requirement: 9, rank: 90, hp: 110, melee: 100, shot: 140, defence: 110, price: 8680, stamina: 100 };

  for (let stats of Stats) {
    stats.mount_speed = 0;
    stats.transport_speed = 0;
    stats.flying = false;
  }
  Stats[Jetragon].mount_speed = 3300;
  Stats[Necromus].mount_speed = 1600;
  Stats[Frostallion].mount_speed = 1500;
  Stats[FrostallionNoct].mount_speed = 1500;
  Stats[Paladius].mount_speed = 1400;
  Stats[Faleris].mount_speed = 1400;
  Stats[Ragnahawk].mount_speed = 1300;
  Stats[Pyrin].mount_speed = 1300;
  Stats[PyrinNoct].mount_speed = 1300;
  Stats[Beakon].mount_speed = 1200;
  Stats[Shadowbeak].mount_speed = 1200;
  Stats[Rayhound].mount_speed = 1150;
  Stats[Helzephyr].mount_speed = 1100;
  Stats[Suzaku].mount_speed = 1100;
  Stats[SuzakuAqua].mount_speed = 1100;
  Stats[Univolt].mount_speed = 1100;
  Stats[Fenglope].mount_speed = 1050;
  Stats[Direhowl].mount_speed = 1050;
  Stats[Quivern].mount_speed = 950;
  Stats[Eikthyrdeer].mount_speed = 900;
  Stats[EikthyrdeerTerra].mount_speed = 900;
  Stats[Blazamut].mount_speed = 900;
  Stats[Blazehowl].mount_speed = 900;
  Stats[BlazehowlNoct].mount_speed = 900;
  Stats[Kitsun].mount_speed = 900;
  Stats[Vanwyrm].mount_speed = 850;
  Stats[VanwyrmCryst].mount_speed = 850;
  Stats[Astegon].mount_speed = 800;
  Stats[Elphidran].mount_speed = 800;
  Stats[ElphidranAqua].mount_speed = 800;
  Stats[Arsox].mount_speed = 800;
  Stats[Chillet].mount_speed = 800;
  Stats[Grintale].mount_speed = 800;
  Stats[Maraith].mount_speed = 800;
  Stats[Melpaca].mount_speed = 800;
  Stats[Relaxaurus].mount_speed = 800;
  Stats[RelaxaurusLux].mount_speed = 800;
  Stats[Azurobe].mount_speed = 800;
  Stats[Nitewing].mount_speed = 750;
  Stats[Dinossom].mount_speed = 700;
  Stats[DinossomLux].mount_speed = 700;
  Stats[JormuntideIgnis].mount_speed = 700;
  Stats[Kingpaca].mount_speed = 700;
  Stats[IceKingpaca].mount_speed = 700;
  Stats[Mossanda].mount_speed = 700;
  Stats[MossandaLux].mount_speed = 700;
  Stats[Reindrix].mount_speed = 700;
  Stats[Rushoar].mount_speed = 700;
  Stats[Jormuntide].mount_speed = 700;
  Stats[SurfentTerra].mount_speed = 650;
  Stats[Surfent].mount_speed = 650;
  Stats[Mammorest].mount_speed = 600;
  Stats[MammorestCryst].mount_speed = 600;
  Stats[Grizzbolt].mount_speed = 550;
  Stats[Reptyro].mount_speed = 550;
  Stats[IceReptyro].mount_speed = 550;
  Stats[Wumpo].mount_speed = 550;
  Stats[WumpoBotan].mount_speed = 550;
  Stats[Broncherry].mount_speed = 500;
  Stats[BroncherryAqua].mount_speed = 500;
  Stats[Sweepa].mount_speed = 500;

  Stats[Lamball].transport_speed = 160;
  Stats[Cattiva].transport_speed = 160;
  Stats[Fuack].transport_speed = 202;
  Stats[Sparkit].transport_speed = 270;
  Stats[Tanzee].transport_speed = 174;
  Stats[Pengullet].transport_speed = 265;
  Stats[Penking].transport_speed = 280;
  Stats[Depresso].transport_speed = 100;
  Stats[Daedream].transport_speed = 220;
  Stats[Fuddler].transport_speed = 240;
  Stats[Killamari].transport_speed = 260;
  Stats[Celaray].transport_speed = 350;
  Stats[Flopie].transport_speed = 250;
  Stats[Bristla].transport_speed = 250;
  Stats[Gobfin].transport_speed = 120;
  Stats[GobfinIgnis].transport_speed = 120;
  Stats[Hangyu].transport_speed = 250;
  Stats[HangyuCryst].transport_speed = 250;
  Stats[Mossanda].transport_speed = 275;
  Stats[MossandaLux].transport_speed = 275;
  Stats[Ribbuny].transport_speed = 172;
  Stats[Incineram].transport_speed = 320;
  Stats[IncineramNoct].transport_speed = 320;
  Stats[Dumud].transport_speed = 300;
  Stats[Leezpunk].transport_speed = 270;
  Stats[LeezpunkIgnis].transport_speed = 270;
  Stats[Robinquill].transport_speed = 400;
  Stats[RobinquillTerra].transport_speed = 400;
  Stats[Gorirat].transport_speed = 250;
  Stats[Beegarde].transport_speed = 350;
  Stats[Dazzi].transport_speed = 300;
  Stats[Lunaris].transport_speed = 315;
  Stats[Tombat].transport_speed = 270;
  Stats[Lovander].transport_speed = 460;
  Stats[Flambelle].transport_speed = 140;
  Stats[Vanwyrm].transport_speed = 475;
  Stats[VanwyrmCryst].transport_speed = 475;
  Stats[Bushi].transport_speed = 320;
  Stats[Beakon].transport_speed = 375;
  Stats[Ragnahawk].transport_speed = 375;
  Stats[Katress].transport_speed = 292;
  Stats[Wixen].transport_speed = 292;
  Stats[Verdash].transport_speed = 275;
  Stats[Vaelet].transport_speed = 275;
  Stats[Relaxaurus].transport_speed = 150;
  Stats[RelaxaurusLux].transport_speed = 150;
  Stats[Petallia].transport_speed = 350;
  Stats[Wumpo].transport_speed = 150;
  Stats[WumpoBotan].transport_speed = 150;
  Stats[Warsect].transport_speed = 110;
  Stats[Quivern].transport_speed = 470;
  Stats[Helzephyr].transport_speed = 450;
  Stats[Anubis].transport_speed = 480;
  Stats[Grizzbolt].transport_speed = 210;
  Stats[Faleris].transport_speed = 500;
  Stats[Orserk].transport_speed = 250;

  Stats[Frostallion].flying = true;
  Stats[FrostallionNoct].flying = true;
  Stats[Faleris].flying = true;
  Stats[Ragnahawk].flying = true;
  Stats[Pyrin].flying = true;
  Stats[PyrinNoct].flying = true;
  Stats[Beakon].flying = true;
  Stats[Shadowbeak].flying = true;
  Stats[Helzephyr].flying = true;
  Stats[Suzaku].flying = true;
  Stats[SuzakuAqua].flying = true;
  Stats[Quivern].flying = true;
  Stats[Vanwyrm].flying = true;
  Stats[VanwyrmCryst].flying = true;
  Stats[Astegon].flying = true;
  Stats[Elphidran].flying = true;
  Stats[ElphidranAqua].flying = true;
  Stats[Nitewing].flying = true;
}

function Multiplier(pal, traits_array) {
  let multiplier = 1;
  for (let t of pal.traits) {
    multiplier += traits_array[t];
  }
  return multiplier;
}

function TopSkillsFromRooster(trait_array) {
  let rooster_skills = new Set();
  for (let pal of pals) {
    for (let skill of pal.traits) {
      rooster_skills.add(Number(skill));
    }
  }
  rooster_skills.delete(NoType);
  let top_skills = [];
  for (let skill of rooster_skills) {
    if (trait_array[skill] > 0)
      top_skills.push(skill);
  }
  top_skills.sort((a, b) => trait_array[b] - trait_array[a]);
  if (top_skills.length > 4) {
    top_skills.length = 4;
  }
  return top_skills;
}

let SpeedTraits = new Float32Array(TraitCount);
SpeedTraits[Swift] = 0.3;
SpeedTraits[Runner] = 0.2;
SpeedTraits[Legend] = 0.15;
SpeedTraits[Nimble] = 0.1;

let WorkSpeedTraits = new Float32Array(TraitCount);
WorkSpeedTraits[Artisan] = 0.5;
WorkSpeedTraits[WorkSlave] = 0.3;
WorkSpeedTraits[Serious] = 0.2;
WorkSpeedTraits[Lucky] = 0.15;
WorkSpeedTraits[Conceited] = 0.1;
WorkSpeedTraits[Musclehead] = -0.5;
WorkSpeedTraits[Clumsy] = -0.1;
WorkSpeedTraits[Hooligan] = -0.1;
WorkSpeedTraits[Slacker] = -0.3;

let HungerTraits = new Float32Array(TraitCount);
HungerTraits[DietLover] = -0.15;
HungerTraits[DaintyEater] = -0.1;
HungerTraits[Glutton] = 0.1;
HungerTraits[BottomlessStomach] = 0.15;

let SanityTraits = new Float32Array(TraitCount);
SanityTraits[Destructive] = -0.15;
SanityTraits[Unstable] = -0.1;
SanityTraits[PositiveThinker] = 0.1;
SanityTraits[Workaholic] = 0.15;

let AttackTraits = new Float32Array(TraitCount);
AttackTraits[Brave] = 0.1;
AttackTraits[Coward] = -0.1;
AttackTraits[Pacifist] = -0.2;
AttackTraits[Lucky] = 0.15;
AttackTraits[Sadist] = 0.15;
AttackTraits[Aggressive] = 0.1;
AttackTraits[Musclehead] = 0.3;
AttackTraits[Hooligan] = 0.15;
AttackTraits[Ferocious] = 0.2;
AttackTraits[Masochist] = -0.15;
AttackTraits[WorkSlave] = -0.3;
AttackTraits[Legend] = 0.2;

let NormalAttackTraits = new Float32Array(TraitCount);
NormalAttackTraits[ZenMind] = 0.1;
NormalAttackTraits[CelestialEmperor] = 0.2;

let DarkAttackTraits = new Float32Array(TraitCount);
DarkAttackTraits[VeilOfDarkness] = 0.1;
DarkAttackTraits[LordOfTheUnderworld] = 0.2;

let DragonAttackTraits = new Float32Array(TraitCount);
DragonAttackTraits[BloodOfTheDragon] = 0.1;
DragonAttackTraits[DivineDragon] = 0.2;

let FireAttackTraits = new Float32Array(TraitCount);
FireAttackTraits[Pyromaniac] = 0.1;
FireAttackTraits[FlameEmperor] = 0.2;

let WaterAttackTraits = new Float32Array(TraitCount);
WaterAttackTraits[Hydromaniac] = 0.1;
WaterAttackTraits[LordOfTheSea] = 0.2;

let ElectricityAttackTraits = new Float32Array(TraitCount);
ElectricityAttackTraits[Capacitor] = 0.1;
ElectricityAttackTraits[LordOfLightning] = 0.2;

let EarthAttackTraits = new Float32Array(TraitCount);
EarthAttackTraits[PowerOfGaia] = 0.1;
EarthAttackTraits[EarthEmperor] = 0.2;

let GrassAttackTraits = new Float32Array(TraitCount);
GrassAttackTraits[FragrantFoliage] = 0.1;
GrassAttackTraits[SpiritEmperor] = 0.2;

let IceAttackTraits = new Float32Array(TraitCount);
IceAttackTraits[Coldblooded] = 0.1;
IceAttackTraits[IceEmperor] = 0.2;

function SpeedMultiplier(pal) {
  return Multiplier(pal, SpeedTraits);
}

function WorkSpeed(pal) {
  return Multiplier(pal, WorkSpeedTraits);
}

function HungerMultiplier(pal) {
  return Multiplier(pal, HungerTraits);
}

function Sanity(pal) {
  return Multiplier(pal, SanityTraits);
}

function AttackMultiplier(pal) {
  return Multiplier(pal, AttackTraits);
}

function Hunger(pal) {
  return Stats[pal.id].food_requirement * HungerMultiplier(pal);
}

function NightActivityMultiplier(pal) {
  return Pal.HasType(pal, Dark) ? 1.15 : 1;
}

function ScoreMount(pal) {
  let stats = Stats[pal.id];
  let score = stats.mount_speed * (stats.flying ? 1.0 : 0.5);
  return score * SpeedMultiplier(pal);
}
function ScoreKindling(pal) { return Stats[pal.id].kindling * WorkSpeed(pal) * NightActivityMultiplier(pal); }
function ScoreWatering(pal) { return Stats[pal.id].watering * WorkSpeed(pal) * NightActivityMultiplier(pal); }
function ScorePlanting(pal) { return Stats[pal.id].planting * WorkSpeed(pal) * NightActivityMultiplier(pal); }
function ScoreElectric(pal) { return Stats[pal.id].electric * WorkSpeed(pal) * NightActivityMultiplier(pal); }
function ScoreHandiwork(pal) {
  return Stats[pal.id].handiwork * WorkSpeed(pal) * NightActivityMultiplier(pal);
}
function ScoreGathering(pal) {
  return Stats[pal.id].gathering * WorkSpeed(pal) * NightActivityMultiplier(pal);
}
function ScoreLumbering(pal) {
  return Stats[pal.id].lumbering * WorkSpeed(pal) * NightActivityMultiplier(pal);
}
function ScoreMining(pal) { return Stats[pal.id].mining * WorkSpeed(pal) * NightActivityMultiplier(pal); }
function ScoreMedicine(pal) { return Stats[pal.id].medicine * WorkSpeed(pal) * NightActivityMultiplier(pal); }
function ScoreCooling(pal) { return Stats[pal.id].cooling * WorkSpeed(pal) * NightActivityMultiplier(pal); }

function ScoreTransporting(pal) {
  let stats = Stats[pal.id];
  return stats.transporting * stats.transport_speed *
    SpeedMultiplier(pal) * NightActivityMultiplier(pal);
}

let WoolProduction = new Float32Array(LastID);
WoolProduction[Lamball] = 1;
WoolProduction[Cremis] = 2;
WoolProduction[Melpaca] = 2;

function ScoreWool(pal) {
  return WoolProduction[pal.id] * Sanity(pal) / HungerMultiplier(pal) * NightActivityMultiplier(pal);
}

function ScoreEggs(pal) {
  return (pal.id == Chikipi ? 1 : 0) * Sanity(pal) / HungerMultiplier(pal) * NightActivityMultiplier(pal);
}

let GoldProduction = new Float32Array(LastID);
GoldProduction[Vixy] = 1;
GoldProduction[Mau] = 2;
GoldProduction[MauCryst] = 2;

function ScoreGold(pal) {
  return GoldProduction[pal.id] * Sanity(pal) / HungerMultiplier(pal) * NightActivityMultiplier(pal);
}

function ScorePalspheres(pal) {
  return (pal.id == Vixy ? 1 : 0) * Sanity(pal) / HungerMultiplier(pal) * NightActivityMultiplier(pal);
}

function ScoreMilk(pal) {
  return (pal.id == Mozzarina ? 1 : 0) * Sanity(pal) / HungerMultiplier(pal) * NightActivityMultiplier(pal);
}

function ScoreCottonCandy(pal) {
  return (pal.id == Woolipop ? 1 : 0) * Sanity(pal) / HungerMultiplier(pal) * NightActivityMultiplier(pal);
}

function ScoreBerry(pal) {
  return (pal.id == Caprity ? 1 : 0) * Sanity(pal) / HungerMultiplier(pal) * NightActivityMultiplier(pal);
}

function ScoreHoney(pal) {
  return (pal.id == Beegarde ? 1 : 0) * Sanity(pal) / HungerMultiplier(pal) * NightActivityMultiplier(pal);
}

function ScoreFlameOrgan(pal) {
  return (pal.id == Flambelle ? 1 : 0) * Sanity(pal) / HungerMultiplier(pal) * NightActivityMultiplier(pal);
}

function ScoreHighQualityCloth(pal) {
  return (pal.id == Sibelyx ? 1 : 0) * Sanity(pal) / HungerMultiplier(pal) * NightActivityMultiplier(pal);
}

function TraitSelector(traits_array) {
  return function () {
    return TopSkillsFromRooster(traits_array);
  };
}

const BestTraitsForFarming = [
  Workaholic,
  PositiveThinker,
  DietLover,
  DaintyEater,
];

function TypedAttackMetric(type, attack_traits) {
  return {
    score_fn: function (pal) {
      // Same Type Attack Bonus
      let stab = Pal.HasType(pal, type) ? 1.2 : 1;
      return Stats[pal.id].shot * AttackMultiplier(pal) * stab * Multiplier(pal, attack_traits);
    }, tracked_traits: function () {
      let arr1 = TopSkillsFromRooster(attack_traits);
      let arr2 = TopSkillsFromRooster(AttackTraits);
      let arr = arr1.concat(arr2);
      if (arr.length > 4) {
        arr.length = 4;
      }
      return arr;
    }
  }
}

const Metrics = {
  "<img width=20 src=kindling.png style=vertical-align:bottom>": { score_fn: ScoreKindling, tracked_traits: TraitSelector(WorkSpeedTraits) },
  "<img width=20 src=watering.png style=vertical-align:bottom>": { score_fn: ScoreWatering, tracked_traits: TraitSelector(WorkSpeedTraits) },
  "<img width=20 src=planting.png style=vertical-align:bottom>": { score_fn: ScorePlanting, tracked_traits: TraitSelector(WorkSpeedTraits) },
  "<img width=20 src=generatingElectricity.png style=vertical-align:bottom>": { score_fn: ScoreElectric, tracked_traits: TraitSelector(WorkSpeedTraits) },
  "<img width=20 src=handiwork.png style=vertical-align:bottom>": { score_fn: ScoreHandiwork, tracked_traits: TraitSelector(WorkSpeedTraits) },
  "<img width=20 src=gathering.png style=vertical-align:bottom>": { score_fn: ScoreGathering, tracked_traits: TraitSelector(WorkSpeedTraits) },
  "<img width=20 src=lumbering.png style=vertical-align:bottom>": { score_fn: ScoreLumbering, tracked_traits: TraitSelector(WorkSpeedTraits) },
  "<img width=20 src=mining.png style=vertical-align:bottom>": { score_fn: ScoreMining, tracked_traits: TraitSelector(WorkSpeedTraits) },
  "<img width=20 src=medicineProduction.png style=vertical-align:bottom>": { score_fn: ScoreMedicine, tracked_traits: TraitSelector(WorkSpeedTraits) },
  "<img width=20 src=cooling.png style=vertical-align:bottom>": { score_fn: ScoreCooling, tracked_traits: TraitSelector(WorkSpeedTraits) },
  "<img width=20 src=transporting.png style=vertical-align:bottom>": { score_fn: ScoreTransporting, tracked_traits: TraitSelector(SpeedTraits) },
  "Fastest 🐎": { score_fn: ScoreMount, tracked_traits: TraitSelector(SpeedTraits) },
  "Wool Farming 🐑": { score_fn: ScoreWool, tracked_traits: BestTraitsForFarming },
  "Eggs Farming 🥚": { score_fn: ScoreEggs, tracked_traits: BestTraitsForFarming },
  "Gold Farming 💰": { score_fn: ScoreGold, tracked_traits: BestTraitsForFarming },
  "Palsphere Farming 🌐": { score_fn: ScorePalspheres, tracked_traits: BestTraitsForFarming },
  "Milk Farming 🐮": { score_fn: ScoreMilk, tracked_traits: BestTraitsForFarming },
  "Cotton Candy Farming 🦄": { score_fn: ScoreCottonCandy, tracked_traits: BestTraitsForFarming },
  "Berry Farming 🫐": { score_fn: ScoreBerry, tracked_traits: BestTraitsForFarming },
  "Honey Farming 🍯": { score_fn: ScoreHoney, tracked_traits: BestTraitsForFarming },
  "Flame Organ Farming ❤️‍🔥": { score_fn: ScoreFlameOrgan, tracked_traits: BestTraitsForFarming },
  "High Quality Cloth Farming 🧣": { score_fn: ScoreHighQualityCloth, tracked_traits: BestTraitsForFarming },
  "Highest ⚔️": {
    score_fn: function (pal) {
      return Stats[pal.id].shot * AttackMultiplier(pal);
    }, tracked_traits: TraitSelector(AttackTraits)
  },
  "<img width=24 src=normal.png style=vertical-align:bottom>⚔️": TypedAttackMetric(Normal, NormalAttackTraits),
  "<img width=24 src=dark.png style=vertical-align:bottom>⚔️": TypedAttackMetric(Dark, DarkAttackTraits),
  "<img width=24 src=dragon.png style=vertical-align:bottom>⚔️": TypedAttackMetric(Dragon, DragonAttackTraits),
  "<img width=24 src=ice.png style=vertical-align:bottom>⚔️": TypedAttackMetric(Ice, IceAttackTraits),
  "<img width=24 src=fire.png style=vertical-align:bottom>⚔️": TypedAttackMetric(Fire, FireAttackTraits),
  "<img width=24 src=water.png style=vertical-align:bottom>⚔️": TypedAttackMetric(Water, WaterAttackTraits),
  "<img width=24 src=electric.png style=vertical-align:bottom>⚔️": TypedAttackMetric(Electricity, ElectricityAttackTraits),
  "<img width=24 src=ground.png style=vertical-align:bottom>⚔️": TypedAttackMetric(Earth, EarthAttackTraits),
  "<img width=24 src=grass.png style=vertical-align:bottom>⚔️": TypedAttackMetric(Leaf, GrassAttackTraits),
};

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

const CharacterIDToIDName = {
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

const PassiveSkillToTraitName = {
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
let table = document.getElementById('pals');
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
    Pal.ToCpp(pals[i], pals_ptr + i * 6);
  }
}

let metric_buttons = document.getElementById('metric-buttons');

let skill_checkboxes_div = document.getElementById('skill-checkboxes');
let skill_checkboxes = [];
function SaveSelectedSkills() {
  localStorage.selected_skills = JSON.stringify(skill_checkboxes.map((x) => x.checked));
}
function RestoreAdvancedTraitSelects() {
  if ('selected_skills' in localStorage) {
    let values = JSON.parse(localStorage.selected_skills);
    for (let i = 0; i < skill_checkboxes.length; i++) {
      skill_checkboxes[i].checked = values[i];
    }
  }
}
for (let i = 1; i < TraitCount; ++i) {
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  skill_checkboxes.push(checkbox);
  checkbox.onchange = SaveSelectedSkills;
  let label = document.createElement('label');
  label.appendChild(document.createTextNode(TraitToStr[i]));
  skill_checkboxes_div.appendChild(checkbox);
  skill_checkboxes_div.appendChild(label);
  label.htmlFor = checkbox.id = `skill${i}_checkbox`;
}
RestoreAdvancedTraitSelects();


let advanced_search_score_textarea = document.getElementById('advanced_search_score');
let advanced_search_error = document.getElementById('advanced_search_error');

if ('advanced_search_score' in localStorage && localStorage.advanced_search_score.length > 0) {
  advanced_search_score_textarea.value = localStorage.advanced_search_score;
}
advanced_search_score_textarea.onchange = function () {
  localStorage.advanced_search_score = advanced_search_score_textarea.value;
  try {
    eval?.(advanced_search_score_textarea.value);
    Score(
      "Error Checker",
      "M",
      { Lucky: true, Swift: true, "Motivational Leader": true, Artisan: true },
      Stats[Jetragon]);
    advanced_search_error.textContent = '';
    advanced_search_error.style.display = 'none';
  } catch (ex) {
    advanced_search_error.textContent = ex;
    console.error(ex);
    advanced_search_error.style.display = 'block';
  }
};
advanced_search_score_textarea.onchange();

var ActiveScore = undefined;

var last_tracked_traits = 'first run guard';
function MaybeBreed(tracked_traits) {
  if (String(tracked_traits) != last_tracked_traits) {
    last_tracked_traits = String(tracked_traits);
    let bad_traits_ptr = Module._BadTraits;
    // Skip NoTrait at index 0
    for (let i = 1; i < TraitCount; i++) {
      Module.HEAPU8[bad_traits_ptr + i] = 1; // Mark all traits as "bad"
    }
    for (let t of tracked_traits) {
      Module.HEAPU8[bad_traits_ptr + t] = 0; // Mark the tracked traits as "not bad"
    }
    Module.ccall('BreedStart', 'void', [], []);
  }
  setTimeout(BreedStep, 0);
}

function AdvancedSearch() {
  best_pals_div.innerHTML = `Advanced search...`;
  progress = document.createElement('progress');
  best_pals_div.appendChild(progress);
  PalsToCpp();
  ActiveScore = function (pal) {
    let skills = {};
    for (let i = 0; i < 4; i++) {
      if (pal.traits[i] !== NoTrait) {
        skills[TraitToStr[pal.traits[i]]] = true;
      }
    }
    let stats = Stats[pal.id];
    return Score(IDToStr[pal.id], pal.gender ? 'F' : 'M', skills, stats);
  };
  let tracked_traits = [];
  // Account for NoTrait at index 0
  for (let i = 1; i < TraitCount; i++) {
    if (skill_checkboxes[i - 1].checked) {
      tracked_traits.push(i);
    }
  }
  MaybeBreed(tracked_traits);
};

function PredefinedSearch(metric_name) {
  let metric = Metrics[metric_name];
  best_pals_div.innerHTML = `Searching for ${metric_name}...`;
  progress = document.createElement('progress');
  best_pals_div.appendChild(progress);
  PalsToCpp();
  let filter_id = Number(pal_filter.value);
  if (filter_id === -1) {
    ActiveScore = metric.score_fn;
  } else {
    ActiveScore = function (pal) {
      if (pal.id !== filter_id) {
        return -Infinity;
      }
      return metric.score_fn(pal);
    };
  }
  let tracked_traits = [];
  if (typeof metric.tracked_traits === 'object') {
    tracked_traits = metric.tracked_traits;
  } else if (typeof metric.tracked_traits === 'function') {
    tracked_traits = metric.tracked_traits();
  } else {
    throw new Error('Unknown type of metric.tracked_traits:' + typeof metric.tracked_traits);
  }
  MaybeBreed(tracked_traits);
}

let best_pals_div = document.getElementById('best-pals');

let progress = null;

var pal_filter;

function Main() {
  for (let metric_name in Metrics) {
    let metric_btn = document.createElement('button');
    metric_btn.innerHTML = metric_name;
    metric_btn.onclick = function () {
      PredefinedSearch(metric_name);
    };
    metric_buttons.appendChild(metric_btn);
  }

  // Fetch the list of pals & traits from C++ side
  if (LastID != Module.ccall('IDCount', 'number', [], [])) {
    throw new Error('Detected inconsistency between C++ and JavaScript code!');
  }

  if (TraitCount != Module.ccall('TraitCount', 'number', [], [])) {
    throw new Error('Detected inconsistency between C++ and JavaScript code!');
  }

  IDName = Module.cwrap('IDName', 'string', ['number']);
  TraitName = Module.cwrap('TraitName', 'string', ['number']);

  for (let i = 0; i < LastID; i++) {
    EncodeIDName[IDName(i)] = i;
  }

  for (let i = 0; i < TraitCount; i++) {
    EncodeTrait[TraitName(i)] = i;
  }

  pal_filter = document.createElement('select');
  let no_filter = document.createElement('option');
  no_filter.value = -1;
  no_filter.text = 'Any Pal';
  pal_filter.appendChild(no_filter);
  for (let i = 0; i < LastID; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = `Only ${IDName(i)}`;
    pal_filter.appendChild(option);
  }
  metric_buttons.appendChild(pal_filter);



  // Prepare the form for adding new pals
  // Add the id selection
  let id_select = document.createElement('select');
  id_select.id = 'id_select';
  for (let i = 0; i < LastID; i++) {
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
    for (let i = 0; i < TraitCount; i++) {
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
