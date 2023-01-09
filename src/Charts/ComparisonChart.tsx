import { useState, useEffect } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

import { PlayerStats, Legend } from '../types/player.interface';
import { weaponMap } from '../util/weaponMap';
import LegendsChart from './LegendsChart';

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
  }, [player])

  console.log(player)
  return (
    <div>
      { player ? <LegendsChart legends={player.legends} /> : <></>}
      { player ? 
        player.legends.map((legend: Legend) => {
          const name: string = legend.legend_name_key;
          return (
            <div key={legend.legend_id}>
              <div>{name}</div>
              <div>{weaponMap[name][0]} Damage: {legend.damageweaponone}</div>
              <div>{weaponMap[name][1]} Damage: {legend.damageweapontwo}</div>
            </div>
          )}) :
        'No player selected'
      }
    </div>
  )
}

export default ComparisonChart;