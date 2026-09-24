import type { FinanceLesson } from '@/features/finance/types'

export const financeLessons: FinanceLesson[] = [
  {
    id: 'bank-account-basics',
    order: 1,
    title: 'Bank account basics',
    summary: 'What a savings account is for and the main numbers you will see.',
    readMinutes: 6,
    sections: [
      {
        heading: 'Why people use a bank account',
        paragraphs: [
          'A bank account is a safe place to keep money you are not spending today. It helps you receive salary or family transfers, pay bills, and save a little at a time.',
          'This lesson is general education only — it is not advice about which bank or product to choose.',
        ],
      },
      {
        heading: 'Common account types (simple view)',
        paragraphs: [
          'Many households use a savings account for everyday money and small savings. Some people also have a current account for business, but that is optional for home use.',
          'Your passbook or app shows your balance: money available after recent deposits and withdrawals.',
        ],
      },
      {
        heading: 'Numbers you should know',
        paragraphs: [
          'Account number: identifies your account (share only with people or services you trust).',
          'IFSC code: used for bank transfers within India — your branch can tell you yours.',
          'Customer ID or CIF: helps the bank find your profile when you call support.',
        ],
      },
    ],
    keyTakeaways: [
      'A savings account is for safe everyday money and small savings.',
      'Know your balance and keep account details private.',
      'Use official bank channels when you have questions.',
    ],
    tryItYourself: 'Open your bank app or passbook and find your account number and IFSC — without sharing them with anyone.',
  },
  {
    id: 'upi-basics',
    order: 2,
    title: 'UPI basics',
    summary: 'Send and receive small payments with apps like PhonePe, Google Pay, or your bank app.',
    readMinutes: 7,
    sections: [
      {
        heading: 'What UPI is',
        paragraphs: [
          'UPI (Unified Payments Interface) lets you pay shops or people using a UPI ID or QR code, usually from your phone.',
          'Money moves from your linked bank account. You still need enough balance in the account.',
        ],
      },
      {
        heading: 'Setting up safely',
        paragraphs: [
          'Install apps only from the official Play Store or App Store. Link the bank account you use for household spending.',
          'Choose a UPI PIN that only you know — it is like an ATM PIN for app payments.',
        ],
      },
      {
        heading: 'Before you tap Pay',
        paragraphs: [
          'Check the recipient name and amount on the confirmation screen.',
          'For unknown QR codes in messages, ask what the payment is for before paying.',
        ],
      },
    ],
    keyTakeaways: [
      'UPI pays from your linked bank account.',
      'Verify name and amount every time.',
      'Never share your UPI PIN or OTP.',
    ],
    tryItYourself: 'Send ₹1 to a family member you trust, or pay a small shop bill, and read every confirmation screen slowly.',
  },
  {
    id: 'understanding-bank-statements',
    order: 3,
    title: 'Understanding bank statements',
    summary: 'Read deposits, withdrawals, and dates without feeling overwhelmed.',
    readMinutes: 8,
    sections: [
      {
        heading: 'What a statement shows',
        paragraphs: [
          'A statement is a list of money in and money out over a period — often one month.',
          'Each line usually has a date, description, debit (out), credit (in), and balance.',
        ],
      },
      {
        heading: 'Common entries at home',
        paragraphs: [
          'Salary or transfer in — credit.',
          'ATM withdrawal, UPI payment, bill debit — debit.',
          'Bank charges or SMS fees — small debits; note them for your budget.',
        ],
      },
      {
        heading: 'When something looks wrong',
        paragraphs: [
          'If you do not recognize a payment, check with family who share the account.',
          'If it still looks wrong, call the bank using the official number — not a number from a random message.',
        ],
      },
    ],
    keyTakeaways: [
      'Credits add money; debits take money out.',
      'Scan descriptions to match real spending.',
      'Report unknown entries through official bank support.',
    ],
    tryItYourself: 'Download or open last month’s statement and circle three payments you remember making.',
  },
  {
    id: 'household-budgeting',
    order: 4,
    title: 'Household budgeting',
    summary: 'A simple plan for income, needs, and a little room for surprises.',
    readMinutes: 8,
    sections: [
      {
        heading: 'What a budget is',
        paragraphs: [
          'A budget is not punishment — it is a friendly plan for where money usually goes: food, rent, school, medicine, transport, and savings.',
          'You can adjust it when life changes. Perfect numbers are not required.',
        ],
      },
      {
        heading: 'A gentle method',
        paragraphs: [
          'Write monthly income (salary, support, or other regular inflow).',
          'List fixed costs you know (rent, fees, loan EMIs if any).',
          'Estimate flexible costs (groceries, utilities). Use the Expense Tracker in this module to learn your real patterns.',
        ],
      },
      {
        heading: 'Review once a month',
        paragraphs: [
          'Pick one calm evening to compare plan vs actual spending.',
          'Celebrate what went well; change one category next month if something was always tight.',
        ],
      },
    ],
    keyTakeaways: [
      'Budgets are plans, not tests.',
      'Start with income, fixed bills, then everyday spending.',
      'Small monthly reviews beat perfect spreadsheets.',
    ],
    tryItYourself: 'Write down three fixed costs and one flexible cost for this month.',
  },
  {
    id: 'savings',
    order: 5,
    title: 'Savings',
    summary: 'Why saving a little regularly matters for goals and peace of mind.',
    readMinutes: 6,
    sections: [
      {
        heading: 'Saving vs investing',
        paragraphs: [
          'Saving usually means setting money aside in a safe place (like a savings account) for goals you will need soon.',
          'Investing (stocks, mutual funds, etc.) has ups and downs and needs more learning. This app does not tell you what to invest in.',
        ],
      },
      {
        heading: 'Small habits',
        paragraphs: [
          'Even ₹100–500 on a set day each month builds a habit.',
          'Name your goal: festival expenses, school fees, or a new appliance — naming helps you stick with it.',
        ],
      },
      {
        heading: 'Keep it realistic',
        paragraphs: [
          'Save after essential bills if money is tight — any amount counts.',
          'Separate “spending money” from “saved money” in your mind or in a sub-account if your bank offers one.',
        ],
      },
    ],
    keyTakeaways: [
      'Regular small savings add up.',
      'Goals make saving easier to remember.',
      'Learn investing separately when you are ready — no rush.',
    ],
    tryItYourself: 'Pick one goal and decide a tiny amount you could set aside this month.',
  },
  {
    id: 'emergency-fund',
    order: 6,
    title: 'Emergency fund',
    summary: 'Money reserved for sudden needs — not for daily shopping.',
    readMinutes: 6,
    sections: [
      {
        heading: 'What counts as an emergency',
        paragraphs: [
          'Unexpected medical bills, urgent travel, or broken essentials (like a fridge) — not sales or optional treats.',
          'The fund helps you avoid borrowing at high interest for surprises.',
        ],
      },
      {
        heading: 'How much to aim for',
        paragraphs: [
          'A common guide is one to three months of essential expenses — but start with any cushion you can.',
          'Build slowly alongside normal savings; there is no deadline.',
        ],
      },
      {
        heading: 'Where to keep it',
        paragraphs: [
          'Many people use a separate savings account or a clearly labeled balance so they do not spend it casually.',
          'It should be easy to access in a real emergency, not locked away for years.',
        ],
      },
    ],
    keyTakeaways: [
      'Emergency money is for surprises, not wants.',
      'Start small and grow over time.',
      'Keep it accessible but separate from daily spending.',
    ],
    tryItYourself: 'List two emergencies that would stress your budget — that shows why a cushion helps.',
  },
  {
    id: 'insurance-basics',
    order: 7,
    title: 'Insurance basics',
    summary: 'How insurance can reduce big sudden costs — in plain language.',
    readMinutes: 7,
    sections: [
      {
        heading: 'The idea',
        paragraphs: [
          'You pay a smaller regular premium so that if a covered event happens (hospital stay, accident, etc.), the insurer helps pay large bills according to the policy.',
          'Policies have rules, limits, and exclusions — always read the summary or ask an agent clearly.',
        ],
      },
      {
        heading: 'Types you may hear about',
        paragraphs: [
          'Health insurance — helps with medical costs.',
          'Life insurance — supports dependents if something happens to the earner; types and needs vary by family.',
          'Vehicle insurance — often required by law for cars and bikes.',
        ],
      },
      {
        heading: 'Shopping carefully',
        paragraphs: [
          'Compare coverage and waiting periods, not just the cheapest premium.',
          'Buy from licensed companies. Avoid sharing OTP or full payment to strangers promising “cheap policy.”',
        ],
      },
    ],
    keyTakeaways: [
      'Insurance shares big risks; it is not a savings account.',
      'Read what is covered and what is not.',
      'Use licensed providers and official paperwork.',
    ],
    tryItYourself: 'Find one insurance document at home and locate the helpline number and renewal date.',
  },
  {
    id: 'loan-basics',
    order: 8,
    title: 'Loan basics',
    summary: 'Borrowing money: EMI, interest, and questions to ask.',
    readMinutes: 8,
    sections: [
      {
        heading: 'What a loan is',
        paragraphs: [
          'A loan is money you borrow now and repay over time, usually with extra cost called interest.',
          'Home, education, personal, and gold loans are common — each has different rules.',
        ],
      },
      {
        heading: 'EMI in simple terms',
        paragraphs: [
          'EMI (Equated Monthly Installment) is a fixed payment each month until the loan ends.',
          'Part of EMI pays interest; part reduces what you still owe (principal). Early statements show more interest.',
        ],
      },
      {
        heading: 'Before you sign',
        paragraphs: [
          'Ask: total interest, total repayment, fees, and what happens if you miss a payment.',
          'Avoid informal lenders who pressure you or keep your ID cards. Use registered banks or NBFCs you recognize.',
        ],
      },
    ],
    keyTakeaways: [
      'Loans cost more than the amount borrowed because of interest.',
      'Understand EMI and total repayment before agreeing.',
      'Say no to pressure and unclear paperwork.',
    ],
    tryItYourself: 'If you have a loan, find the EMI amount and due date on your statement or app.',
  },
  {
    id: 'online-financial-safety',
    order: 9,
    title: 'Online financial safety',
    summary: 'Stay safer when banking, paying bills, or shopping on your phone.',
    readMinutes: 7,
    sections: [
      {
        heading: 'Devices and apps',
        paragraphs: [
          'Keep your phone locked with a PIN or fingerprint.',
          'Update banking and UPI apps when the store suggests — updates fix security issues.',
        ],
      },
      {
        heading: 'Networks',
        paragraphs: [
          'Avoid logging into net banking on public Wi‑Fi you do not trust. Mobile data or home Wi‑Fi with a password is safer.',
          'Log out when you finish on a shared family computer.',
        ],
      },
      {
        heading: 'Phishing',
        paragraphs: [
          'Fake emails or sites mimic banks to steal passwords. Type bank addresses yourself; do not trust “click here” links in SMS.',
          'See the Money Safety tab in this module for quick reminders.',
        ],
      },
    ],
    keyTakeaways: [
      'Lock your phone and use official apps.',
      'Prefer trusted networks for banking.',
      'Type bank URLs yourself; ignore suspicious links.',
    ],
    tryItYourself: 'Check that your banking app is the official one from your bank’s website link.',
  },
  {
    id: 'scam-awareness',
    order: 10,
    title: 'Scam awareness',
    summary: 'Recognize common tricks so you can pause before losing money.',
    readMinutes: 8,
    sections: [
      {
        heading: 'Patterns scammers use',
        paragraphs: [
          'Unexpected prizes, fake job offers, “digital arrest,” or customs fines — all often ask for urgent payment or OTP.',
          'They may pretend to be bank staff, police, or delivery companies. Real officials do not demand secret OTPs on call.',
        ],
      },
      {
        heading: 'Remote access tricks',
        paragraphs: [
          'Never install “help” apps or share screen access with strangers who call you.',
          'If someone guides you to transfer all savings “for safety,” it is almost always a scam.',
        ],
      },
      {
        heading: 'If you are unsure',
        paragraphs: [
          'Hang up. Call your bank on the official number. Talk to a family member you trust.',
          'Reporting quickly helps banks try to stop transfers — see cybercrime helpline 1930 in India for guidance.',
        ],
      },
    ],
    keyTakeaways: [
      'Urgency and secrecy are red flags.',
      'Banks never ask for OTP to “secure” your account.',
      'Pause and verify with official numbers.',
    ],
    tryItYourself: 'Save helpline 1930 in your phone contacts for cyber fraud guidance.',
  },
]

export function getFinanceLessonById(lessonId: string): FinanceLesson | undefined {
  return financeLessons.find((lesson) => lesson.id === lessonId)
}

export function getFinanceLessonsSorted(): FinanceLesson[] {
  return [...financeLessons].sort((a, b) => a.order - b.order)
}
