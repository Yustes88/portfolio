'use client'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'


const projects = [
    {
    name: 'Spotify Clone',
    href: '#',
    price: '$220',
    description:
      "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
    imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
    breadcrumbs: [
      { id: 1, name: 'Travel', href: '#' },
      { id: 2, name: 'Bags', href: '#' },
    ],
  },     {
    name: 'Dashboard',
    href: '#',
    price: '$220',
    description:
      "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
    imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
    breadcrumbs: [
      { id: 1, name: 'Travel', href: '#' },
      { id: 2, name: 'Bags', href: '#' },
    ],
  }
]
  
//TODO: fix types
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

export default function ProjectsList() {

  return (
    <div className="text-white">
     
      <div>
        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-white">Have a look at my projects</h1>
            <p className="mt-4 text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit? Dolorum, debitis harum. Sit illo dolorum excepturi obcaecati iusto ducimus recusandae in, facere doloribus vero ad suscipit, saepe ea a?
            </p>
          </div>

            {projects.map((project) => (
          <div key={project.name} className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{project.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>


            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{project.description}</p>
            </div>

            
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img src={project.imageSrc} alt={project.imageAlt} className="h-full w-full object-cover object-center" />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

          </section>
        </div>
      </div>
            ))}
        </main>

      </div>
    </div>
  )
}
