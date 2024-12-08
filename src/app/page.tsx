import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import AboutSession from "@/components/sessions/AboutSession"
import CareerSession from "@/components/sessions/CareerSession"
import PresentationSession from "@/components/sessions/PresentationSession"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <Header />

      <main>
        <PresentationSession />
        <AboutSession />
        <CareerSession />
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
