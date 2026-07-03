'use client'

// Desktop 615:17626 — white card 1096px, -136px overlap, items p-32, q 24px, a 16px, chevron 32px.
// Mobile 791:49 — white card px-20 py-24, no overlap, items px-16 py-20, q 16px bold, a 14px, chevron 20px.

import { useState } from 'react'
import Image from 'next/image'

const faqs = [
  {
    q: 'What does Trader handle, and what do I handle?',
    a: 'Provide details of your pickup locations, delivery destination and goods. Once your goods are ready for pickup, Trader collects them from your supplier, consolidates and ships them by sea, handles all customs clearance at the Nigerian port, and delivers them to your location in Nigeria. You stay updated at every step with real-time tracking on your dashboard.',
  },
  {
    q: 'How long does shipping from China to Nigeria take?',
    a: 'The clearing process typically takes 30–40 days, provided all required documents are complete and accurate. Trader Logistic and Clearing manages the entire process efficiently to minimize delays and ensure smooth cargo release.',
  },
  {
    q: 'What documents do I need to provide?',
    a: (
      <>
        <p className="mb-[8px]">To get started, you only need to provide the following:</p>
        <p className="mb-[8px]">Invoice or receipt of the goods</p>
        <p className="mb-[8px]">Clear picture/image of the goods</p>
        <p>{"That's all. Trader Logistic and Clearing will handle the remaining documentation and customs processes on your behalf, making the experience simple and stress-free."}</p>
      </>
    ),
  },
  {
    q: 'Do I need to visit the port for customs clearance?',
    a: 'No, you do not need to visit the port. Trader Logistic and Clearing handles the entire customs clearance and documentation process on your behalf. From paperwork to final release, we manage everything efficiently, saving you time, stress, and unnecessary delays.',
  },
  {
    q: 'How much does it cost to ship from China to Nigeria?',
    a: (
      <>
        <p className="mb-[8px]">Shipping from China to Nigeria typically costs $330 per 1 CBM (cubic meter).</p>
        <p>Trader Logistic and Clearing ensures transparent pricing with no hidden charges.</p>
      </>
    ),
  },
  {
    q: 'What is USDC, and how do I pay with it?',
    a: (
      <>
        <p className="mb-[8px]">USD Coin (USDC) is a stablecoin tied to the US dollar (1 USDC ≈ $1), issued by Circle.</p>
        <p className="mb-[8px] font-medium text-primary-dark">How to Pay with USDC on Base</p>
        <p className="mb-[8px]">Get a Crypto Wallet — Use MetaMask or Trust Wallet.</p>
        <p className="mb-[8px]">Add the Base Network — In your wallet settings, add/select Base.</p>
        <p className="mb-[8px]">Buy or Transfer USDC — Purchase on Coinbase or Binance, withdraw to your Base wallet.</p>
        <p className="mb-[8px]">Get the Recipient Address — Trader Logistic Clearing Limited will provide their Base wallet address.</p>
        <p className="mb-[8px]">Send Payment — Open wallet, select USDC, paste address, enter amount, confirm.</p>
        <p className="mb-[8px] font-medium text-primary-dark">Important Tips</p>
        <p className="mb-[8px]">Always confirm the network is Base. Double-check the wallet address (can't be reversed). Keep a small ETH for gas fees.</p>
      </>
    ),
  },
]

export default function Testimonials() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative" id="faq">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[100px]">

        {/* White FAQ card
            Mobile: no overlap, px-20 py-24, rounded-20
            Desktop: -136px overlap, px-100 py-80, rounded-20, max-w-1096 */}
        <div className="relative z-10 mx-auto mt-5 overflow-hidden rounded-[20px] bg-white px-5 py-6
                        lg:-mt-[136px] lg:max-w-[1096px] lg:px-[100px] lg:pb-[80px] lg:pt-[80px]">

          {/* Heading
              Mobile: 28px/40lh centered
              Desktop: 48px/64lh centered */}
          <h2 className="text-center font-harmony text-[28px] font-bold leading-[40px] text-primary
                         lg:mx-auto lg:max-w-[500px] lg:text-[48px] lg:leading-[64px]">
            Frequently Asked Questions (FAQs)
          </h2>

          {/* Items */}
          <div className="mt-8 flex flex-col gap-8 lg:mx-auto lg:mt-[64px] lg:max-w-[896px]">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="overflow-hidden rounded-[16px] bg-primary-light
                                        px-4 py-5 lg:p-[32px]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start gap-3 text-left lg:gap-[40px]"
                  >
                    {/* Question — 16px mobile, 24px desktop */}
                    <span className="flex-1 font-harmony text-[16px] font-bold leading-[24px] text-primary-dark
                                     lg:text-[24px] lg:leading-[32px]">
                      {item.q}
                    </span>
                    {/* Chevron — 20px mobile, 32px desktop */}
                    <span className={`relative mt-0.5 size-5 shrink-0 transition-transform duration-200 lg:mt-1 lg:size-8 ${isOpen ? 'rotate-180' : ''}`}>
                      <Image src="/faq/chevron.svg" alt="" fill className="h-full w-full" />
                    </span>
                  </button>

                  {/* Answer — 14px mobile, 16px desktop */}
                  <div className={`grid transition-all duration-200 ${isOpen ? 'mt-4 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="font-harmony text-[14px] leading-5 text-[#6B7280] lg:text-[16px] lg:leading-6">
                        {typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
