import { useContext } from 'react';

import type { Legend } from '../types/player.interface';
import BaseChart from './BaseChart';
import { PlayerContext } from '../Context/PlayerContext'
import { nameSort } from '../util/functions';

const KOFallRatioChart = () => {

  // const brawlhallaId: number = 74604260;
  const player = useContext(PlayerContext);
  if (player.legends) {
    const sortedLegends: Legend[] = player ? player.legends.sort(nameSort) : [];
    const labels = sortedLegends.map(legend => legend.legend_name_key);
    const koFallRatio = sortedLegends.map(legend => {
      if (legend.falls === 0) return 0;
      return legend.kos / legend.falls;
    });
  
    return (
      <div className="koFallRatio">
        { player ? <BaseChart type='line' labels={labels} data={koFallRatio} /> : <>Nothin</>}
      </div>
    )
  } else {
    return (
      <div>No player chosen!  </div>
    )
  }
}

export default KOFallRatioChart;