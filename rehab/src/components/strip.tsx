"use client";

import {
  Stethoscope,
  Microscope,
  ClipboardList,
  Dumbbell,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Stethoscope,
    title: "Clinical Precision",
  },
  {
    icon: Microscope,
    title: "Hospital Integrated Infra.",
  },
  {
    icon: ClipboardList,
    title: "Advanced Monitoring",
  },
  {
    icon: Dumbbell,
    title: "Personalized Rehabilitation",
  },
];

export default function FeatureStrip() {
  return (
    <section className="w-full bg-[#8F9C88] py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`
                  flex items-center gap-4 py-3 px-6
                  ${i !== features.length - 1 ? "lg:border-r lg:border-white/30" : ""}
                  ${i < 2 ? "sm:border-b sm:border-white/30 lg:border-b-0" : ""}
                `}
              >
                {/* ICON */}
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-white shrink-0"
                />

                {/* TEXT */}
                <h3 className="font-heading font-[400] text-white text-[18px] leading-tight tracking-[-0.01em]">
                  {item.title}
                </h3>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}