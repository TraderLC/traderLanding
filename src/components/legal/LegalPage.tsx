// Reusable shell for legal pages (Terms, Privacy). Static / server component.
// Matches Figma 871:8413 — #355C7B header band (h-280, 80px centered title),
// single ~1070px body column, numbered #355C7B bold-18 headings, 16px regular #1C1C1C
// copy, plain stacked lists. Navbar/Footer come from layout.

import type { ReactNode } from 'react'

export type LegalBlock = string | { list: string[] }
export type LegalSection = { id?: string; heading: string; blocks: LegalBlock[] }

// Auto-link emails and phone numbers (rendered in secondary blue), like the design.
function linkify(text: string, keyBase: string): ReactNode {
  const nodes: ReactNode[] = []
  const regex = /([\w.+-]+@[\w-]+\.[\w.-]+)|(\+?\d[\d\s-]{7,}\d)/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    const tok = m[0]
    const href = tok.includes('@') ? `mailto:${tok}` : `tel:${tok.replace(/[\s-]/g, '')}`
    nodes.push(
      <a key={`${keyBase}-${i}`} href={href} className="text-secondary underline-offset-2 hover:underline">
        {tok}
      </a>,
    )
    last = m.index + tok.length
    i++
  }
  if (last < text.length) nodes.push(text.slice(last))
  return <>{nodes}</>
}

// Renders inline **bold** spans + auto-linked email/phone inside legal copy.
function renderInline(text: string): ReactNode {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={`b-${i}`} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={`t-${i}`}>{linkify(part, `t-${i}`)}</span>
        ),
      )}
    </>
  )
}

export default function LegalPage({
  title,
  date,
  dateLabel = 'Last updated',
  intro,
  sections,
}: {
  title: string
  date: string
  dateLabel?: string
  intro: string[]
  sections: LegalSection[]
}) {
  return (
    <>
      {/* ── Header band — bg primary, centered title ── */}
      <section className="flex items-center justify-center bg-primary px-5 py-16 lg:h-[280px] lg:py-0">
        <h1 className="font-harmony text-center text-[40px] font-bold leading-[1.1] text-white lg:text-[80px] lg:leading-normal">
          {title}
        </h1>
      </section>

      {/* ── Body — single centered column ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1070px] px-5 py-14 lg:px-0 lg:pb-[120px] lg:pt-[80px]">
          {/* Effective / Last-updated date — bold 18px primary-dark */}
          <p className="font-harmony text-[16px] font-bold leading-[28px] text-primary-dark lg:text-[18px] lg:leading-[32px]">
            {dateLabel}: {date}
          </p>

          {/* Intro */}
          <div className="mt-6 space-y-2">
            {intro.map((p, i) => (
              <p key={i} className="font-harmony text-[16px] font-normal leading-[24px] text-[#1C1C1C]">
                {renderInline(p)}
              </p>
            ))}
          </div>

          {/* Sections — gap 32 between, heading→body gap 16 */}
          <div className="mt-[32px] flex flex-col gap-[32px]">
            {sections.map((section) => (
              <div key={section.id ?? section.heading} id={section.id} className="scroll-mt-28">
                <h2 className="font-harmony text-[18px] font-bold leading-[32px] text-primary">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-2">
                  {section.blocks.map((block, bi) =>
                    typeof block === 'string' ? (
                      <p key={bi} className="font-harmony text-[16px] font-normal leading-[24px] text-[#1C1C1C]">
                        {renderInline(block)}
                      </p>
                    ) : (
                      <div key={bi} className="flex flex-col gap-2">
                        {block.list.map((li, li2) => (
                          <p key={li2} className="font-harmony text-[16px] font-normal leading-[24px] text-[#1C1C1C]">
                            {renderInline(li)}
                          </p>
                        ))}
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
