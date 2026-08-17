"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  // Mouse Coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for smooth lag effect
  const springConfig = { damping: 30, stiffness: 250, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  // Rotation for the rocket
  const cursorRotation = useMotionValue(0);
  const smoothRotation = useSpring(cursorRotation, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    // Check if device supports fine hover (desktop with mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches || prefersReducedMotion) {
      return; // Disable completely on touch devices or if reduced motion is preferred
    }

    setIsTouch(false);
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = mouseX.get();
      const currentY = mouseY.get();
      
      const dx = e.clientX - currentX;
      const dy = e.clientY - currentY;
      
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        // Rocket emoji (🚀) naturally points top-right (approx -45 degrees).
        // To make it point in the direction of movement (angle), we add 45 degrees.
        const targetAngle = angle + 45;
        
        // Prevent 360-degree spinning by finding the shortest path to target angle
        const currentRot = cursorRotation.get();
        let delta = targetAngle - currentRot;
        delta = ((delta + 180) % 360 + 360) % 360 - 180;
        cursorRotation.set(currentRot + delta);
      }

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    // Global listener for interactive hovers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest interactive parent
      const interactiveEl = target.closest("a, button, [role='button'], input, textarea, [data-interactive]");
      
      if (interactiveEl) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);
    document.addEventListener("mouseover", handleMouseOver);

    // Add class to body to hide default cursor
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [mouseX, mouseY, isVisible, cursorRotation, prefersReducedMotion]);

  if (isTouch || !mounted || prefersReducedMotion) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: smoothRotation,
        pointerEvents: "none",
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? (hovered ? 1.25 : 1) : 0,
      }}
      transition={{ 
        opacity: { duration: 0.15 },
        scale: { duration: 0.25, ease: "easeOut" }
      }}
      className="hidden md:flex items-center justify-center text-3xl drop-shadow-md"
    >
      🚀
    </motion.div>
  );
}
