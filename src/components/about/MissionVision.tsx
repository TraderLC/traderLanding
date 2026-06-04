// Desktop 759:306 / Mobile 823:8176
// Mobile: h-[500px] cards, text absolute top-8 left-5 w-[313px], 24px/16px text,
//   images absolutely positioned at top=182px inside the card, overflow-hidden clips them.
// Desktop: flex row, text on left (Mission) / right (Vision), images overflow card edges.

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden lg:border-[rgba(243,248,252,0.2)] bg-[#011C2D]">
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-8 lg:gap-[56px] lg:px-[100px] lg:py-[80px]">

        {/* Lines pattern — mobile */}
        <div aria-hidden className="pointer-events-none absolute -translate-x-1/2 flex h-[756.128px] items-center justify-center lg:hidden"
          style={{ left: 'calc(37.5% + 41.77px)', bottom: '765.24px', width: 728.448 }}>
          <div className="flex-none" style={{ transform: 'rotate(-128.37deg)' }}>
            <div className="relative h-[443.673px] w-[613.152px]">
              <img src="/about/mv-lines.svg" alt="" className="absolute inset-0 block size-full max-w-none" />
            </div>
          </div>
        </div>

        {/* Lines pattern — desktop */}
        <div aria-hidden className="pointer-events-none absolute -translate-x-1/2 hidden lg:flex items-center justify-center"
          style={{ left: 'calc(87.5% - 25.78px)', bottom: '38.65px', width: 1050.789, height: 1090.718 }}>
          <div className="flex-none" style={{ transform: 'rotate(-128.37deg)' }}>
            <div className="relative h-[640px] w-[884.475px]">
              <img src="/about/mv-lines.svg" alt="" className="absolute inset-0 block h-full w-full max-w-none" />
            </div>
          </div>
        </div>

        {/* ── Mission card ── */}
        <div className="relative h-[500px] overflow-hidden rounded-[20px] bg-[#142F40] lg:flex lg:h-[400px] lg:items-center">

          {/* Mobile: dartboard at bottom of card */}
          <div aria-hidden className="absolute -translate-x-1/2 flex items-center justify-center lg:hidden"
            style={{ left: 'calc(50% + 21.78px)', top: 182.07, width: 435.045, height: 470.407 }}>
            <div className="relative flex-none overflow-hidden" style={{ transform: 'rotate(-5.98deg)', width: 392.188, height: 431.903 }}>
              <img src="/about/mission-dartboard.png" alt="" className="absolute top-0 max-w-none" style={{ height: '100%', width: '165.23%', left: '-0.02%' }} />
            </div>
          </div>

          {/* Desktop: dartboard overflows card right */}
          <div aria-hidden className="absolute -translate-x-1/2 hidden lg:flex items-center justify-center"
            style={{ left: 'calc(50% + 355.87px)', top: -80.19, width: 645.314, height: 697.767 }}>
            <div className="flex-none" style={{ transform: 'rotate(-5.98deg)' }}>
              <div className="relative overflow-hidden" style={{ width: 581.743, height: 640.653 }}>
                <img src="/about/mission-dartboard.png" alt="" className="absolute top-0 max-w-none" style={{ height: '100%', width: '165.23%', left: '-0.02%' }} />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="absolute left-5 top-8 z-10 flex w-[313px] flex-col gap-4 font-harmony text-white lg:static lg:ml-[80px] lg:w-[498px] lg:shrink-0 lg:gap-[16px]">
            <p className="text-[24px] font-bold lg:text-[32px]">Mission Statement</p>
            <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
              To provide reliable, efficient, and cost-effective clearing and shipping services by ensuring timely delivery, seamless customs processing, and exceptional customer support, while maintaining the highest standards of integrity and professionalism.
            </p>
          </div>
        </div>

        {/* ── Vision card ── */}
        <div className="relative h-[500px] overflow-hidden rounded-[20px] bg-[#142F40] lg:flex lg:h-[400px] lg:items-center">

          {/* Mobile: bulb at bottom of card */}
          <div aria-hidden className="absolute -translate-x-1/2 lg:hidden" style={{ left: 'calc(50% - 26px)', top: 182, width: 415, height: 415 }}>
            <img src="/about/vision-bulb.png" alt="" className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none" />
          </div>

          {/* Desktop: bulb overflows card left */}
          <div aria-hidden className="absolute hidden -translate-x-1/2 lg:block" style={{ left: 'calc(50% - 352px)', top: -33, width: 590, height: 590 }}>
            <img src="/about/vision-bulb.png" alt="" className="absolute inset-0 size-full max-w-none object-cover" />
          </div>

          {/* Text */}
          <div className="absolute left-5 top-8 z-10 flex w-[313px] flex-col gap-4 font-harmony text-white lg:static lg:ml-auto lg:mr-[113px] lg:w-[498px] lg:shrink-0 lg:gap-[16px]">
            <p className="text-[24px] font-bold lg:text-[32px]">Vision Statement</p>
            <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
              To become a leading clearing and shipping company recognized for excellence, innovation, and trust, delivering world-class logistics solutions that connect businesses across global markets.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
