import { getBlogBySlug } from "@/lib/blog/getBlogBySlug";
import { getAllBlogs } from "@/lib/blog/getAllBlogs";
import Image from "next/image";
import Link from "next/link";

// ✅ IMPORT LAYOUTS
import BlogLayout1 from "@/components/layout/BlogLayout1";
import BlogLayout2 from "@/components/layout/BlogLayout2";
import BlogLayout3 from "@/components/layout/BlogLayout3";

// ✅ SSG
export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <div>Blog Not Found</div>;
  }

  // 🔥 DYNAMIC LAYOUT SELECTION
  const Layout =
    blog.layout === "layout1"
      ? BlogLayout1
      : blog.layout === "layout2"
      ? BlogLayout2
      : BlogLayout3;

  return (
    <div className="bg-[#f7f9fb] min-h-screen">

      {/* 🔥 HERO (OUTSIDE LAYOUT) */}
      <div className="relative h-[50vh] w-full">

        {/* BACK BUTTON */}
        <Link
          href="/blog"
          className="absolute top-6 left-6 z-20 bg-white/80 px-4 py-2 rounded-full shadow hover:shadow-lg transition"
        >
          ← Back
        </Link>

        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
              {blog.title}
            </h1>
            <p className="text-white/80 mt-4">
              {blog.description}
            </p>
          </div>
        </div>
      </div>

      {/* 🔥 APPLY LAYOUT HERE */}
      <Layout>
        {blog.content.map((block, i) => {
          switch (block.type) {
            case "heading":
              return (
                <h2 key={i} className="text-2xl font-semibold mt-10 mb-4">
                  {block.content}
                </h2>
              );

            case "paragraph":
              return (
                <p key={i} className="text-gray-700 leading-7 mb-4">
                  {block.content}
                </p>
              );

            case "quote":
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6"
                >
                  {block.content}
                </blockquote>
              );

            case "image":
              return (
                <Image
                  key={i}
                  src={block.src}
                  alt={block.alt || ""}
                  width={800}
                  height={500}
                  className="rounded-xl my-6"
                />
              );

            default:
              return null;
          }
        })}
      </Layout>
    </div>
  );
}