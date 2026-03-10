import { notFound } from "next/navigation"
import ServiceLayout from "@/components/services/ServiceLayout"
import { getService, getServices } from "@/lib/getService"
import { ServiceData } from "@/types/service"

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params

  const service: ServiceData | undefined = getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <ServiceLayout
      title={service.title}
      subtitle={service.subtitle}
      sections={service.sections}
    />
  )
}

/* ✅ SEO BOOST — Static generation for all services */
export async function generateStaticParams() {
  const services = getServices()

  return services.map((service) => ({
    slug: service.slug,
  }))
}

/* ✅ Dynamic SEO metadata */
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) return {}

  return {
    title: `${service.title} | Venlakh Healthcare`,
    description: service.subtitle,
  }
}