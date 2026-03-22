import { Blog } from "@/types/blog";

export const filterBlogs = (blogs: Blog[], tag: string) => {
  return blogs.filter((b) => b.tags.includes(tag));
};