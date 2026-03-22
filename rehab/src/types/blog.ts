export type BlogBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "image"; src: string; alt?: string }
  | { type: "quote"; content: string };

export type Blog = {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  createdAt: string;
  layout: "layout1" | "layout2" | "layout3";
  content: BlogBlock[];
};