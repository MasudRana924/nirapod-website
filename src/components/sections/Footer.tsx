'use client'

import {
  FaApple,
  FaEnvelope,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

export default function Footer() {
  const companyLinks = ['About Nirapod', 'How It Works', 'Careers', 'Contact']
  const serviceLinks = [
    'Home Assistance',
    'Hospital Visit',
    'Hospital Pickup & Drop',
    'Medicine Assistance',
    'Companionship',
  ]
  const professionalLinks = ['Join as a Caregiver', 'Professional Verification', 'Care Opportunities', 'Privacy Policy']
  const supportLinks = ['FAQ', 'Help Center', 'Terms & Conditions', 'Privacy Policy']

  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: '#' },
    { icon: FaInstagram, label: 'Instagram', href: '#' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  ]

  return (
    <footer className="bg-[#022f2f] text-white">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 pb-10 pt-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:pb-12 lg:pt-16">
          <div className="max-w-[380px]">
            <div className="mb-8 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2ec4b6]/90 shadow-[0_0_0_4px_rgba(46,196,182,0.2)]">
                <span className="h-5 w-5 rounded-full bg-[#022f2f]" />
              </span>
              <span className="text-4xl font-bold tracking-tight">Nirapod</span>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-[#dfe9e7]">
              Care for them. Peace for you.
            </p>

            <p className="max-w-[320px] text-base leading-7 text-[#dfe9e7]">
              Nirapod helps families arrange trusted caregivers, nurses and home-care assistance for
              their loved ones — wherever they are.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1c4d4a] text-xl text-white transition-opacity hover:opacity-90"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-white/90">Company</h3>
            <ul className="space-y-4 text-base text-[#dfe9e7]">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-opacity hover:opacity-80">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-white/90">Services</h3>
            <ul className="space-y-4 text-base text-[#dfe9e7]">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-opacity hover:opacity-80">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-white/90">For Professionals</h3>
            <ul className="space-y-4 text-base text-[#dfe9e7]">
              {professionalLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-opacity hover:opacity-80">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-white/90">Support</h3>
            <ul className="space-y-4 text-base text-[#dfe9e7]">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-opacity hover:opacity-80">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1c4d4a]" />

        <div className="flex flex-col gap-7 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl border border-[#2d6665] bg-[#0b3d3d] px-4 py-3 text-left text-white transition-opacity hover:opacity-90"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#dfe9e7] text-[#022f2f]">
                <FaApple className="text-xl" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] uppercase tracking-[0.08em] text-[#dfe9e7]">Download on the</span>
                <span className="block text-xl font-medium">App Store</span>
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl border border-[#2d6665] bg-[#0b3d3d] px-4 py-3 text-left text-white transition-opacity hover:opacity-90"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#dfe9e7] text-[#022f2f]">
                <FaGooglePlay className="text-lg" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] uppercase tracking-[0.08em] text-[#dfe9e7]">Get it on</span>
                <span className="block text-xl font-medium">Google Play</span>
              </span>
            </a>
          </div>

          <div className="ml-auto flex items-center gap-3 text-base text-[#dfe9e7] lg:pr-1">
            <FaEnvelope className="text-lg" />
            <a href="mailto:hello@nirapod.example" className="transition-opacity hover:opacity-80">
              hello@nirapod.example
            </a>
          </div>
        </div>

        <div className="border-t border-[#1c4d4a]" />

        <div className="flex flex-col gap-3 py-6 text-base text-[#dfe9e7] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Nirapod. All rights reserved.</p>
          <p>Made with care for families in Bangladesh.</p>
        </div>
      </div>
    </footer>
  )
}
