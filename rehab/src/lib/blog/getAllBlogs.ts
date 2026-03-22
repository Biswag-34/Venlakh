import { blogs } from "@/data/blogs";

export const getAllBlogs = () => {
  return blogs.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};