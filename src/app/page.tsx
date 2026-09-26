import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import LiveTracking from '@/components/sections/LiveTracking'
import CareProfessionals from '@/components/sections/CareProfessionals'
import Faq from '@/components/sections/Faq'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <LiveTracking />
      <CareProfessionals />
      <Faq />
      <Footer />
    </main>
  )
}
