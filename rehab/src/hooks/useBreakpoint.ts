"use client"
import { useEffect, useState } from "react"
import { BREAKPOINTS } from "@/lib/breakpoints"

export function useBreakpoint() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    handler()
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  return {
    isMobile: width < BREAKPOINTS.tablet,
    isTablet: width >= BREAKPOINTS.tablet && width < BREAKPOINTS.laptop,
    isDesktop: width >= BREAKPOINTS.laptop,
    width,
  }
}