import { createContext } from 'react';
import { PlayerStats } from '../types/player.interface';

export const PlayerContext = createContext({} as PlayerStats);