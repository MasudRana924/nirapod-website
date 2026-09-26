export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string[]
}

export const experience: Experience[] = [
  {
    id: 'tell-us',
    company: 'Nirapod',
    role: 'Tell us who needs care',
    period: 'Step 1',
    description: [
      'Share who you are booking for — a parent, child, or family member.',
      'Tell us the type of support: caregiver, nurse, live-in, or short visits.',
    ],
  },
  {
    id: 'match',
    company: 'Nirapod',
    role: 'We match a verified professional',
    period: 'Step 2',
    description: [
      'We shortlist background-checked caregivers and nurses near you.',
      'You review profiles, availability, and care experience before confirming.',
    ],
  },
  {
    id: 'care-starts',
    company: 'Nirapod',
    role: 'Care starts at home',
    period: 'Step 3',
    description: [
      'The caregiver or nurse arrives at your home on the schedule you booked.',
      'You can extend, change, or book again whenever your family needs support.',
    ],
  },
]

export interface Activity {
  id: string
  title: string
  description: string
}

export const activities: Activity[] = [
  {
    id: 'verified',
    title: 'Verified professionals',
    description: 'Every caregiver and nurse is identity-checked and reviewed before they visit a home.',
  },
  {
    id: 'flexible',
    title: 'Flexible booking',
    description: 'Hourly visits, daily shifts, or live-in care — book what your family actually needs.',
  },
  {
    id: 'family-first',
    title: 'Family-first matching',
    description: 'We match language, gender preference, and care type so your loved one feels comfortable.',
  },
  {
    id: 'support',
    title: 'Ongoing support',
    description: 'Need a replacement or a longer booking? Our team stays available after care starts.',
  },
]

export interface Language {
  name: string
  proficiency: string
}

export const languages: Language[] = [
  {
    name: 'Bangla',
    proficiency: 'Care in Bangla',
  },
  {
    name: 'English',
    proficiency: 'Care in English',
  },
]
