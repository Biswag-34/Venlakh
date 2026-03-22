"use client";

import { motion } from "framer-motion";
import ParagraphBlock from "@/components/blogBlocks/ParagraphBlock";
import HeadingBlock from "@/components/blogBlocks/HeadingBlock";
import ImageBlock from "@/components/blogBlocks/ImageBlock";
import QuoteBlock from "@/components/blogBlocks/QuoteBlock";

interface ContentBlock {
  type: "paragraph" | "heading" | "image" | "quote";
  content?: string;
  src?: string;
  alt?: string;
  [key: string]: unknown;
}

interface BlogContentRendererProps {
  content: ContentBlock[];
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08 },
        },
      }}
      className="max-w-3xl mx-auto py-12 px-4"
    >
      {content.map((block: ContentBlock, i: number) => {
        switch (block.type) {
          case "paragraph":
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <ParagraphBlock content={block.content || ""} />
              </motion.div>
            );

          case "heading":
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <HeadingBlock content={block.content || ""} />
              </motion.div>
            );

          case "image":
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <ImageBlock src={block.src || ""} alt={block.alt} />
              </motion.div>
            );

          case "quote":
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <QuoteBlock content={block.content || ""} />
              </motion.div>
            );

          default:
            return null;
        }
      })}
    </motion.div>
  );
}