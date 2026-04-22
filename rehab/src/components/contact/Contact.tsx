"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useState, useEffect } from "react"

const easeExpo: [number, number, number, number] = [0.19, 1, 0.22, 1]

export default function ContactPage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle")
  const [toast, setToast] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)

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

  function resetForm() {
    setName("")
    setPhone("")
    setEmail("")
    setMessage("")
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (status !== "idle") return
    if (!validate()) return

    setIsHovered(false)
    setStatus("loading")

    await new Promise((r) => setTimeout(r, 2000))

    setStatus("sent")
    setToast("Consultation request sent successfully")

    setTimeout(() => {
      resetForm()
      setStatus("idle")
    }, 1100)
  }

  const isCompact = isHovered && status === "idle"
  const isBusy = status === "loading" || status === "sent"

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

            <p className="text-lg font-medium">+91 9380391877</p>

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
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-heading mb-4">Start a Conversation</h2>

          <p className="text-neutral-400 mb-8 md:mb-10 max-w-2xl leading-relaxed">
            Tell us about your requirement and our care team will reach out to
            guide you through the next steps.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-5 md:gap-6">
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="bg-white/5 border border-white/10 px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#c9a86a] transition-colors"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                maxLength={10}
                placeholder="Phone Number"
                className="bg-white/5 border border-white/10 px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#c9a86a] transition-colors"
              />
            </div>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="bg-white/5 border border-white/10 px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#c9a86a] transition-colors"
            />

            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Patient Condition / Requirement"
              className="bg-white/5 border border-white/10 px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#c9a86a] transition-colors resize-none"
            />

            <div className="pt-2">
  <div
    className="relative h-14 w-[252px]"
    onMouseEnter={() => {
      if (status === "idle") setIsHovered(true)
    }}
    onMouseLeave={() => {
      if (status === "idle") setIsHovered(false)
    }}
  >
    <motion.button
      type="submit"
      disabled={isBusy}
      animate={{
        width: isCompact ? 60 : 252,
      }}
      transition={{
        duration: 0.38,
        ease: easeExpo,
      }}
      className="absolute left-0 top-0 h-14 rounded-xl bg-[#c9a86a] text-black font-medium overflow-hidden shadow-[0_10px_30px_rgba(201,168,106,0.18)] disabled:cursor-not-allowed"
    >
      <div className="relative h-full w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: easeExpo }}
              className="flex items-center justify-center gap-2.5 whitespace-nowrap"
            >
              <motion.span
                animate={{
                  opacity: isCompact ? 0 : 1,
                  x: isCompact ? -10 : 0,
                  width: isCompact ? 0 : "auto",
                }}
                transition={{ duration: 0.3, ease: easeExpo }}
                className="overflow-hidden whitespace-nowrap"
              >
                Request Consultation
              </motion.span>

              <motion.div
                animate={{
                  scale: isCompact ? 1.02 : 1,
                }}
                transition={{ duration: 0.3, ease: easeExpo }}
                className="flex items-center justify-center"
              >
                <Send size={20} />
              </motion.div>
            </motion.div>
          )}

          {status === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24 }}
              className="flex items-center justify-center gap-2"
            >
              <Send size={20} />
              <div className="flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="block h-1.5 w-1.5 rounded-full bg-black"
                    animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      delay: i * 0.12,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {status === "sent" && (
            <motion.div
              key="sent"
              initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              animate={{
                opacity: [1, 1, 0],
                x: [0, 24, 88],
                y: [0, -10, -52],
                rotate: [0, -10, 28],
                scale: [1, 1.04, 0.9],
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <Send size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  </div>
</div>

            <p className="text-sm text-neutral-500 pt-1">
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