import { ArrowDown } from "lucide-react";

export default function Background() {
  return (
    <div>
      <section id="background" className="container mx-auto px-6 py-20">
        <h2 className="text-5xl lg:text-6xl font-light mb-16">My Background</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <ArrowDown className="w-4 h-4" />
              <span className="text-sm font-medium">
                Education & Certification
              </span>
            </div>
            <ul className="space-y-3 text-sm">
              <li>• ALX Software Engineering Program – Certificate (2025)</li>
              <li>
                • Self-taught through building projects and continuous learning
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <ArrowDown className="w-4 h-4" />
              <span className="text-sm font-medium">skills</span>
            </div>
            <ul className="space-y-3 text-sm">
              <li>• JavaScript (ES6+)</li>
              <li>• TailwindCSS</li>
              <li>• React.js</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
