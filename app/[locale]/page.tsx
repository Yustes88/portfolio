import Contact from '@/components/Contact'
import Hero from '@/components/About'
import ProjectsList from '@/components/ProjectsList'
import Skills from '@/components/Skills'
import { Toaster } from 'react-hot-toast'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'

export default function Home() {
  const keys = ['about', 'skills', 'projects', 'contacts'];
  const t = useTranslations('Nav');

  const translationIntoArray = (tr: string[]) => {
    const array: { name: string; href: string }[] = [];

    tr.map((key) => (
      array.push({
        name: t(`${key}.name`),
        href: t(`${key}.href`)
      })
    ))

    return array
  }

  const trNav = translationIntoArray(keys)


  return (
    <>

      <main className="flex flex-col items-center justify-between">
      <Nav navigation={trNav}/>
          <Hero/>
          <Skills/>
          <ProjectsList/>
          <Contact/>
          <Toaster position='top-right'/>
      </main>
      <Footer/>
    </>
  )
}
