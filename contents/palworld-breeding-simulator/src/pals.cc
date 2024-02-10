#include <algorithm>
#include <cstdint>
#include <cstdlib>
#include <string>

#include "traits.cc"

using namespace std;

enum Gender : uint8_t { Male, Female };

static const char *ToStr(Gender gender) {
  switch (gender) {
  case Male:
    return "M";
  case Female:
    return "F";
  }
}

static Gender Opposite(Gender gender) {
  switch (gender) {
  case Male:
    return Female;
  case Female:
    return Male;
  }
}

enum ID : uint8_t {
  Lamball,
  Cattiva,
  Chikipi,
  Lifmunk,
  Foxparks,
  Fuack,
  Sparkit,
  Tanzee,
  Rooby,
  Pengullet,
  Penking,
  Jolthog,
  JolthogCryst,
  Gumoss,
  GumossSpecial,
  Vixy,
  Hoocrates,
  Teafant,
  Depresso,
  Cremis,
  Daedream,
  Rushoar,
  Nox,
  Fuddler,
  Killamari,
  Mau,
  MauCryst,
  Celaray,
  Direhowl,
  Tocotoco,
  Flopie,
  Mozzarina,
  Bristla,
  Gobfin,
  GobfinIgnis,
  Hangyu,
  HangyuCryst,
  Mossanda,
  MossandaLux,
  Woolipop,
  Caprity,
  Melpaca,
  Eikthyrdeer,
  EikthyrdeerTerra,
  Nitewing,
  Ribbuny,
  Incineram,
  IncineramNoct,
  Cinnamoth,
  Arsox,
  Dumud,
  Cawgnito,
  Leezpunk,
  LeezpunkIgnis,
  Loupmoon,
  Galeclaw,
  Robinquill,
  RobinquillTerra,
  Gorirat,
  Beegarde,
  Elizabee,
  Grintale,
  Swee,
  Sweepa,
  Chillet,
  Univolt,
  Foxcicle,
  Pyrin,
  PyrinNoct,
  Reindrix,
  Rayhound,
  Kitsun,
  Dazzi,
  Lunaris,
  Dinossom,
  DinossomLux,
  Surfent,
  SurfentTerra,
  Maraith,
  Digtoise,
  Tombat,
  Lovander,
  Flambelle,
  Vanwyrm,
  VanwyrmCryst,
  Bushi,
  Beakon,
  Ragnahawk,
  Katress,
  Wixen,
  Verdash,
  Vaelet,
  Sibelyx,
  Elphidran,
  ElphidranAqua,
  Kelpsea,
  KelpseaIgnis,
  Azurobe,
  Cryolinx,
  Blazehowl,
  BlazehowlNoct,
  Relaxaurus,
  RelaxaurusLux,
  Broncherry,
  BroncherryAqua,
  Petallia,
  Reptyro,
  IceReptyro,
  Kingpaca,
  IceKingpaca,
  Mammorest,
  MammorestCryst,
  Wumpo,
  WumpoBotan,
  Warsect,
  Fenglope,
  Felbat,
  Quivern,
  Blazamut,
  Helzephyr,
  Astegon,
  Menasting,
  Anubis,
  Jormuntide,
  JormuntideIgnis,
  Suzaku,
  SuzakuAqua,
  Grizzbolt,
  Lyleen,
  LyleenNoct,
  Faleris,
  Orserk,
  Shadowbeak,
  Paladius,
  Necromus,
  Frostallion,
  FrostallionNoct,
  Jetragon,
  LastID
};

