"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word 
            key={i} 
            word={word} 
            progress={scrollYProgress} 
            range={[start, end]} 
          />
        );
      })}
    </p>
  );
}

function Word({ word, progress, range }: { word: string, progress: any, range: number[] }) {
  const characters = word.split("");
  const amount = range[1] - range[0];
  const step = amount / word.length;
  
  return (
    <span className="mr-[0.25em] inline-block mt-1">
      {characters.map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);
        return (
          <Character key={i} char={char} progress={progress} range={[start, end]} />
        );
      })}
    </span>
  );
}

function Character({ char, progress, range }: { char: string, progress: any, range: number[] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
}
