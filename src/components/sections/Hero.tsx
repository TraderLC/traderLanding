// Desktop 576:17574 (1440×720) | Mobile 764:8253 (393×902)
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Mobile swoosh lines — contained via CSS clip */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden">
        <div className="absolute rotate-[14.58deg]" style={{ left: -59, top: -325, width: 1143, height: 1064 }}>
          <img src="/hero-lines-mobile.svg" alt="" className="h-full w-full max-w-none" />
        </div>
      </div>

      {/* Desktop swoosh lines */}
      <div aria-hidden className="pointer-events-none absolute left-[352px] top-[-1057px] hidden h-[2160px] w-[2320px] lg:flex items-center justify-center">
        <div className="rotate-[14.58deg]">
          <img src="/hero-lines.svg" alt="" className="h-[1725px] w-[1949px] max-w-none" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 lg:h-[720px] lg:px-[100px]">
        <div className="relative flex flex-col gap-10 py-10 lg:h-full lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:py-0">

          {/* Text + buttons */}
          <div className="flex flex-col gap-8 lg:w-[617px] lg:gap-[40px]">
            <div className="flex flex-col gap-4 lg:gap-[16px]">
              <h1 className="font-harmony text-[44px] font-bold leading-[56px] text-[#152531] lg:text-[64px] lg:leading-[80px]">
                <span className="font-normal italic text-secondary">Import</span>
                {' smarter from China to Nigeria.'}
              </h1>
              <p className="font-harmony text-[16px] font-medium leading-[24px] text-[#152531] lg:text-[18px] lg:leading-[32px] lg:w-[519px]">
                {'We handle everything from pickup to delivery, with real-time tracking and flexible payments, including '}
                <span className="font-black italic text-secondary">stablecoins</span>.
              </p>
            </div>

            {/* Stacked full-width on mobile, row on desktop */}
            <div className="flex flex-col gap-[20px] lg:h-[48px] lg:flex-row lg:gap-[16px]">
              <a href="#" className="font-harmony flex w-full items-center justify-center rounded-[8px] bg-primary px-[40px] py-[12px] text-[16px] font-medium leading-[24px] text-white hover:bg-primary-dark lg:w-auto">
                Start Shipping
              </a>
              <a href="#" className="font-harmony flex w-full items-center justify-center rounded-[8px] bg-primary-light px-[40px] py-[12px] text-[16px] font-medium leading-[24px] text-primary hover:bg-[#e9eef1] lg:w-auto">
                Get the app
              </a>
            </div>
          </div>

          {/* Ship image — h=377 radius=20 on mobile, h=560 radius=40 on desktop */}
          <div className="h-[377px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#f9f9f9] lg:h-[560px] lg:w-[524px] lg:rounded-[40px]">
            <img src="/hero-ship.jpg" alt="Container ship en route from China to Nigeria"
              className="h-full w-full object-cover object-[70%_52%]" />
          </div>
        </div>
      </div>
    </section>
  )
}
