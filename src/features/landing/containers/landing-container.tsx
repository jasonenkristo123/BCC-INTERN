import FaktaPage from '../components/fakta-page'
import FiturPage from '../components/fitur'
import HeroSection from '../components/hero-section'
import Kelola from '../components/kelola'
import RiskPanelPage from '../components/risk-panel-page'
import TeamPage from '../components/team-page'
import TentangKami from '../components/tentang-kami'

export default function LandingContainer() {
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
