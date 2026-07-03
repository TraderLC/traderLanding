// Figma 759:262 desktop / 791:190 mobile.
// Mobile: no CTA, heading 28px/38lh, subtitle 16px/24lh, gap-4 between them.
// Mobile photos: horizontal strip pl-5, 253/191/158px wide × 238px tall, gap-[10px], overflows right.
// Desktop: CTA visible, heading 48px, photos row h-[475px].
import Image from 'next/image'

export default function AppDownload() {
  return (
    <section className="bg-white">

      {/* Padded heading block */}
      <div className="mx-auto max-w-[1440px] px-5 pt-10 lg:px-[100px] lg:pb-0 lg:pt-[80px]">
        <div className="flex flex-col items-center gap-4 text-center lg:gap-[40px]">

          <div className="flex flex-col items-center gap-4 lg:gap-[8px]">
            <h2 className="font-harmony text-[28px] font-bold leading-[38px] text-primary lg:w-[875px] lg:text-[48px] lg:leading-[64px]">
              Manage your imports from anywhere
            </h2>
            <p className="font-harmony text-[16px] font-medium leading-[24px] text-primary-dark lg:w-[980px] lg:text-[18px] lg:leading-[32px]">
              Download the Trader app to track your shipments, get instant alerts, and stay on top of every order.
            </p>
          </div>

          {/* CTA — desktop only */}
          <a
            href="#"
            className="hidden font-harmony h-[56px] w-[260px] items-center justify-center rounded-[8px] bg-secondary px-[40px] text-[16px] font-bold leading-[24px] text-white transition-colors hover:bg-[#0d7ce0] lg:flex"
          >
            Get the App
          </a>
        </div>

        {/* Desktop photo row */}
        <div className="hidden mt-[80px] lg:flex justify-center gap-[20px] pb-[80px]">
          <Image src="/about/app-port.jpg" alt="Container ship and port cranes" width={505} height={475} className="h-[475px] w-[505px] rounded-[20px] object-cover" />
          <Image src="/about/app-truck.jpg" alt="Freight truck at a container yard at dusk" width={381} height={475} className="h-[475px] w-[381px] rounded-[20px] object-cover" />
          <Image src="/about/app-containers.jpg" alt="Aerial view of stacked orange containers" width={315} height={475} className="h-[475px] w-[315px] rounded-[20px] object-cover" />
        </div>
      </div>

      {/* Mobile photo strip — starts at x=20px, overflows right edge */}
      <div className="mt-10 flex gap-[10px] overflow-x-auto pl-5 pb-10 scrollbar-none lg:hidden">
        <Image src="/about/app-port.jpg" alt="Container ship and port cranes" width={253} height={238} className="h-[238px] w-[253px] shrink-0 rounded-[20px] object-cover" />
        <Image src="/about/app-truck.jpg" alt="Freight truck at a container yard at dusk" width={191} height={238} className="h-[238px] w-[191px] shrink-0 rounded-[20px] object-cover" />
        <Image src="/about/app-containers.jpg" alt="Aerial view of stacked orange containers" width={158} height={238} className="h-[238px] w-[158px] shrink-0 rounded-[20px] object-cover" />
        <div className="shrink-0 w-5" aria-hidden />
      </div>

    </section>
  )
}
