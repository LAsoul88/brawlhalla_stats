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
      body: params.id,
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