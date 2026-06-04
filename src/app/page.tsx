import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import CTA from '@/components/sections/CTA'
import Testimonials from '@/components/sections/Testimonials'
import AppDownload from '@/components/about/AppDownload'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      {/* Figma 608:17470 — Contact, then FAQ card overlapping it, then App Download */}
      <div className="bg-primary-light lg:bg-white">
        <CTA />
        <Testimonials />
        <AppDownload />
      </div>
    </>
  )
}
