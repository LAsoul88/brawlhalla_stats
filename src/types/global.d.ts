export {}

declare global {
  type IdParams = { params: { id: string }}
  type Legend = {
    legend_id: number,
    legend_name_key: string
    bio_name: string
    bio_aka: string
  }
  type Player = {
    name: string
    brawlhalla_id: number
    games: number
    wins: number
    legends: Legend[]
  }
  interface RankedPlayer extends Player {
    rating: number
    peak_rating: number
    tier: string
    region: string
    global_rank: number
    region_rank: number
  }
  interface GeneralPlayer extends Player {
    xp: number
    level: number
    xp_percentage: number
    damagebomb: string
    damagemine: string
    damagespikeball: string
    damagesidekick: string
    hitsnowball: number
    kobomb: number
    komine: number
    kospikeball: number
    kosidekick: number
    kosnowball: number
  }
}