import { ArrowDown } from "lucide-react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import Background from "./components/Background"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 md:px-24">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Background />
      <Projects />
      <Contact />
    </div>
  )
}
