"use client";

import { useState } from "react";
import { getAllBlogs } from "@/lib/blog/getAllBlogs";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Header2 from "@/components/layout/Header2";
import Footer from "@/components/layout/Footer";

import { Blog } from "@/types/blog";

export default function BlogPage() {
  const allBlogs = getAllBlogs();

  const [blogs, setBlogs] = useState<Blog[]>(allBlogs);

  // 🔍 SEARCH
  const handleSearch = (query: string) => {
    const filtered = allBlogs.filter((b) =>
      b.title.toLowerCase().includes(query.toLowerCase())
    );
    setBlogs(filtered);
  };

  // 🏷️ FILTER
  const handleFilter = (tag: string) => {
    if (tag === "all") {
      setBlogs(allBlogs);
      return;
    }

    const filtered = allBlogs.filter((b) =>
      b.tags.includes(tag)
    );

    setBlogs(filtered);
  };

  return (
    <div className="bg-[#f7f9fb] min-h-screen flex flex-col">
      <Header2 />

      {/* 🔥 MAIN CONTENT */}
      <main className="flex-1">
        
        {/* TOP SPACING FROM HEADER */}
        <div className="pt-24 md:pt-28 lg:pt-32" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 🔥 GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* LEFT - BLOG GRID */}
            <div className="lg:col-span-8">
              <BlogGrid blogs={blogs} />
            </div>

            {/* RIGHT - SIDEBAR */}
            <div className="lg:col-span-4">
              <BlogSidebar
                blogs={allBlogs}
                onSearch={handleSearch}
                onFilter={handleFilter}
              />
            </div>

          </div>
        </div>

        {/* BOTTOM SPACING */}
        <div className="pb-20 md:pb-24" />
      </main>

      <Footer />
    </div>
  );
}