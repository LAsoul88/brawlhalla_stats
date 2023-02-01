import { useState, useEffect } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

import Context from '../Context/Context';
import PlayerSearch from '../Home/PlayerSearch';
import KOFallRatioChart from '../Charts/KOFallRatioChart';
import type { PlayerStats } from '../types/player.interface';

const Player = () => {
  const [id, setId] = useState('');
  const [player, setPlayer] = useState({} as PlayerStats);

  const updateId = (id: string): void => {
    setId(id);
  }

  useEffect(() => {
    const getPlayer = (id: string): void => {
      axios.get(`https://api.brawlhalla.com/player/${id}/stats?api_key=${env.API_KEY}`)
      .then(response => {
        setPlayer(response.data);
      });
    }

    if (id) getPlayer(id);
  }, [id]);

  return (
    <>
      <PlayerSearch 
        submitSearch={updateId}
      />
      <Context player={player}>
        <KOFallRatioChart />
      </Context>
    </>
  )
}

export default Player;