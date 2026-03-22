import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}