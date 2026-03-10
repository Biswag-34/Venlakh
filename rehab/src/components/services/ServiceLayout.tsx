import ServiceHeader from "./ServiceHeader"
import ServiceArticle from "./ServiceArticle"
import GlobalCTA from "@/components/forms/GlobalCTA"
import { ServiceSection } from "@/types/service"

import Header2 from "../layout/Header2"
import Footer from "../layout/Footer"
import HeaderSpacer from "../layout/HeaderSpacer"

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
    <div className="flex min-h-screen flex-col">

      {/* Fixed Header */}
      <Header2 />

      {/* Spacer for fixed header */}
      <HeaderSpacer />

      {/* HERO / PAGE HEADER */}
      <ServiceHeader
        title={title}
        subtitle={subtitle}
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full">

        <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 py-16 lg:py-24">

          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-[minmax(0,760px)_320px]
            xl:grid-cols-[minmax(0,820px)_340px]
            gap-12
            lg:gap-16
          "
          >

            {/* ARTICLE */}
            <div className="min-w-0">
              <ServiceArticle sections={sections} />
            </div>

            {/* CTA SIDEBAR */}
            <aside className="relative">

              <div className="lg:sticky lg:top-24">

                <GlobalCTA />

              </div>

            </aside>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}