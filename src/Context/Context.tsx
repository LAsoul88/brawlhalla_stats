import { ReactNode } from 'react';
import { PlayerContext } from './PlayerContext';
import { PlayerStats } from '../types/player.interface';

interface ContextProps {
  player: PlayerStats;
  children: ReactNode;
}

const Context = ({ player, children }: ContextProps) => {
  return (
    <div className="context">
      <PlayerContext.Provider value={player}>
        {children}
      </PlayerContext.Provider>
    </div>
  )
}

export default Context;