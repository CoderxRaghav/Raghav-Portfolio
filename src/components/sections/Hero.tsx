"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import Button from "../ui/Button";
import Link from "next/link";
import FadeIn from "@/components/effects/FadeIn";
import Magnet from "@/components/effects/Magnet";
import ContactButton from "@/components/ui/ContactButton";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Connect", href: "#connect" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.rotatingRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden bg-[#0C0C0C]">
      
      {/* In-Hero Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 w-full max-w-7xl mx-auto">
        <a href="#" className="text-[#D7E2EA] font-black text-xl tracking-tighter">
          RAGHAV.
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA]/70 hover:text-[#B600A8] font-medium text-sm uppercase tracking-widest transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <h1 className="text-[20vw] font-black whitespace-nowrap text-[#D7E2EA]">
          {profile.name.split(' ')[0].toUpperCase()}
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 flex flex-col items-center text-center">
        
        {/* Text Content */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <FadeIn delay={0.1} y={20}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E05A26]/10 border border-[#E05A26]/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E05A26] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-[#E05A26] uppercase">
                {profile.openToInternships ? "Available for Internships" : "Welcome to my portfolio"}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={30} className="w-full">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-[#D7E2EA]">
              <span className="block text-[#D7E2EA]/70 font-medium text-2xl md:text-3xl lg:text-4xl mb-4 tracking-normal">Hello, I'm {profile.name}.</span>
              <span>I am a </span>
              <span className="relative inline-block text-[#E05A26] min-w-[20ch] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0"
                  >
                    {profile.rotatingRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible">{profile.rotatingRoles[0]}</span>
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.4} y={30}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#D7E2EA]/70 mb-10 leading-relaxed">
              {profile.headline}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={30} className="flex flex-col sm:flex-row items-center gap-4">
            <ContactButton />
            {profile.resumeUrl && (
              <Magnet>
                <div className="inline-block">
                  <Link href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outlined" className="rounded-full px-8">
                      Download Resume
                    </Button>
                  </Link>
                </div>
              </Magnet>
            )}
          </FadeIn>
        </div>

        {/* Illustration Image */}
        <FadeIn 
          delay={0.6} 
          y={30} 
          className="hidden md:flex lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-[45%] z-0 mt-16 lg:mt-0 justify-center pointer-events-none"
        >
          <img 
            src="/images/portfolio pic.png" 
            alt="Raghav Portfolio Illustration" 
            className="w-[280px] md:w-[320px] lg:w-[380px] xl:w-[450px] h-auto object-contain opacity-95 drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none"
      >
        <span className="text-[10px] font-bold tracking-[0.25em] text-[#D7E2EA]/50 uppercase mb-2">
          SCROLL
        </span>
        <div className="w-[1.5px] h-8 bg-[#D7E2EA]/20 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 right-0 h-4 bg-[#E05A26]"
          />
        </div>
      </motion.div>
    </section>
  );
}
