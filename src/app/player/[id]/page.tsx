'use client'
import { useState, useEffect } from 'react'

const Stats = ({ params }: IdParams) => {
  const [player, setPlayer] = useState({} as Player)
  const [stats, setStats] = useState({} as PlayerGeneral)
  const [ranked, setRanked] = useState({} as PlayerRanked)
  const url: string = process.env.NEXT_PUBLIC_API || ''

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player_id: params.id,
        endpoint: 'stats'
      },
    )})
    .then(res => res.json())
    .then(data => {
      setStats(JSON.parse(data['stats']))
      setRanked(JSON.parse(data['ranked']))
      console.log(data['stats'])
    })
  }, [])
  return (
    <>
      <h2>{ranked.name}'s Stats</h2>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* <img className="w-full" src="" alt={legend.bio_name} /> */}
        <div className ="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ranked</div>
          <p className="text-gray-700 text-base">
            {ranked.brawlhalla_id}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Games: {ranked.games}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Wins: {ranked.wins}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Losses: {ranked.games - ranked.wins}</span>
        </div>
      </div>
    </>
  )
}

export default Stats