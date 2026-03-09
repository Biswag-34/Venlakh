"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    if (!section || !left || !right) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {

          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${right.scrollHeight - left.offsetHeight}`,
            pin: left,
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });

          gsap.fromTo(
            ".about-reveal",
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: right,
                start: "top 85%",
                end: "bottom 60%",
                scrub: 0.6,
              },
            }
          );

        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0e1110] text-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl pl-10 pr-6 lg:pl-20 lg:pr-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

        {/* LEFT COLLAGE */}

        <div
          ref={leftRef}
          className="relative h-[520px] sm:h-[620px] lg:h-[720px] flex items-center"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 lg:gap-4 w-full h-full">

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/about/1.png"
                alt="therapy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/about/2.png"
                alt="rehabilitation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="relative overflow-hidden col-span-2 rounded-xl">
              <Image
                src="/about/3.png"
                alt="recovery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div ref={rightRef} className="flex items-center py-16 lg:py-[120px]">
          <div className="max-w-[520px] space-y-6 lg:space-y-7">

            <div className="about-reveal text-[11px] lg:text-xs tracking-[0.35em] text-white/60 uppercase">
              Premium Care
            </div>

            <h2 className="about-reveal text-[34px] sm:text-[38px] lg:text-[46px] leading-[1.15] font-medium">
              Enhancing care at our rehab
            </h2>

            <p className="about-reveal text-white/70 text-[15px] lg:text-[16px] leading-[1.7]">
              Our rehabilitation programs are designed to provide personalized
              treatment plans that support long-term healing and recovery.
              Patients receive care from a multidisciplinary team focused on
              physical, emotional, and mental wellbeing.
            </p>

            <p className="about-reveal text-white/70 text-[15px] lg:text-[16px] leading-[1.7]">
              With advanced equipment and experienced professionals, we create
              a supportive environment where patients can rebuild strength,
              regain independence, and improve overall quality of life.
            </p>

            <div className="space-y-8 lg:space-y-10 pt-3 lg:pt-4">

              <div className="about-reveal max-w-[420px]">
                <ClipboardList className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px] text-[#9FB1A0] mb-3 lg:mb-4" />
                <h4 className="text-[20px] lg:text-[22px] leading-[1.3] font-medium mb-2 lg:mb-3">
                  Individual programs
                </h4>
                <p className="text-white/60 text-[15px] lg:text-[16px] leading-[1.7]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque perspiciatis.
                </p>
              </div>

              <div className="about-reveal max-w-[420px]">
                <ClipboardList className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px] text-[#9FB1A0] mb-3 lg:mb-4" />
                <h4 className="text-[20px] lg:text-[22px] leading-[1.3] font-medium mb-2 lg:mb-3">
                  Expert staff and personnel
                </h4>
                <p className="text-white/60 text-[15px] lg:text-[16px] leading-[1.7]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque perspiciatis.
                </p>
              </div>

              <div className="about-reveal max-w-[420px]">
                <ClipboardList className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px] text-[#9FB1A0] mb-3 lg:mb-4" />
                <h4 className="text-[20px] lg:text-[22px] leading-[1.3] font-medium mb-2 lg:mb-3">
                  Certified medical equipment
                </h4>
                <p className="text-white/60 text-[15px] lg:text-[16px] leading-[1.7]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque perspiciatis.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}