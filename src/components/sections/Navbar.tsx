'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react'

const navItems = [
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'For Families', href: '#families' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = ['home', ...navItems.map((item) => item.href.replace('#', ''))]
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none max-w-7xl mx-auto"
    >
      <div className={`pointer-events-auto rounded-full transition-all duration-500 ${isScrolled
        ? 'bg-[#018e7f] shadow-2xl shadow-[#018e7f]/30 border border-[#018e7f] py-2 sm:py-2.5 px-4 sm:px-6'
        : 'bg-white/85 shadow-lg backdrop-blur-lg border border-white/50 py-2.5 sm:py-3 px-4 sm:px-6'
        }`}>
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="flex items-center shrink-0 group"
          >
            <span className="font-serif italic text-xl font-bold leading-none tracking-tight whitespace-nowrap text-slate-900 transition-colors duration-300 sm:text-2xl group-hover:text-[#FF4D1C]">
              Nirapod
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-5 lg:space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative whitespace-nowrap py-1 text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionPill"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#FF4D1C]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-5">
            <a
              href="#families"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#families')
              }}
              className="hidden items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.98] sm:px-5 lg:flex"
            >
              <span>BOOK NOW</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full p-2 text-slate-950 transition-colors hover:bg-slate-100 hover:text-[#FF4D1C] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="pointer-events-auto mt-2 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/80 p-5 shadow-2xl md:hidden text-slate-900"
          >
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D1C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4D1C]"></span>
                </span>
                <span>CAREGIVERS AVAILABLE TODAY</span>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="px-4 py-2.5 rounded-xl font-bold text-base text-slate-800 hover:text-[#FF4D1C] hover:bg-slate-50 transition-all"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+8801757922258"
                className="mt-2 flex items-center justify-center gap-2 bg-slate-950 text-white text-sm font-bold py-3 px-5 rounded-full shadow-md active:scale-95 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call +880 1757 922258</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
