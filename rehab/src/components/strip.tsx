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
    title: "Expert doctors",
    subtitle: "Adipiscing elit",
  },
  {
    icon: Microscope,
    title: "Medical equipment",
    subtitle: "Adipiscing elit",
  },
  {
    icon: ClipboardList,
    title: "Individual plans",
    subtitle: "Adipiscing elit",
  },
  {
    icon: Dumbbell,
    title: "Training programs",
    subtitle: "Adipiscing elit",
  },
];

export default function FeatureStrip() {
  return (
    <section className="w-full bg-[#8F9C88] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-start gap-5"
              >
                {/* ICON */}
                <Icon
                  size={36}
                  strokeWidth={1.4}
                  className="text-white shrink-0 mt-1"
                />

                {/* TEXT */}
                <div>

                  <h3 className="font-heading font-[400] text-white text-[22px] leading-tight tracking-[-0.01em]">
                    {item.title}
                  </h3>

                  <p className="font-body text-white/90 text-sm mt-1">
                    {item.subtitle}
                  </p>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}