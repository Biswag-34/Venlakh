"use client";

import { tags } from "@/data/tags/tags";
import { useState } from "react";

const colorMap: Record<string, string> = {
  care: "bg-green-100 text-green-700",
  venlakh: "bg-emerald-100 text-emerald-700",
  hospital: "bg-blue-100 text-blue-700",
  bangalore: "bg-purple-100 text-purple-700",
  rehab: "bg-orange-100 text-orange-700",
  neuro: "bg-pink-100 text-pink-700",
};

export default function BlogTagFilter({
  onFilter,
}: {
  onFilter: (tag: string) => void;
}) {
  const [active, setActive] = useState("");

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => {
            setActive(tag.id);
            onFilter(tag.id);
          }}
          className={`px-3 py-1 rounded-full text-xs transition border 
          ${colorMap[tag.id] || "bg-gray-100"} 
          ${active === tag.id ? "ring-2 ring-black" : ""}`}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
}