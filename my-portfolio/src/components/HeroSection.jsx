import Logo from "../assets/logo.png";
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <div>
      <section id="hero" className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
              Welcome to
              <br />
              My Frontend
              <br />
              Portfolio
            </h1>
            <div className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-sm">
              Badr Bouzagui / Frontend Developer
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-96 bg-amber-100 rounded-br-[300px] rounded-e-[300px] overflow-hidden mx-auto">
              <img
                src={Logo}
                alt="Chad Gibbons"
                width={320}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-8 right-8 flex items-center gap-2 text-sm">
              <ArrowDown className="w-4 h-4" />
              Work with me today
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
