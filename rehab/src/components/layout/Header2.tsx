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
    name: "Pages",
    children: [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Doctors", href: "/doctors" },
    ],
  },
  {
    name: "Blog",
    children: [
      { name: "Articles", href: "/blog" },
      { name: "News", href: "/news" },
    ],
  },
  {
    name: "Contact Us",
    children: [
      { name: "Contact", href: "/contact" },
      { name: "Appointment", href: "/appointment" },
    ],
  },
]

export default function Header2() {

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

  const getBackground = () => {
    return scrolled
      ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
      : "bg-black/20"
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${getBackground()}`}
      >

        <div className="mx-auto flex h-[64px] md:h-[72px] lg:h-[78px] max-w-7xl items-center px-5 md:px-8 lg:px-10">

          {/* LOGO */}

          <Link href="/" className="flex items-center mr-6 lg:mr-10 shrink-0">

            <Image
              src="/logo.png"
              alt="Venlakh Restore Plus"
              width={200}
              height={60}
              priority
              className="h-[38px] md:h-[42px] lg:h-[48px] w-auto object-contain"
            />

          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden lg:flex items-center gap-9 xl:gap-11 text-[18px] text-white font-[Canela-Bold] tracking-[0.03em]">

            {NAV_ITEMS.map((item) => (

              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >

                {/* MAIN LINK */}

                {item.href ? (

                  <Link
                    href={item.href}
                    className="relative pb-1 group"
                  >
                    {item.name}

                    <span
                      className="
                      absolute left-0 bottom-0 h-[1.5px] w-full bg-white
                      scale-x-0 origin-right
                      transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]
                      group-hover:scale-x-100 group-hover:origin-left
                    "
                    />
                  </Link>

                ) : (

                  <span className="relative pb-1 cursor-pointer group">

                    {item.name}

                    <span
                      className="
                      absolute left-0 bottom-0 h-[1.5px] w-full bg-white
                      scale-x-0 origin-right
                      transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]
                      group-hover:scale-x-100 group-hover:origin-left
                    "
                    />

                  </span>

                )}

                {/* DROPDOWN */}

                <AnimatePresence>

                  {item.children && activeMenu === item.name && (

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="
                      absolute top-[40px] left-0
                      min-w-[190px]
                      rounded-xl
                      bg-black/30
                      backdrop-blur-xl
                      border border-white/10
                      p-2
                    "
                    >

                      {item.children.map((child) => (

                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white rounded-md transition"
                        >
                          {child.name}
                        </Link>

                      ))}

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            ))}

          </nav>

          {/* RIGHT SIDE */}

          <div className="ml-auto flex items-center gap-5 lg:gap-7 text-white">

            {/* PHONE */}

            <div className="hidden md:flex items-center gap-2 text-[19px]">

              <Phone size={20} strokeWidth={1.8} />

              <span className="font-[Canela-Bold] tracking-[0.03em]">
                1-800-458-5697
              </span>

            </div>

            {/* CTA */}

            <button
              className="
              rounded-full
              bg-[#9FB1A0]
              px-6 py-2
              text-[15px]
              font-[Canela-Bold]
              text-black
              whitespace-nowrap
              transition-all
              hover:bg-[#8fa391]
            "
            >
              Let’s Talk
            </button>

            {/* MOBILE MENU BUTTON */}

            <button
              className="lg:hidden flex items-center justify-center w-[36px] h-[36px]"
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

            <div className="flex h-[64px] items-center justify-between px-6">

              <Image
                src="/logo.png"
                alt="Venlakh Restore Plus"
                width={180}
                height={50}
                className="h-[38px] w-auto object-contain"
              />

              <button onClick={() => setMobileOpen(false)}>
                <X size={28} />
              </button>

            </div>

            <div className="px-6 pt-8 space-y-6">

              {NAV_ITEMS.map((item) => (

                <div key={item.name} className="border-b border-white/10 pb-4">

                  {item.href ? (

                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-[Canela-Bold]"
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
                      className="flex w-full items-center justify-between text-2xl font-[Canela-Bold]"
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