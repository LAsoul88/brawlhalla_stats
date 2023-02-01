import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlayerSearch from '../Home/PlayerSearch';
import { PlayerStats } from '../types/player.interface';

import axios from 'axios';
import env from 'react-dotenv';

import './Home.css';

const Home = () => {
  const [id, setId] = useState('');
  const [player, setPlayer] = useState<PlayerStats>();

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

  console.log(player);

  return (
    <div id="home">
      <h1>Welcome to Brawlhalla Stats!</h1>
      <PlayerSearch 
        submitSearch={updateId}
      />
      <Link to={`/player/${id}`}>
        { player ? player.name : ''}
      </Link>
    </div>
  )
}

export default Home;