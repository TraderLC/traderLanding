'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'About us',     href: '/about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Contact',      href: '/about#contact' },
  { label: 'FAQ',          href: '/about#faq' },
]

const Logo = ({ size = 41 }: { size?: number }) => (
  <svg width={size} height={Math.round(size * 40 / 41)} viewBox="0 0 41 40" fill="none">
    <path d="M20.5 10.625C20.5 15.8027 16.2855 20 11.0867 20H1.67347V10.625C1.67347 5.44732 5.88793 1.25 11.0867 1.25C16.2855 1.25 20.5 5.44732 20.5 10.625Z" fill="#1890FF"/>
    <path d="M20.5 29.375C20.5 24.1973 24.7145 20 29.9133 20H39.3265V29.375C39.3265 34.5527 35.1121 38.75 29.9133 38.75C24.7145 38.75 20.5 34.5527 20.5 29.375Z" fill="#1890FF"/>
    <path d="M1.67347 29.375C1.67347 34.5527 5.88793 38.75 11.0867 38.75H20.5V29.375C20.5 24.1973 16.2855 20 11.0867 20C5.88793 20 1.67347 24.1973 1.67347 29.375Z" fill="#1890FF"/>
    <path d="M39.3265 10.625C39.3265 5.44732 35.1121 1.25 29.9133 1.25H20.5V10.625C20.5 15.8027 24.7145 20 29.9133 20C35.1121 20 39.3265 15.8027 39.3265 10.625Z" fill="#1890FF"/>
  </svg>
)

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

        <Link href="/" className="flex items-center gap-[8.5px]">
          <Logo size={41} />
          <span className="font-aeonik font-bold text-primary whitespace-nowrap" style={{ fontSize: '21.862px', lineHeight: '1.1' }}>
            Trader LC
          </span>
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
        <Link href="/" className="flex items-center gap-2">
          <Logo size={32} />
          <span className="font-aeonik font-bold text-primary text-base">Trader LC</span>
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
