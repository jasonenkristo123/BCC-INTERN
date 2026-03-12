import FaktaPage from '@/features/landing/components/fakta-page'
import FiturPage from '@/features/landing/components/fitur'
import HeroSection from '@/features/landing/components/hero-section'
import RiskPanelPage from '@/features/landing/components/risk-panel-page'
import TentangKami from '@/features/landing/components/tentang-kami'

export default function LandingPage() {
  return (
    <section>
      <HeroSection />
      <FiturPage />
      <RiskPanelPage />
      <FaktaPage />
      <TentangKami />
    </section>
  )
}
