"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Lily Miles",
    role: "Patient",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "James Graham",
    role: "Patient",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    name: "Mary Stivens",
    role: "Patient",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    name: "Henry Miles",
    role: "Patient",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
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
