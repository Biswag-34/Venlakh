import ThemeToggle from "@/components/common/ThemeToggle"
import HeroSection from "@/sections/HeroSection"
import Header from "@/components/layout/Header"
import ServicesSection from "@/sections/ServicesSection"
import AboutSection from "@/sections/AboutSection"
import WhatWeDoSection from "@/sections/Whatwedo"
import Revel from "@/sections/Reveal"
import TestimonialsSection from "@/sections/Testimonials"
import FeatureStrip from "@/components/strip"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <ThemeToggle />
      <Header />
      <HeroSection />
      <ServicesSection /> 
      <AboutSection />  
      <WhatWeDoSection />
      <Revel />
      <TestimonialsSection />
      <FeatureStrip />
      <Footer />
     
    </main>
  )
} 