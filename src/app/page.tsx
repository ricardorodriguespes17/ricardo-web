import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import AboutSession from "@/components/sessions/AboutSession"
import CareerSession from "@/components/sessions/CareerSession"
import PortifolioSession from "@/components/sessions/PortifolioSession"
import PresentationSession from "@/components/sessions/PresentationSession"
import SkillsSession from "@/components/sessions/SkillsSession"
import ToolsSession from "@/components/sessions/ToolsSession"
import FloatingButton from "@/components/ui/FloatingButton"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full relative">
      <Header />

      <main>
        <PresentationSession />
        <AboutSession />
        <CareerSession />
        <SkillsSession />
        <PortifolioSession />
        <ToolsSession />
      </main>

      <Footer />

      <FloatingButton />
    </div>
  )
}

export default HomePage
