"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Gallery",
    href: "/Coming-soon",
    
  },
  {
    name: "Blog",
    children: [
      { name: "Articles", href: "/blog" },
      { name: "News", href: "/Coming-soon" },
    ],
  },
  {
    name: "Contact Us",
    children: [
      { name: "Contact", href: "/contact#contact-info" },
      { name: "Appointment", href: "/contact#appointment-form" },
    ],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileActive, setMobileActive] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto"
  }, [mobileOpen])

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500
        ${
          scrolled
            ? "backdrop-blur-xl bg-black/30 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] md:h-[84px] lg:h-[96px] max-w-7xl items-center px-5 md:px-8 lg:px-10">

          {/* LOGO */}
          <Link href="/" className="flex items-center mr-6 lg:mr-10 shrink-0">
            <Image
              src="/logo.png"
              alt="Venlakh Restore Plus"
              width={200}
              height={60}
              priority
              className="h-[42px] md:h-[48px] lg:h-[56px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-12 text-[17px] text-white font-heading tracking-[0.04em]">

            {NAV_ITEMS.map((item) => (

              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >

                {/* SIMPLE LINK (HOME) */}
                {item.href ? (

                  <Link
                    href={item.href}
                    className="relative pb-2 group"
                  >
                    {item.name}

                    <span
                      className="
                      absolute left-0 bottom-0 h-[1.5px] w-full bg-white
                      scale-x-0 origin-right
                      transition-transform duration-500
                      group-hover:scale-x-100 group-hover:origin-left
                    "
                    />
                  </Link>

                ) : (

                  <span className="relative pb-2 cursor-pointer group">

                    {item.name}

                    <span
                      className="
                      absolute left-0 bottom-0 h-[1.5px] w-full bg-white
                      scale-x-0 origin-right
                      transition-transform duration-500
                      group-hover:scale-x-100 group-hover:origin-left
                    "
                    />

                  </span>

                )}

                {/* MODERN MINIMAL DROPDOWN */}
                <AnimatePresence>

                  {item.children && activeMenu === item.name && (

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 top-[38px] flex flex-col gap-2 pt-3"
                    >

                      {item.children.map((child) => (

                        <Link
                          key={child.name}
                          href={child.href}
                          className="
                          text-[15px]
                          text-white/80
                          hover:text-white
                          transition
                          relative
                          w-fit
                          group
                        "
                          onClick={() => setActiveMenu(null)}
                        >

                          {child.name}

                          <span
                            className="
                            absolute left-0 -bottom-1 h-[1px] w-full bg-white
                            scale-x-0 origin-left
                            transition-transform duration-300
                            group-hover:scale-x-100
                          "
                          />

                        </Link>

                      ))}

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            ))}

          </nav>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center gap-4 md:gap-6 lg:gap-8 text-white">

            {/* PHONE */}
            <div className="hidden md:flex items-center gap-2 text-[15px] lg:text-[16px]">

              <Phone size={18} strokeWidth={1.8} />

              <span className="font-heading tracking-[0.04em]">
                +91-938 039 1877
              </span>

            </div>

            {/* CTA BUTTON */}
           <Link href="/contact#appointment-form">
  <button
    className="
      rounded-full
      bg-[#9FB1A0]
      px-5 py-2
      text-[14px]
      font-heading
      text-black
      whitespace-nowrap
      transition-all
      hover:bg-[#8fa391]
      md:px-6 md:py-2.5 md:text-[15px]
      lg:px-7 lg:py-3 lg:text-[16px]
      cursor-grabbing
    "
  >
    Enquiry
  </button>
</Link>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden flex items-center justify-center w-[38px] h-[38px]"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={26} />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl text-white"
          >

            {/* MOBILE HEADER */}
            <div className="flex h-[72px] items-center justify-between px-6">

              <Image
                src="/logo.png"
                alt="Venlakh Restore Plus"
                width={180}
                height={50}
                className="h-[40px] w-auto object-contain"
              />

              <button onClick={() => setMobileOpen(false)}>
                <X size={28} />
              </button>

            </div>

            {/* MOBILE NAV */}
            <div className="px-6 pt-8 space-y-6">

              {NAV_ITEMS.map((item) => (

                <div key={item.name} className="border-b border-white/10 pb-4">

                  {item.href ? (

                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-heading"
                    >
                      {item.name}
                    </Link>

                  ) : (

                    <button
                      onClick={() =>
                        setMobileActive(
                          mobileActive === item.name ? null : item.name
                        )
                      }
                      className="flex w-full items-center justify-between text-2xl font-heading"
                    >

                      {item.name}

                      <motion.span
                        animate={{ rotate: mobileActive === item.name ? 180 : 0 }}
                      >
                        <ChevronDown />
                      </motion.span>

                    </button>

                  )}

                  <AnimatePresence>

                    {item.children && mobileActive === item.name && (

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >

                        <div className="mt-4 flex flex-col gap-3 pl-4">

                          {item.children.map((child) => (

                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-base text-white/80 hover:text-white transition"
                            >
                              {child.name}
                            </Link>

                          ))}

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

              ))}

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}