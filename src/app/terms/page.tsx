import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service — Trader Logistics and Clearing',
  description:
    'The terms governing your use of Trader Logistics and Clearing’s shipping, customs clearing, and payment services between China and Nigeria.',
}

const intro: string[] = []

const sections: LegalSection[] = [
  {
    id: 'introduction',
    heading: '1. Introduction',
    blocks: [
      'Welcome to Trader Logistics and Clearing Limited. By using our shipping, freight forwarding, customs clearing, and logistics services, you agree to these Terms of Service.',
    ],
  },
  {
    id: 'services',
    heading: '2. Services',
    blocks: [
      'We provide:',
      {
        list: [
          'Shipping and freight forwarding',
          'Customs clearing and brokerage assistance',
          'Warehousing and storage (if applicable)',
          'Delivery and logistics coordination',
        ],
      },
      'We reserve the right to modify, suspend, or discontinue services at any time.',
    ],
  },
  {
    id: 'customer-responsibilities',
    heading: '3. Customer Responsibilities',
    blocks: [
      'Customers agree to:',
      {
        list: [
          'Provide accurate shipment information and documentation.',
          'Comply with all applicable import, export customs, and transportation laws.',
          'Ensure goods are lawful and properly packaged.',
          'Pay all applicable charges, duties, taxes, and fees.',
        ],
      },
    ],
  },
  {
    id: 'prohibited-items',
    heading: '4. Prohibited Items',
    blocks: [
      'We do not transport or clear:',
      {
        list: [
          'Illegal goods',
          'Hazardous materials without proper authorization',
          'Counterfeit products',
          'Restricted or sanctioned items',
          'Any goods prohibited by applicable laws',
        ],
      },
    ],
  },
  {
    id: 'pricing-payment',
    heading: '5. Pricing and Payment',
    blocks: [
      {
        list: [
          'Prices are subject to change based on carrier rates, customs duties, taxes, and other charges.',
          'Payment is due according to the invoice terms.',
          'Late payments may incur additional fees.',
          'Customers are responsible for customs duties, taxes, inspections, storage charges, and government fees.',
        ],
      },
    ],
  },
  {
    id: 'customs-clearance',
    heading: '6. Customs Clearance',
    blocks: [
      {
        list: [
          'We act as an intermediary and do not guarantee customs approval.',
          'Delays caused by customs authorities are outside our control.',
          'Customers are responsible for the accuracy of all customs declarations and supporting documents.',
        ],
      },
    ],
  },
  {
    id: 'delivery-transit',
    heading: '7. Delivery and Transit Times',
    blocks: [
      'Estimated delivery dates are not guaranteed.',
      'We are not liable for delays caused by:',
      {
        list: [
          'Customs inspections',
          'Weather conditions',
          'Port congestion',
          'Government actions',
          'Carrier delays',
          'Force majeure events',
        ],
      },
    ],
  },
  {
    id: 'loss-damage-claims',
    heading: '8. Loss, Damage, and Claims',
    blocks: [
      {
        list: [
          'Customers must inspect shipments upon receipt.',
          'Claims for loss or damage must be submitted within [7–30] days of delivery.',
          'Liability is limited to the extent permitted by law and any applicable carrier limitations.',
          'We recommend cargo insurance for valuable shipments.',
        ],
      },
    ],
  },
  {
    id: 'insurance',
    heading: '9. Insurance',
    blocks: [
      'Unless expressly agreed in writing, shipments are not automatically insured.',
      'Customers may purchase additional cargo insurance.',
    ],
  },
  {
    id: 'limitation-of-liability',
    heading: '10. Limitation of Liability',
    blocks: [
      'To the maximum extent permitted by law, our liability shall not exceed:',
      {
        list: [
          'The amount paid for the affected shipment; or',
          'Any lower limitation imposed by applicable transportation laws.',
        ],
      },
      'We are not liable for:',
      {
        list: [
          'Indirect or consequential losses',
          'Loss of profits',
          'Business interruption',
          'Delays outside our control',
        ],
      },
    ],
  },
  {
    id: 'storage-abandoned-cargo',
    heading: '11. Storage and Abandoned Cargo',
    blocks: [
      'Storage fees may apply for goods held beyond the agreed period.',
      'Unclaimed cargo may be disposed of or sold where permitted by law to recover outstanding charges.',
    ],
  },
  {
    id: 'intellectual-property',
    heading: '12. Intellectual Property',
    blocks: [
      'All website content, logos, trademarks, and materials belong to Trader Logistics and Clearing Limited and may not be used without permission.',
    ],
  },
  {
    id: 'privacy',
    heading: '13. Privacy',
    blocks: [
      'Use of our services is subject to our Privacy Policy, which explains how we collect and process personal information.',
    ],
  },
  {
    id: 'termination',
    heading: '14. Termination',
    blocks: [
      'We may suspend or terminate services if:',
      {
        list: [
          'These terms are violated.',
          'Fraudulent activity is suspected.',
          'Required payments are not made.',
        ],
      },
    ],
  },
  {
    id: 'governing-law',
    heading: '15. Governing Law',
    blocks: [
      'These Terms shall be governed by the laws of Nigeria and any disputes shall be resolved in the courts of Nigeria, unless otherwise agreed in writing.',
    ],
  },
  {
    id: 'contact',
    heading: '16. Contact Information',
    blocks: [
      'Trader Logistics and Clearing Limited',
      'Address: No 5 Igboukwu Cresent, Coker',
      'Email: Traderlogisticsclearing@gmail.com',
      'Phone: 08038277977',
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      dateLabel="Effective Date"
      date="13 June 2026"
      intro={intro}
      sections={sections}
    />
  )
}