static const char *ToStr(ID id) {
  switch (id) {
  case Lamball:
    return "Lamball";
  case Cattiva:
    return "Cattiva";
  case Chikipi:
    return "Chikipi";
  case Lifmunk:
    return "Lifmunk";
  case Foxparks:
    return "Foxparks";
  case Fuack:
    return "Fuack";
  case Sparkit:
    return "Sparkit";
  case Tanzee:
    return "Tanzee";
  case Rooby:
    return "Rooby";
  case Pengullet:
    return "Pengullet";
  case Penking:
    return "Penking";
  case Jolthog:
    return "Jolthog";
  case JolthogCryst:
    return "Jolthog Cryst";
  case Gumoss:
    return "Gumoss";
  case GumossSpecial:
    return "Gumoss (Special)";
  case Vixy:
    return "Vixy";
  case Hoocrates:
    return "Hoocrates";
  case Teafant:
    return "Teafant";
  case Depresso:
    return "Depresso";
  case Cremis:
    return "Cremis";
  case Daedream:
    return "Daedream";
  case Rushoar:
    return "Rushoar";
  case Nox:
    return "Nox";
  case Fuddler:
    return "Fuddler";
  case Killamari:
    return "Killamari";
  case Mau:
    return "Mau";
  case MauCryst:
    return "Mau Cryst";
  case Celaray:
    return "Celaray";
  case Direhowl:
    return "Direhowl";
  case Tocotoco:
    return "Tocotoco";
  case Flopie:
    return "Flopie";
  case Mozzarina:
    return "Mozzarina";
  case Bristla:
    return "Bristla";
  case Gobfin:
    return "Gobfin";
  case GobfinIgnis:
    return "Gobfin Ignis";
  case Hangyu:
    return "Hangyu";
  case HangyuCryst:
    return "Hangyu Cryst";
  case Mossanda:
    return "Mossanda";
  case MossandaLux:
    return "Mossanda Lux";
  case Woolipop:
    return "Woolipop";
  case Caprity:
    return "Caprity";
  case Melpaca:
    return "Melpaca";
  case Eikthyrdeer:
    return "Eikthyrdeer";
  case EikthyrdeerTerra:
    return "Eikthyrdeer Terra";
  case Nitewing:
    return "Nitewing";
  case Ribbuny:
    return "Ribbuny";
  case Incineram:
    return "Incineram";
  case IncineramNoct:
    return "Incineram Noct";
  case Cinnamoth:
    return "Cinnamoth";
  case Arsox:
    return "Arsox";
  case Dumud:
    return "Dumud";
  case Cawgnito:
    return "Cawgnito";
  case Leezpunk:
    return "Leezpunk";
  case LeezpunkIgnis:
    return "Leezpunk Ignis";
  case Loupmoon:
    return "Loupmoon";
  case Galeclaw:
    return "Galeclaw";
  case Robinquill:
    return "Robinquill";
  case RobinquillTerra:
    return "Robinquill Terra";
  case Gorirat:
    return "Gorirat";
  case Beegarde:
    return "Beegarde";
  case Elizabee:
    return "Elizabee";
  case Grintale:
    return "Grintale";
  case Swee:
    return "Swee";
  case Sweepa:
    return "Sweepa";
  case Chillet:
    return "Chillet";
  case Univolt:
    return "Univolt";
  case Foxcicle:
    return "Foxcicle";
  case Pyrin:
    return "Pyrin";
  case PyrinNoct:
    return "Pyrin Noct";
  case Reindrix:
    return "Reindrix";
  case Rayhound:
    return "Rayhound";
  case Kitsun:
    return "Kitsun";
  case Dazzi:
    return "Dazzi";
  case Lunaris:
    return "Lunaris";
  case Dinossom:
    return "Dinossom";
  case DinossomLux:
    return "Dinossom Lux";
  case Surfent:
    return "Surfent";
  case SurfentTerra:
    return "Surfent Terra";
  case Maraith:
    return "Maraith";
  case Digtoise:
    return "Digtoise";
  case Tombat:
    return "Tombat";
  case Lovander:
    return "Lovander";
  case Flambelle:
    return "Flambelle";
  case Vanwyrm:
    return "Vanwyrm";
  case VanwyrmCryst:
    return "Vanwyrm Cryst";
  case Bushi:
    return "Bushi";
  case Beakon:
    return "Beakon";
  case Ragnahawk:
    return "Ragnahawk";
  case Katress:
    return "Katress";
  case Wixen:
    return "Wixen";
  case Verdash:
    return "Verdash";
  case Vaelet:
    return "Vaelet";
  case Sibelyx:
    return "Sibelyx";
  case Elphidran:
    return "Elphidran";
  case ElphidranAqua:
    return "Elphidran Aqua";
  case Kelpsea:
    return "Kelpsea";
  case KelpseaIgnis:
    return "Kelpsea Ignis";
  case Azurobe:
    return "Azurobe";
  case Cryolinx:
    return "Cryolinx";
  case Blazehowl:
    return "Blazehowl";
  case BlazehowlNoct:
    return "Blazehowl Noct";
  case Relaxaurus:
    return "Relaxaurus";
  case RelaxaurusLux:
    return "Relaxaurus Lux";
  case Broncherry:
    return "Broncherry";
  case BroncherryAqua:
    return "Broncherry Aqua";
  case Petallia:
    return "Petallia";
  case Reptyro:
    return "Reptyro";
  case IceReptyro:
    return "Ice Reptyro";
  case Kingpaca:
    return "Kingpaca";
  case IceKingpaca:
    return "Ice Kingpaca";
  case Mammorest:
    return "Mammorest";
  case MammorestCryst:
    return "Mammorest Cryst";
  case Wumpo:
    return "Wumpo";
  case WumpoBotan:
    return "Wumpo Botan";
  case Warsect:
    return "Warsect";
  case Fenglope:
    return "Fenglope";
  case Felbat:
    return "Felbat";
  case Quivern:
    return "Quivern";
  case Blazamut:
    return "Blazamut";
  case Helzephyr:
    return "Helzephyr";
  case Astegon:
    return "Astegon";
  case Menasting:
    return "Menasting";
  case Anubis:
    return "Anubis";
  case Jormuntide:
    return "Jormuntide";
  case JormuntideIgnis:
    return "Jormuntide Ignis";
  case Suzaku:
    return "Suzaku";
  case SuzakuAqua:
    return "Suzaku Aqua";
  case Grizzbolt:
    return "Grizzbolt";
  case Lyleen:
    return "Lyleen";
  case LyleenNoct:
    return "Lyleen Noct";
  case Faleris:
    return "Faleris";
  case Orserk:
    return "Orserk";
  case Shadowbeak:
    return "Shadowbeak";
  case Paladius:
    return "Paladius";
  case Necromus:
    return "Necromus";
  case Frostallion:
    return "Frostallion";
  case FrostallionNoct:
    return "Frostallion Noct";
  case Jetragon:
    return "Jetragon";
  default:
    return "?";
  }
}

