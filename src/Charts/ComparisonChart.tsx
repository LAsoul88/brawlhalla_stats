import { useState, useEffect } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

import { PlayerStats, Legend } from '../types/player.interface';

const ComparisonChart = () => {

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
  }, [])

  return (
    <div>
      { player ? 
        player.legends.map((legend: Legend) => {
          return <p>{legend.legend_name_key}</p>
        }) :
        'No player selected'
      }
    </div>
  )
}

export default ComparisonChart;