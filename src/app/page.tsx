'use client'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Check out all available Legends and their stats! <br/>
        <button 
          onClick={() => router.push('/legends')}
          className='border rounded p-2'
        >
          Legends
        </button>
      </div>
    </main>
  );
}

export default Home