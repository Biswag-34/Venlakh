"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface Props {
  title: string
  subtitle: string
}

  const sectionPadding = "py-[45px]"

export default function ServiceHeader({ title, subtitle }: Props) {
  return (
    <section className={`w-full bg-[#f3f1ee] ${sectionPadding} rounded-[20px]`}>

      <div className="max-w-[900px] mx-auto px-6 text-center flex flex-col items-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-serif text-[56px] md:text-[64px] leading-[1.1] text-[#2b332c]"
        >
          {title}
        </motion.h1>

        {/* Subtitle (kept for logic but subtle like design) */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-[18px] text-gray-600 max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Down arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-[#2b332c]"
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>

      </div>

    </section>
  )
}