import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

const inter = Inter({ subsets: ['latin'] })

const harmonyOS = localFont({
  src: [
    { path: './fonts/HarmonyOS_Sans_Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/HarmonyOS_Sans_Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/HarmonyOS_Sans_Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-harmony-local',
  display: 'swap',
})

const aeonik = localFont({
  src: './fonts/Aeonik_TRIAL_Bold.woff2',
  weight: '700',
  style: 'normal',
  variable: '--font-aeonik-local',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cargoport — Ship smarter from China to Nigeria',
  description: 'Join thousands of businesses shipping goods from China to Nigeria with Cargoport. Track shipments, manage documents, and pay securely.',
  keywords: ['shipping', 'China', 'Nigeria', 'logistics', 'freight', 'cargoport'],
  openGraph: {
    title: 'Cargoport — Ship smarter from China to Nigeria',
    description: 'Join thousands of businesses shipping goods from China to Nigeria with Cargoport.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full overflow-x-hidden ${harmonyOS.variable} ${aeonik.variable}`}>
      <body className={`${inter.className} min-h-full antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
