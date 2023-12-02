import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
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
    <html lang="en">
      <body className={inter.className}>
      <ActiveSectionContextProvider>
        <div id='header'></div>
        <Nav/>
        <div>
          {children}
        </div>
      </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
