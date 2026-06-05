import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import MissionVision from '@/components/about/MissionVision'
import Services from '@/components/about/Services'
import ContactForm from '@/components/about/ContactForm'
import Faq from '@/components/about/Faq'
import AppDownload from '@/components/about/AppDownload'
import CTA from '@/components/sections/CTA'
import Testimonials from '@/components/sections/Testimonials'

export const metadata: Metadata = {
  title: 'About us — Trader Logistics and Clearing',
  description:
    'Trader Logistics and Clearing is an international shipping operations platform managing end-to-end LCL shipments from China to Nigeria — freight, customs, last-mile delivery, and stablecoin payments.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Services />
       <div className="bg-white">
             <CTA />
             <Testimonials />
             <AppDownload />
           </div>
    </>
  )
}
