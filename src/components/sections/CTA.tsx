'use client'

// Desktop 614:17534 — card 1240×740 rounded-20, left text + right form.
// Mobile 791:2 — card 353×788 rounded-16, stacked label/heading then form (fields all full-width).

const inputCls = 'w-full rounded-[8px] border border-[#E5E7EB] bg-[#F8F8F9] h-[52px] px-[16px] font-harmony text-[14px] leading-[20px] text-primary-dark placeholder:text-[#9CA3AF] outline-none focus:border-secondary'
const labelCls = 'font-harmony text-[16px] font-medium leading-[24px] text-white'

export default function CTA() {
  return (
    <section id="contact" className="overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 lg:px-[100px] lg:pt-[80px]">

        {/* Card — rounded-16 mobile, rounded-20 desktop */}
        <div className="relative overflow-hidden rounded-[16px] bg-[#142F40] lg:rounded-[20px] lg:h-[740px]">

          {/* Inner dark bg */}
          <div className="absolute inset-0 rounded-[16px] bg-[#051D33] lg:rounded-[20px]" />

          {/* Mobile swoosh lines — left=129.68 top=-342.54, container 622×609, rotate 14.58° */}
          <div aria-hidden className="pointer-events-none absolute lg:hidden"
            style={{ left: 129.68, top: -342.54, width: 622.997, height: 609.318 }}>
            <div className="flex h-full items-center justify-center">
              <div className="rotate-[14.58deg]" style={{ width: 514.808, height: 495.708, flexShrink: 0, position: 'relative' }}>
                <img src="/contact/lines-mobile.svg" alt="" className="absolute inset-0 block h-full w-full max-w-none" />
              </div>
            </div>
          </div>

          {/* Desktop swoosh lines */}
          <div aria-hidden className="pointer-events-none absolute hidden lg:flex items-center justify-center"
            style={{ left: -370.32, top: 20.13, width: 970.154, height: 948.851 }}>
            <div className="rotate-[14.58deg]" style={{ width: 801.68, height: 771.932, flexShrink: 0, position: 'relative' }}>
              <img src="/contact/lines.svg" alt="" className="absolute inset-0 block h-full w-full max-w-none" />
            </div>
          </div>

          {/* ── Mobile layout — stacked ── */}
          <div className="relative flex flex-col gap-[40px] px-5 py-8 lg:hidden">

            {/* Label + heading */}
            <div className="flex flex-col gap-[20px]">
              <p className="font-harmony text-[14px] font-medium leading-5 text-[#FFF0BD]">CONTACT US</p>
              <div className="flex flex-col gap-[12px]">
                <p className="font-harmony text-[24px] font-bold text-white">Get In Touch</p>
                <p className="font-harmony text-[16px] font-medium leading-[24px] text-secondary-muted">
                  Need answers or assistance? We are available 24/7 to help.
                </p>
              </div>
            </div>

            {/* Form — all fields full-width stacked */}
            <form className="flex flex-col gap-[40px]">
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <label className={labelCls}>Name</label>
                  <input type="text" placeholder="Enter name" className={inputCls} />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className={labelCls}>Phone Number</label>
                  <input type="tel" placeholder="0812 345 6790" className={inputCls} />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className={labelCls}>Email Address</label>
                  <input type="email" placeholder="example@gmail.com" className={inputCls} />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className={labelCls}>How can we help you?</label>
                  <textarea placeholder="Write here"
                    className="w-full rounded-[8px] border border-[#E5E7EB] bg-[#F8F8F9] h-[100px] px-[16px] py-[14px] font-harmony text-[14px] leading-[20px] text-primary-dark placeholder:text-[#9CA3AF] outline-none focus:border-secondary resize-none" />
                </div>
              </div>
              <button type="submit" className="font-harmony h-[56px] w-full rounded-[8px] bg-secondary text-[16px] font-medium leading-[24px] text-white hover:bg-[#0d7ce0]">
                Submit
              </button>
            </form>
          </div>

          {/* ── Desktop layout — left label/heading, right form ── */}
          <div className="relative hidden h-full lg:flex">
            {/* Left */}
            <div className="absolute flex flex-col gap-[32px]" style={{ left: 72, top: 56, width: 502 }}>
              <p className="font-harmony text-[16px] font-medium leading-[24px] text-[#FFF0BD]">CONTACT US</p>
              <div className="flex flex-col gap-[12px]">
                <p className="font-harmony text-[32px] font-bold text-white">Get In Touch</p>
                <p className="font-harmony text-[18px] font-medium leading-[32px] text-secondary-muted">
                  Need answers or assistance? We are available 24/7 to help.
                </p>
              </div>
            </div>

            {/* Right form */}
            <form className="absolute flex flex-col gap-[56px]" style={{ left: 638, top: 56, width: 530 }}>
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <label className={labelCls}>Name</label>
                  <input type="text" placeholder="Enter name" className={inputCls} />
                </div>
                <div className="flex gap-[24px]">
                  <div className="flex flex-1 flex-col gap-[8px]">
                    <label className={labelCls}>Phone Number</label>
                    <input type="tel" placeholder="0812 345 6790" className={inputCls} />
                  </div>
                  <div className="flex flex-1 flex-col gap-[8px]">
                    <label className={labelCls}>Email Address</label>
                    <input type="email" placeholder="example@gmail.com" className={inputCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className={labelCls}>How can we help you?</label>
                  <textarea placeholder="Write here"
                    className="w-full rounded-[8px] border border-[#E5E7EB] bg-[#F8F8F9] h-[100px] px-[16px] py-[14px] font-harmony text-[14px] leading-[20px] text-primary-dark placeholder:text-[#9CA3AF] outline-none focus:border-secondary resize-none" />
                </div>
              </div>
              <button type="submit" className="font-harmony h-[56px] w-full rounded-[8px] bg-secondary text-[16px] font-medium leading-[24px] text-white hover:bg-[#0d7ce0]">
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
