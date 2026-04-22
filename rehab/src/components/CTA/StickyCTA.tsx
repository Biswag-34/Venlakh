"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { LuSend } from "react-icons/lu"

const items = [
  {
    label: "Enquiry",
    icon: LuSend,
    href: "/contact#appointment-form",
    gradient: "from-[#c9a86a] to-[#e5c58b]",
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/919380391877",
    gradient: "from-green-500 to-green-600",
  },
]

export default function StickyCTA() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = 0
    return scrollY.on("change", (latest) => {
      if (latest > last && latest > 200) setHidden(true)
      else setHidden(false)
      last = latest
    })
  }, [scrollY])

  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{
        x: hidden ? 120 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      className="
      fixed
      z-50
      right-0
      top-1/2
      -translate-y-1/2
      
      flex
      flex-col
      items-end
      gap-3

      max-md:top-auto
      max-md:bottom-20
      max-md:right-4
      max-md:translate-y-0
      "
    >
      {items.map((item, i) => {
        const Icon = item.icon

        return (
          <motion.a
            key={i}
            href={item.href}
            target={item.label === "WhatsApp" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: { width: 48 },
              hover: { width: 160 },
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 28,
            }}
            className={`
            flex
            items-center
            h-12
            overflow-hidden
            rounded-l-xl
            text-white
            shadow-lg
            hover:shadow-xl
            
            bg-gradient-to-r ${item.gradient}
            `}
          >
            {/* ICON */}
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
              }}
              className="
              flex
              items-center
              justify-center
              w-12
              h-12
              shrink-0
              text-lg
              "
            >
              <Icon />
            </motion.div>

            {/* TEXT */}
            <motion.span
              variants={{
                rest: { opacity: 0, x: 10 },
                hover: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="
              whitespace-nowrap
              pr-5
              text-sm
              font-medium
              "
            >
              {item.label}
            </motion.span>
          </motion.a>
        )
      })}
    </motion.div>
  )
}