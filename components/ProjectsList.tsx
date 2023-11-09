'use client'
import Image from 'next/image'

import ProjectItem from './ProjectItem'


const projects = [
    {
    name: 'Spotify Clone',
    href: 'https://spotify-clone-znti.vercel.app/',
    price: '$220',
    description:
      "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    imageSrc: '/images/spotify.png',
    imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
    tools: ['NextJS, React, Tailwind, Typescript, Stripe, Supabase']
  },     
  {
    name: 'Dashboard',
    href: 'https://blog-steel-alpha-98.vercel.app/',
    price: '$220',
    description:
      "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    imageSrc: '/images/blog.png',
    imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
    tools: ['NextJS, React, Tailwind, Typescript, Stripe, Supabase']
  }
]
  
//TODO: fix types
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

export default function ProjectsList() {

  return (
    <div className="text-white" id='projects'>
     
      <div>
        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-white">Have a look at my projects</h1>
            <p className="mt-4 text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit? Dolorum, debitis harum. Sit illo dolorum excepturi obcaecati iusto ducimus recusandae in, facere doloribus vero ad suscipit, saepe ea a?
            </p>
          </div>

            {projects.map((project) => (
                <ProjectItem key={project.name} data={project}/>
            ))}
        </main>

      </div>
    </div>
  )
}
