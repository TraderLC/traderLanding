'use client'

// Figma 759:189 — dark #051D33 contact card with swoosh lines + form.
import { useState } from 'react'

const inputBase = 'w-full rounded-[8px] border border-[#E5E7EB] bg-[#F8F8F9] px-[16px] py-[14px] font-harmony text-[14px] leading-[20px] text-primary-dark placeholder:text-[#6B7280] outline-none focus:border-secondary disabled:opacity-60'
const label = 'font-harmony text-[16px] font-medium leading-[24px] text-white'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return
    setError('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setError('Please fill in your name, email, and message.')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          message: form.message.trim(),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        const msg = Array.isArray(data?.message) ? data.message[0] : data?.message
        throw new Error(msg || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm({ name: '', phone: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Could not send your message. Please try again.')
    }
  }

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
      <form onSubmit={handleSubmit} className="relative mt-10 flex flex-col gap-[56px] lg:absolute lg:left-[638px] lg:top-[56px] lg:mt-0 lg:w-[530px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="about-contact-name" className={label}>Name</label>
            <input id="about-contact-name" type="text" value={form.name} onChange={update('name')} disabled={status === 'submitting'} placeholder="Enter name" className={inputBase} />
          </div>
          <div className="flex flex-col gap-[24px] sm:flex-row">
            <div className="flex flex-1 flex-col gap-[8px]">
              <label htmlFor="about-contact-phone" className={label}>Phone Number</label>
              <input id="about-contact-phone" type="tel" value={form.phone} onChange={update('phone')} disabled={status === 'submitting'} placeholder="0812 345 6790" className={inputBase} />
            </div>
            <div className="flex flex-1 flex-col gap-[8px]">
              <label htmlFor="about-contact-email" className={label}>Email Address</label>
              <input id="about-contact-email" type="email" value={form.email} onChange={update('email')} disabled={status === 'submitting'} placeholder="example@gmail.com" className={inputBase} />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="about-contact-message" className={label}>How can we help you?</label>
            <textarea id="about-contact-message" value={form.message} onChange={update('message')} disabled={status === 'submitting'} placeholder="Write here" rows={4} className={`${inputBase} h-[100px] resize-none`} />
          </div>

          {/* Status messages */}
          {status === 'success' && (
            <p className="font-harmony text-[14px] font-medium leading-[20px] text-accent-green">
              ✓ Thanks! Your message has been sent — we’ll be in touch shortly.
            </p>
          )}
          {status === 'error' && error && (
            <p className="font-harmony text-[14px] font-medium leading-[20px] text-[#FF6F3C]">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="font-harmony flex h-[56px] items-center justify-center rounded-[8px] bg-secondary px-[40px] text-[16px] font-medium leading-[24px] text-white transition-colors hover:bg-[#0d7ce0] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? 'Sending…' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
