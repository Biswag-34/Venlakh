import { blogs } from "@/data/blogs";

export const getBlogBySlug = (slug: string) => {
  return blogs.find((b) => b.slug === slug);
};