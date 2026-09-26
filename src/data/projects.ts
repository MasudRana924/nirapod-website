export interface Project {
  id: string
  name: string
  category: string
  description: string
  technologies: string[]
  contribution: string
  period: string
  image: string
}

export const projects: Project[] = [
  {
    id: 'parents',
    name: 'Care for parents',
    category: 'Elderly care',
    description: 'Book a caregiver or nurse for aging parents — meals, mobility, medicine, and companionship at home.',
    technologies: ['Caregiver', 'Nurse', 'Live-in'],
    contribution: 'Ideal when you live away from home or cannot stay with them all day.',
    period: 'Hourly, daily, or monthly',
    image: '/hero_one.png',
  },
  {
    id: 'recovery',
    name: 'Recovery at home',
    category: 'Nursing',
    description: 'Bring a trained nurse home after surgery, illness, or hospital discharge so recovery stays safe and supervised.',
    technologies: ['Nurse', 'Wound care', 'Vitals'],
    contribution: 'Reduces hospital readmission risk and keeps family close during recovery.',
    period: 'Short-term or as needed',
    image: '/hero_two.png',
  },
  {
    id: 'children',
    name: 'Care for children',
    category: 'Family care',
    description: 'Trusted caregivers for newborns, children, and special-needs family members when parents need extra hands.',
    technologies: ['Newborn', 'Nanny', 'Special needs'],
    contribution: 'Background-checked caregivers matched to your family routine.',
    period: 'Part-time or full-time',
    image: '/hero_three.png',
  },
]
