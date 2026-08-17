"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setShouldRender(true);

    const hasLoaded = sessionStorage.getItem("raghav_portfolio_loaded");

    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("raghav_portfolio_loaded", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  const blocks = [
    { id: 1, color: "#e05a26" },
    { id: 2, color: "#b94218" },
    { id: 3, color: "#2A2521" },
    { id: 4, color: "#6B6259" },
    { id: 5, color: "#F59E0B" },
  ];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0C0C0C] overflow-hidden pointer-events-auto"
        >
          {prefersReducedMotion ? (
            <div className="block">
               <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl md:text-4xl font-serif text-[#D7E2EA] font-medium tracking-tight"
               >
                  Welcome to Raghav's Portfolio
               </motion.h1>
            </div>
          ) : (
            <>
              <div className="md:hidden lg:hidden">
                 <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xl font-serif text-[#D7E2EA] font-medium tracking-tight"
                 >
                    Welcome to Raghav's Portfolio
                 </motion.h1>
              </div>

              <div className="relative w-full h-[60vh] flex items-center justify-center hidden sm:flex">
                <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                  
                  {blocks.map((block, i) => (
                    <motion.div
                      key={block.id}
                      className="absolute w-8 h-8 rounded-lg shadow-lg"
                      style={{ backgroundColor: block.color }}
                      initial={{ 
                        opacity: 0, 
                        scale: 0, 
                        x: 0, 
                        y: 0 
                      }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        scale: [0, 1.2, 1, 0.5],
                        x: [
                           0, 
                           Math.cos((i * 72) * (Math.PI / 180)) * 120,
                           Math.cos((i * 72 + 30) * (Math.PI / 180)) * 80,
                           0
                        ],
                        y: [
                           0, 
                           Math.sin((i * 72) * (Math.PI / 180)) * 120, 
                           Math.sin((i * 72 + 30) * (Math.PI / 180)) * 80, 
                           0
                        ],
                        rotate: [0, 90, 180, 360]
                      }}
                      transition={{ 
                        duration: 1.8, 
                        ease: [0.25, 0.1, 0.25, 1],
                        times: [0, 0.3, 0.6, 1]
                      }}
                    />
                  ))}

                  <motion.div
                    className="absolute flex flex-col items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
                  >
                    <h1 className="text-3xl md:text-4xl font-serif text-[#D7E2EA] font-medium tracking-tight whitespace-nowrap">
                      Welcome to Raghav's Portfolio
                    </h1>
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#e05a26] to-transparent mt-4 opacity-50" />
                  </motion.div>
                  
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
