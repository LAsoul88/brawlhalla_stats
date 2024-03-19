'use client'
import { useState, useEffect } from 'react'

const Stats = ({ params }: IdParams) => {
  const [player, setPlayer] = useState<Player>({} as Player)
  const url: string = process.env.NEXT_PUBLIC_API || ''
  
  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player_id: params.id,
        endpoint: 'legends'
      },
    )})
    .then(res => res.json())
    .then(data => {
      setPlayer(data)
      console.log(data)
    })
  }, [])
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img className="w-full" src="" alt={legend.bio_name} /> */}
      <div className ="px-6 py-4">
        <div className="font-bold text-xl mb-2">{player.name}</div>
        <p className="text-gray-700 text-base">
          {player.brawlhalla_id}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Games: {player.games}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Wins: {player.wins}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Losses: {player.games - player.wins}</span>
      </div>
    </div>
  )
}

export default Stats