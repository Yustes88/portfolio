import Contact from '@/components/Contact'
import ProjectsList from '@/components/ProjectsList'
import Skills from '@/components/Skills'
import { Toaster } from 'react-hot-toast'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'
import About from '@/components/About'

export default function Home() {
  const keys = ['about', 'skills', 'projects', 'contacts'];
  const t = useTranslations('Nav');
  const tAbout = useTranslations('About')
  const tSkills = useTranslations('Skills')

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
          <About btContact={tAbout('btContact')} btDownload={tAbout('btDownload')} intro = {tAbout('intro')} iam={tAbout('iam')} fr={tAbout('fr')} ont={tAbout('ont')} dev={tAbout('dev')} enjoy={tAbout('enjoy')} websites={tAbout('websites')} focus={tAbout('focus')} react={tAbout('react')}/>
          <Skills title={tSkills('title')}/>
          <ProjectsList/>
          <Contact/>
          <Toaster position='top-right'/>
      </main>
      <Footer/>
    </>
  )
}
