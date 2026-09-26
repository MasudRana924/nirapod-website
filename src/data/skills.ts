export interface SkillCategory {
  category: string
  skills: { name: string; experience: string }[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Caregivers',
    skills: [
      { name: 'Elderly care', experience: 'Daily living support, companionship, and medication reminders at home.' },
      { name: 'Personal care', experience: 'Bathing, dressing, mobility help, and meal assistance.' },
      { name: 'Live-in caregiver', experience: '24/7 presence for families who need round-the-clock support.' },
    ],
  },
  {
    category: 'Nursing',
    skills: [
      { name: 'Home nurse', experience: 'Registered nurses for injections, vitals, wound care, and recovery.' },
      { name: 'Post-surgery care', experience: 'Hospital-to-home support after operations or hospital discharge.' },
      { name: 'Chronic illness support', experience: 'Ongoing nursing for diabetes, hypertension, and long-term conditions.' },
    ],
  },
  {
    category: 'Family support',
    skills: [
      { name: 'Child & newborn care', experience: 'Trained nannies and newborn caregivers for parents at home.' },
      { name: 'Disability support', experience: 'Patient, respectful assistance for family members with special needs.' },
      { name: 'Companion care', experience: 'Trusted company for seniors who should not be left alone.' },
    ],
  },
]
