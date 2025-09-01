import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Marcel Grace Infotech - Leading Software Development Company',
    template: '%s | Marcel Grace Infotech'
  },
  description: 'Marcel Grace Infotech - Leading software development company providing innovative digital solutions, web development, mobile apps, and custom software services. 5+ years experience, 150+ projects delivered.',
  keywords: [
    'software development company',
    'web development',
    'mobile app development',
    'custom software solutions',
    'Marcel Grace Infotech',
    'digital transformation',
    'cloud solutions',
    'business automation'
  ],
  authors: [{ name: 'Marcel Grace Infotech' }],
  creator: 'Marcel Grace Infotech',
  publisher: 'Marcel Grace Infotech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://marcelgrace.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Marcel Grace Infotech - Leading Software Development Company',
    description: 'Transform your business with innovative technology solutions. 5+ years experience, 150+ projects delivered. Expert web development, mobile apps & custom software.',
    url: 'https://marcelgrace.com',
    siteName: 'Marcel Grace Infotech',
    images: [
      {
        url: '/assets/mg_logo2.png',
        width: 1200,
        height: 630,
        alt: 'Marcel Grace Infotech - Software Development Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcel Grace Infotech - Leading Software Development Company',
    description: 'Transform your business with innovative technology solutions. 5+ years experience, 150+ projects delivered.',
    images: ['/assets/mg_logo2.png'],
    creator: '@marcelgrace',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
    yandex: 'your-yandex-verification-code', // Replace with actual code
    yahoo: 'your-yahoo-verification-code', // Replace with actual code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-black`}>
        {/* Favicon is now set in app/head.tsx for proper SSR hydration */}
  {/* <StructuredData /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
