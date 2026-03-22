export default function QuoteBlock({ content }: { content: string }) {
  return (
    <blockquote className="border-l-4 pl-4 italic text-gray-600 my-6">
      {content}
    </blockquote>
  );
}