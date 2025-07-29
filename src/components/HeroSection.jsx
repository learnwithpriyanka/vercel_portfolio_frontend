
import './HeroSection.css';


export default function HeroSection() {
  return (
    <section className="hero-section flex flex-col items-center justify-center min-h-[60vh] text-center py-16">
      <h1>
  Creative <span style={{ color: "#3b82f6" }}>Developer</span>
</h1>
      <p className="max-w-xl mx-auto mb-8 text-lg text-gray-600">
        Crafting digital experiences through innovative design and clean code. 
        Passionate about creating solutions that make a difference.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full hover:bg-green-600 hover:bg-emerald-600 transition-all duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-green-500 text-green-500 px-6 py-2 rounded-full hover:bg-green-50 transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}