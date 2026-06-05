// Figma 759:189 — dark #051D33 contact card with swoosh lines + form.
const inputBase = 'w-full rounded-[8px] border border-[#E5E7EB] bg-[#F8F8F9] px-[16px] py-[14px] font-harmony text-[14px] leading-[20px] text-primary-dark placeholder:text-[#9CA3AF] outline-none focus:border-secondary'
const label = 'font-harmony text-[16px] font-medium leading-[24px] text-white'

export default function ContactForm() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-[#051D33] p-8 lg:h-[740px] lg:p-0">
      {/* Swoosh lines, bottom-left */}
      <div aria-hidden className="pointer-events-none absolute left-[-370.32px] top-[20.13px] hidden h-[948.851px] w-[970.154px] items-center justify-center lg:flex">
        <div className="rotate-[14.58deg]">
          <img src="/footer-lines.svg" alt="" className="h-[771.932px] w-[801.68px] max-w-none opacity-90" />
        </div>
      </div>

      {/* Left — heading */}
      <div className="relative flex flex-col gap-[32px] lg:absolute lg:left-[72px] lg:top-[56px] lg:w-[502px]">
        <p className="font-harmony text-[16px] font-medium leading-[24px] text-[#FFF0BD]">CONTACT US</p>
        <div className="flex flex-col gap-[12px]">
          <p className="font-harmony text-[28px] font-bold text-white lg:text-[32px]">Get In Touch</p>
          <p className="font-harmony text-[18px] font-medium leading-[32px] text-secondary-muted">
            Need answers or assistance? We are available 24/7 to help.
          </p>
        </div>
      </div>

      {/* Right — form */}
      <form className="relative mt-10 flex flex-col gap-[56px] lg:absolute lg:left-[638px] lg:top-[56px] lg:mt-0 lg:w-[530px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <label className={label}>Name</label>
            <input type="text" placeholder="Enter name" className={inputBase} />
          </div>
          <div className="flex flex-col gap-[24px] sm:flex-row">
            <div className="flex flex-1 flex-col gap-[8px]">
              <label className={label}>Phone Number</label>
              <input type="tel" placeholder="0812 345 6790" className={inputBase} />
            </div>
            <div className="flex flex-1 flex-col gap-[8px]">
              <label className={label}>Email Address</label>
              <input type="email" placeholder="example@gmail.com" className={inputBase} />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className={label}>How can we help you?</label>
            <textarea placeholder="Write here" rows={4} className={`${inputBase} h-[100px] resize-none`} />
          </div>
        </div>
        <button type="submit" className="font-harmony flex h-[56px] items-center justify-center rounded-[8px] bg-secondary px-[40px] text-[16px] font-medium leading-[24px] text-white transition-colors hover:bg-[#0d7ce0]">
          Submit
        </button>
      </form>
    </div>
  )
}
