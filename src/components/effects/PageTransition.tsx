"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageTransition({ children }: Props) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth deceleration
      }}
    >
      {children}
    </motion.div>
  );
}
