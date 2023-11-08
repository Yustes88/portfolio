import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import ProjectsList from '@/components/ProjectsList'

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
        </div>
      </main>

      {/* <footer>
        Footer
      </footer> */}
    </>
  )
}
