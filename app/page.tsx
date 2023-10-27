import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='text-black bg-white flex justify-center'>
        <Header/>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          body
        </div>
      </main>

      {/* <footer>
        Footer
      </footer> */}
    </>
  )
}
