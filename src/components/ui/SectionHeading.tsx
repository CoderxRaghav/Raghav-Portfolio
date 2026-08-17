"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  italicWord?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  italicWord,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 flex flex-col items-start text-left select-none", className)}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-bold tracking-[0.25em] text-accent uppercase mb-2 font-sans"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-charcoal font-sans"
      >
        {title}{" "}
        {italicWord && (
          <span className="font-serif-italic text-accent font-normal italic relative px-1">
            {italicWord}
          </span>
        )}
      </motion.h2>
    </div>
  );
}
