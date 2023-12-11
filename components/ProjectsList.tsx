'use client'
import Image from 'next/image'

import ProjectItem from './ProjectItem'
import { projects } from '@/data/data'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'
import Heading from './Heading'


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
     className="text-white" id='projects' ref={ref}>
        <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-24">
            <Heading>My projects</Heading>
            <p className="mt-4 text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit? Dolorum, debitis harum. Sit illo dolorum excepturi obcaecati iusto ducimus recusandae in, facere doloribus vero ad suscipit, saepe ea a?
            </p>
          </div>
            {projects.map((project) => (
                <ProjectItem key={project.name} data={project}/>
            ))}
        </div>
    </motion.section>
  )
}
