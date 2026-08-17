"use client";

import FadeIn from "@/components/effects/FadeIn";

const EXPERIENCES = [
  {
    id: 1,
    role: "Google Gemini Student Ambassador",
    company: "Google",
    date: "Sept 2025 – Jan 2026",
    description: "Represented Google Gemini on campus, driving awareness and hands-on adoption of generative AI tools among students."
  },
  {
    id: 2,
    role: "Event Coordinator",
    company: "Electoral Literacy Club",
    date: "Aug 2025 – Jul 2026",
    description: "Coordinated logistics and outreach for campus electoral-literacy events and campaigns."
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden z-10">
      
      {/* Decorative Blobs */}
      <FadeIn delay={0.1} duration={0.9} x={80} y={0} className="absolute bottom-10 left-10 opacity-10 pointer-events-none">
        <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 50C180 80 190 140 140 170C90 200 20 150 30 100C40 50 120 20 150 50Z" fill="url(#gradExp1)" />
          <defs>
            <linearGradient id="gradExp1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7621B0" />
              <stop offset="100%" stopColor="#18011F" />
            </linearGradient>
          </defs>
        </svg>
      </FadeIn>

      <div className="flex flex-col items-center justify-center z-10 w-full max-w-[800px]">
        {/* Heading */}
        <FadeIn delay={0.2} y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,120px)] leading-none mb-10 sm:mb-14 md:mb-16">
            Experience
          </h2>
        </FadeIn>

        {/* Experience List */}
        <div className="w-full flex flex-col gap-6 sm:gap-8">
          {EXPERIENCES.map((exp, index) => (
            <FadeIn key={exp.id} delay={0.3 + index * 0.1} y={30} className="w-full">
              <div className="border border-[#D7E2EA]/20 bg-[#141414]/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 hover:border-[#B600A8]/50 transition-colors duration-500 flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                <div className="flex-1">
                  <h3 className="text-[#D7E2EA] font-semibold text-xl sm:text-2xl mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-[#B600A8] font-medium text-lg mb-4">
                    {exp.company}
                  </p>
                  <p className="text-[#D7E2EA]/70 text-base sm:text-lg leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="md:text-right mt-2 md:mt-0">
                  <div className="inline-block border border-[#D7E2EA]/30 text-[#D7E2EA]/70 rounded-full px-4 py-1.5 text-sm uppercase tracking-widest whitespace-nowrap">
                    {exp.date}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
