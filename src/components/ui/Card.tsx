"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowOnHover?: boolean;
}

export default function Card({
  children,
  className,
  hoverEffect = true,
  glowOnHover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 relative overflow-hidden",
        {
          "glass-panel-hover": hoverEffect,
          "hover:shadow-[0_20px_50px_rgba(224,90,38,0.1)]": glowOnHover && hoverEffect
        },
        className
      )}
      {...props}
    >
      {/* Subtle top-left glare reflection */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-tl-2xl" />
      
      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
