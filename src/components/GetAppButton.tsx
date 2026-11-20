'use client'

import { useState } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/app/id6777029145'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.traderlc.cargoport'

// Apple logo mark
function AppleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 12.54c-.03-2.53 2.07-3.75 2.16-3.81-1.18-1.72-3.01-1.96-3.66-1.98-1.56-.16-3.04.92-3.83.92-.79 0-2.01-.9-3.3-.87-1.7.02-3.26.99-4.14 2.51-1.77 3.07-.45 7.6 1.26 10.09.84 1.22 1.84 2.58 3.15 2.53 1.26-.05 1.74-.81 3.27-.81 1.52 0 1.96.81 3.3.79 1.36-.03 2.22-1.24 3.05-2.46.96-1.41 1.36-2.78 1.38-2.85-.03-.01-2.64-1.01-2.67-4.01l-.03-.05zM14.6 4.78c.7-.85 1.17-2.02 1.04-3.2-1.01.04-2.23.67-2.95 1.51-.65.75-1.21 1.95-1.06 3.1 1.12.09 2.27-.57 2.97-1.41z" />
    </svg>
  )
}

// Google Play triangle mark
function PlayIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
      <path d="M3.6 2.3c-.23.25-.36.63-.36 1.12v17.16c0 .49.13.87.36 1.12l.06.05L13.3 12.07v-.14L3.66 2.25l-.06.05z" fill="#00D4FF" />
      <path d="M16.5 15.35l-3.2-3.21v-.14l3.2-3.21.07.04 3.8 2.16c1.09.62 1.09 1.63 0 2.25l-3.8 2.16-.07-.05z" fill="#FFCE00" />
      <path d="M16.57 15.3l-3.27-3.27L3.6 21.7c.36.38.95.43 1.62.05l11.35-6.45" fill="#FF3333" />
      <path d="M16.57 8.73L5.22 2.28c-.67-.38-1.26-.33-1.62.05l9.7 9.7 3.27-3.3z" fill="#00F076" />
    </svg>
  )
}

export default function GetAppButton({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Download the Trader app"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="w-full max-w-[400px] rounded-[20px] bg-white p-6 shadow-xl"
          >
            <div className="mb-1 flex items-start justify-between">
              <h3 className="font-harmony text-[20px] font-bold text-primary">Get the Trader app</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="-mr-1 -mt-1 flex h-8 w-8 items-center justify-center rounded-full text-[#6b7280] transition-colors hover:bg-[#f3f3f6]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <p className="font-harmony mb-5 text-[14px] leading-[20px] text-[#6b7280]">
              Choose your platform to download.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-harmony flex items-center gap-3 rounded-[12px] border border-[#e5e7eb] px-4 py-3 text-primary transition-colors hover:bg-[#f8f8f9]"
              >
                <AppleIcon />
                <span className="flex flex-col">
                  <span className="text-[12px] leading-[16px] text-[#6b7280]">Download on the</span>
                  <span className="text-[17px] font-bold leading-[22px]">App Store</span>
                </span>
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-harmony flex items-center gap-3 rounded-[12px] border border-[#e5e7eb] px-4 py-3 text-primary transition-colors hover:bg-[#f8f8f9]"
              >
                <PlayIcon />
                <span className="flex flex-col">
                  <span className="text-[12px] leading-[16px] text-[#6b7280]">Get it on</span>
                  <span className="text-[17px] font-bold leading-[22px]">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
