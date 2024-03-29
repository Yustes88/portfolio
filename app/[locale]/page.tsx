import Contact from '@/components/Contact'
import ProjectsList from '@/components/ProjectsList'
import Skills from '@/components/Skills'
import { Toaster } from 'react-hot-toast'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'
import About from '@/components/About'

export default function Home() {
  const keysNav = ['about', 'skills', 'projects', 'contacts'];
  const keysProjects = ['spotify', 'ecommerce', 'blog']
  const t = useTranslations('Nav');
  const tAbout = useTranslations('About')
  const tSkills = useTranslations('Skills')
  const tProjects = useTranslations('Projects')
  const tContacts = useTranslations('Contacts')

  const trAboutIntoArray = (tr: string[]) => {
    const array: { name: string; locale: string; href: string }[] = [];

    tr.map((key) => (
      array.push({
        name: t(`${key}.name`),
        href: t(`${key}.href`),
        locale: t(`${key}.locale`)
      })
    ))

    return array
  }

  const trNav = trAboutIntoArray(keysNav)

  const trProjectsIntoArray = (tr: string[]) => {
    const array: { name: string; href: string; description: string; imageSrc: string; imageAlt: string; tools: string; }[] = [];

    tr.map((key) => (
      array.push({
        name: tProjects(`${key}.name`),
        href: tProjects(`${key}.href`),
        description: tProjects(`${key}.description`),
        imageSrc: tProjects(`${key}.imageSrc`),
        imageAlt: tProjects(`${key}.imageAlt`),
        tools: tProjects(`${key}.tools`),
      })
    ))

    return array
  }
  const trProjectsList = trProjectsIntoArray(keysProjects)


  return (
    <>

      <main className="flex flex-col items-center justify-between">
      <Nav navigation={trNav}/>
          <About cv={tAbout('cv')} btContact={tAbout('btContact')} btDownload={tAbout('btDownload')} intro = {tAbout('intro')} iam={tAbout('iam')} fr={tAbout('fr')} ont={tAbout('ont')} dev={tAbout('dev')} enjoy={tAbout('enjoy')} websites={tAbout('websites')} focus={tAbout('focus')} react={tAbout('react')}/>
          <Skills title={tSkills('title')}/>
          <ProjectsList title={tProjects('title')} intro={tProjects('intro')} scope={tProjects('scope')} link={tProjects('link')} projects = {trProjectsList}/>
          <Contact title={tContacts('title')} cta1={tContacts('cta1')} cta2={tContacts('cta2')} name={tContacts('name')} nameEx={tContacts('nameEx')} email={tContacts('email')} message={tContacts('message')} messageEx={tContacts('messageEx')} submit={tContacts('submit')}/>
          <Toaster position='top-right'/>
      </main>
      <Footer/>
    </>
  )
}
