'use client'

import { sendEmail } from '@/actions/sendEmail'
import {BsTelephone} from 'react-icons/bs'
import {FaRegEnvelope} from 'react-icons/fa'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'
import { useRef } from 'react'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'

export default function Contact() {
  const formRef: React.Ref<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const { ref } = useSectionInView("Contact", 0.5);


  return (
    <motion.section className="relative isolate bg-gray-900" id='contact' ref={ref}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
                Please contact me directly at <a href='mailto:iuliiaobr.io@gmail.com' className='underline'>iuliiaobr.io@gmail.com</a> or through this form
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
        <form method="POST" ref={formRef} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
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
                  Your name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder='Your name'
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  Your email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    maxLength={500}
                    placeholder='Your email'
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  Your message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    placeholder='Your message'
                    required
                    maxLength={5000}
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
