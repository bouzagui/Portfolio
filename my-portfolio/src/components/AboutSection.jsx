import Image from "../assets/image.png";

export default function AboutSection() {
  return (
    <div>
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-light mb-8">
              Who is Bouzagui
            </h2>
            <p className="text-lg leading-relaxed max-w-md">
              I'm a passionate frontend developer who loves crafting clean,
              responsive web interfaces. While I don’t have professional
              experience yet, I’ve built several real-world projects like
              <strong> PrimeEats</strong>, <strong>Techium</strong>, and{" "}
              <strong>FastFeast</strong>. I’m also certified in Software
              Engineering through the ALX program.
            </p>
          </div>
          <div className="relative">
            <div className="w-80 h-96 bg-gray-100 rounded-b-[10%] rounded-[90%] overflow-hidden mx-auto">
              <img
                src={Image}
                alt="Chad working"
                width={320}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
