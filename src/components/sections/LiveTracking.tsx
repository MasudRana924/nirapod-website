'use client'

import { Check, Clock3, MapPin, ShieldCheck, UserRound } from 'lucide-react'

const steps = [
  {
    icon: UserRound,
    title: 'Caregiver assigned',
    description: 'You will know exactly who is coming and when.',
    active: true,
  },
  {
    icon: Clock3,
    title: 'On the way',
    description: 'Follow the arrival in real time on a simple map.',
    active: false,
    badge: 'Live',
  },
  {
    icon: MapPin,
    title: 'Arrived',
    description: 'The visit starts, and you receive an update the moment it does.',
    active: false,
  },
]

export default function LiveTracking() {
  return (
    <section className="bg-[#f4efe9] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:gap-14">
          <div className="max-w-[720px]">
            <div className="mb-6 flex items-center gap-3 text-[#1c7d7a]">
              <span className="h-px w-10 bg-[#1c7d7a]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Live tracking</span>
            </div>

            <h2 className="max-w-[620px] text-4xl font-black leading-[1.04] tracking-[-0.06em] text-[#1a1d1d] sm:text-5xl lg:text-[4rem]">
              Know what&apos;s happening.
              <span className="mt-2 block">Every step of the way.</span>
            </h2>

            <div className="mt-10 space-y-6">
              {steps.map(({ icon: Icon, title, description, active, badge }) => (
                <div key={title} className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                      active
                        ? 'border-[#1c7d7a] bg-[#dff4f1] text-[#1c7d7a]'
                        : 'border-[#d0d7d3] bg-[#edf1ee] text-[#5d6767]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="flex flex-1 items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-[1.08rem] font-semibold text-[#1a1d1d] sm:text-xl">{title}</p>
                        {badge && (
                          <span className="rounded-full bg-[#f0d7b5] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#7b4d15]">
                            {badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 max-w-[460px] text-base leading-7 text-[#3d4747] sm:text-lg">
                        {description}
                      </p>
                    </div>

                    {active && (
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#dff4f1] text-[#1c7d7a]">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[430px] rounded-[36px] border-[10px] border-[#0f1717] bg-[#0d1b1b] p-3 shadow-[0_28px_80px_rgba(10,18,18,0.25)]">
              <div className="rounded-[28px] bg-[#eef5f3] p-4">
                <div className="mb-4 flex items-center justify-between text-[0.7rem] font-medium text-[#374141]">
                  <span>9:41</span>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#303a3a]" />
                    <span className="h-2 w-2 rounded-full bg-[#303a3a]" />
                    <span className="h-2 w-2 rounded-full bg-[#303a3a]" />
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[22px] bg-[#edf8f5] p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(19,163,155,0.18),_rgba(19,163,155,0)_60%)]" />
                  <div className="relative h-[400px] rounded-[18px] border border-[#a4d8d0] bg-[#f8fcfb]">
                    <div className="absolute inset-x-0 top-0 h-full w-full bg-[linear-gradient(to_right,_transparent_0,_transparent_calc(33.333%_-_1px),_rgba(19,163,155,0.22)_33.333%_calc(33.333%_+_1px),_transparent_calc(33.333%_+_1px),_transparent_100%)]" />
                    <div className="absolute inset-y-0 left-0 h-full w-full bg-[linear-gradient(to_bottom,_transparent_0,_transparent_calc(33.333%_-_1px),_rgba(19,163,155,0.22)_33.333%_calc(33.333%_+_1px),_transparent_calc(33.333%_+_1px),_transparent_100%)]" />

                    <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#2ec4b6] bg-white/50" />
                    <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2ec4b6]" />

                    <div className="absolute left-[25%] top-[28%] h-8 w-8 rounded-full bg-[#2ec4b6]/20" />
                    <div className="absolute right-[18%] bottom-[24%] h-7 w-7 rounded-full bg-[#2ec4b6]/20" />

                    <div className="absolute left-4 top-4 flex items-center gap-3 rounded-full bg-white/90 px-3 py-2 shadow-sm">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff4f1] text-[#1c7d7a]">
                        <UserRound className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[0.72rem] font-semibold text-[#1a1d1d]">Nusrat Ara</p>
                        <p className="text-[0.58rem] text-[#5d6767]">Arriving in 12 min</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3 rounded-[18px] bg-white/75 px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-3 text-[#1a1d1d]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dff4f1] text-[#1c7d7a]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-[0.9rem] font-medium">Caregiver assigned</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#1a1d1d]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dff4f1] text-[#1c7d7a]">
                      <Clock3 className="h-3 w-3" />
                    </span>
                    <span className="text-[0.9rem] font-medium">On the way</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#7a8383]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#c9d3d1] text-[#8f9b9a]">
                      <MapPin className="h-3 w-3" />
                    </span>
                    <span className="text-[0.9rem]">Arrived</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <button className="rounded-full border border-[#bfe2dc] bg-[#eaf5f3] px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#1a1d1d]">
                  Live booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
