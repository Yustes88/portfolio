'use client'

import ProjectItem from './ProjectItem'
import { projects } from '@/data/data'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'
import Heading from './Heading'

import clsx from 'clsx'


export default function ProjectsList() {
  const { ref } = useSectionInView("Projects", 0.5);


  return (
    <motion.section
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
      ease: 'easeIn'
    }}
     className="text-white pt-20" id='projects' ref={ref}>
        <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl lg:px-8">
          <div className="border-b border-slate-500 pb-10">
            <Heading>My projects</Heading>
            <p className="mt-4 text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit? Dolorum, debitis harum. Sit illo dolorum excepturi obcaecati iusto ducimus recusandae in, facere doloribus vero ad suscipit, saepe ea a?
            </p>
          </div>
            {projects.map((project) => (
              <div key={project.name} className={clsx('bg-gradient-to-tl to-[#1D1C21] to-50%', project.name === 'Spotify Clone' ? 'from-[#065f46]' : 'from-[#fff]')}>
                <ProjectItem data={project}/>
              </div>
            ))}
        </div>
    </motion.section>
  )
}
