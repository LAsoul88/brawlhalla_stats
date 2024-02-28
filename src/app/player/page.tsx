'use client'
import React, {useState, useEffect} from 'react'

interface Legend {
  legend_id: number;
  legend_name_key: string;
}

const Player = () => {

  const [legends, setLegends] = useState<Legend[]>([])
  const url: string = `${process.env.NEXT_PUBLIC_API}/legend/all?api_key=${process.env.NEXT_PUBLIC_API_KEY}`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((data: any) => {
      setLegends(data)
      console.log(data)
    })
  }, [])

  return (
    <div className='text-white'>
        {legends.length > 0 ? legends.map(legend => {
          return <p key={legend.legend_id}>{legend.legend_name_key}</p>
        }) : ''}
    </div>
  )
}

export default Player