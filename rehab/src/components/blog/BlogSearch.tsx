"use client";

import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

export default function BlogSearch({ onSearch }: Props) {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onSearch(e.target.value);
      }}
      placeholder="Search blogs..."
      className="w-full border p-2 rounded-md"
    />
  );
}