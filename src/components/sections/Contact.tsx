'use client'

import { FaEnvelope } from 'react-icons/fa'
import { ArrowRight, PhoneCall } from 'lucide-react'
import Reveal from '../animations/Reveal'
import Button from '../ui/Button'

export default function Contact() {
  const contactInfo = {
    email: 'hello@nirapod.care',
    phone: '+8801757922258',
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,91,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,91,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Book a caregiver or nurse
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Tell us who in your family needs care. We will match a verified professional for your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="primary" size="lg" href={`tel:${contactInfo.phone}`}>
                Call to book
                <PhoneCall className="ml-2" size={20} />
              </Button>
              <Button variant="secondary" size="lg" href={`mailto:${contactInfo.email}`}>
                Email Nirapod
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            <div className="flex flex-col items-center space-y-4 pt-8">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2"
              >
                <FaEnvelope />
                {contactInfo.email}
              </a>
              <p className="text-muted-foreground">
                {contactInfo.phone}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
