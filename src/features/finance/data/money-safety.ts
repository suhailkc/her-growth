import type { MoneySafetyCard } from '@/features/finance/types'

export const moneySafetyCards: MoneySafetyCard[] = [
  {
    id: 'never-share-otp',
    title: 'Never share your OTP',
    summary: 'A one-time password is only for you.',
    body: 'Banks and real payment apps will never ask for your OTP on a phone call or chat. If someone asks, stop and call your bank using the number on your passbook or card — not the number they give you.',
  },
  {
    id: 'verify-payment-requests',
    title: 'Verify payment requests',
    summary: 'Check the name and amount before you pay.',
    body: 'Read the screen carefully: who receives the money, how much, and why. If a message says “pay to unlock a prize” or “refund failed — pay again,” treat it as suspicious until someone you trust helps you verify.',
  },
  {
    id: 'check-urls',
    title: 'Check website addresses (URLs)',
    summary: 'Small spelling changes can mean a fake site.',
    body: 'Before logging into net banking, look at the address bar. Official bank sites use HTTPS and a name you recognize. Avoid links from unknown SMS or WhatsApp messages — type the bank address yourself or use the official app.',
  },
  {
    id: 'beware-urgent-requests',
    title: 'Beware of urgent requests',
    summary: 'Scammers push you to hurry.',
    body: 'Messages like “Your account will close in one hour” or “Pay now or police will come” are common tricks. Real banks give you time and clear steps. Pause, breathe, and talk to a trusted person before sending money.',
  },
  {
    id: 'protect-banking-passwords',
    title: 'Protect banking passwords and PINs',
    summary: 'Keep login details private and unique.',
    body: 'Do not write PINs on your card or share them with family apps that are not official. Use a PIN only you know, and change passwords if you think someone saw them. This app does not connect to your bank — your real passwords stay with your bank only.',
  },
]
