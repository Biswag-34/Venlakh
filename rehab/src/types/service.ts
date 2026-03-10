export interface ServiceSection {
  title?: string
  paragraph?: string
  image?: string
  imageRow?: string[]
  points?: string[]
  video?: string
}

export interface ServiceData {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  cardImage?: string
  sections: ServiceSection[]
}