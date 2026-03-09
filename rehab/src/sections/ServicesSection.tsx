"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import gsap from "gsap";
import { motion } from "framer-motion";

const images = [
  "/services/123.png",
  "/services/2.png",
  "/services/3.png",
  "/services/4.png",
  "/services/5.png",
  
];

export default function ServicesSection() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const cursorRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(false);

  /* Cursor */
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX - 32,
        y: e.clientY - 32,
        duration: 0.18,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  /* Scroll animation */
  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".reveal"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-14 bg-[#0e1110] overflow-hidden"
    >
      {/* Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-300 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-16 h-16 rounded-full border border-white/50 backdrop-blur-xl bg-black/30 flex items-center justify-center">
          <ArrowRight className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-[max(5vw,40px)] mb-16 reveal">

        <div className="max-w-6xl mx-auto pl-[max(5vw,40px)] grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[auto_auto] gap-x-14 gap-y-2">

          {/* Row 1 */}
          <div>
            <h6 className="text-sm md:text-base tracking-[0.35em] uppercase text-neutral-400">
              What we offer
            </h6>
          </div>

          <div></div>
          <div></div>

          {/* Row 2 */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
              Our services
            </h2>
          </div>

          <div className="text-neutral-300 text-base leading-relaxed font-body max-w-sm">
            Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde
            omnis iste perspiciatis ut perspiciatis unde omnis iste natus.
          </div>

          <div className="flex items-end h-full">
            <button className="group flex items-center gap-4 text-white">
              <span className="text-lg tracking-wide">Pricing</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>

      {/* Carousel */}
      <div
        className="w-full reveal"
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8 px-[max(5vw,40px)] cursor-none select-none">

            {images.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="relative min-w-[90%] sm:min-w-[48%] lg:min-w-[32%] aspect-[3/4] overflow-hidden rounded-xl bg-black"
              >
                <Image
                  src={src}
                  alt={`service-${i}`}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 48vw, 32vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/0 hover:bg-black/35 transition-all duration-700" />

                <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)] opacity-0 hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}