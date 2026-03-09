
import { notFound } from "next/navigation"
import { services } from "@/data/services"
import ServiceLayout from "@/components/services/ServiceLayout"

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const service = services.find((s) => s.slug === slug)

  if (!service) return notFound()

  return (
    <main className="w-full">
  {/* 70-30 Article + CTA Layout */}
      <ServiceLayout sections={service.sections} />

    </main>
  )
}