interface Legend {
  damagedealt: string;
  damagegadgets: string;
  damagetaken: string;
  damagethrownitem: string;
  damageunarmed: string;
  damageweaponone: string;
  damageweapontwo: string;
  falls: number;
  games: number;
  kogadgets: number;
  kos: number;
  kothrownitem: number;
  kounarmed: number;
  koweaponone: number;
  koweapontwo: number;
  legend_id: number;
  legend_name_key: string;
  level: number;
  matchtime: number;
  suicides: number;
  teamkos: number;
  timeheldweaponone: number;
  timeheldweapontwo: number;
  wins: number;
  xp: number;
  xp_percentage: number;
}

interface PlayerStats {
  brawlhalla_id: number;
  damagebomb: string;
  damagemine: string;
  damagesidekick: string;
  damagespikeball: string;
  games: number;
  hitsnowball: number;
  kobomb: number;
  komine: number;
  kosidekick: number;
  kosnowball: number;
  kospikeball: number;
  legends: Legend[];
  level: number;
  name: string;
  wins: number;
  xp: number;
  xp_percentage: number;
}

export type { PlayerStats, Legend };