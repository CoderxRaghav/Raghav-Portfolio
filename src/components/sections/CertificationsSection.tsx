"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import SectionHeading from "../ui/SectionHeading";
import CertCard from "./CertCard";
import Card from "../ui/Card";
import FadeIn from "@/components/effects/FadeIn";

export default function CertificationsSection() {
  const isEmpty = certifications.length === 0;

  return (
    <section id="certifications" className="bg-[#FFFFFF] px-5 sm:px-8 md:px-10 py-24 md:py-32 relative z-40 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14">
      <div className="container mx-auto px-6">
        <FadeIn y={30} className="mb-16 sm:mb-20">
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,8vw,120px)] leading-none">
            Certifications
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <CertCard certification={cert} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
