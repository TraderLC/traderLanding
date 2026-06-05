// Desktop 759:28 (1440×1066) | Mobile 823:7918 (393×880)
export default function AboutHero() {
  return (
    <section className="relative bg-[#011C2D] lg:bg-white">

      {/* Gradient band — mobile: top=643 h=237 | desktop: bottom-0 h=370 */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 lg:hidden"
        style={{ top: 643, height: 237, background: 'linear-gradient(to bottom, #ffffff 0%, #355C7B 31.633%, #011C2D 100%)' }} />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[370px] lg:block"
        style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #355C7B 31.633%, #011C2D 100%)' }} />

      {/* Mobile swoosh lines */}
      <div aria-hidden className="pointer-events-none absolute overflow-hidden inset-0 lg:hidden">
        <div className="absolute" style={{ left: -59, top: -325, width: 1143, height: 1064 }}>
          <div className="flex h-full items-center justify-center rotate-[14.58deg]">
            <img src="/hero-lines-mobile.svg" alt="" className="h-[850px] w-[960px] max-w-none" />
          </div>
        </div>
      </div>

      {/* Desktop swoosh lines */}
      <div aria-hidden className="pointer-events-none absolute hidden left-[352px] top-[-1057px] h-[2160px] w-[2320px] items-center justify-center lg:flex">
        <div className="rotate-[14.58deg]">
          <img src="/hero-lines.svg" alt="" className="h-[1725px] w-[1949px] max-w-none" />
        </div>
      </div>

      {/* ── Mobile content ── */}
      <div className="bg-white lg:hidden">
        {/* Text block — px=20 pt=40 */}
        <div className="relative z-10 px-5 pt-10">
          {/* Label */}
          <div className="mb-8 flex items-center gap-3">
            <img src="/about/line.svg" alt="" className="h-px w-5 shrink-0" />
            <span className="font-harmony text-[12px] font-medium uppercase tracking-[1.44px] text-secondary whitespace-nowrap">
              Company Overview
            </span>
          </div>
          {/* Heading + body */}
          <h1 className="font-harmony text-[44px] font-bold leading-[56px] text-primary-dark mb-5">About us</h1>
          <div className="font-harmony text-[16px] font-medium leading-[24px] text-primary-dark space-y-4">
            <p>Trader Logistics and Clearing is an international shipping operations platform managing end-to-end LCL shipments from China to Nigeria. We give operators a single view of every container, truck, and parcel across the entire logistics chain.</p>
            <p>We handle freight pickup, consolidation, ocean shipping, Nigeria customs clearing, last-mile delivery, and haulage, all in one streamlined workflow.</p>
            <p>Trader also integrates stablecoin payments for fast, transparent settlement between customers and logistics partners.</p>
          </div>
        </div>

        {/* Photo strip — full-width, scrollable, starts at x=20, overflows right */}
        <div className="relative z-10 mt-10 overflow-x-auto scrollbar-none pl-5 pb-8">
          <div className="flex gap-[10px] w-max">
            <img src="/about/s1-containers.jpg" alt="Shipping containers" className="h-[238px] w-[253px] shrink-0 rounded-[20px] object-cover" />
            <img src="/about/s1-truck.jpg" alt="Freight truck" className="h-[238px] w-[191px] shrink-0 rounded-[20px] object-cover" />
            <img src="/about/s1-ship.jpg" alt="Container ship" className="h-[238px] w-[158px] shrink-0 rounded-[20px] object-cover mr-5" />
          </div>
        </div>

        {/* Gradient spacer — transitions white → dark to meet MissionVision section */}
        <div className="h-16 bg-gradient-to-b from-white to-[#011C2D]" />
      </div>

      {/* ── Desktop content ── */}
      <div className="hidden lg:block">
        <div className="relative mx-auto max-w-[1440px] px-[100px] pb-[100px] pt-[100px]">
          <div className="flex items-start justify-between">
            <h1 className="font-harmony text-[64px] font-bold leading-[80px] text-primary-dark shrink-0">About us</h1>
            <div className="flex flex-col gap-[32px] w-[680px]">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-secondary shrink-0" />
                <span className="font-harmony text-[18px] font-medium uppercase tracking-[2.16px] text-secondary">Company Overview</span>
              </div>
              <div className="font-harmony space-y-8 text-[18px] font-medium leading-[32px] text-primary-dark">
                <p>Trader Logistics and Clearing is an international shipping operations platform managing end-to-end LCL shipments from China to Nigeria. We give operators a single view of every container, truck, and parcel across the entire logistics chain.</p>
                <p>We handle freight pickup, consolidation, ocean shipping, Nigeria customs clearing, last-mile delivery, and haulage, all in one streamlined workflow.</p>
                <p>Trader also integrates stablecoin payments for fast, transparent settlement between customers and logistics partners.</p>
              </div>
            </div>
          </div>
          <div className="mt-[100px] flex gap-[20px]">
            <img src="/about/s1-containers.jpg" alt="Shipping containers" className="h-[414px] w-auto flex-[505] min-w-0 rounded-[20px] object-cover" />
            <img src="/about/s1-truck.jpg" alt="Freight truck" className="h-[414px] w-auto flex-[401] min-w-0 rounded-[20px] object-cover" />
            <img src="/about/s1-ship.jpg" alt="Container ship" className="h-[414px] w-auto flex-[295] min-w-0 rounded-[20px] object-cover" />
          </div>
        </div>
      </div>

    </section>
  )
}
