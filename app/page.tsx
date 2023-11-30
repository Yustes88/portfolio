import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import ProjectsList from '@/components/ProjectsList'
import { Toaster } from 'react-hot-toast'

export default function Home() {

  return (
    <>
      <Nav/>
      <header>
        <Header/>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <ProjectsList/>
          <Contact/>
          <Toaster position='top-right'/>
        </div>
      </main>

      {/* <footer>
        Footer
      </footer> */}
    </>
  )
}
