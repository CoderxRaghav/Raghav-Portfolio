"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "filled" | "outlined" | "text";
  glow?: boolean;
  magnetic?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  className,
  href,
  variant = "filled",
  glow = false,
  magnetic = false,
  external = false,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);

  // Magnetic motion coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });

  useEffect(() => {
    // Enable magnetic animation only on desktop mouse devices and if no reduced motion is active
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanAnimate(finePointer && !reducedMotion);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !canAnimate || !ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Center coordinates
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Delta relative to center
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    // Pull factor (e.g. pull up to 15px max)
    const strength = 0.35;
    x.set(deltaX * strength);
    y.set(deltaY * strength);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const buttonClasses = cn(
    "relative inline-flex items-center justify-center px-6 py-3 font-sans text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 select-none overflow-hidden active:scale-95",
    {
      // Filled variant: burnt-orange background, white text
      "bg-accent text-cream shadow-md shadow-accent/10 border-2 border-transparent hover:shadow-lg hover:shadow-accent/20": variant === "filled",
      // Outlined variant: transparent background, burnt-orange border & text
      "bg-transparent text-accent border-2 border-accent hover:bg-accent/5": variant === "outlined",
      // Text variant: text link, clean styling
      "px-3 py-1 bg-transparent text-charcoal/80 hover:text-accent font-medium normal-case tracking-normal": variant === "text",
    },
    className
  );

  const glowStyles = glow && isHovered ? (
    <motion.div
      className="absolute inset-0 -z-10 rounded-full blur-xl pointer-events-none opacity-40"
      style={{
        background: `radial-gradient(circle, #e05a26 0%, transparent 70%)`
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1.5, opacity: 0.4 }}
      transition={{ duration: 0.4 }}
    />
  ) : null;

  const content = (
    <>
      {glowStyles}
      {/* Background slide-in effect for filled button */}
      {variant === "filled" && (
        <span className="absolute inset-0 -z-20 bg-accent-hover transform scale-x-0 origin-right transition-transform duration-500 ease-out hover:scale-x-100" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const motionProps = {
    ref: ref as any,
    style: canAnimate && magnetic ? { x: springX, y: springY } : {},
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          {...motionProps}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      className={buttonClasses}
      {...motionProps}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
