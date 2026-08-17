"use client";

import AnimatedText from "@/components/effects/AnimatedText";
import FadeIn from "@/components/effects/FadeIn";
import ContactButton from "@/components/ui/ContactButton";

export default function AboutSection() {
  const bio = "I'm a B.Tech Computer Science student at PSIT Kanpur, building full-stack applications with the MERN stack and exploring AI/ML and data analysis. I like turning ideas into working products — from business websites to AI-powered learning platforms — and I'm currently a Google Gemini Student Ambassador, helping peers get hands-on with generative AI. Currently open to internship opportunities where I can contribute to real products and keep learning fast.";

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden z-10">
      
      {/* Decorative Blobs */}
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 105C20 80 50 20 100 30C150 40 180 80 160 130C140 180 70 180 45 105Z" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18011F" />
              <stop offset="100%" stopColor="#B600A8" />
            </linearGradient>
          </defs>
        </svg>
      </FadeIn>
      
      <FadeIn delay={0.15} duration={0.9} x={80} y={0} className="absolute top-20 right-10 opacity-20 pointer-events-none">
        <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 50C180 80 190 140 140 170C90 200 20 150 30 100C40 50 120 20 150 50Z" fill="url(#grad2)" />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7621B0" />
              <stop offset="100%" stopColor="#BE4C00" />
            </linearGradient>
          </defs>
        </svg>
      </FadeIn>
      
      <FadeIn delay={0.25} duration={0.9} x={-80} y={0} className="absolute bottom-20 left-5 opacity-20 pointer-events-none">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#e05a26" />
        </svg>
      </FadeIn>

      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="absolute bottom-10 right-20 opacity-20 pointer-events-none">
        <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="120" height="120" rx="30" fill="#BBCCD7" transform="rotate(25 100 100)" />
        </svg>
      </FadeIn>

      <div className="flex flex-col items-center justify-center z-10 w-full max-w-[800px]">
        {/* Heading */}
        <FadeIn delay={0.2} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-10 sm:mb-14 md:mb-16">
            About me
          </h2>
        </FadeIn>

        {/* Animated Paragraph */}
        <AnimatedText 
          text={bio} 
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] mb-16 sm:mb-20 md:mb-24" 
        />

        {/* Button */}
        <FadeIn delay={0.4} y={30}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
