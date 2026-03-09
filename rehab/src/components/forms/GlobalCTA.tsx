"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function GlobalCTA() {
  const pathname = usePathname()
  const serviceSlug = pathname.split("/").pop()

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ ...form, service: serviceSlug })
  }

  return (
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-full max-w-[400px]"
    >
      <div className="bg-[#f4f1ee] rounded-xl px-8 py-9 shadow-sm">

        {/* Heading */}
        <h3 className="text-[24px] font-serif tracking-[0.04em] text-[#1f1f1f] mb-7">
          Get in Touch
        </h3>

        <form onSubmit={handleSubmit} className="space-y-7">

          {/* Name */}
          <div className="group relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-[15px] tracking-[0.05em] pb-3"
            />

            <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-300"></span>

            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2f3b2f] transition-all duration-700 ease-out group-hover:w-full"></span>
          </div>

          {/* Email */}
          <div className="group relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-[15px] tracking-[0.05em] pb-3"
            />

            <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-300"></span>

            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2f3b2f] transition-all duration-700 ease-out group-hover:w-full"></span>
          </div>

          {/* Message */}
          <div className="group relative">
            <textarea
              name="message"
              placeholder="Message"
              rows={2}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-[15px] tracking-[0.05em] pb-3 resize-none"
            />

            <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-300"></span>

            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2f3b2f] transition-all duration-700 ease-out group-hover:w-full"></span>
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer group">

            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1 h-4 w-4 accent-[#2f3b2f] transition-transform group-hover:scale-110"
            />

            <span className="text-[14px] text-gray-600 tracking-[0.03em]">
              I agree with the site&apos;s{" "}
              <span className="underline decoration-transparent group-hover:decoration-[#2f3b2f] transition-all duration-300 font-medium">
                privacy policy
              </span>
            </span>

          </label>

          {/* Button */}
          <button
            type="submit"
            className="flex items-center gap-3 bg-[#7e8f7a] text-white px-8 py-4 rounded-full text-[15px] tracking-[0.06em] font-medium hover:bg-[#6f816b] transition-all duration-300"
          >
            <Send size={17} />
            Get in Touch
          </button>

        </form>

        {/* Contact Info */}
        <div className="mt-12 text-sm text-gray-600 space-y-2 tracking-[0.04em]">

          <p className="font-medium text-[#2f3b2f]">Germany —</p>
          <p>785 15h Street, Office 478</p>
          <p>Berlin, De 81566</p>

        </div>

      </div>
    </motion.div>
  )
}