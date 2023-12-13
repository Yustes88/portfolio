import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/active-section-context'

const montserrat = Montserrat({ subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: 'Julia - Frontend Developer',
  description: 'Frontend portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

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
