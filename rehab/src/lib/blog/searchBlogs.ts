import { Blog } from "@/types/blog";

export const searchBlogs = (blogs: Blog[], query: string) => {
  return blogs.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase())
  );
};