"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  
  const scaleXSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scaleX = prefersReducedMotion ? scrollYProgress : scaleXSpring;

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#D7E2EA] z-50 origin-left pointer-events-none"
    />
  );
}
