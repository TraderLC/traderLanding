import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Delete Your Account — Trader Logistics and Clearing',
  description:
    'How to permanently delete your Traderlc account and personal data, and what information is removed or retained.',
}

const sections: LegalSection[] = [
  {
    id: 'overview',
    heading: '1. Overview',
    blocks: [
      'This page explains how to permanently delete your **Traderlc** account (operated by Trader Logistics and Clearing Limited) and what happens to your data when you do. Account deletion is available to every registered user, free of charge, and takes effect immediately.',
    ],
  },
  {
    id: 'how-to-delete',
    heading: '2. How to Delete Your Account',
    blocks: [
      'You can delete your account using any of the following methods:',
      {
        list: [
          'In the Traderlc mobile app: open the Settings tab, tap "Delete Account", and confirm. Your account is deleted immediately.',
          'On the web: sign in at https://app.traderlc.com, go to Settings, open the Security tab, and use "Delete Account". Type DELETE to confirm.',
          'By email: if you can no longer access your account, send a deletion request to support@traderlc.com from the email address registered to your account. We will verify your identity and complete the deletion within 7 days.',
        ],
      },
    ],
  },
  {
    id: 'what-is-deleted',
    heading: '3. What Data Is Deleted',
    blocks: [
      'When your account is deleted, the following personal data is permanently removed or irreversibly anonymized immediately:',
      {
        list: [
          'Your name, email address, and phone number',
          'Your password and sign-in credentials, including any linked Google sign-in',
          'Saved delivery addresses and customer profile details',
          'Profile photo',
          'Notification history and push notification tokens',
          'Two-factor authentication secrets and backup codes',
          'All active sessions — you are signed out on every device',
        ],
      },
      'Deletion is permanent and cannot be undone. Your email address becomes available for creating a new account afterwards.',
    ],
  },
  {
    id: 'what-is-retained',
    heading: '4. What Data Is Retained',
    blocks: [
      'Shipment, invoice, and payment records are retained in **anonymized form** — with all personal identifiers removed — because we are legally required to keep business and financial records for tax, customs, and audit purposes. These retained records can no longer be linked to you.',
      'Anonymized records are kept for the retention period required by applicable Nigerian tax and customs regulations (typically 6 years), after which they are eligible for permanent erasure.',
    ],
  },
  {
    id: 'questions',
    heading: '5. Questions',
    blocks: [
      'If you have any questions about account deletion or your data, contact us at support@traderlc.com.',
    ],
  },
]

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete Your Account"
      dateLabel="Last updated"
      date="31 October 2026"
      intro={[]}
      sections={sections}
    />
  )
}
