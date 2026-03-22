import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";

type Props = {
  blogs: Blog[];
};

export default function BlogList({ blogs }: Props) {
  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}