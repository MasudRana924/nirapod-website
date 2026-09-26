'use client'

const steps = [
  {
    number: '01',
    title: 'Choose a Service',
    description: 'Tell us what your loved one needs.',
  },
  {
    number: '02',
    title: 'Find the Right Professional',
    description: 'Browse verified caregivers, nurses and care professionals.',
  },
  {
    number: '03',
    title: 'Book & Pay Securely',
    description: 'Confirm the service and pay securely through the app.',
  },
  {
    number: '04',
    title: 'Track the Care',
    description: 'Stay updated from booking to completion.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#ebf9f5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1700px]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.45fr] lg:gap-8">
          <div className="w-full max-w-[700px]">
            <div className="mb-8 flex items-center gap-3 text-[#196d6b]">
              <span className="h-px w-10 bg-[#196d6b]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">How it works</span>
            </div>

            <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.06em] text-[#111827] sm:text-5xl lg:text-[4rem]">
              Simple steps. <span className="text-[#1c7d7a]">Peace of mind.</span>
            </h2>

            <div className="mt-10 space-y-5">
              {steps.map(({ number, title, description }) => (
                <div
                  key={number}
                  className="flex items-start gap-4 rounded-2xl border border-[#d7d1ca] bg-[#f9f7f4] p-4 shadow-sm sm:p-5"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dff4f1] text-lg font-bold text-[#0d5f5a]">
                    {number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-[#111827] sm:text-2xl">{title}</h3>
                    <p className="mt-1 text-base leading-7 text-[#4d5555] sm:text-lg">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <div className="w-full max-w-[1100px] overflow-hidden rounded-[28px] bg-[#ebf9f5]">
              <img
                src="/works.png"
                alt="How Nirapod works"
                className="block h-auto w-full rounded-[28px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
