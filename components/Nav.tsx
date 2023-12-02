'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiBars3 } from 'react-icons/hi2'
import {AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'
import { navigation } from '@/data/data'

import { motion } from "framer-motion";
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context'



export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [stickyClass, setStickyClass] = useState('');

  const { activeSection, setActiveSection, setTimeOfLastClick } =
  useActiveSectionContext();

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('sticky') : setStickyClass('');
    }
  };

  return (
    <motion.div className={`${stickyClass} fill-nav bg-white bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-end p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((link, i) => (
                        <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                        key={i}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        <Link
                          className={clsx(
                            "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                            {
                              "text-gray-950 dark:text-gray-200":
                                activeSection === link.name,
                            }
                          )}
                          href={link.href}
                          onClick={() => {
                            setActiveSection(link.name);
                            setTimeOfLastClick(Date.now());
                          }}
                        >
                          {link.name}
          
                          {link.name === activeSection && (
                            <motion.span
                              className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                              layoutId="activeSection"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            ></motion.span>
                          )}
                        </Link>
                      </motion.li>
          ))}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.div>
  )
}
