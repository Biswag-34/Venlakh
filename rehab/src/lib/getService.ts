import { services } from "@/data/services"

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}