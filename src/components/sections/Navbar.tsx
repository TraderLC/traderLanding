'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'About us',     href: '/about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Contact',      href: '/about#contact' },
  { label: 'FAQ',          href: '/about#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const linkClass = (href: string) => {
    const active = pathname === href || (href !== '/' && pathname.startsWith(href.split('#')[0]))
    return `font-harmony text-[16px] leading-6 font-medium transition-colors whitespace-nowrap ${
      active ? 'text-primary' : 'text-[#6B7280] hover:text-primary'
    }`
  }

  return (
    <header className="w-full bg-white sticky top-0 z-50">

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between max-w-[1440px] mx-auto px-25 py-6">

        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Trader" width={182} height={32} priority className="h-8 w-auto" />
        </Link>

        <nav className="flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          <Link href="/about#contact"
            className="font-harmony text-[16px] leading-6 font-medium text-secondary hover:text-[#0d7ce0] transition-colors whitespace-nowrap">
            Get Quote
          </Link>
          <Link href="/about"
            className="font-harmony bg-secondary hover:bg-secondary/90 text-secondary-muted text-[16px] leading-6 font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
            Start Shipping
          </Link>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between max-w-[1440px] mx-auto px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Trader" width={120} height={21} priority className="h-5 w-auto" />
        </Link>
        <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 bg-white">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`${linkClass(l.href)} py-1`}>
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
            <Link href="/about#contact" className="font-harmony text-base font-medium text-secondary text-center py-2">
              Get Quote
            </Link>
            <Link href="/about"
              className="font-harmony text-base font-medium text-secondary-muted bg-secondary text-center py-2.5 rounded-lg">
              Start Shipping
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
