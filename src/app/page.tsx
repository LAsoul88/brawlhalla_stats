'use client'
import { useRouter } from 'next/navigation'

import Leaderboard from '@/app/(components)/Leaderboard'
import Button from '@/app/(components)/Button'

const Home = () => {
  const router = useRouter()
  return (
    <main className="flex flex-col items-center">
      <section className='p-8'>
        Check out all available Legends and their stats! <br/>
        <Button 
          onClick={() => router.push('/legends')}
          variant='primary'
        >
          Legends
        </Button>
      </section>
      <section className='p-8'>
        <Leaderboard />
      </section>
    </main>
  );
}

export default Home