static int Rank(ID id) {
  switch (id) {
  case Lamball:
    return 1470;
  case Cattiva:
    return 1460;
  case Chikipi:
    return 1500;
  case Lifmunk:
    return 1430;
  case Foxparks:
    return 1400;
  case Fuack:
    return 1330;
  case Sparkit:
    return 1410;
  case Tanzee:
    return 1250;
  case Rooby:
    return 1155;
  case Pengullet:
    return 1350;
  case Penking:
    return 520;
  case Jolthog:
    return 1370;
  case JolthogCryst:
    return 1360;
  case Gumoss:
    return 1240;
  case GumossSpecial:
    return 1240;
  case Vixy:
    return 1450;
  case Hoocrates:
    return 1390;
  case Teafant:
    return 1490;
  case Depresso:
    return 1380;
  case Cremis:
    return 1455;
  case Daedream:
    return 1230;
  case Rushoar:
    return 1130;
  case Nox:
    return 1180;
  case Fuddler:
    return 1220;
  case Killamari:
    return 1290;
  case Mau:
    return 1480;
  case MauCryst:
    return 1440;
  case Celaray:
    return 870;
  case Direhowl:
    return 1060;
  case Tocotoco:
    return 1340;
  case Flopie:
    return 1280;
  case Mozzarina:
    return 910;
  case Bristla:
    return 1320;
  case Gobfin:
    return 1090;
  case GobfinIgnis:
    return 1100;
  case Hangyu:
    return 1420;
  case HangyuCryst:
    return 1422;
  case Mossanda:
    return 430;
  case MossandaLux:
    return 390;
  case Woolipop:
    return 1190;
  case Caprity:
    return 930;
  case Melpaca:
    return 890;
  case Eikthyrdeer:
    return 920;
  case EikthyrdeerTerra:
    return 900;
  case Nitewing:
    return 420;
  case Ribbuny:
    return 1310;
  case Incineram:
    return 590;
  case IncineramNoct:
    return 580;
  case Cinnamoth:
    return 490;
  case Arsox:
    return 790;
  case Dumud:
    return 895;
  case Cawgnito:
    return 1080;
  case Leezpunk:
    return 1120;
  case LeezpunkIgnis:
    return 1140;
  case Loupmoon:
    return 950;
  case Galeclaw:
    return 1030;
  case Robinquill:
    return 1020;
  case RobinquillTerra:
    return 1000;
  case Gorirat:
    return 1040;
  case Beegarde:
    return 1070;
  case Elizabee:
    return 330;
  case Grintale:
    return 510;
  case Swee:
    return 1300;
  case Sweepa:
    return 410;
  case Chillet:
    return 800;
  case Univolt:
    return 680;
  case Foxcicle:
    return 760;
  case Pyrin:
    return 360;
  case PyrinNoct:
    return 240;
  case Reindrix:
    return 880;
  case Rayhound:
    return 740;
  case Kitsun:
    return 830;
  case Dazzi:
    return 1210;
  case Lunaris:
    return 1110;
  case Dinossom:
    return 820;
  case DinossomLux:
    return 810;
  case Surfent:
    return 560;
  case SurfentTerra:
    return 550;
  case Maraith:
    return 1150;
  case Digtoise:
    return 850;
  case Tombat:
    return 750;
  case Lovander:
    return 940;
  case Flambelle:
    return 1405;
  case Vanwyrm:
    return 660;
  case VanwyrmCryst:
    return 620;
  case Bushi:
    return 640;
  case Beakon:
    return 220;
  case Ragnahawk:
    return 380;
  case Katress:
    return 700;
  case Wixen:
    return 1160;
  case Verdash:
    return 990;
  case Vaelet:
    return 1050;
  case Sibelyx:
    return 450;
  case Elphidran:
    return 540;
  case ElphidranAqua:
    return 530;
  case Kelpsea:
    return 1260;
  case KelpseaIgnis:
    return 1270;
  case Azurobe:
    return 500;
  case Cryolinx:
    return 130;
  case Blazehowl:
    return 710;
  case BlazehowlNoct:
    return 670;
  case Relaxaurus:
    return 280;
  case RelaxaurusLux:
    return 270;
  case Broncherry:
    return 860;
  case BroncherryAqua:
    return 840;
  case Petallia:
    return 780;
  case Reptyro:
    return 320;
  case IceReptyro:
    return 230;
  case Kingpaca:
    return 470;
  case IceKingpaca:
    return 440;
  case Mammorest:
    return 300;
  case MammorestCryst:
    return 290;
  case Wumpo:
    return 460;
  case WumpoBotan:
    return 480;
  case Warsect:
    return 340;
  case Fenglope:
    return 980;
  case Felbat:
    return 1010;
  case Quivern:
    return 350;
  case Blazamut:
    return 10;
  case Helzephyr:
    return 190;
  case Astegon:
    return 150;
  case Menasting:
    return 260;
  case Anubis:
    return 570;
  case Jormuntide:
    return 310;
  case JormuntideIgnis:
    return 315;
  case Suzaku:
    return 50;
  case SuzakuAqua:
    return 30;
  case Grizzbolt:
    return 200;
  case Lyleen:
    return 250;
  case LyleenNoct:
    return 210;
  case Faleris:
    return 370;
  case Orserk:
    return 140;
  case Shadowbeak:
    return 60;
  case Paladius:
    return 80;
  case Necromus:
    return 70;
  case Frostallion:
    return 120;
  case FrostallionNoct:
    return 100;
  case Jetragon:
    return 90;
  default:
    return 9999;
  }
}

