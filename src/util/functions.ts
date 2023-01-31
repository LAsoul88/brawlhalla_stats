import { Legend } from '../types/player.interface';

export const nameSort = (a: Legend, b: Legend) => {
  return (a.legend_name_key > b.legend_name_key) ? 1 : ((a.legend_name_key < b.legend_name_key) ? -1 : 0)
}