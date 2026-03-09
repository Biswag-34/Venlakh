"use client"

import { motion, useInView, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect } from "react"

// ThemeREX easing curve
const easeExpo: [number, number, number, number] = [0.19, 1, 0.22, 1]

// Character animation
function WaveText({
  text,
  className = "",
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.035,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-block ${className}`}
    >
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  ease: easeExpo,
                },
              },
            }}
            style={{ transformOrigin: "50% 100%" }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.6 })
  const controls = useAnimationControls()

  useEffect(() => {
    if (isInView) controls.start("visible")
    else controls.start("hidden")
  }, [isInView, controls])

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div className="relative hidden xl:block h-full w-full">
          <Image src="/hero/desktop.png" 
          alt=""
          fill
          priority 
          sizes="(min-width:1280px) 100vw"
          className="object-cover" />
        </div>

        <div className="relative hidden lg:block xl:hidden h-full w-full">
          <Image src="/hero/laptop.png" alt="" fill priority 
          sizes="(min-width:1024px) and (max-width:1279px) 100vw" 
          className="object-cover" />
        </div>

        <div className="relative hidden md:block lg:hidden h-full w-full">
          <Image src="/hero/tablet.png" alt="" fill priority 
          sizes="(min-width:768px) and (max-width:1023px) 100vw"
           className="object-cover" />
        </div>

        <div className="relative block md:hidden h-full w-full">
          <Image src="/hero/mobile.png" alt="" fill priority
           sizes="(max-width:767px) 100vw"
            className="object-cover" />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-12 text-white">

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: 90,
                opacity: 1,
                transition: {
                  duration: 2,
                  ease: easeExpo,
                },
              },
            }}
            className="h-[2px] bg-white mb-8"
          />

          {/* Small Heading */}
          <div className="font-heading mb-14 leading-[1.25] tracking-[0.02em]">

            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">
              <WaveText text="Trusted Rehabilitation" delay={0.1} />
            </div>

            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">
              <WaveText text="Center for Healing" delay={0.15} />
            </div>

          </div>

          {/* Big Word */}
          <div
            className="
              font-heading
              uppercase
              font-medium
              leading-[0.92]
              tracking-[0.01em] lg:-tracking-[0.015em]
              text-[42px] sm:text-[63px] md:text-[84px] lg:text-[119px] xl:text-[161px]
              drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]
            "
          >
            <WaveText text="VENLAKH" delay={0.5} />
          </div>

        </div>
      </div>
    </section>
  )
}