"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BG_TEXT =
  " REHABILITATION • RECOVERY • THERAPY • CARE • HEALING • ";

export default function Reveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  /* slider motion */

  const x = useMotionValue(0.5);

  const springX = useSpring(x, {
    stiffness: 140,
    damping: 24,
    mass: 0.35,
  });

  const clipPath = useTransform(
    springX,
    (v) => `inset(0 ${100 - v * 100}% 0 0)`
  );

  const dividerPosition = useTransform(
    springX,
    (v) => `${v * 100}%`
  );

  const handlePosition = useTransform(
    springX,
    (v) => `calc(${v * 100}% - 24px)`
  );

  /* drag logic */

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    let pos = (clientX - rect.left) / rect.width;
    pos = Math.min(Math.max(pos, 0), 1);

    x.set(pos);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    handleRef.current?.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setDragging(false);
    handleRef.current?.releasePointerCapture(e.pointerId);
  };

return (
<section className="relative w-full bg-[#0e1110] overflow-hidden">

  {/* FULL WIDTH MOVING BACKGROUND TEXT */}
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">

    {/* line 1 */}
 <motion.div
  className="absolute top-1/2 flex whitespace-nowrap text-[70px] md:text-[100px] xl:text-[120px] font-bold text-white/10"
  style={{ y: "-160px", willChange: "transform" }}
  animate={{ x: ["0%", "-50%"] }}
  transition={{ duration: 270, ease: "linear", repeat: Infinity }}
>
  <span>{BG_TEXT.repeat(10)}</span>
  <span>{BG_TEXT.repeat(10)}</span>
</motion.div>
    {/* line 2 */}
  <motion.div
  className="absolute top-1/2 flex whitespace-nowrap text-[70px] md:text-[100px] xl:text-[120px] font-bold text-white/10"
  style={{ y: "0px", willChange: "transform" }}
  animate={{ x: ["0%", "-50%"] }}
  transition={{ duration: 310, ease: "linear", repeat: Infinity }}
>
  <span>{BG_TEXT.repeat(10)}</span>
  <span>{BG_TEXT.repeat(10)}</span>
</motion.div>

    {/* line 3 */}
    <motion.div
  className="absolute top-1/2 -translate-y-1/2 translate-y-[140px] flex whitespace-nowrap text-[120px] font-bold text-white/10"
  animate={{ x: ["0%", "-50%"] }}
  transition={{ duration: 350, ease: "linear", repeat: Infinity }}
  style={{ willChange: "transform" }}
>
  <span>{BG_TEXT.repeat(10)}</span>
  <span>{BG_TEXT.repeat(10)}</span>
</motion.div>
  </div>


  {/* IMAGE REVEAL CONTAINER */}
  <div className="relative z-10 mx-auto max-w-6xl px-6">

    <motion.div
      ref={containerRef}
      className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-black"
    >

      {/* base image */}
      <Image
        src="/reveal/base.png"
        alt="Base"
        fill
        className="object-cover"
        priority
      />

      {/* reveal image */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath }}
      >
        <Image
          src="/reveal/top.png"
          alt="Reveal"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* divider */}
      <motion.div
        className="absolute top-0 bottom-0 w-[2px] bg-white/80"
        style={{ left: dividerPosition }}
      />

      {/* handle */}
      <motion.div
        ref={handleRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-ew-resize touch-none"
        style={{ left: handlePosition }}
      >
        <div className="flex items-center gap-1">
          <ChevronLeft size={16} className="text-black" />
          <ChevronRight size={16} className="text-black" />
        </div>
      </motion.div>

    </motion.div>

  </div>

</section>
);
}