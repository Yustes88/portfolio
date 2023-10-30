import Image from 'next/image'
import { useState } from 'react'


export default function Header() {
  // spin absolute right-1/2 top-1/2 -translate-x-16 rotate-[-90deg] text-8xl uppercase'
  const spinHello = (text: string) => {
      return text.split('').map((item, index) => {
            return (<span key={item} className={`rotate-[${index * 50}deg]`}>{item}</span>)
      })
}


  return (
    <div className='flex gap-x-20 w-full m-4 justify-center items-center'>
      <div className='w-1/3 h-full flex justify-center'>
      <div className='relative w-80 rounded-full'>
        <Image 
        src={'/images/test.jpg'} alt='test' fill
        sizes="(min-width: 60em) 100vw,
                (min-width: 28em) 100vw,
                100vh"
        className="object-cover"
        />
        <h1 className='absolute w-full h-full spin-h1'>
          {spinHello('Hello.')}
        </h1>
      </div>
        </div>
      <div className='w-1/4	flex justify-center'>
        <p className='text-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nisi ut perspiciatis natus, minus libero provident veritatis eius molestiae quo magnam tempora et quis alias enim accusamus mollitia fuga a!
        </p>
      </div>
    </div>
  )
}
