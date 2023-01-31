import { useState, useEffect } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

import type { PlayerStats, Legend } from '../types/player.interface';
import BaseChart from './BaseChart';
import { nameSort } from '../util/functions';

const KOFallRatioChart = () => {

  const [player, setPlayer] = useState<PlayerStats>();
  const brawlhallaId: number = 74604260;
  
  useEffect(() => {
    const getRank = (id: number): void => {
      axios.get(`https://api.brawlhalla.com/player/${id}/stats?api_key=${env.API_KEY}`)
      .then(response => {
        setPlayer(response.data)
      })
    }
    if (!player) getRank(brawlhallaId);
  }, [player])

    const sortedLegends: Legend[] = player ? player.legends.sort(nameSort) : [];
    const labels = sortedLegends.map(legend => legend.legend_name_key);
    const koFallRatio = sortedLegends.map(legend => {
      if (legend.falls === 0) return 0;
      return legend.kos / legend.falls;
    });

  return (
    <div className="koFallRatio">
      { player ? <BaseChart type='line' labels={labels} data={koFallRatio} /> : <></>}
    </div>
  )
}

export default KOFallRatioChart;