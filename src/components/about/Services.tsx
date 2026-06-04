// Desktop 759:46 | Mobile 823:8245
// Mobile: stacked, px-52 py-16, rounded-20, 18px Bold, gap-16.
// Desktop: 2-row grid (2+3), px-52 py-48, rounded-40, 32px Bold, gap-31.

const services = [
  { label: 'Clearing and forwarding', bg: 'bg-primary-light' },
  { label: 'Import handling',         bg: 'bg-secondary-light' },
  { label: 'Shipping (sea freight)',  bg: 'bg-[#FFFAF9]' },
  { label: 'Door-to-door delivery',   bg: 'bg-[#F6FBFA]' },
  { label: 'Documentation support',   bg: 'bg-[#FFF9E4]' },
]

export default function Services() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-[100px] lg:py-[80px]">

        <h2 className="font-harmony text-center text-[28px] font-bold leading-[38px] text-primary lg:text-[48px] lg:leading-[64px]">
          What We Do (Services)
        </h2>

        {/* Mobile — all 5 stacked */}
        <div className="mt-6 flex flex-col gap-4 lg:hidden">
          {services.map(s => (
            <div key={s.label} className={`flex items-center justify-center overflow-hidden rounded-[20px] px-[52px] py-[16px] text-center ${s.bg}`}>
              <p className="font-harmony text-[18px] font-bold leading-[32px] text-primary-dark">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Desktop — 2-row grid (2+3) */}
        <div className="mt-[70px] hidden flex-col gap-[31px] lg:flex">
          <div className="flex gap-[20px]">
            {services.slice(0, 2).map(s => (
              <div key={s.label} className={`flex flex-1 items-center justify-center overflow-hidden rounded-[40px] px-[52px] py-[48px] text-center ${s.bg}`}>
                <p className="font-harmony text-[32px] font-bold leading-[1.17] text-primary-dark">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-[20px]">
            {services.slice(2).map(s => (
              <div key={s.label} className={`flex flex-1 items-center justify-center overflow-hidden rounded-[40px] px-[52px] py-[48px] text-center ${s.bg}`}>
                <p className="font-harmony text-[32px] font-bold leading-[1.17] text-primary-dark">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
