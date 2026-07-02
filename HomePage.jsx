import Header from '../components/Header'
import Hero from '../components/Hero'
import LiquidityRatio from '../components/LiquidityRatio'
import Regions from '../components/Regions'
import Branches from '../components/Branches'
import NearestProperties from '../components/NearestProperties'
import InstallmentUnification from '../components/InstallmentUnification'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LiquidityRatio />
        <Regions />
        <Branches />
        <NearestProperties />
        <InstallmentUnification />
        <Features />
      </main>
      <Footer />
    </>
  )
}
