import { services } from "@/data/services"
import { ServiceData } from "@/types/service"

export function getService(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServices(): ServiceData[] {
  return services
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}

export function getServices() {
  return services
}