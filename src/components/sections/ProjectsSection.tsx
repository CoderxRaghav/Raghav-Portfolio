"use client";

import FadeIn from "@/components/effects/FadeIn";
import LiveProjectButton from "@/components/ui/LiveProjectButton";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    category: "Client",
    name: "Aquapure R.O.",
    url: "https://abhay-enterprises-ten.vercel.app/",
    images: [
      "/images/aquapure .avif",
      "/images/aquapure products.png",
      "/images/aquapureservices.png",
    ]
  },
  {
    id: 2,
    category: "Personal",
    name: "ApplyWise — Bharat Scheme Helper",
    url: "https://bharat-scheme-helper.vercel.app/",
    images: [
      "/images/applywise.png",
      "/images/applywise schemes.png",
      "/images/applywise exams.png",
    ]
  },
  {
    id: 3,
    category: "Personal",
    name: "Signal — Stock Predictor",
    url: "https://stock-next.vercel.app/",
    images: [
      "/images/signal.png",
      "/images/signal image.png",
      "/images/signal prediction.png",
    ]
  },
  {
    id: 4,
    category: "Personal",
    name: "AxisStudy AI",
    url: "https://axistudyai.vercel.app/",
    images: [
      "/images/axistudyai.png",
      "/images/axistudy login page.png",
      "/images/ask qurio ai axistudy.png",
    ]
  }
];

export default function ProjectsSection() {
  const totalCards = PROJECTS.length;

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 relative px-5 sm:px-8 md:px-10 py-24 md:py-32 overflow-hidden">
      
      <FadeIn y={30} className="mb-20 md:mb-32">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto relative pb-[10vh]">
        {PROJECTS.map((project, index) => {
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          
          return (
            <div 
              key={project.id}
              className="sticky h-[85vh] flex items-center justify-center w-full"
              style={{ 
                top: `calc(6rem + ${index * 28}px)`, // Adjust stickiness offset
                zIndex: index + 1
              }}
            >
              <div 
                className="w-full h-full max-h-[800px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 origin-top transform"
                style={{ scale: targetScale }}
              >
                {/* Top Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className="text-[#D7E2EA] font-medium text-lg sm:text-2xl">
                      0{project.id}
                    </span>
                    <span className="text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-sm sm:text-base border border-[#D7E2EA]/30 rounded-full px-4 py-1">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between w-full sm:w-auto gap-4 sm:gap-8 flex-1 sm:flex-none">
                    <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      {project.name}
                    </h3>
                    <LiveProjectButton href={project.url} className="whitespace-nowrap flex-shrink-0" />
                  </div>
                </div>

                {/* Bottom Row - 3 Image Layout */}
                <div className="flex-1 flex gap-4 sm:gap-6 md:gap-8 h-full min-h-0">
                  
                  {/* Left Column (40%) - 2 stacked images */}
                  <div className="w-[40%] flex flex-col gap-4 sm:gap-6 md:gap-8 h-full min-h-0">
                    <div className="w-full relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#141414]" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
                      <Image 
                        src={project.images[0]} 
                        alt={`${project.name} preview 1`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#141414] flex-1" style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}>
                      <Image 
                        src={project.images[1]} 
                        alt={`${project.name} preview 2`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Column (60%) - 1 tall image */}
                  <div className="w-[60%] relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#141414] h-full min-h-0">
                    <Image 
                      src={project.images[2]} 
                      alt={`${project.name} preview 3`}
                      fill
                      className="object-cover"
                    />
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
