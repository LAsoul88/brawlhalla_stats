'use client'
import { useState, useEffect } from 'react'

const Stats = ({ params }: IdParams) => {
  const [player, setPlayer] = useState<Player>({} as Player)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/player/${params.id}/stats?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setPlayer(data)
      console.log(data)
    })
  }, [])
return (
  <div className='flex h-10'>
    <p className='text-white'>
      {player.name}
    </p>
  </div>
)
}

export default Stats