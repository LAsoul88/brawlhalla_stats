'use client'
import { useRouter } from 'next/navigation'

import Leaderboard from '@/app/(components)/Leaderboard'

const Home = () => {
  const router = useRouter()
  return (
    <main className="flex flex-col items-center">
      <section className='p-8'>
        Check out all available Legends and their stats! <br/>
        <button 
          onClick={() => router.push('/legends')}
          className='border rounded p-2'
        >
          Legends
        </button>
      </section>
      <section className='p-8'>
        <Leaderboard />
      </section>
    </main>
  );
}

export default Home