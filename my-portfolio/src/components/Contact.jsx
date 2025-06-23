import Image1 from "../assets/Image1.png";
import { ArrowDown } from "lucide-react"

export default function Contact() {
  return (
    <div>
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-light leading-tight">
              Code is like art — it speaks through experience and design.
            </h2>
          </div>
          <div className="relative">
            <div className="w-80 h-96 bg-gray-100 rounded-full overflow-hidden mx-auto">
              <img
                src={Image1}
                alt="Chad reading"
                width={320}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="container mx-auto px-6 py-20">
      <h2 className="text-5xl lg:text-6xl font-light mb-16">
        Reach Out
        <br />
        to Me
      </h2>

      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-medium mb-4">Location</h3>
          <p className="text-sm text-gray-600">Morocco</p>
        </div>

        <div>
          <h3 className="font-medium mb-4">Email</h3>
          <p className="text-sm text-gray-600">cv.badrbouzagui@gmail.com</p>
        </div>

        <div>
          <h3 className="font-medium mb-4">Phone</h3>
          <p className="text-sm text-gray-600">(212) 655728937</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <ArrowDown className="w-4 h-4" />
        <span>Let's collaborate</span>
      </div>
    </section>
    </div>
  );
}
