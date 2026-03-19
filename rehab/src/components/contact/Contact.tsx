"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const easeExpo: [number, number, number, number] = [0.19, 1, 0.22, 1]

export default function ContactPage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle")

  const [toast, setToast] = useState<string | null>(null)

  // Button hover state (debounced)
  const [isHovered, setIsHovered] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null) // ✅ Fixed: added null initial value

  // Debounced hover handlers
  const handleHoverStart = () => {
    if (status !== "idle") return
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setIsHovered(true)
  }

  const handleHoverEnd = () => {
    if (status !== "idle") return
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 200)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    }
  }, [])

  // Disable hover when not idle
  useEffect(() => {
    if (status !== "idle") {
      // ✅ This setState is intentional and safe – disabling ESLint for this line
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsHovered(false)
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    }
  }, [status])

  useEffect(() => {
    if (!toast) return

    const timer = setTimeout(() => {
      setToast(null)
      setStatus("idle")
    }, 5000)

    return () => clearTimeout(timer)
  }, [toast])

  function validate() {
    const nameRegex = /^[A-Za-z ]{3,40}$/
    const phoneRegex = /^[6-9]\d{9}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!nameRegex.test(name)) {
      setToast("Please enter a valid full name")
      return false
    }

    if (!phoneRegex.test(phone)) {
      setToast("Enter a valid Indian phone number")
      return false
    }

    if (!emailRegex.test(email)) {
      setToast("Enter a valid email address")
      return false
    }

    if (message.length < 10) {
      setToast("Please describe the patient condition")
      return false
    }

    return true
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!validate()) return

    setStatus("loading")

    await new Promise((r) => setTimeout(r, 2000))

    setStatus("sent")

    setToast("Consultation request sent successfully")
  }

  return (
    <main className="bg-[#0b0b0b] text-white">
      {/* HERO */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeExpo }}
          className="max-w-3xl"
        >
          <div className="h-[2px] w-[90px] bg-white mb-8" />

  <h1 className="text-4xl md:text-5xl font-heading leading-tight mb-6">
  Contact{" "}
  <span className="text-blue-200/90">
    Venlakh Restocare
  </span>{" "}
  <span className="text-[#c9a86a]">
    Plus+
  </span>
</h1>

          <p className="text-neutral-300 text-lg leading-relaxed">
            Connect with our rehabilitation specialists to discuss patient care,
            recovery programs, or facility visits. Our team is here to guide
            you through every stage of healing and rehabilitation.
          </p>
        </motion.div>
      </section>

      {/* CONTACT CARDS */}
      <section id="contact-info" className="scroll-mt-[120px] px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:border-[#c9a86a] transition"
          >
            <Phone className="w-7 h-7 mb-6 text-[#c9a86a]" />

            <h3 className="text-xl font-semibold mb-3">Call Us</h3>

            <p className="text-neutral-400 mb-4">
              Speak directly with our care coordinators.
            </p>

            <p className="text-lg font-medium">+91 8618259484</p>

            <p className="text-sm text-neutral-500 mt-1">
              Available for patient assistance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:border-[#c9a86a] transition"
          >
            <Mail className="w-7 h-7 mb-6 text-[#c9a86a]" />

            <h3 className="text-xl font-semibold mb-3">Email Us</h3>

            <p className="text-neutral-400 mb-4">
              Send your queries or admission requests.
            </p>

            <p className="text-lg font-medium">venlakhrestocareplus@gmail.com</p>

            <p className="text-sm text-neutral-500 mt-1">
              We usually respond within a few hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:border-[#c9a86a] transition"
          >
            <MapPin className="w-7 h-7 mb-6 text-[#c9a86a]" />

            <h3 className="text-xl font-semibold mb-3">Visit Us</h3>

            <p className="text-neutral-400 mb-4">
              Experience our rehabilitation facility in person.
            </p>

            <p className="text-lg font-medium">#123, 5th Main Road, Chamrajpet</p>

            <p className="text-sm font-medium mt-1">Bengaluru, Karnataka</p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="appointment-form" className="scroll-mt-[120px] px-6 lg:px-12 max-w-5xl mx-auto pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-heading mb-4">Start a Conversation</h2>

          <p className="text-neutral-400 mb-12">
            Tell us about your requirement and our care team will reach out to
            guide you through the next steps.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#c9a86a]"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                maxLength={10}
                placeholder="Phone Number"
                className="bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#c9a86a]"
              />
            </div>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#c9a86a]"
            />

            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Patient Condition / Requirement"
              className="bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#c9a86a]"
            />

            <motion.button
              type="submit"
              layout
              initial="idle"
              animate={isHovered ? "hover" : "idle"}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              className="relative inline-flex items-center gap-2 bg-[#c9a86a] text-black font-medium px-6 py-4 rounded-lg hover:opacity-90 transition w-fit overflow-hidden"
            >
              {/* TEXT */}
              <motion.span
                layout
                variants={{
                  idle: { opacity: 1, width: "auto" },
                  hover: { opacity: 0, width: 0 },
                }}
                transition={{ duration: 0.25 }}
                className="whitespace-nowrap overflow-hidden"
              >
                Request Consultation
              </motion.span>

              {/* ICON */}
              <motion.div
                layout
                key={status}
                animate={
                  status === "sent"
                    ? {
                        x: [0, 10, 70],
                        y: [0, -10, -70],
                        rotate: [0, -10, 35],
                        opacity: [1, 1, 0],
                        transition: { duration: 0.9, ease: "easeOut" },
                      }
                    : {}
                }
                className="flex items-center"
              >
                <Send size={22} />
              </motion.div>

              {/* LOADING DOTS */}
              {status === "loading" && (
                <div className="flex gap-1 ml-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 bg-black rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.button>

            <p className="text-sm text-neutral-500">
              Your information is handled with strict confidentiality.
            </p>
          </form>
        </motion.div>
      </section>

      {/* MAP */}
      <section className="pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-heading mb-6">Our Facility</h2>

          <p className="text-neutral-400 mb-10 max-w-xl">
            Conveniently located to provide a calm and supportive environment
            for recovery and rehabilitation.
          </p>

          <div className="w-full h-[400px] rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.02862504991106!2d77.5637572!3d12.9571932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f8f884ae3f%3A0x6d2cf03bd708ee7b!2sThe%20Venlakh%20Hospital!5e0!3m2!1sen!2sin!4v1773495625030!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 py-24 px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Begin the Recovery Journey
          </h2>

          <p className="text-neutral-400 mb-10">
            Every recovery story begins with the right care. Speak with our
            specialists to explore how Venlakh Restocare Plus+ can support your
            loved one.
          </p>

          <a
            href="#appointment-form"
            className="inline-block bg-[#c9a86a] text-black px-8 py-4 rounded-lg font-medium hover:opacity-90 transition"
          >
            Book Consultation
          </a>
        </motion.div>
      </section>

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-10 right-10 bg-[#111] border border-[#c9a86a] px-6 py-4 rounded-lg shadow-xl"
        >
          {toast}
        </motion.div>
      )}
    </main>
  )
}