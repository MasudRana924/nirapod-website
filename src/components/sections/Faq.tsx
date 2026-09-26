'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is Nirapod?',
    answer:
      'Nirapod is a family-care platform that helps you arrange trusted care and assistance for your parents and loved ones, especially when you live away from them.',
  },
  {
    question: 'Who can book a caregiver?',
    answer:
      'Anyone can book a caregiver through Nirapod, including family members, loved ones, or anyone seeking reliable in-home support for their dependents.',
  },
  {
    question: 'What services does Nirapod provide?',
    answer:
      'We provide home assistance, companion care, hospital support, medication assistance, pickup and drop services, and more personalized care options based on your needs.',
  },
  {
    question: 'How are caregivers and professionals verified?',
    answer:
      'Every caregiver and professional is screened and verified through our onboarding process to help ensure trust, safety, and quality care for families.',
  },
  {
    question: 'Can I book care for my parents from another city or country?',
    answer:
      'Yes. Nirapod is designed to help families coordinate care remotely, making it easier to arrange trusted support even from a different city or country.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-[#f2efe9] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center text-3xl font-black tracking-[-0.05em] text-[#1a1f1f] sm:text-4xl lg:text-[4rem]">
          Frequently asked questions
        </h2>

        <p className="mt-5 text-center text-base text-[#3d4747] sm:text-lg">
          Everything you may want to know before arranging care with Nirapod.
        </p>

        <div className="mt-10 overflow-hidden rounded-[18px] border border-[#d9d5cf] bg-[#f6f3ee] sm:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex

            return (
              <div
                key={faq.question}
                className={`border-b border-[#d9d5cf] last:border-b-0 ${isOpen ? 'bg-[#f7f5f2]' : 'bg-transparent'}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-4 py-5 text-left transition-colors duration-200 hover:bg-[#f1eee9] sm:px-6 sm:py-6 lg:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold tracking-[-0.04em] text-[#1a1f1f] sm:text-[1.8rem] lg:text-[2.05rem]">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                      isOpen ? 'bg-[#0c7d7a] text-white shadow-sm' : 'bg-[#ece7e1] text-[#2d3737]'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-7 pt-0 sm:px-6 lg:px-8">
                    <p className="max-w-[1100px] text-base leading-7 text-[#3b4747] sm:text-lg lg:text-[1.08rem]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
