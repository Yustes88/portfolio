'use client'

import { sendEmail } from '@/actions/sendEmail'
import {BsTelephone} from 'react-icons/bs'
import {FaRegEnvelope} from 'react-icons/fa'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'
import { useRef } from 'react'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'

type ContactProps = {
  title: string,
  cta1: string,
  cta2: string,
  name: string,
  nameEx: string,
  email: string,
  message: string,
  messageEx: string,
}

export default function Contact({title, cta1, cta2, name, nameEx, email, message, messageEx}: ContactProps) {
  const formRef: React.Ref<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const { ref } = useSectionInView("Contacts", 0.5);


  return (
    <motion.section  
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1.5,
      ease: 'easeIn'
    }} 
    className="relative bg-[#1D1C21]" id='contacts' ref={ref}>
      <div className="mx-auto grid lg:max-w-[60rem] max-w-[40rem] grid-cols-1 lg:grid-cols-2 px-6">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl heading font-medium capitalize mb-8">{title}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
                {cta1} <a href='mailto:iuliiaobr.io@gmail.com' className='underline'>iuliiaobr.io@gmail.com</a> {cta2}
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <BsTelephone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+1 (555) 234-5678">
                    +7 999 860 40 17
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <FaRegEnvelope className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="mailto:hello@example.com">
                    iulliaobr.io@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form ref={formRef} className="px-4 pb-24 sm:pb-32 lg:px-8 lg:py-48"
        action={async(formData) => {
          const {data, error} = await sendEmail(formData)

          if(error) {
            toast.error(error)
            return;
          }
          toast.success('Your message was successfully sent!')
          if (formRef.current) {
            formRef.current.reset();
          }
        }}>
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                  {name}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder={nameEx}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#dffcff] focus:ring-2 focus:ring-inset focus:ring-[#dffcff] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  {email}
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    maxLength={500}
                    placeholder='example@gmail.com'
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#dffcff] focus:ring-2 focus:ring-inset focus:ring-[#dffcff] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  {message}
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    placeholder={messageEx}
                    required
                    maxLength={5000}
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#dffcff] focus:ring-2 focus:ring-inset focus:ring-[#dffcff] sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <SubmitButton/>
            </div>
          </div>
        </form>
      </div>
    </motion.section>
  )
}
