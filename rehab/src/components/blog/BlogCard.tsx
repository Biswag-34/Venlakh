"use client";

import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <Link href={`/blog/${blog.slug}`}>
        <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
          
          {/* IMAGE */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 backdrop-blur-md transition" />

            {/* icon */}
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
              <ArrowUpRight className="w-4 h-4" />
            </div>

            {/* TITLE OVER IMAGE */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-lg font-semibold leading-snug">
                {blog.title}
              </h3>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-5">
            <p className="text-gray-500 text-sm">
              {blog.description}
            </p>

            {/* TAGS */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}