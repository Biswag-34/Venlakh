"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Shivakumar N",
    role: "Patient's Son",
    text: "We didn’t want to keep my mother in a hospital for long, but home care was not enough for her condition. This center gave us the perfect solution. Proper medical attention along with a calm and caring atmosphere. The staff is very attentive and treats patients with dignity.",
  },
  {
    name: "Anitha R",
    role: "Patient's family member",
    text: "For us, family comes first, so choosing the right place was very important. This center provided not just treatment but also emotional comfort. The staff speaks politely, listens patiently, and treats elders with respect. We are very satisfied.",
  },
  {
    name: "Srinivasa R Murthy",
    role: "Patient's Brother",
    text: "During a difficult time, what you need most is trust. The team here handled everything so professionally, yet with so much compassion. We never felt like our patient was neglected. It gave our entire family great peace of mind.",
  },
  {
    name: "Ashok K Chandra",
    role: "Patient's family member",
    text: "We were initially unsure, but after seeing the facility and meeting the staff, we felt confident. The setup is very good, and the care is consistent. It’s a good option for patients who need more than home care but don’t want a hospital stay.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0f1412 0%, #121816 50%, #0e1311 100%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 bg-linear-gradient(180deg, #0f1412 0%, #121816 50%, #0e1311 100%)">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-14 sm:mb-18"
        >
          <p className="text-sm tracking-widest uppercase text-[#4f9dde] mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            What our patients say
          </h2>
        </motion.div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={28}
          slidesPerView={1}
          loop={false}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20 bg-transparent"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="h-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="
                  h-full
                  rounded-2xl
                  bg-[#141a18]
                  border border-white/5
                  p-8 sm:p-9 lg:p-10
                  flex flex-col
                  justify-between
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  backdrop-blur-sm
                "
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[#4f9dde] mb-6 opacity-90" />

                {/* Text */}
                <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed flex-1">
                  “{t.text}”
                </p>

                {/* Footer */}
                <div className="pt-6 mt-8 border-t border-white/10">
                  <h4 className="text-base font-semibold text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {t.role}
                  </p>
                </div>

                {/* bottom breathing space like reference */}
                <div className="h-4" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
