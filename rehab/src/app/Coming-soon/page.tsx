"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a] text-white relative overflow-hidden">

      {/* GOLD AMBIENT GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#c9a86a]/10 blur-[120px] rounded-full top-[-100px] left-1/2 -translate-x-1/2 pointer-events-none"/>

      <div className="max-w-3xl text-center relative z-10">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-heading text-[#f5f2ea]"
        >
          Page Under Development
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-neutral-300 font-body"
        >
          We&#39;re carefully preparing this section to deliver a
          better rehabilitation experience for our patients.
        </motion.p>

        {/* GOLD DIVIDER */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.4 }}
          className="h-[2px] bg-[#c9a86a] mx-auto mt-8"
        />

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-neutral-400 max-w-xl mx-auto"
        >
          Our team is currently building this page to ensure
          the best possible experience for families and patients.
          Please check back shortly.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <Link
            href="/"
            className="
            px-6 py-3
            rounded-lg
            bg-[#c9a86a]
            text-black
            font-medium
            hover:opacity-90
            transition
            "
          >
            Back to Home
          </Link>

          <a
            href="https://wa.me/918618259484"
            className="
            px-6 py-3
            rounded-lg
            border
            border-[#c9a86a]/40
            text-[#e6d6b5]
            hover:bg-[#c9a86a]/10
            transition
            "
          >
            Contact via WhatsApp
          </a>
        </motion.div>

      </div>
    </main>
  )
}