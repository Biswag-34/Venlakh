"use client"

import { ServiceSection } from "@/types/service"
import { motion, easeInOut } from "framer-motion"
import Image from "next/image"

interface Props {
  sections: ServiceSection[]
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
}

export default function ServiceArticle({ sections }: Props) {
  return (
    <article className="max-w-[760px] mx-auto space-y-14">

      {sections.map((section, index) => (

        <motion.div
          key={index}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="space-y-6"
        >

          {/* Full width image */}
          {section.image && (
            <div className="overflow-hidden rounded-[16px]">
              <Image
                src={section.image}
                alt=""
                width={900}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Two column images */}
          {"imageRow" in section && section.imageRow && (
            <div className="grid grid-cols-2 gap-6">
              {section.imageRow.map((img: string, i: number) => (
                <div key={i} className="overflow-hidden rounded-[14px]">
                  <Image
                    src={img}
                    alt=""
                    width={420}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Section title */}
          {section.title && (
            <h2 className="text-[26px] font-semibold text-[#2e2e2e]">
              {section.title}
            </h2>
          )}

          {/* Paragraph */}
          {section.paragraph && (
            <p className="text-[16px] leading-[1.9] text-gray-600">
              {section.paragraph}
            </p>
          )}

          {/* Bullet list */}
          {section.points && (
            <ul className="space-y-3 mt-4">

              {section.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[16px] leading-[1.7] text-gray-600"
                >
                  <span className="mt-[9px] h-[6px] w-[6px] rounded-full bg-black"></span>
                  {point}
                </li>
              ))}

            </ul>
          )}

          {/* Video block */}
          {"video" in section && section.video && (
            <div className="overflow-hidden rounded-[16px]">
              <video
                controls
                className="w-full h-auto rounded-[16px]"
                src={section.video}
              />
            </div>
          )}

        </motion.div>

      ))}

    </article>
  )
}