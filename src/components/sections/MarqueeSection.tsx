"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STACK = [
  "React", "Node.js", "Express", "MongoDB", "Next.js", "Python",
  "C++", "TypeScript", "Tailwind CSS", "Framer Motion", "Git", "Vercel"
];

// Split the stack for two rows
const ROW1 = STACK.slice(0, 6);
const ROW2 = STACK.slice(6, 12);

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate offsets for scrolling effect
  // Adjust these multipliers to tune the scroll speed and direction
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section 
      ref={containerRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves Right */}
        <motion.div 
          className="flex gap-3 whitespace-nowrap will-change-transform"
          style={{ x: x1 }}
        >
          {/* Triple the items for a seamless infinite feel when scrolling */}
          {[...ROW1, ...ROW1, ...ROW1].map((tech, i) => (
            <Badge key={`r1-${i}`} text={tech} />
          ))}
        </motion.div>

        {/* Row 2 - Moves Left */}
        <motion.div 
          className="flex gap-3 whitespace-nowrap will-change-transform"
          style={{ x: x2 }}
        >
          {[...ROW2, ...ROW2, ...ROW2].map((tech, i) => (
            <Badge key={`r2-${i}`} text={tech} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center w-[180px] h-[110px] bg-[#141414] rounded-2xl flex-shrink-0">
      <span className="text-[#D7E2EA] font-medium tracking-wide uppercase text-lg">
        {text}
      </span>
    </div>
  );
}
