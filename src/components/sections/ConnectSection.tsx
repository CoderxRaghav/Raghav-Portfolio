"use client";

import FadeIn from "@/components/effects/FadeIn";
import ContactButton from "@/components/ui/ContactButton";
import Link from "next/link";
import { Mail } from "lucide-react";

const Github = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function ConnectSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="connect" className="bg-[#0C0C0C] min-h-[60vh] flex flex-col justify-between px-5 sm:px-8 md:px-10 pt-24 md:pt-32 pb-6 relative z-50 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 overflow-hidden">
      
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        <FadeIn y={30} className="mb-12 sm:mb-16 w-full">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,10vw,140px)] leading-none mb-6">
            Let's work together
          </h2>
          <p className="text-[#D7E2EA] font-light text-lg sm:text-xl opacity-70">
            Currently open to internship opportunities.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn delay={0.4} className="w-full mt-24">
        <footer className="border-t border-[#D7E2EA]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/CoderxRaghav" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/raghav-tiwari-4a4b7c/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com/raghavtiwari" icon={<Twitter size={20} />} label="Twitter" />
            <SocialLink href="mailto:tiwariraghav249@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
          
          <p className="text-[#D7E2EA]/40 text-sm font-medium tracking-wide">
            © {currentYear} RAGHAV VENTURES. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </FadeIn>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA]/70 hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-all"
    >
      {icon}
    </Link>
  );
}
