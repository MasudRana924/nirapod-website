'use client'

import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck2,
  Check,
  ShieldCheck,
} from 'lucide-react'

const careFeatures = [
  {
    icon: BriefcaseBusiness,
    title: 'Get Care Opportunities',
    text: 'Discover suitable care jobs near you and accept the ones that fit your schedule.',
  },
  {
    icon: CalendarCheck2,
    title: 'Manage Your Bookings',
    text: 'Keep every accepted service organised, from start to completion.',
  },
  {
    icon: ShieldCheck,
    title: 'Build Your Reputation',
    text: 'Earn trust through verified profiles, completed services and reviews.',
  },
]

export default function CareProfessionals() {
  return (
    <section id="families" className="bg-[#020d0d] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1.2fr] lg:gap-12">
          <div className="relative w-full overflow-hidden rounded-[30px] bg-[#d9d2c8] shadow-[0_35px_90px_rgba(0,0,0,0.2)]">
            <div className="w-full overflow-hidden rounded-[30px]">
              <img
                src="/hero_one.png"
                alt="Care professional"
                className="block h-auto w-full rounded-[30px] object-contain"
              />
            </div>

            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#13a39b] text-white">
                <Check className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="text-[0.9rem] font-semibold text-[#111827]">Verified professional</p>
                <p className="text-[0.7rem] text-[#4b5563]">eKYC identity checked</p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[700px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1 w-8 rounded-full bg-[#2ec4b6]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2ec4b6]">
                For care professionals
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
              Care for others.
              <span className="mt-2 block text-[#2ec4b6]">Build your career.</span>
            </h2>

            <p className="mt-6 max-w-[540px] text-lg leading-8 text-[#d7dfdd]">
              Nirapod helps verified caregivers and care professionals discover opportunities, manage
              bookings and build a trusted professional reputation.
            </p>

            <div className="mt-9 space-y-5">
              {careFeatures.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a2f2f] text-[#2ec4b6]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] font-bold text-white sm:text-xl">{title}</h3>
                    <p className="mt-1 text-base leading-7 text-[#d7dfdd]">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white px-5 py-4 text-base font-semibold text-[#0a1d1d] shadow-lg transition-opacity hover:opacity-90">
              Join as a Care Professional
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
