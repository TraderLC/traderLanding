'use client'

// Figma 759:223 — FAQ accordion. Items #F5F7F8, rounded-16, p-32.
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
    a: 'To get started, you only need to provide the following: Invoice or receipt of the goods, and a clear picture/image of the goods. That’s all. Trader Logistic and Clearing will handle the remaining documentation and customs processes on your behalf, making the experience simple and stress-free.',
  },
  {
    q: 'Do I need to visit the port for customs clearance?',
    a: 'No, you do not need to visit the port. Trader Logistic and Clearing handles the entire customs clearance and documentation process on your behalf. From paperwork to final release, we manage everything efficiently, saving you time, stress, and unnecessary delays.',
  },
  {
    q: 'How much does it cost to ship from China to Nigeria?',
    a: 'Shipping from China to Nigeria typically costs $330 per 1 CBM (cubic meter). Trader Logistic and Clearing ensures transparent pricing with no hidden charges.',
  },
  {
    q: 'What is USDC, and how do I pay with it?',
    a: 'USD Coin (USDC) is a stablecoin, meaning its value is tied to the US dollar (1 USDC ≈ $1). It’s issued by Circle and is widely used for fast, low-cost digital payments and transfers. To pay with USDC on Base: get a crypto wallet (e.g. MetaMask or Trust Wallet), add the Base network, buy or transfer USDC, get the recipient’s Base wallet address, send the payment and wait for confirmation. Always confirm the network is Base before sending, double-check the wallet address (crypto transactions can’t be reversed), and keep a small amount of ETH for gas fees.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-primary-light">
      <div className="mx-auto max-w-[1096px] px-6 py-16 lg:py-[80px]">
        <h2 className="font-harmony text-center text-[32px] font-bold leading-[1.2] text-primary lg:text-[48px] lg:leading-[64px]" id="faq">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="mt-10 flex flex-col gap-[32px] lg:mx-auto lg:mt-[64px] lg:w-[896px]">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="rounded-[16px] bg-primary-light p-[32px]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start gap-[40px] text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-harmony flex-1 text-[20px] font-bold leading-[32px] text-primary-dark lg:text-[24px]">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={32}
                    className={`shrink-0 text-primary-dark transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`grid transition-all duration-200 ${isOpen ? 'mt-4 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <p className="font-harmony overflow-hidden text-[16px] font-normal leading-[24px] text-[#6B7280]">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
