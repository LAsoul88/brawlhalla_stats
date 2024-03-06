'use client'
import { useState, useEffect } from 'react'

const Legends = () => {
  const [legends, setLegends] = useState<Legend[]>([])
  const url: string = process.env.NEXT_PUBLIC_API || ''

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

export default Legends