// Desktop 621:17751 / Mobile 791:226
// Mobile CTA: rounded-[16px], 24px heading, gap-[56px], lines visible.
// Mobile links: Company+Legal row → Contact Us below; headings 18px harmony; links 14px; copyright 16px.
import Link from 'next/link'
import Image from 'next/image'

type LinkItem = { label: string; href: string }

const companyLinks: LinkItem[] = [
  { label: 'About us', href: '/about' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'FAQs', href: '/about#faq' },
  { label: 'Contact us', href: 'mailto:info@traderlc.com' },
]
const contactLinks: LinkItem[] = [
  { label: '+234 800 000 0000', href: 'tel:+2348000000000' },
  { label: 'info@traderlc.com', href: 'mailto:info@traderlc.com' },
]
const legalLinks: LinkItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

function Column({ heading, items }: { heading: string; items: LinkItem[] }) {
  return (
    <div className="flex flex-1 flex-col gap-[24px]">
      <p className="font-harmony text-[18px] font-bold leading-normal text-primary-dark lg:font-aeonik lg:text-[21.862px] lg:leading-[1.1]">
        {heading}
      </p>
      <div className="flex flex-col gap-[20px]">
        {items.map((item) => (
          <Link key={item.label} href={item.href} className="font-harmony text-[14px] font-medium leading-[20px] text-primary transition-colors hover:text-secondary lg:text-[18px] lg:leading-[32px]">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* max-w 1252 = Figma content span (505 + 32 gap + 715); centered ≈ design's 100/88 margins */}
      <div className="mx-auto max-w-[1252px] px-5 py-10 lg:px-0 lg:py-[80px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-[32px]">

          {/* Left — blue CTA card (Figma w-505 h-566, px-32 py-40) */}
          <div className="relative shrink-0 overflow-hidden rounded-[16px] bg-secondary px-5 py-8 lg:h-[566px] lg:w-[505px] lg:rounded-[20px] lg:px-[32px] lg:py-[40px]">

            {/* Lines — mobile position */}
            <div aria-hidden className="pointer-events-none absolute left-[-270.32px] top-[7.46px] flex h-[609.318px] w-[622.997px] items-center justify-center lg:hidden">
              <div className="rotate-[14.58deg]">
                <Image src="/footer-lines.svg" alt="" width={515} height={496} className="h-[496px] w-[515px] max-w-none" />
              </div>
            </div>

            {/* Lines — desktop position */}
            <div aria-hidden className="pointer-events-none absolute left-[139.68px] top-[-419.87px] hidden h-[948.851px] w-[970.154px] items-center justify-center lg:flex">
              <div className="rotate-[14.58deg]">
                <Image src="/footer-lines.svg" alt="" width={802} height={772} className="h-[772px] w-[802px] max-w-none" />
              </div>
            </div>

            <div className="relative flex flex-col gap-[56px] lg:h-full lg:gap-0 lg:justify-between">
              <div className="flex flex-col gap-[12px]">
                <p className="font-harmony text-[24px] font-bold leading-[1.1] text-white lg:text-[32px] lg:leading-normal">
                  Start your first China shipment today
                </p>
                <p className="font-harmony text-[16px] font-medium leading-[24px] text-secondary-light lg:text-[18px] lg:leading-[32px]">
                  A smarter way to ship from China to Nigeria
                </p>
              </div>

              <div className="flex flex-col gap-[20px]">
                <a href="#" className="font-harmony flex h-[56px] w-full items-center justify-center rounded-[8px] bg-primary-light px-[40px] py-[12px] text-[16px] font-medium leading-[24px] text-primary transition-colors hover:bg-[#e9eef1]">
                  Get Started
                </a>
                <a href="#" className="font-harmony flex h-[56px] w-full items-center justify-center rounded-[8px] bg-secondary-muted px-[24px] py-[12px] text-[16px] font-medium leading-[24px] text-[#051D33] transition-colors hover:bg-[#c9e4ff]">
                  Download the app
                </a>
              </div>
            </div>
          </div>

          {/* Right — links card (Figma flex → w-715 h-566, p-40) */}
          <div className="relative flex-1 overflow-hidden rounded-[20px] bg-secondary-light px-5 py-8 lg:h-[566px] lg:min-w-0 lg:p-[40px] lg:pr-0">

            {/* Mobile layout: Company+Legal row, then Contact Us */}
            <div className="flex flex-col gap-[56px] lg:hidden">
              <div className="flex flex-col gap-[40px]">
                <div className="flex gap-[68px]">
                  <Column heading="Company" items={companyLinks} />
                  <Column heading="Legal" items={legalLinks} />
                </div>
                <Column heading="Contact Us" items={contactLinks} />
              </div>
              <p className="font-harmony text-center text-[16px] font-medium leading-[24px] text-[#051D33]">
                © 2025 Trader. All rights reserved.
              </p>
            </div>

            {/* Desktop layout: all 3 columns in a row */}
            <div className="hidden lg:flex flex-wrap gap-x-8 gap-y-10 lg:flex-nowrap lg:gap-[68px]">
              <Column heading="Company" items={companyLinks} />
              <Column heading="Contact Us" items={contactLinks} />
              <Column heading="Legal" items={legalLinks} />
            </div>
            <p className="font-harmony hidden text-center text-[18px] font-medium leading-[32px] text-[#051D33] lg:block lg:absolute lg:bottom-[40px] lg:inset-x-0">
              © 2025 Trader. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}
