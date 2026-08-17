"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

export default function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Check for prefers-reduced-motion and touch devices
    const isTouch = !window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = ["#D7E2EA", "#E8F0F5", "#C2D4E1", "#FFFFFF"];

    const createSpark = (x: number, y: number) => {
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        const maxLife = 30 + Math.random() * 20;
        
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          life: 0,
          maxLife,
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      createSpark(e.clientX, e.clientY);
    };

    window.addEventListener("click", handleClick);

    let animationFrameId: number;

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // Apply physics
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // slight gravity
        p.vx *= 0.98; // slight drag
        
        // Calculate opacity fade
        p.alpha = 1 - p.life / p.maxLife;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    updateAndDraw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
