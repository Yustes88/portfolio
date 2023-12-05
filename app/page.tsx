import Contact from '@/components/Contact'
import Hero from '@/components/About'
import ProjectsList from '@/components/ProjectsList'
import Skills from '@/components/Skills'
import { Toaster } from 'react-hot-toast'
import Nav from '@/components/Nav'

export default function Home() {

  return (
    <>

      <main className="flex flex-col items-center justify-between">
      <Nav/>
          <Hero/>
          <Skills/>
          <ProjectsList/>
          <Contact/>
          <Toaster position='top-right'/>
      </main>
    </>
  )
}
