import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marcel Grace Infotech - Software Development Company',
  description: 'Leading software development company providing innovative digital solutions, web development, mobile apps, and custom software services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-950 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
