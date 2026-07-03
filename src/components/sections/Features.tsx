// Desktop 585:17640 | Mobile 765:8306
// Mobile: stacked cards, 20px gutters, rounded-24, pt-32 px-32 gap-32, img h-290.
// Desktop: 2×2 grid, 640px cards, rounded-40, pt-48 px-52, img h-414.
import Image from 'next/image'

export default function Features() {
  const cardTextCls = 'flex flex-col gap-3 lg:gap-4'
  const titleCls = 'font-harmony text-[24px] font-bold leading-none text-primary-dark lg:text-[32px]'
  const bodyCls = 'font-harmony text-[14px] leading-5 text-[#6B7280] lg:text-[16px] lg:leading-6'
  const imgWrapMobile = 'relative h-[290px] w-full overflow-hidden rounded-tl-[20px] rounded-tr-[20px]'
  const imgWrapDesktop = 'lg:absolute lg:bottom-0 lg:left-[52px] lg:right-[52px] lg:h-[414px] lg:w-auto'

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-[100px] lg:py-[80px]">

        {/* Heading */}
        <div className="mx-auto mb-10 flex max-w-[735px] flex-col gap-4 text-center lg:mb-[66px]">
          <h2 className="font-harmony text-[28px] font-bold leading-[38px] text-primary lg:text-[48px] lg:leading-[64px]">
            Built for Nigerian SMEs importing from China
          </h2>
          <p className="font-harmony text-[16px] font-medium leading-6 text-primary-dark">
            {"Whether you're importing for the first time or running a growing business, Trader gives you an affordable and transparent way to import goods from China to Nigeria."}
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:gap-x-5 lg:gap-y-10">

          {/* Card 1 — We handle everything — bg #F5F7F8 */}
          <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-primary-light px-8 pt-8 lg:h-[640px] lg:gap-0 lg:rounded-[40px] lg:px-0 lg:pt-0">
            <div className={`${cardTextCls} lg:px-[52px] lg:pt-[48px]`}>
              <p className={titleCls}>We handle everything</p>
              <p className={bodyCls}>Leave the entire importation process to us. We pick up your goods from the supplier, handle port clearance, store your cargo, and deliver nationwide.</p>
            </div>
            <div className={`${imgWrapMobile} ${imgWrapDesktop}`}>
              <Image src="/features/card1.jpg" alt="Workers loading shipping containers at port" fill
                sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
            </div>
          </div>

          {/* Card 2 — Monitor your shipment — bg #F3F9FF */}
          <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-secondary-light px-8 pt-8 lg:h-[640px] lg:gap-0 lg:rounded-[40px] lg:px-0 lg:pt-0">
            <div className={`${cardTextCls} lg:px-[52px] lg:pt-[48px]`}>
              <p className={titleCls}>Monitor your shipment</p>
              <p className={bodyCls}>Monitor your shipment from China to Nigeria on your dashboard: factory pickup, sea transit, port arrival, and final delivery. Get instant alerts on every movement until your goods reach you.</p>
            </div>
            <div className={`${imgWrapMobile} ${imgWrapDesktop}`}>
              <Image src="/features/card3.jpg" alt="Woman tracking shipment on phone and tablet" fill
                sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
            </div>
          </div>

          {/* Card 3 — We handle customs — bg #FFFAF9 */}
          <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-[#FFFAF9] px-8 pt-8 lg:h-[640px] lg:gap-0 lg:rounded-[40px] lg:px-0 lg:pt-0">
            <div className={`${cardTextCls} lg:px-[52px] lg:pt-[48px]`}>
              <p className={titleCls}>We handle customs for you</p>
              <p className={bodyCls}>{"No need to visit the port or deal with customs yourself. Just send us your receipt and product images, and we'll handle Nigerian customs clearance for you."}</p>
            </div>
            <div className={`${imgWrapMobile} ${imgWrapDesktop}`}>
              <Image src="/features/card2.jpg" alt="Customs workers reviewing documents at a warehouse" fill
                sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
            </div>
          </div>

          {/* Card 4 — Choose how you pay
               Mobile 768:12: h=379, all absolutely positioned.
               Desktop 585:17707: h=640, coins at exact desktop coords. */}
          <div className="relative h-[379px] overflow-hidden rounded-3xl bg-[#F6FBFA] lg:h-[640px] lg:rounded-[40px]">

            {/* ── Mobile bg pattern — left=136.18 top=77.28 size=320, inner rotate(-29.98) size=234 opacity-10 ── */}
            <div aria-hidden className="pointer-events-none absolute lg:hidden flex items-center justify-center"
              style={{ left: 136.18, top: 77.28, width: 320.1, height: 320.1 }}>
              <div style={{ transform: 'rotate(-29.98deg)' }}>
                <Image src="/features/m-bg.png" alt="" width={234} height={234} style={{ opacity: 0.1, width: 234, height: 234 }} />
              </div>
            </div>

            {/* ── Desktop bg pattern — left=203 top=49 size=622, inner rotate(-29.98) size=455 opacity-10 ── */}
            <div aria-hidden className="pointer-events-none absolute hidden lg:flex items-center justify-center"
              style={{ left: 203, top: 49, width: 622, height: 622 }}>
              <div style={{ transform: 'rotate(-29.98deg)' }}>
                <Image src="/features/card4-bg.png" alt="" width={455} height={455} style={{ opacity: 0.1, width: 455, height: 455 }} />
              </div>
            </div>

            {/* ── Text ──
                 Mobile: left=32 top=32 right=32 (absolute)
                 Desktop: left=48 top=56 w=506 (absolute) */}
            <div className="absolute flex flex-col gap-3 lg:gap-4"
              style={{ left: 32, top: 32, right: 32 }}>
              <p className="font-harmony text-[24px] font-bold leading-none text-primary-dark lg:hidden">Choose how you pay</p>
              <p className="font-harmony text-[14px] leading-5 text-[#6B7280] lg:hidden">
                Pay with Naira or USDC for easy cross-border transactions. Whichever works best for you.
              </p>
            </div>
            <div className="absolute hidden lg:flex flex-col gap-4"
              style={{ left: 48, top: 56, width: 506 }}>
              <p className="font-harmony text-[32px] font-bold leading-none text-primary-dark">Choose how you pay</p>
              <p className="font-harmony text-[16px] leading-6 text-[#6B7280]">
                Pay with Naira or USDC for easy cross-border transactions. Whichever works best for you.
              </p>
            </div>

            {/* ── Mobile coins ──
                 Naira (image 25): left=27 top=154 w=112 h=107
                 Arrow: container left=76.61 top=261.04 w=53.98 h=57.90, inner rotate(-38.32) w=27.93 h=51.72
                 USDC coins: left=166 top=162 w=262 h=217 */}
            <Image src="/features/m-naira.png" alt="" aria-hidden width={112} height={107}
              className="pointer-events-none absolute lg:hidden"
              style={{ left: 27, top: 154, width: 112, height: 107 }} />
            <div aria-hidden className="pointer-events-none absolute lg:hidden flex items-center justify-center"
              style={{ left: 76.61, top: 261.04, width: 53.98, height: 57.9 }}>
              <div style={{ transform: 'rotate(-38.32deg)', width: 28, height: 52, position: 'relative' }}>
                <Image src="/features/m-arrow.svg" alt="" fill className="h-full w-full" />
              </div>
            </div>
            <Image src="/features/m-coins.png" alt="Naira and USDC payment options" width={262} height={217}
              className="pointer-events-none absolute lg:hidden"
              style={{ left: 166, top: 162, width: 262, height: 217 }} />

            {/* ── Desktop coins ── */}
            <Image src="/features/card4-naira.png" alt="" aria-hidden width={202} height={193}
              className="pointer-events-none absolute hidden lg:block"
              style={{ left: 27, top: 234, width: 202, height: 193 }} />
            <div aria-hidden className="pointer-events-none absolute hidden lg:flex items-center justify-center"
              style={{ left: 116.68, top: 427.49, width: 97.579, height: 104.657 }}>
              <div style={{ transform: 'rotate(-38.32deg)', width: 50, height: 93, position: 'relative' }}>
                <Image src="/features/card4-arrow.svg" alt="" fill className="h-full w-full" />
              </div>
            </div>
            <Image src="/features/card4-coins.png" alt="Naira and USDC payment options" width={473} height={392}
              className="pointer-events-none absolute hidden lg:block"
              style={{ left: 166, top: 248, width: 473, height: 392 }} />
          </div>

        </div>
      </div>
    </section>
  )
}
