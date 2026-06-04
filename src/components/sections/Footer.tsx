// Desktop 621:17751 / Mobile 791:226
// Mobile CTA: rounded-[16px], 24px heading, gap-[56px], lines visible.
// Mobile links: Company+Legal row → Contact Us below; headings 18px harmony; links 14px; copyright 16px.

const companyLinks = ['About us', 'How it works', 'FAQs', 'Contact us']
const contactLinks = ['+234 800 000 0000', 'info@traderlc.com']
const legalLinks = ['Privacy Policy', 'Terms of Service']

function Column({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="flex flex-1 flex-col gap-[24px]">
      <p className="font-harmony text-[18px] font-bold leading-normal text-primary-dark lg:font-aeonik lg:text-[21.862px] lg:leading-[1.1]">
        {heading}
      </p>
      <div className="flex flex-col gap-[20px]">
        {items.map((item) => (
          <a key={item} href="#" className="font-harmony text-[14px] font-medium leading-[20px] text-primary transition-colors hover:text-secondary lg:text-[18px] lg:leading-[32px]">
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-[100px] lg:py-[80px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-[32px]">

          {/* Left — blue CTA card */}
          <div className="relative shrink-0 overflow-hidden rounded-[16px] bg-secondary px-5 py-8 lg:h-[566px] lg:rounded-[20px] lg:px-[32px] lg:py-[40px]">

            {/* Lines — mobile position */}
            <div aria-hidden className="pointer-events-none absolute left-[-270.32px] top-[7.46px] flex h-[609.318px] w-[622.997px] items-center justify-center lg:hidden">
              <div className="rotate-[14.58deg]">
                <img src="/footer-lines.svg" alt="" className="h-[495.707px] w-[514.809px] max-w-none" />
              </div>
            </div>

            {/* Lines — desktop position */}
            <div aria-hidden className="pointer-events-none absolute left-[139.68px] top-[-419.87px] hidden h-[948.851px] w-[970.154px] items-center justify-center lg:flex">
              <div className="rotate-[14.58deg]">
                <img src="/footer-lines.svg" alt="" className="h-[771.932px] w-[801.68px] max-w-none" />
              </div>
            </div>

            <div className="relative flex flex-col gap-[56px] lg:h-full lg:gap-0 lg:justify-between">
              <div className="flex flex-col gap-[12px]">
                <p className="font-harmony text-[24px] font-bold leading-[1.1] text-white lg:text-[32px]">
                  Start your first China shipment today
                </p>
                <p className="font-harmony text-[16px] font-medium leading-[24px] text-secondary-light lg:text-[18px] lg:leading-[32px]">
                  A smarter way to ship from China to Nigeria
                </p>
              </div>

              <div className="flex flex-col gap-[20px]">
                <a href="#" className="font-harmony flex h-[56px] items-center justify-center rounded-[8px] bg-primary-light px-[40px] text-[16px] font-medium leading-[24px] text-primary transition-colors hover:bg-[#e9eef1]">
                  Get Started
                </a>
                <a href="#" className="font-harmony flex h-[56px] items-center justify-center rounded-[8px] bg-secondary-muted px-[24px] text-[16px] font-medium leading-[24px] text-[#051D33] transition-colors hover:bg-[#c9e4ff]">
                  Download the app
                </a>
              </div>
            </div>
          </div>

          {/* Right — links card */}
          <div className="relative flex-1 overflow-hidden rounded-[20px] bg-secondary-light px-5 py-8 lg:h-[566px] lg:p-[40px] lg:pr-0">

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
