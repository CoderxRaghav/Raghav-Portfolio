"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DiagonalRocket() {
  const [mounted, setMounted] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const { scrollYProgress } = useScroll();

  // Map scroll progress (0 to 1) to screen percentage values
  // Rocket starts off-screen bottom-left and flies off-screen top-right
  const x = useTransform(scrollYProgress, [0, 1], ["-10vw", "110vw"]);
  const y = useTransform(scrollYProgress, [0, 1], ["100vh", "-20vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 0.15, 0.15, 0]);

  useEffect(() => {
    setMounted(true);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(motionQuery.matches);
  }, []);

  if (!mounted || prefersReduced) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        x,
        y,
        opacity,
        zIndex: 0,
        pointerEvents: "none",
      }}
      className="hidden md:block select-none"
    >
      <div className="rotate-45 text-accent">
        {/* Sleek SVG Rocket design */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
          <path d="M12 2C7.5 2 4 5.5 4 10c0 1.5.5 2.5 1 3.5L3 18l4.5-2c1 .5 2 1 3.5 1 4.5 0 8-3.5 8-8s-3.5-8-8-8z" />
          <path d="M9 15l3-3" />
          <path d="M17 7A2.5 2.5 0 1 1 12 7a2.5 2.5 0 0 1 5 0z" />
        </svg>
      </div>
    </motion.div>
  );
}
