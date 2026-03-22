"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Blog } from "@/types/blog";

interface BlogSidebarProps {
  blogs: Blog[];
  onSearch: (query: string) => void;
  onFilter: (tag: string) => void;
}

export default function BlogSidebar({
  blogs,
  onSearch,
  onFilter,
}: BlogSidebarProps) {
  const [active, setActive] = useState<string>("all");

  // 🔥 CATEGORY COUNTS (dynamic)
  const categories = useMemo(() => {
    const map: Record<string, number> = {};

    blogs.forEach((blog) => {
      blog.tags.forEach((tag) => {
        map[tag] = (map[tag] || 0) + 1;
      });
    });

    return [
      { name: "all", count: blogs.length },
      ...Object.entries(map).map(([name, count]) => ({
        name,
        count,
      })),
    ];
  }, [blogs]);

  // 🔥 RECENT POSTS (latest 3)
  const recentPosts = useMemo(() => {
    return [...blogs]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )
      .slice(0, 3);
  }, [blogs]);

  return (
    <div className="sticky top-28">
      <div className="bg-[#f4f2ef] rounded-3xl p-8 shadow-sm border border-gray-200">

        {/* 🔍 SEARCH */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-5 text-gray-800">
            Search
          </h3>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search ..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
        </div>

        {/* 🏷️ CATEGORIES */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-5 text-gray-800">
            Categories
          </h3>

          <ul className="space-y-4">
            {categories.map((cat) => {
              const isActive = active === cat.name;

              return (
                <li
                  key={cat.name}
                  onClick={() => {
                    setActive(cat.name);
                    onFilter(cat.name);
                  }}
                  className={`flex justify-between items-center cursor-pointer transition ${
                    isActive
                      ? "text-emerald-600 font-semibold"
                      : "text-gray-700 hover:text-emerald-500"
                  }`}
                >
                  <span className="flex items-center gap-2 capitalize">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                    {cat.name}
                  </span>

                  <span className="text-sm text-gray-500">
                    ({cat.count})
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 📰 RECENT POSTS */}
        <div>
          <h3 className="text-xl font-medium mb-5 text-gray-800">
            Recent posts
          </h3>

          <div className="space-y-5">
            {recentPosts.map((post) => (
              <div
                key={post.slug}
                onClick={() => (window.location.href = `/blog/${post.slug}`)}
                className="cursor-pointer group"
              >
                <p className="text-sm font-medium text-gray-800 group-hover:text-emerald-600 transition">
                  {post.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {post.createdAt}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}