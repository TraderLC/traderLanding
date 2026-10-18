'use client'

import Image from 'next/image'
import { useState } from 'react'

// Fixed China consolidation warehouse — customers ship their goods here.
// Mirrors the mobile app's Step 1 (EN / 中文).
const WAREHOUSE = {
  ENG: {
    label: 'Trader China address',
    toggle: 'English',
    address:
      'Africa Sea Warehouse, Ground Floor, Building 6, Tianshida, No. 44 Huayuan Avenue, Heshun, Lishui Town, Nanhai District, Foshan, Guangdong, China',
  },
  CHN: {
    label: 'Trader 中国地址',
    toggle: '中文',
    address:
      '广东省佛山市南海区里水镇和顺花园大道44号天仕达6号楼首层非洲海仓',
  },
}

export default function QuoteWarehouseCard() {
  const [lang, setLang] = useState<'ENG' | 'CHN'>('ENG')
  const [copied, setCopied] = useState(false)
  const w = WAREHOUSE[lang]

  const handleCopy = () => {
    navigator.clipboard
      ?.writeText(w.address)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      })
      .catch(() => {})
  }

  return (
    <div className="flex flex-col gap-[16px] rounded-[12px] border border-[#F2F3F5] bg-[#F8F8F9] p-[16px]">
      {/* Address label + language toggle */}
      <div className="flex items-center gap-[20px]">
        <div className="flex min-w-0 flex-1 items-center gap-[8px]">
          <Image src="/quote/location.svg" alt="" width={16} height={16} className="shrink-0" />
          <span className="font-harmony text-[16px] font-medium leading-[24px] text-primary">{w.label}</span>
        </div>
        <button
          type="button"
          onClick={() => setLang(lang === 'ENG' ? 'CHN' : 'ENG')}
          className="flex w-[140px] shrink-0 items-center justify-between rounded-[40px] border border-secondary-muted bg-white px-[8px] py-[6px] transition-colors hover:bg-[#F3F9FF]"
        >
          <span className="flex items-center gap-[4px]">
            <Image src="/quote/globe.svg" alt="" width={16} height={16} className="shrink-0" />
            <span className="font-harmony text-[16px] font-medium leading-none text-[#051D33]">{w.toggle}</span>
          </span>
          <Image src="/quote/chevron.svg" alt="" width={16} height={16} className="shrink-0" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-dashed border-[#E5E7EB]" />

      {/* Address + copy */}
      <div className="flex items-center gap-[20px]">
        <p className="min-w-0 flex-1 font-harmony text-[14px] font-normal leading-[20px] text-[#1C1C1C]">{w.address}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="flex shrink-0 items-center gap-[4px] rounded-[40px] border border-[#E1E7EB] bg-white px-[12px] py-[8px] transition-colors hover:bg-[#F5F7F8]"
        >
          <Image src="/quote/copy.svg" alt="" width={16} height={16} className="shrink-0" />
          <span className="font-harmony text-[16px] font-medium leading-none text-[#051D33]">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
    </div>
  )
}
