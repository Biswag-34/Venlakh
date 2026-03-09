"use client"

import ServiceHeader from "./ServiceHeader"
import ServiceArticle from "./ServiceArticle"
import GlobalCTA from "@/components/forms/GlobalCTA"
import { ServiceSection } from "@/types/service"

interface Props {
  title: string
  subtitle: string
  sections: ServiceSection[]
}

export default function ServiceLayout({
  title,
  subtitle,
  sections,
}: Props) {

  return (
    <main>

      {/* HERO */}
      <ServiceHeader
        title={title}
        subtitle={subtitle}
      />

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,760px)_340px] gap-22">

          {/* ARTICLE */}
          <div className="min-w-0">
            <ServiceArticle sections={sections} />
          </div>

          {/* STICKY CTA */}
          <aside className="relative">

            <div className="sticky top-10">
              <GlobalCTA />
            </div>

          </aside>

        </div>

      </section>

    </main>
  )
}