static constexpr bool UniqueOnly[LastID] = {
    [RelaxaurusLux] = true, [IncineramNoct] = true,    [MauCryst] = true,
    [VanwyrmCryst] = true,  [EikthyrdeerTerra] = true, [ElphidranAqua] = true,
    [PyrinNoct] = true,     [MammorestCryst] = true,   [MossandaLux] = true,
    [DinossomLux] = true,   [JolthogCryst] = true,     [FrostallionNoct] = true,
    [IceKingpaca] = true,   [LyleenNoct] = true,       [LeezpunkIgnis] = true,
    [BlazehowlNoct] = true, [RobinquillTerra] = true,  [BroncherryAqua] = true,
    [SurfentTerra] = true,  [GobfinIgnis] = true,      [SuzakuAqua] = true,
    [IceReptyro] = true,    [HangyuCryst] = true,      [Lyleen] = true,
    [Faleris] = true,       [Grizzbolt] = true,        [Orserk] = true,
    [Shadowbeak] = true,    [Frostallion] = true,      [Jetragon] = true,
    [Paladius] = true,      [Necromus] = true,         [JormuntideIgnis] = true,
};

static ID TieBreakOrder[] = {Anubis,
                             Incineram,
                             IncineramNoct,
                             Mau,
                             MauCryst,
                             Rushoar,
                             Lifmunk,
                             Tocotoco,
                             Eikthyrdeer,
                             EikthyrdeerTerra,
                             Digtoise,
                             Galeclaw,
                             Grizzbolt,
                             Teafant,
                             Direhowl,
                             Gorirat,
                             Jolthog,
                             JolthogCryst,
                             Univolt,
                             Foxparks,
                             Bristla,
                             Lunaris,
                             Pengullet,
                             Dazzi,
                             Gobfin,
                             GobfinIgnis,
                             Lamball,
                             Jormuntide,
                             JormuntideIgnis,
                             Loupmoon,
                             Hangyu,
                             HangyuCryst,
                             Suzaku,
                             SuzakuAqua,
                             Pyrin,
                             PyrinNoct,
                             Elphidran,
                             ElphidranAqua,
                             Woolipop,
                             Cryolinx,
                             Melpaca,
                             Surfent,
                             SurfentTerra,
                             Cawgnito,
                             Azurobe,
                             Cattiva,
                             Depresso,
                             Fenglope,
                             Reptyro,
                             IceReptyro,
                             Maraith,
                             Robinquill,
                             RobinquillTerra,
                             Relaxaurus,
                             RelaxaurusLux,
                             Kitsun,
                             Leezpunk,
                             LeezpunkIgnis,
                             Fuack,
                             Vanwyrm,
                             VanwyrmCryst,
                             Chikipi,
                             Dinossom,
                             DinossomLux,
                             Sparkit,
                             Frostallion,
                             FrostallionNoct,
                             Mammorest,
                             MammorestCryst,
                             Felbat,
                             Broncherry,
                             BroncherryAqua,
                             Faleris,
                             Blazamut,
                             Caprity,
                             Reindrix,
                             Shadowbeak,
                             Sibelyx,
                             Vixy,
                             Wixen,
                             Lovander,
                             Hoocrates,
                             Kelpsea,
                             KelpseaIgnis,
                             Killamari,
                             Mozzarina,
                             Wumpo,
                             WumpoBotan,
                             Vaelet,
                             Nitewing,
                             Flopie,
                             Lyleen,
                             LyleenNoct,
                             Elizabee,
                             Beegarde,
                             Tombat,
                             Mossanda,
                             MossandaLux,
                             Arsox,
                             Rayhound,
                             Fuddler,
                             Astegon,
                             Verdash,
                             Foxcicle,
                             Jetragon,
                             Daedream,
                             Tanzee,
                             Blazehowl,
                             BlazehowlNoct,
                             Kingpaca,
                             IceKingpaca,
                             Gumoss,
                             GumossSpecial,
                             Swee,
                             Sweepa,
                             Katress,
                             Ribbuny,
                             Beakon,
                             Warsect,
                             Paladius,
                             Nox,
                             Penking,
                             Chillet,
                             Quivern,
                             Helzephyr,
                             Ragnahawk,
                             Bushi,
                             Celaray,
                             Necromus,
                             Petallia,
                             Grintale,
                             Cinnamoth,
                             Menasting,
                             Orserk,
                             Cremis,
                             Dumud,
                             Flambelle,
                             Rooby};

