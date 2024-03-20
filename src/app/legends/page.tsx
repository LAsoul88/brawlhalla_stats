'use client'
import { useState, useEffect } from 'react'

import { LegendCard } from '@/app/(components)/LegendCard'

const sortLegends = (l1: Legend, l2: Legend) => {
  return (
    l1.legend_name_key.toUpperCase() < l2.legend_name_key.toUpperCase() ? -1 : l1.legend_name_key.toUpperCase() > l2.legend_name_key.toUpperCase() ? 1 : 0
  )
}

const Legends = () => {
  const [legends, setLegends] = useState<Legend[]>([])
  const url: string = process.env.NEXT_PUBLIC_API || ''

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player_id: null,
        endpoint: 'legend'
      })
    })
    .then(res => res.json())
    .then((data: Legend[]) => {
      setLegends(data.sort(sortLegends))
      console.log(data)
    })
  }, [])
  return (
    <div className='text-white flex flex-wrap justify-center gap-5'>
      {legends.length > 0 ? legends.map(legend => {
        return <LegendCard legend={legend} key={legend.legend_id} />
      }) : ''}
    </div>
  )
}

export default Legends