'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

type Variant = 'success' | 'error'

export default function Toast({
  open,
  message,
  variant = 'success',
  onClose,
  duration = 4500,
}: {
  open: boolean
  message: string
  variant?: Variant
  onClose: () => void
  duration?: number
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Auto-dismiss
  useEffect(() => {
    if (!open) return
    const t = setTimeout(onClose, duration)
    return () => clearTimeout(t)
  }, [open, duration, onClose])

  if (!mounted) return null

  const bg = variant === 'success' ? 'bg-accent-green' : 'bg-[#E5484D]'
  const icon = variant === 'success' ? '✓' : '!'

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed left-1/2 top-6 z-[9999] w-[calc(100%-32px)] max-w-[420px] -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0"
          role="status"
          aria-live="polite"
        >
          <div className={`flex items-start gap-3 rounded-[12px] ${bg} px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.18)]`}>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 font-harmony text-[14px] font-bold text-white">
              {icon}
            </span>
            <p className="flex-1 font-harmony text-[14px] font-medium leading-[20px] text-white">{message}</p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Dismiss"
              className="-mr-1 shrink-0 text-[18px] leading-none text-white/70 transition-colors hover:text-white"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
