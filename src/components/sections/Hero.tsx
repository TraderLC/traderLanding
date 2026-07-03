// Desktop — Figma node 576:17574 — 1440×720 frame, 100px gutters.
// Left text column (617px) + right image (524×560, radius 40), both centered at y=360.
// Background: faint #F5F7F8 curved lines (Group 583:17632), rotate 14.58°, anchored to the frame.
// Mobile — Figma node 764:8253 — 20px gutters, buttons stacked full-width, image radius 20.
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-[1440px] px-5 lg:h-[720px] lg:px-[100px]">

        {/* Background swoosh lines — mobile crop */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-59px] top-[-325px] flex h-[1064px] w-[1143px] items-center justify-center lg:hidden"
        >
          <Image src="/hero-lines.svg" alt="" width={960} height={850} className="h-[850px] w-[960px] max-w-none rotate-[14.58deg]" />
        </div>

        {/* Background swoosh lines — #F5F7F8 @ 0.6, rotated 14.58°, clipped by the section */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[352px] top-[-1057px] hidden h-[2160.826px] w-[2320.658px] items-center justify-center lg:flex"
        >
          <div className="rotate-[14.58deg]">
            <Image src="/hero-lines.svg" alt="" width={1949} height={1726} className="h-[1726px] w-[1949px] max-w-none" />
          </div>
        </div>

        {/* Content row */}
        <div className="relative flex flex-col items-start gap-8 py-10 lg:h-full lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:py-0">

          {/* Left — text column */}
          <div className="flex w-full flex-col items-start gap-8 lg:w-[617px] lg:gap-[40px]">
            <div className="flex flex-col items-start gap-4 lg:gap-[16px]">
              <h1 className="font-harmony text-[44px] font-bold leading-[56px] text-[#152531] lg:w-[617px] lg:text-[64px] lg:leading-[80px]">
                <span className="font-normal italic text-secondary">Import</span>
                {' smarter from China to Nigeria.'}
              </h1>
              <p className="font-harmony text-[16px] font-medium leading-[24px] text-[#152531] lg:w-[519px] lg:text-[18px] lg:leading-[32px]">
                {'We handle everything from pickup to delivery, with real-time tracking and flexible payments, including '}
                <span className="font-black italic text-secondary">stablecoins</span>.
              </p>
            </div>

            {/* Buttons — stacked full-width on mobile, side-by-side on desktop */}
            <div className="flex w-full flex-col items-stretch gap-[20px] lg:h-[48px] lg:w-auto lg:flex-row lg:items-start lg:gap-[16px]">
              <a
                href="#"
                className="font-harmony flex items-center justify-center rounded-[8px] bg-primary px-[40px] py-[12px] text-[16px] font-medium leading-[24px] text-white transition-colors hover:bg-primary-dark"
              >
                Start Shipping
              </a>
              <a
                href="#"
                className="font-harmony flex items-center justify-center rounded-[8px] bg-primary-light px-[40px] py-[12px] text-[16px] font-medium leading-[24px] text-primary transition-colors hover:bg-[#e9eef1]"
              >
                Get the app
              </a>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative h-[377px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#f9f9f9] lg:h-[560px] lg:w-[524px] lg:rounded-[40px]">
            <Image
              src="/hero-ship.jpg"
              alt="Container ship en route from China to Nigeria"
              fill
              priority
              sizes="(min-width: 1024px) 524px, 100vw"
              className="object-cover object-[70%_52%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
