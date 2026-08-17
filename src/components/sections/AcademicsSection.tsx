"use client";

import FadeIn from "@/components/effects/FadeIn";
import AnimatedText from "@/components/effects/AnimatedText";

export default function AcademicsSection() {
  return (
    <section id="academics" className="relative flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden z-10">
      
      {/* Decorative Blobs */}
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-10 right-10 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="url(#gradAcad1)" />
          <defs>
            <linearGradient id="gradAcad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B600A8" />
              <stop offset="100%" stopColor="#18011F" />
            </linearGradient>
          </defs>
        </svg>
      </FadeIn>

      <div className="flex flex-col items-center justify-center z-10 w-full max-w-[800px]">
        {/* Heading */}
        <FadeIn delay={0.2} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,120px)] leading-none mb-10 sm:mb-14 md:mb-16">
            Academics
          </h2>
        </FadeIn>

        {/* Academics Content */}
        <FadeIn delay={0.3} y={30} className="w-full text-center">
          <div className="border border-[#D7E2EA]/20 bg-[#141414]/50 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-12 hover:border-[#B600A8]/50 transition-colors duration-500">
            <h3 className="text-[#D7E2EA] font-semibold text-2xl sm:text-3xl mb-4">
              B.Tech Computer Science & Engineering
            </h3>
            <p className="text-[#D7E2EA]/80 font-medium text-lg sm:text-xl mb-6">
              PSIT Kanpur (Pranveer Singh Institute of Technology), Kanpur, Uttar Pradesh, India
            </p>
            <div className="inline-block border border-[#D7E2EA]/30 text-[#D7E2EA]/70 rounded-full px-5 py-2 text-sm uppercase tracking-widest">
              Expected 2028
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
