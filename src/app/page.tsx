'use client'
import { useRouter } from 'next/navigation'

import Leaderboard from '@/app/(components)/Leaderboard'

const Home = () => {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        Check out all available Legends and their stats! <br/>
        <button 
          onClick={() => router.push('/legends')}
          className='border rounded p-2'
        >
          Legends
        </button>
      </section>
      <section>
        <Leaderboard />
      </section>
    </main>
  );
}

export default Home