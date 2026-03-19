"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";


/* ================= linking ================= */
const services = [
  { name: "Bedridden Support", href: "/services/bedridden-support" },
  { name: "Cancer Recovery & Palliative Care Patients", href: "/services/cancer-recovery-palliative-care" },
  { name: "Step Down Care", href: "/services/step-down-care" },
  { name: "Advanced Wound Care and VAC", href: "/services/advanced-wound-care-vac" },
  { name: "Post Surgical Management", href: "/services/post-surgical-management" },
  { name: "Stroke and Neurotherapy", href: "/services/stroke-neurotherapy" },
  { name: "Physiotherapy", href: "/services/physiotherapy" },
  { name: "Home Care", href: "/services/home-care" },
  { name: "End of Life Support", href: "/services/end-of-life-support" },
];

/* ================= Animation Variants ================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

/* ================= Component ================= */

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      {/* ================= Main Footer ================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          
          {/* ========== Column 1 ========== */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-xl font-medium mb-4 tracking-wide">
              Venlakh Restocare +
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              Professional care and advanced rehabilitation solutions focused
              on restoring health, mobility, and overall well-being.
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 transition-all duration-700 hover:bg-white hover:-translate-y-1"
                >
                  <Icon size={18} strokeWidth={1.6} className="text-white" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ========== Column 2 ========== */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h3 className="text-sm uppercase tracking-wider mb-5 font-medium">
              Useful Links
            </h3>

            <ul className="space-y-2.5">
              {["About Us", "Pricing", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      href="/contact"
                      className="
                      relative inline-block text-sm text-gray-400
                      transition-all duration-700
                      hover:text-white hover:translate-x-1

                      after:absolute after:left-0 after:-bottom-1
                      after:h-[1px] after:w-full
                      after:bg-white
                      after:origin-left after:scale-x-0
                      after:transition-transform after:duration-700
                      hover:after:scale-x-100
                      "
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* ========== Column 3 ========== */}
          <motion.div
  variants={itemVariants}
  transition={{ duration: 0.9, ease: "easeOut" }}
>
  <h3 className="text-sm uppercase tracking-wider mb-5 font-medium">
    Our Services
  </h3>

  <ul className="space-y-2.5">
    {services.map((service, i) => (
      <li key={i}>
        <Link
          href={service.href}
          className="
          relative inline-block text-sm text-gray-400
          transition-all duration-700
          hover:text-white hover:translate-x-1

          after:absolute after:left-0 after:-bottom-1
          after:h-[1px] after:w-full
          after:bg-white
          after:origin-left after:scale-x-0
          after:transition-transform after:duration-700
          hover:after:scale-x-100
          "
        >
          {service.name}
        </Link>
      </li>
    ))}
  </ul>
</motion.div>

          {/* ========== Column 4 ========== */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h3 className="text-sm uppercase tracking-wider mb-5 font-medium">
              Contact Info
            </h3>

            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={17} strokeWidth={1.6} className="text-white mt-1" />
                <p>
                  #123, 5th Main Road, Chamrajpet
                  <br />
                  Bengaluru, Karnataka-560018
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} strokeWidth={1.6} className="text-white" />
                <p>+91 - 861 825 9484</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={17} strokeWidth={1.6} className="text-white" />
                <p>info@thevenlakhhospital.com</p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ================= Bottom Bar ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Venlakh Restocare Plus+ All Rights
            Reserved.
          </p>

          <div className="flex gap-5">
            {["Privacy Policy", "Terms & Conditions"].map((item, i) => (
              <Link
                key={i}
                href="#"
                className="
                relative inline-block
                transition-all duration-700
                hover:text-white

                after:absolute after:left-0 after:-bottom-1
                after:h-[1px] after:w-full
                after:bg-white
                after:origin-left after:scale-x-0
                after:transition-transform after:duration-700
                hover:after:scale-x-100
                "
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}