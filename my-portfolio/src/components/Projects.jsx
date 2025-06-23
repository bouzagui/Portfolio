import Primeeats from "../assets/primeeats.png";
import Techium from "../assets/Techium.png";
import FastFeast from "../assets/fastfeast.png";
import { ArrowDown } from "lucide-react"

export default function Projects() {
  return (
    <div>
      <section id="projects" className="container mx-auto px-6 py-20">
        <h2 className="text-5xl lg:text-6xl font-light mb-16">My projects</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={Primeeats}
                alt="Branding for Tost"
                width={300}
                height={400}
                className="w-lg h-[50%] object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ArrowDown className="w-4 h-4" />
              <span>
                UI for PrimeEats – an international food delivery web app
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={Techium}
                alt="Poster for La Biso"
                width={300}
                height={400}
                className="w-full h-[50%] object-cover"
              />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ArrowDown className="w-4 h-4" />
              <span>Landing page for Techium – HTML/CSS design project</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={FastFeast}
                alt="Poster for Des Lunas Film Society"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ArrowDown className="w-4 h-4" />
              <span>
                FastFeast – modern food ordering frontend built with React
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
