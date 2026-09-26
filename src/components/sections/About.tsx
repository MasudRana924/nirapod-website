'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Reveal from '../animations/Reveal'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [families, setFamilies] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setFamilies(Math.floor(progress * 500))

        if (currentStep >= steps) {
          clearInterval(timer)
          setFamilies(500)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About Nirapod
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal delay={0.2}>
            <div className="space-y-8">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Nirapod means safe. We help families book trusted caregivers and nurses so loved ones can stay comfortable at home.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Whether your parent needs daily support, someone is recovering after hospital, or you need a nurse for a few hours — we match you with verified professionals.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                You stay in control: choose the care type, duration, and the person who visits your home.
              </p>
            </div>
          </Reveal>

          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Reveal delay={0.3}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-xl p-8 sm:p-10 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl sm:text-6xl font-bold text-accent mb-3">
                  {families}+
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">
                  Families we can support
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.4}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-xl p-8 sm:p-10 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl sm:text-6xl font-bold text-accent mb-3">
                  24/7
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">
                  Care available
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.5}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-xl p-8 sm:p-10 text-center sm:col-span-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-3">
                  Home care
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">
                  Caregivers & nurses for your family
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
