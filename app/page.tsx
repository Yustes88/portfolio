import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import ProjectsList from '@/components/ProjectsList'
import Skills from '@/components/Skills'
import { Toaster } from 'react-hot-toast'

export default function Home() {

  return (
    <>

      <main className="flex min-h-screen flex-col items-center justify-between">
          <Hero/>
          <Skills/>
          <ProjectsList/>
          <Contact/>
          <Toaster position='top-right'/>
      </main>

      {/* <footer>
        Footer
      </footer> */}
    </>
  )
}
