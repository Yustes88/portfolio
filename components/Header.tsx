import Image from 'next/image'
import { useState } from 'react'


export default function Header() {

  return (
    <div className='bg-white flex gap-x-4 w-full m-4 justify-center items-center'>
      <div className='w-1/4	flex justify-end'>
        <h1 className='rotate-[-90deg] translate-x-1/3 text-9xl'>
          Hello.
        </h1>
      </div>
      <div className='w-1/3	flex justify-center'>
        <Image 
        src={'/images/test.jpg'} alt='test' width={150} height={200}
        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
        />
      </div>
      <div className='w-1/4	flex justify-center'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nisi ut perspiciatis natus, minus libero provident veritatis eius molestiae quo magnam tempora et quis alias enim accusamus mollitia fuga a!
      </div>
    </div>
  )
}
