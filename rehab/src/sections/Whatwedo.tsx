"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const words = [
  "care",
  "therapy",
  "recovery",
  "rehabilitation",
  "support",
  "healing",
];

export default function WhatWeDoSection() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion();
  const isClient = typeof window !== "undefined";

  /* ===============================
     Word Rotation
  =============================== */
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [isClient]);

  /* ===============================
     Cursor-follow Glow (Desktop Only)
  =============================== */
  useEffect(() => {
    if (!isClient || shouldReduceMotion) return;

    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;

    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.12);
      currentY = lerp(currentY, targetY, 0.12);

      glow.style.transform = `translate(${currentX - 120}px, ${currentY - 120}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const move = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const enter = () => (glow.style.opacity = "1");
    const leave = () => (glow.style.opacity = "0");

    container.addEventListener("mousemove", move);
    container.addEventListener("mouseenter", enter);
    container.addEventListener("mouseleave", leave);

    rafId = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", move);
      container.removeEventListener("mouseenter", enter);
      container.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(rafId);
    };
  }, [isClient, shouldReduceMotion]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0e1110] overflow-hidden pt-10 pb-0"
    >
      {/* Cursor Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 w-[240px] h-[240px] rounded-full opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(159,177,160,0.35) 0%, rgba(159,177,160,0.15) 30%, rgba(159,177,160,0.05) 50%, transparent 70%)",
          filter: "blur(25px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 flex items-center justify-center min-h-[50vh]">
        <div className="text-center space-y-6 relative z-10">

          {/* Label */}
          <div className="text-xs tracking-[0.35em] uppercase text-white/50">
            What we do
          </div>

          {/* Main Heading */}
          <h2 className="text-[36px] sm:text-[42px] lg:text-[52px] font-light text-white leading-tight flex flex-wrap justify-center gap-x-3">
            <span>We provide professional</span>

            {/* Animated Word */}
            <span className="relative inline-block min-w-[190px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 16, filter: "blur(8px)" }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0, filter: "blur(0px)" }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -16, filter: "blur(8px)" }
                  }
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="
                    absolute left-0
                    bg-gradient-to-r
                    from-[#9FB1A0]
                    via-[#b8d1c2]
                    to-[#9FB1A0]
                    bg-[length:200%_200%]
                    bg-clip-text
                    text-transparent
                    animate-gradient
                    font-normal
                  "
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-white/60 text-[16px] leading-relaxed">
            We combine modern rehabilitation practices with compassionate care
            to help individuals regain strength, confidence, and independence.
          </p>

        </div>
      </div>

      {/* Gradient Animation */}
      <style jsx global>{`
        .animate-gradient {
          animation: gradientMove 6s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}