'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, ArrowRight, ArrowUpRight } from 'lucide-react'

const HERO_IMAGES = ['/hero_one.png', '/hero_two.png', '/hero_three.png'] as const

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const updateImage = () => {
      const el = sectionRef.current
      if (!el) return

      const total = el.offsetHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 1))
      const progress = scrolled / Math.max(total, 1)
      const nextIndex = progress < 1 / 3 ? 0 : progress < 2 / 3 ? 1 : 2
      setActiveImage((prev) => (prev === nextIndex ? prev : nextIndex))
    }

    updateImage()
    window.addEventListener('scroll', updateImage, { passive: true })
    window.addEventListener('resize', updateImage)
    return () => {
      window.removeEventListener('scroll', updateImage)
      window.removeEventListener('resize', updateImage)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[300vh]"
      aria-label="Hero Section"
    >
      <div className="sticky top-0 min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url('${src}')`,
              opacity: activeImage === index ? 1 : 0,
            }}
            aria-hidden="true"
          />
        ))}

        <div
          className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/40 backdrop-brightness-95 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="self-start"
          >
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="my-auto py-8 sm:py-12"
          >
            {/* <h1 className="font-serif text-[3.4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem] font-black tracking-tight leading-[0.85] text-slate-950 select-none drop-shadow-sm">
              Care for{' '}
              <span className="font-serif italic font-normal text-[#FF4D1C] tracking-normal">
                family
              </span>
              <br />
              at home
            </h1>
            <h2 className="mt-8 sm:mt-12 text-2xl sm:text-4xl font-medium text-slate-950 max-w-3xl">
              Book trusted caregivers and nurses for your parents, children, and loved ones.
            </h2> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pt-6 border-t border-slate-950/10"
          >
            {/* <div className="max-w-md sm:max-w-lg">
              <p className="text-slate-900 text-sm sm:text-base lg:text-lg font-semibold leading-relaxed drop-shadow-sm">
                Nirapod connects families with verified caregivers, nurses, and companions — for daily support, recovery, or 24/7 care at home.
              </p>
            </div> */}

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 self-start md:self-auto">
              {/* <a
                href="tel:+8801757922258"
                className="inline-flex items-center gap-2.5 bg-slate-950 text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-xl hover:bg-slate-800 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] group"
              >
                <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call +880 1757 922258</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md text-slate-950 font-bold text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/70 shadow-md hover:bg-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] group"
              >
                <span>Book care</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
