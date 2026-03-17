"use client";

import { motion, cubicBezier } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  UserCheck,
  BedDouble,
  Brain,
  Syringe,
  HeartHandshake,
} from "lucide-react";

const features = [
  { icon: Stethoscope, title: "Hospital Integrated Care", desc: "Clinical monitoring & Emergency care & surgical care in a hospital setting." },
  { icon: HeartPulse, title: "24/7 Monitoring", desc: "Experienced doctors and clinical staff oversee patients round-the-clock." },
  { icon: UserCheck, title: "Dedicated Care", desc: "Personalized attention with tailored recovery plans." },
  { icon: BedDouble, title: "Private Suites", desc: "Comfortable, calm recovery rooms with full medical readiness." },
  { icon: Brain, title: "Rehabilitation", desc: "Post-surgical, stroke, bedridden, and geriatric support programs." },
  { icon: Syringe, title: "Clinical Support", desc: "IV therapy, infusion care, wound management, and continuous monitoring." },
  { icon: HeartHandshake, title: "Ayurveda Panchakarma", desc: "Traditional healing through Ayurvedic detoxification and rejuvenation therapies." },
];

const easeExpo = cubicBezier(0.19, 1, 0.22, 1);

export default function WhyChooseVenlakh() {
  return (
    <section className="relative py-16 bg-black text-white">
      <style>{`
        .why-choose-root {
          --card-width: 240px;
          --gap: 16px;
        }
        @media (max-width: 1024px) {
          .why-choose-root {
            --card-width: 200px;
            --gap: 14px;
          }
        }
        @media (max-width: 768px) {
          .why-choose-root {
            --card-width: 180px;
            --gap: 12px;
          }
        }
        @media (max-width: 640px) {
          .why-choose-root {
            --card-width: 100%;
            --gap: 12px;
          }
          .pyramid-top,
          .pyramid-bottom {
            flex-wrap: wrap;
            justify-content: center;
          }
          .pyramid-bottom {
            margin-left: 0 !important;
          }
        }
      `}</style>

      <div className="why-choose-root max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-2">
            Why Choose Venlakh
          </h2>
          <p className="text-[#c9a86a]/70 text-sm md:text-base max-w-xl mx-auto">
            Recovery beyond treatment: hospital-level care, personalized rehab, and calm healing environments.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="w-max max-w-full">
            {/* Top row: 4 cards */}
            <div className="pyramid-top flex gap-[var(--gap)] mb-6">
              {features.slice(0, 4).map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.6, ease: easeExpo }}
                    className="w-[var(--card-width)] flex-shrink-0 p-3 rounded-xl border border-white/20 bg-white/5 hover:bg-[#c9a86a]/10 transition duration-500 flex flex-col items-center text-center"
                  >
                    <div className="mb-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a86a]/20">
                      <Icon className="text-[#c9a86a]" size={22} />
                    </div>
                    <h3 className="text-lg font-medium mb-1 text-white">{feature.title}</h3>
                    <p className="text-white/70 text-sm text-center">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom row: 3 cards */}
            <div
              className="pyramid-bottom flex gap-[var(--gap)]"
              style={{ marginLeft: `calc((var(--card-width) + var(--gap)) / 2)` }}
            >
              {features.slice(4).map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx + 4}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx + 4) * 0.08, duration: 0.6, ease: easeExpo }}
                    className="w-[var(--card-width)] flex-shrink-0 p-3 rounded-xl border border-white/20 bg-white/5 hover:bg-[#c9a86a]/10 transition duration-500 flex flex-col items-center text-center"
                  >
                    <div className="mb-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a86a]/20">
                      <Icon className="text-[#c9a86a]" size={22} />
                    </div>
                    <h3 className="text-lg font-medium mb-1 text-white">{feature.title}</h3>
                    <p className="text-white/70 text-sm text-center">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}