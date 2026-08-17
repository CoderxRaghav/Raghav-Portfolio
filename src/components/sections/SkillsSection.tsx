"use client";

import FadeIn from "@/components/effects/FadeIn";

const SKILLS = [
  {
    name: "Full-Stack Development (MERN)",
    description: "Building complete web applications end-to-end with React, Node.js, Express, and MongoDB — from UI to API to database."
  },
  {
    name: "Data Analysis",
    description: "Working with Python to explore, clean, and draw insight from real-world datasets."
  },
  {
    name: "AI/ML",
    description: "Applying machine learning fundamentals to real problems, and helping others get hands-on with generative AI as a Google Gemini Student Ambassador."
  },
  {
    name: "Problem Solving (C++)",
    description: "Strong foundation in data structures and algorithms, built through consistent C++ practice."
  },
  {
    name: "Shipping Real Products",
    description: "Taking projects from idea to a live, deployed URL — four personal projects shipped and live today."
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      
      <FadeIn y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {SKILLS.map((skill, index) => (
          <FadeIn 
            key={index} 
            delay={index * 0.1}
            y={20}
            className="flex flex-col sm:flex-row border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 last:border-0"
          >
            {/* Number */}
            <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
              <span className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none">
                0{index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="w-full sm:w-3/4 flex flex-col justify-center">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2 md:mb-4">
                {skill.name}
              </h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {skill.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
