"use client";

import { useRef, useState } from "react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0)");
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Check if within padding distance
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    
    if (dist < width / 2 + padding) {
      setIsActive(true);
      const moveX = distX / strength;
      const moveY = distY / strength;
      setTransform(`translate3d(${moveX}px, ${moveY}px, 0)`);
    } else {
      setIsActive(false);
      setTransform("translate3d(0px, 0px, 0)");
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setTransform("translate3d(0px, 0px, 0)");
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isActive ? "transform 0.3s ease-out" : "transform 0.6s ease-in-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
