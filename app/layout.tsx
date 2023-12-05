import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Julia - Frontend Deveoper',
  description: 'Frontend portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={inter.className}>
      <ActiveSectionContextProvider>
          {children}
      </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
