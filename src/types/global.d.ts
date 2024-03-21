export {}

declare global {
  type IdParams = { params: { id: string }}
  type LegendCardProps = { 
    legend: Legend
  }
  type PlayerCardProps = {
    player?: Player
    ranked?: PlayerRanked
    general?: PlayerGeneral
  }
  type Legend = {
    legend_id: number,
    legend_name_key: string
    games?: number
    wins?: number
    [legend_attr: string]: string
  }
  interface LegendRanked extends Legend {
    rating: number
    peak_rating: number
    tier: string
  }
  interface LegendGeneral extends Legend {
    damagedealt: string
    damagetaken: string
    kos: number
    falls: number
    suicides: number
    teamkos: number
    matchtime: number
    damageunarmed: string
    damagethrownitem: string
    damageweaponone: string
    damageweapontwo: string
    damagegadgets: string
    kounarmed: number
    kothrownitem: number
    koweaponone: number
    koweapontwo: number
    kogadgets: number
    timeheldweaponone: number
    timeheldweapontwo: number
    xp: number
    level: number
    xp_percentage: number
  }
  type Player = {
    name: string
    brawlhalla_id: number
  }
  type Doubles = {
    brawlhalla_id_one: number
    brawlhalla_id_two: number
    rating: number
    peak_rating: number
    tier: string
    wins: number
    games: number
    teamname: string
    region: number
    global_rank: number
  }
  interface PlayerRanked extends Player {
    rating: number
    peak_rating: number
    tier: string
    region: string
    global_rank: number
    region_rank: number
    games: number
    wins: number
    legends: LegendRanked[]
    '2v2'?: Doubles[]
  }
  interface PlayerGeneral extends Player {
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
    games: number
    wins: number
    legends: LegendGeneral[]
    clan?: {
      clan_name: string
      clan_id: number
      clan_xp: string
      personal_xp: number
    }
  }
}