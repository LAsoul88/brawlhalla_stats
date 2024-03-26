'use client'
import { useState, useEffect } from 'react'

import PlayerCard from '@/app/(components)/PlayerCard'

const Stats = ({ params }: IdParams) => {
  const [proxyParams, setProxyParams] = useState<ProxyCall>({
    endpoint: 'player',
    player_id: params.id
  })
  const [player, setPlayer] = useState<Player>()
  const [stats, setStats] = useState<PlayerGeneral>()
  const [ranked, setRanked] = useState<PlayerRanked>()
  const url: string = process.env.NEXT_PUBLIC_API || ''

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(proxyParams),
    })
    .then(res => res.json())
    .then(data => {
      setPlayer(data['player'])
      setStats(data['stats'])
      setRanked(data['ranked'])
      console.log(data['ranked'])
      console.log(data['stats'])
    })
  }, [])
  return (
    <>
      <h2 className=''>{player?.name}'s Stats</h2>
      {/* <img className="w-full" src="" alt={legend.bio_name} /> */}
      <PlayerCard player={player} ranked={ranked} general={stats}/>
    </>
  )
}

export default Stats