export default function BlogLayoutClean({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f9fbfa] min-h-screen text-gray-800">

      {/* TOP STRIP */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center text-sm text-gray-500">
          <span>Venlakh Healthcare</span>
          <span>Medical Insights</span>
        </div>
      </div>

      {/* ARTICLE CONTAINER */}
      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* subtle medical accent */}
        <div className="w-12 h-1 bg-emerald-500 mb-10 rounded-full" />

        <article
          className="
            prose prose-lg max-w-none
            prose-headings:text-gray-900
            prose-p:text-gray-700
            prose-p:leading-relaxed
            prose-a:text-emerald-600
            prose-strong:text-gray-900
            prose-blockquote:border-emerald-500
            prose-blockquote:text-gray-600
            prose-li:text-gray-700
          "
        >
          {/* clean drop cap */}
          <div className="first-letter:text-5xl first-letter:font-semibold first-letter:text-emerald-600 first-letter:mr-2 first-letter:float-left">
            {children}
          </div>
        </article>

      </div>

      {/* FOOTER */}
      <div className="border-t border-gray-200 mt-16">
        <div className="max-w-3xl mx-auto px-4 py-8 text-sm text-gray-500 text-center">
          © Venlakh Healthcare • Evidence-based care • Patient-first approach
        </div>
      </div>

    </div>
  );
}