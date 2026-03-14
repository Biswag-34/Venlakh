"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Dialog } from "@headlessui/react"

interface FormState {
  name: string
  email: string
  phone: string
  agree: boolean
}

interface ToastState {
  type: "success" | "error"
  msg: string
}

interface InputProps {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

function Input({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div className="group relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none text-[15px] tracking-[0.05em] pb-3"
      />

      <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-300"></span>

      <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2f3b2f] transition-all duration-700 ease-out group-hover:w-full"></span>
    </div>
  )
}

export default function GlobalCTA() {
  const pathname = usePathname()
  const serviceSlug = pathname.split("/").pop()

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    agree: false,
  })

  const [sending, setSending] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [toast, setToast] = useState<ToastState | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const validate = () => {
    const nameRegex = /^[A-Za-z ]{2,50}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[6-9]\d{9}$/

    if (!nameRegex.test(form.name))
      return "Please enter a valid name"

    if (!emailRegex.test(form.email))
      return "Please enter a valid email"

    if (!phoneRegex.test(form.phone))
      return "Enter a valid Indian mobile number"

    if (!form.agree)
      return "Please accept the Privacy Policy"

    return null
  }

  const showToast = (type: "success" | "error", msg: string) => {
    setToast({ type, msg })

    setTimeout(() => {
      setToast(null)
    }, 4000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const error = validate()

    if (error) {
      showToast("error", error)
      return
    }

    try {
      setSending(true)

      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log({
        ...form,
        service: serviceSlug,
      })

      showToast("success", "Message sent successfully 🎉")

      setForm({
        name: "",
        email: "",
        phone: "",
        agree: false,
      })
    } catch {
      showToast("error", "Something went wrong")
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full max-w-[400px]"
      >
        <div className="bg-[#f4f1ee] rounded-xl px-8 py-9 shadow-sm">
          <h3 className="text-[24px] font-serif tracking-[0.04em] text-[#1f1f1f] mb-7">
            Get in Touch
          </h3>

          <form onSubmit={handleSubmit} className="space-y-7">
            <Input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <Input
              name="phone"
              placeholder="Contact Number"
              value={form.phone}
              onChange={handleChange}
            />

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-[#2f3b2f]"
              />

              <p className="text-[14px] text-gray-600 tracking-[0.03em]">
                I agree with the site&apos;s{" "}
                <span
                  onClick={() => setPrivacyOpen(true)}
                  className="underline cursor-pointer hover:text-[#2f3b2f]"
                >
                  Privacy Policy
                </span>
              </p>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="flex items-center gap-3 bg-[#7e8f7a] text-white px-8 py-4 rounded-full text-[15px] tracking-[0.06em] font-medium hover:bg-[#6f816b] transition-all duration-300"
            >
              <motion.div
                animate={sending ? { x: [0, 30, 0] } : {}}
                transition={{ duration: 1, repeat: sending ? Infinity : 0 }}
              >
                <Send size={17} />
              </motion.div>

              {sending ? "Sending..." : "Get in Touch"}
            </button>
          </form>

          <div className="mt-12 text-sm text-gray-600 space-y-2 tracking-[0.04em]">
            <p className="font-medium text-[#2f3b2f]">Bengaluru</p>
            <p>#123, 5th Main Road, Chamrajpet</p>
            <p>Karnataka - 560018</p>
          </div>
        </div>
      </motion.div>

      {/* PRIVACY MODAL */}

      <Dialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

        <div className="fixed inset-0 flex items-center justify-center p-6">
          <Dialog.Panel className="bg-white max-w-lg w-full p-8 rounded-xl shadow-xl max-h-[80vh] overflow-y-auto">
            <Dialog.Title className="text-xl font-semibold mb-4">
              Privacy Policy
            </Dialog.Title>

            <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
              Venlakh Restrocare Plus respects your privacy and protects your personal information.

              <p><strong>1. Information we collect</strong><br/>
              Full name, Phone number, Email address.</p>

              <p><strong>2. How we use your information</strong><br/>
              Respond to inquiries, provide services and updates.</p>

              <p><strong>3. Sharing & storage</strong><br/>
              We never sell your data. Stored securely up to 12–24 months.</p>

              <p><strong>4. Your rights</strong><br/>
              Access, correct, delete or withdraw consent anytime.</p>

              <p>
              Email: info@thevenlakhhospital.com<br/>
              Phone: +91 - 861 825 9484
              </p>
            </div>

            <button
              onClick={() => {
                setForm({ ...form, agree: true })
                setPrivacyOpen(false)
              }}
              className="mt-6 bg-[#2f3b2f] text-white px-6 py-3 rounded-full"
            >
              I Agree
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* TOAST */}

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`fixed bottom-8 right-8 flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg text-white
            ${toast.type === "success" ? "bg-green-600" : "bg-red-500"}`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 size={20} />
            ) : (
              <AlertCircle size={20} />
            )}

            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}