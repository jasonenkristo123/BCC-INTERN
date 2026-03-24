import FaktaPage from '@/features/landing/components/fakta-page'
import FiturPage from '@/features/landing/components/fitur'
import HeroSection from '@/features/landing/components/hero-section'
import RiskPanelPage from '@/features/landing/components/risk-panel-page'
import TentangKami from '@/features/landing/components/tentang-kami'
import TeamPage from '@/features/landing/components/team-page'
import Kelola from '@/features/landing/components/kelola'

export default function LandingPage() {
  return (
    <section>
      <HeroSection />
      <FiturPage />
      <RiskPanelPage />
      <FaktaPage />
      <TentangKami />
      <TeamPage />
      <Kelola />
    </section>
  )
}
