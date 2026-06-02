import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" className="h-full overflow-x-hidden">
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
