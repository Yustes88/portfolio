import Image from 'next/image'
import { useState } from 'react'


export default function Header() {

  return (
    <div className='flex gap-x-20 w-full m-4 justify-center items-center'>
      <div className='w-1/3	flex justify-center relative' >
        <Image 
        src={'/images/test.jpg'} alt='test' width={150} height={200}
        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
        />
        <h1 className='absolute left-[-37%] top-1/2 rotate-[-90deg] text-8xl'>
          <span>H</span>
          <span>E</span>
          <span>L</span>
          <span>L</span>
          <span>O</span>
          <span>.</span>
        </h1>
      </div>
      <div className='w-1/4	flex justify-center'>
        <p className='text-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nisi ut perspiciatis natus, minus libero provident veritatis eius molestiae quo magnam tempora et quis alias enim accusamus mollitia fuga a!
        </p>
      </div>
    </div>
  )
}
