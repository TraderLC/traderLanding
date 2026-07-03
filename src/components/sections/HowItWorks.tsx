// Figma 593:5578 — 1440×988 desktop, 393px mobile (node 772:49)
// Desktop: x=205 y=80 w=1030. Card 01: 1030×220. Cards 02+03: 505×388.
// Mobile: px=20, heading 28px centered, cards px=24 py=32, gap=24, number on top, gap=56.
import Image from 'next/image'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-t border-[rgba(243,248,252,0.2)] bg-[#011C2D]">

      {/* Lines pattern — desktop only */}
      <div aria-hidden className="pointer-events-none -translate-x-1/2 absolute bottom-[208.65px] hidden lg:flex h-[1090.718px] items-center justify-center left-[calc(87.5%-25.78px)] w-[1050.789px]">
        <div className="flex-none rotate-[-128.37deg]">
          <div className="h-[640px] relative w-[884.475px]">
            <Image alt="" fill className="block max-w-none" src="/how/lines.svg" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-10 lg:px-[205px] lg:py-[80px]">

        {/* Heading */}
        <h2 className="font-harmony text-[28px] font-bold leading-[38px] text-center text-white lg:text-left lg:w-[695px] lg:text-[56px] lg:leading-[76px]">
          Importing from China to Nigeria is now this simple
        </h2>

        {/* Bento */}
        <div className="mt-[24px] flex flex-col gap-6 lg:mt-[48px] lg:gap-[20px]">

          {/* ── Card 01 ── */}
          <div className="relative rounded-[20px] bg-[#142F40] overflow-hidden lg:h-[220px]">

            {/* Mobile layout */}
            <div className="flex flex-col gap-14 px-6 py-8 lg:hidden">
              <div className="inline-grid place-items-start leading-[0]"
                style={{ gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
                <Image src="/how/num-01-bg.svg" alt="" width={65} height={53} className="relative h-[53px] w-[65px]"
                  style={{ gridArea: '1/1', marginLeft: 2.62, marginTop: 2.62 }} />
                <Image src="/how/num-01.svg" alt="" width={65} height={53} className="relative h-[53px] w-[65px]"
                  style={{ gridArea: '1/1' }} />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-harmony text-[24px] font-bold leading-normal text-white">Create your account</p>
                <p className="font-harmony text-[16px] leading-[24px] text-white">
                  Sign up on the website or download the Trader app. Provide details about you and your business.
                </p>
              </div>
            </div>

            {/* Desktop layout */}
            <div aria-hidden className="pointer-events-none hidden lg:block">
              <Image src="/how/num-01-bg.svg" alt="" width={249} height={204} className="absolute h-[204px] w-[249px] max-w-none"
                style={{ left: 57, top: 55 }} />
              <Image src="/how/num-01.svg" alt="" width={249} height={204} className="absolute h-[204px] w-[249px] max-w-none"
                style={{ left: 67, top: 65 }} />
            </div>
            <div className="hidden lg:flex flex-col gap-[16px] absolute"
              style={{ left: 440, top: 55 }}>
              <p className="font-harmony text-[32px] font-bold text-white">Create your account</p>
              <p className="font-harmony text-[18px] leading-[28px] text-white/70 w-[472px]">
                Sign up on the website or download the Trader app. Provide details about you and your business.
              </p>
            </div>
          </div>

          {/* ── Cards 02 + 03 ── */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-[20px]">

            {/* Card 02 */}
            <div className="relative rounded-[20px] bg-[#142F40] overflow-hidden lg:h-[388px] lg:w-[505px]">

              {/* Mobile layout */}
              <div className="flex flex-col gap-14 px-6 py-8 lg:hidden">
                <div className="inline-grid place-items-start leading-[0]"
                  style={{ gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
                  <Image src="/how/num-02-bg.svg" alt="" width={78} height={53} className="relative h-[53px] w-[78px]"
                    style={{ gridArea: '1/1', marginLeft: 3.01, marginTop: 3.01 }} />
                  <Image src="/how/num-02.svg" alt="" width={78} height={53} className="relative h-[53px] w-[78px]"
                    style={{ gridArea: '1/1' }} />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-harmony text-[24px] font-bold leading-normal text-white">Create &amp; Review Shipment</p>
                  <p className="font-harmony text-[16px] leading-[24px] text-white">
                    Enter pickup and delivery details, tell us about your items, and pay immediately or on arrival.
                  </p>
                </div>
              </div>

              {/* Desktop layout */}
              <div aria-hidden className="pointer-events-none hidden lg:block">
                <Image src="/how/num-02-bg.svg" alt="" width={251} height={171} className="absolute h-[171px] w-[251px] max-w-none"
                  style={{ left: 56, top: -20 }} />
                <Image src="/how/num-02.svg" alt="" width={251} height={171} className="absolute h-[171px] w-[251px] max-w-none"
                  style={{ left: 65.69, top: -10.31 }} />
              </div>
              <div className="hidden lg:flex flex-col gap-[16px] absolute"
                style={{ left: 32, top: 224.31 }}>
                <p className="font-harmony text-[32px] font-bold text-white">Create &amp; Review Shipment</p>
                <p className="font-harmony text-[18px] leading-[28px] text-white/70 w-[441px]">
                  Enter pickup and delivery details, tell us about your items, and pay immediately or on arrival.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="relative rounded-[20px] bg-[#142F40] overflow-hidden lg:h-[388px] lg:w-[505px]">

              {/* Mobile layout */}
              <div className="flex flex-col gap-14 px-6 py-8 lg:hidden">
                <div className="inline-grid place-items-start leading-[0]"
                  style={{ gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
                  <Image src="/how/num-03-bg.svg" alt="" width={78} height={53} className="relative h-[53px] w-[78px]"
                    style={{ gridArea: '1/1', marginLeft: 3.1, marginTop: 3.1 }} />
                  <Image src="/how/num-03.svg" alt="" width={78} height={53} className="relative h-[53px] w-[78px]"
                    style={{ gridArea: '1/1' }} />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-harmony text-[24px] font-bold leading-normal text-white">Receive your goods</p>
                  <p className="font-harmony text-[16px] leading-[24px] text-white">
                    Track your shipment live on your app and choose to pick it up or have it delivered straight to you.
                  </p>
                </div>
              </div>

              {/* Desktop layout */}
              <div aria-hidden className="pointer-events-none hidden lg:block">
                <Image src="/how/num-03-bg.svg" alt="" width={251} height={171} className="absolute h-[171px] w-[251px] max-w-none"
                  style={{ left: 56, top: -20 }} />
                <Image src="/how/num-03.svg" alt="" width={251} height={171} className="absolute h-[171px] w-[251px] max-w-none"
                  style={{ left: 66, top: -10 }} />
              </div>
              <div className="hidden lg:flex flex-col gap-[16px] absolute"
                style={{ left: 32, top: 224.61 }}>
                <p className="font-harmony text-[32px] font-bold text-white">Receive your goods</p>
                <p className="font-harmony text-[18px] leading-[28px] text-white/70 w-[441px]">
                  Track your shipment live on your app and choose to pick it up or have it delivered straight to you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
