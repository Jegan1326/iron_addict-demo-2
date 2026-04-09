import { ReactLenis } from 'lenis/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyIronAddicts from './components/WhyIronAddicts'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import TrainerSpotlight from './components/TrainerSpotlight'
import LocationHours from './components/LocationHours'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

function App() {
  return (
    <ReactLenis root>
      <div className="w-full bg-brand-black text-white selection:bg-brand-accent selection:text-white">
        <Navbar />
        <Hero />
        <WhyIronAddicts />
        <SocialProof />
        <Pricing />
        <TrainerSpotlight />
        <LocationHours />
        <CTABanner />
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
