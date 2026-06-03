// Figma 591:2 — desktop 1440×1023. Mobile node 772:169 — form card first, image card below.
// Mobile: section px-5 py-10, form px-5 py-6 gap-8, heading 24px, subtitle 16px, image h-592.
// Desktop: px-[100px] py-[100px], form p-[48px] gap-[48px], heading 32px, image h-846.

const inputBase = 'w-full rounded-[8px] border border-[#E5E7EB] bg-[#F8F8F9] h-[52px] flex items-center px-[16px] font-harmony text-[14px] leading-[20px] text-primary-dark placeholder:text-[#9CA3AF] outline-none focus:border-secondary'
const labelBase = 'font-harmony text-[16px] font-medium leading-[24px] text-[#1C1C1C]'

function SelectField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <label className={labelBase}>{label}</label>
      <div className="relative">
        <select className={`${inputBase} appearance-none pr-[44px] cursor-pointer bg-[#F8F8F9]`}>
          <option value="" disabled selected className="text-[#9CA3AF]">{placeholder}</option>
        </select>
        <div className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2 size-[20px]">
          <img src="/quote/chevron.svg" alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  )
}

function TextField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <label className={labelBase}>{label}</label>
      <input type="text" placeholder={placeholder} className={inputBase} />
    </div>
  )
}

export default function Pricing() {
  return (
    <section className="bg-primary-light">
      <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-[100px] lg:py-[100px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-[20px]">

          {/* Form card — first on mobile, second on desktop */}
          <div className="order-1 flex-1 overflow-hidden rounded-[20px] bg-white lg:order-2 lg:h-[846px]">
            <div className="flex flex-col gap-8 px-5 py-6 lg:h-full lg:gap-[48px] lg:p-[48px]">

              {/* Heading */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-harmony text-[24px] font-bold leading-none text-primary-dark lg:text-[32px]">Get Quote</p>
                <p className="font-harmony text-[16px] font-medium leading-[24px] text-[#6B7280] lg:text-[18px] lg:leading-[32px]">
                  Fill the fields below and get a quote for your shipment
                </p>
              </div>

              {/* Fields */}
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[24px]">
                  <SelectField label="Pick up (China Supplier City)" placeholder="--select city--" />
                  <TextField label="Pickup Full Address" placeholder="Enter full address" />
                </div>
                <div className="flex flex-col gap-[24px]">
                  <SelectField label="Destination (Nigeria)" placeholder="--select city--" />
                  <TextField label="Destination Full Address" placeholder="Enter full address" />
                </div>
                <TextField label="Item (cbm)" placeholder="Enter cbm" />
              </div>

              {/* CTA */}
              <button
                type="button"
                className="font-harmony h-[56px] w-full rounded-[8px] bg-secondary px-[40px] text-[16px] font-medium leading-[24px] text-white transition-colors hover:bg-[#0d7ce0]"
              >
                Start Shipping
              </button>
            </div>
          </div>

          {/* Image card — second on mobile, first on desktop */}
          <div className="order-2 relative h-[592px] overflow-hidden rounded-[20px] shrink-0 lg:order-1 lg:h-[846px] lg:w-[505px]">
            <img
              src="/quote/ship.jpg"
              alt="Container ship viewed from above"
              className="h-full w-full object-cover"
            />
            <span
              className="font-aeonik absolute font-bold text-primary"
              style={{ top: '7.43%', left: '35.98%', fontSize: '21.862px', lineHeight: '1.1', whiteSpace: 'nowrap' }}
            >
              Trader LC
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