static ID RankToID(int rank) {
  ID best_id = Lamball;
  int best_rank = Rank(best_id);
  for (ID id : TieBreakOrder) {
    if (UniqueOnly[id]) {
      continue;
    }
    int id_rank = Rank(id);
    if (abs(id_rank - rank) < abs(best_rank - rank)) {
      best_rank = id_rank;
      best_id = id;
    }
  }
  return best_id;
}

struct Pal {
  ID id = Lamball;
  Gender gender = Male;
  Traits traits = {NoTrait, NoTrait, NoTrait, NoTrait};
  Pal() {}
  Pal(const Pal &other)
      : id(other.id), gender(other.gender), traits(other.traits) {}
  Pal(ID id_arg, Gender gender_arg, Traits traits_arg)
      : id(id_arg), gender(gender_arg), traits(traits_arg) {
    // Remove duplicate traits
    for (int a = 1; a < traits.size(); ++a) {
      for (int b = 0; b < a; ++b) {
        if (traits[a] == traits[b]) {
          traits[b] = NoTrait;
          break;
        }
      }
    }
    // Sort traits
    sort(traits.begin(), traits.end());
  }
  Pal &operator=(const Pal &other) {
    id = other.id;
    gender = other.gender;
    traits = other.traits;
    return *this;
  }
  string ToStr() const {
    char buf[100];
    snprintf(buf, 100, "%s %s", ::ToStr(id), ::ToStr(gender));
    string ret{buf};
    bool has_traits = false;
    for (auto t : traits)
      if (t != NoTrait)
        has_traits = true;
    if (has_traits) {
      ret += " (";
      for (auto t : traits) {
        if (t == NoTrait)
          continue;
        ret += TraitName(t);
        ret += ' ';
      }
      ret.pop_back();
      ret += ')';
    }

    return ret;
  }
  bool operator==(const Pal &other) const {
    return id == other.id && gender == other.gender && traits == other.traits;
  }
  auto operator<=>(const Pal &other) const = default;
};

namespace std {
template <> struct hash<Pal> {
  size_t operator()(const Pal &pal) const noexcept {
    uint64_t ret = 0;
    __builtin_memcpy(&ret, &pal, sizeof(Pal));
    if constexpr (sizeof(size_t) == 8) {
      return ret;
    } else {
      return ret ^ (ret >> 32);
    }
  }
};
} // namespace std

extern "C" {
int IDCount() { return LastID; }
const char *IDName(int i) { return ToStr(static_cast<ID>(i)); }
}