import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy — Trader Logistics and Clearing',
  description:
    'How Trader Logistics and Clearing collects, uses, stores, discloses, and safeguards your personal information across our shipping, freight forwarding, customs clearing, and logistics services.',
}

const sections: LegalSection[] = [
  {
    id: 'introduction',
    heading: '1. Introduction',
    blocks: [
      'At Trader Logistics and Clearing Limited, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, disclose, and safeguard your information when you use our shipping, freight forwarding, customs clearing, and logistics services.',
      'By using our services, you agree to the practices described in this Privacy Policy.',
    ],
  },
  {
    id: 'information-we-collect',
    heading: '2. Information We Collect',
    blocks: [
      'We may collect the following information:',
      {
        list: [
          'Personal Information',
          'Full name',
          'Email address',
          'Phone number',
          'Residential or business address',
          'Identification information (where required for customs clearance)',
          'Payment and billing information',
          'Shipment Information',
          'Sender and recipient details',
          'Package contents and value',
          'Shipping addresses',
          'Customs documentation',
          'Tracking and delivery information',
          'Technical Information',
          'IP address',
          'Device information',
          'Browser type',
          'Website usage data',
          'Cookies and analytics information',
        ],
      },
    ],
  },
  {
    id: 'how-we-use',
    heading: '3. How We Use Your Information',
    blocks: [
      'We use your information to:',
      {
        list: [
          'Process and manage shipments',
          'Facilitate customs clearance procedures',
          'Verify customer identity',
          'Provide customer support',
          'Process payments and invoices',
          'Send shipment updates and notifications',
          'Improve our services and website',
          'Comply with legal and regulatory requirements',
          'Detect and prevent fraud or unauthorized activities',
        ],
      },
    ],
  },
  {
    id: 'sharing',
    heading: '4. Information Sharing and Disclosure',
    blocks: [
      'We may share your information with:',
      {
        list: [
          'Shipping carriers and logistics partners',
          'Customs authorities and government agencies',
          'Payment service providers',
          'Warehousing and delivery partners',
          'Professional advisers, auditors, and legal representatives',
          'Regulatory authorities when required by law',
        ],
      },
      'We do not sell or rent your personal information to third parties.',
    ],
  },
  {
    id: 'data-security',
    heading: '5. Data Security',
    blocks: [
      'We implement reasonable administrative, technical, and physical safeguards to protect your personal information against unauthorized access, disclosure, alteration, or destruction.',
      'However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'data-retention',
    heading: '6. Data Retention',
    blocks: [
      'We retain personal information only for as long as necessary to:',
      {
        list: [
          'Provide our services',
          'Maintain business records',
          'Meet legal, tax, customs, and regulatory obligations',
          'Resolve disputes and enforce agreements',
        ],
      },
      'When information is no longer required, it will be securely deleted or anonymized.',
    ],
  },
  {
    id: 'cookies',
    heading: '7. Cookies and Website Technologies',
    blocks: [
      'Our website may use cookies and similar technologies to:',
      {
        list: [
          'Improve website functionality',
          'Remember user preferences',
          'Analyze website traffic',
          'Enhance user experience',
        ],
      },
      'You may disable cookies through your browser settings, though some website features may not function properly.',
    ],
  },
  {
    id: 'your-rights',
    heading: '8. Your Rights',
    blocks: [
      'Subject to applicable laws, you may have the right to:',
      {
        list: [
          'Access your personal information',
          'Request correction of inaccurate information',
          'Request deletion of your information',
          'Object to certain processing activities',
          'Withdraw consent where processing is based on consent',
          'Request a copy of your personal data',
        ],
      },
      'Requests may be submitted using the contact information below.',
    ],
  },
  {
    id: 'international-transfers',
    heading: '9. International Data Transfers',
    blocks: [
      'Where necessary to provide shipping and logistics services, your information may be transferred to countries outside your country of residence. We take reasonable steps to ensure such transfers are protected in accordance with applicable laws.',
    ],
  },
  {
    id: 'children',
    heading: '10. Children’s Privacy',
    blocks: [
      'Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.',
    ],
  },
  {
    id: 'third-party',
    heading: '11. Third-Party Services',
    blocks: [
      'Our website or services may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties and encourage you to review their privacy policies.',
    ],
  },
  {
    id: 'changes',
    heading: '12. Changes to This Privacy Policy',
    blocks: [
      'We may update this Privacy Policy from time to time. Updated versions will be posted on our website with a revised effective date.',
      'Continued use of our services after changes are posted constitutes acceptance of the updated policy.',
    ],
  },
  {
    id: 'contact',
    heading: '13. Contact Us',
    blocks: [
      'If you have questions about this Privacy Policy or how your information is handled, please contact:',
      {
        list: [
          'Trader Logistic and Clearing Limited',
          'Address: No 5 Igboukwu Cresent Coker',
          'Email: Traderlogisticsclearing@gmail.com',
          'Phone: 08038277977',
        ],
      },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      dateLabel="Effective Date"
      date="13 June 2026"
      intro={[]}
      sections={sections}
    />
  )
}
