'use client'
import { useState, useEffect } from 'react'

const Leaderboard = () => {
  const [board, setBoard] = useState<Leader[]>([])
  const url: string = process.env.NEXT_PUBLIC_API || ''

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player_id: null,
        endpoint: 'leaderboard'
      },
    )})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setBoard(data)
    })
  }, [])
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Player
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                Rank
              </th>
              <th scope="col" className="px-6 py-3">
                Games
              </th>
              <th scope="col" className="px-6 py-3">
                Wins
              </th>
            </tr>
          </thead>
          <tbody>
            { board.length > 0 ? (board.map(leader => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={leader.brawlhalla_id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {leader.name}
                    </th>
                    <td className="px-6 py-4">
                      {leader.region}  
                    </td>
                    <td className="px-6 py-4">
                      {leader.rank}
                    </td>
                    <td className="px-6 py-4">
                      {leader.games}
                    </td>
                    <td className="px-6 py-4">
                      {leader.wins}
                    </td>
                  </tr>
                )
              })) : (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    N/A
                  </th>
                  <td className="px-6 py-4">
                    N/A  
                  </td>
                  <td className="px-6 py-4">
                    N/A
                  </td>
                  <td className="px-6 py-4">
                    N/A
                  </td>
                  <td className="px-6 py-4">
                    N/A
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Leaderboard