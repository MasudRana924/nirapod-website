'use client'

import Reveal from '../animations/Reveal'
import Card from '../ui/Card'

export default function Education() {
  return (
    <section id="trust" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Trust & safety
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Reveal>
            <Card className="p-8 lg:p-10 hover:border-accent/30 transition-colors duration-300">
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-foreground leading-tight">
                  Verified caregivers and trained nurses
                </h3>
                <div className="text-lg text-accent font-medium">
                  Background checks, ID verification, and care experience review
                </div>
                <div className="text-muted-foreground text-base">
                  Every professional on Nirapod is screened before they enter your home. You review the match, then we confirm the booking.
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
