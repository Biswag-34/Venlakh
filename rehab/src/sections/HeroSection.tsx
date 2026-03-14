"use client"

import { motion, useInView, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect } from "react"

const easeExpo: [number, number, number, number] = [0.19, 1, 0.22, 1]

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.6 })
  const controls = useAnimationControls()

  useEffect(() => {
    if (isInView) controls.start("visible")
    else controls.start("hidden")
  }, [isInView, controls])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">

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
        {/* Desktop */}
        <div className="relative hidden xl:block h-full w-full">
          <Image
            src="/hero/desktop.png"
            alt=""
            fill
            priority
            sizes="(min-width:1280px) 100vw"
            className="object-cover"
          />
        </div>

        {/* Laptop */}
        <div className="relative hidden lg:block xl:hidden h-full w-full">
          <Image
            src="/hero/laptop.png"
            alt=""
            fill
            priority
            sizes="(min-width:1024px) and (max-width:1279px) 100vw"
            className="object-cover"
          />
        </div>

        {/* Tablet */}
        <div className="relative hidden md:block lg:hidden h-full w-full">
          <Image
            src="/hero/tablet.png"
            alt=""
            fill
            priority
            sizes="(min-width:768px) and (max-width:1023px) 100vw"
            className="object-cover"
          />
        </div>

        {/* Mobile */}
        <div className="relative block md:hidden h-full w-full">
          <Image
            src="/hero/mobile.png"
            alt=""
            fill
            priority
            sizes="(max-width:767px) 100vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-12">

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
            
          />

          {/* LOGO BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.8,
                  ease: easeExpo,
                },
              },
            }}
            className="
            absolute

            /* Mobile centered */
            left-1/2 -translate-x-1/2
            top-[42%]

            flex flex-col items-center

            /* Tablet */
            md:left-10 md:translate-x-0 md:items-start md:top-[28%]

            /* Laptop */
            lg:left-14 lg:top-[24%]

            /* Desktop */
            xl:left-20 xl:top-[22%]

            max-w-[85vw] md:max-w-[45vw]
            "
          >

            {/* LOGO ICON */}
            <div
              className="
              w-[120px]

              sm:w-[150px]

              md:w-[140px]

              lg:w-[170px]

              xl:w-[210px]
              "
            >
              <Image
                src="/nlogo.png"
                alt="Venlakh Logo"
                width={500}
                height={500}
                priority
                className="w-full h-auto"
              />
            </div>

            {/* TEXT */}
            <div
              className="
              w-[280px]

              sm:w-[340px]

              md:w-[360px]

              lg:w-[420px]

              xl:w-[520px]

              -mt-1 md:-mt-2
              "
            >
              <Image
                src="/ntext.png"
                alt="Venlakh Restocare Plus"
                width={900}
                height={300}
                priority
                className="w-full h-auto"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}