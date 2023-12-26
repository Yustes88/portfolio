import type { Metadata } from 'next'
import {notFound} from 'next/navigation';
import { Montserrat } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/active-section-context'

const montserrat = Montserrat({ subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: 'Julia - Frontend Developer',
  description: 'Frontend portfolio website',
}

const locales = ['en', 'ru'];

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: any
}) {

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={montserrat.className}>
      <ActiveSectionContextProvider>
          {children}
      </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
