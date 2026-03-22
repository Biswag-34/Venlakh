export default function BlogLayoutMagazine({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">

      {/* TOP HEADER BAR */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide text-gray-900">
            Venlakh Journal
          </h1>
          <div className="text-sm text-gray-500">Wellness • Recovery • Care</div>
        </div>
      </div>

      {/* HERO / TITLE SPACE */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="w-12 h-1 bg-emerald-500 mb-6 rounded-full" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            A Modern Approach to Healing & Recovery
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Insights, care stories, and expert perspectives curated for better living.
          </p>
        </div>

        {/* visual block */}
        <div className="h-64 rounded-3xl bg-gradient-to-tr from-emerald-200 to-teal-100 shadow-inner" />
      </div>

      {/* MAIN MAGAZINE GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 pb-20">

        {/* LEFT META COLUMN */}
        <aside className="md:col-span-3 space-y-6 text-sm text-gray-500">
          <div>
            <p className="uppercase tracking-wider text-gray-400">Category</p>
            <p className="text-gray-800 font-medium">Healthcare</p>
          </div>

          <div>
            <p className="uppercase tracking-wider text-gray-400">Read Time</p>
            <p className="text-gray-800 font-medium">5 min</p>
          </div>

          <div className="pt-6 border-t">
            <p className="text-gray-700 font-medium">About</p>
            <p className="mt-2">
              Premium recovery care designed for comfort, dignity, and faster healing.
            </p>
          </div>
        </aside>

        {/* ARTICLE CONTENT */}
        <article className="md:col-span-6">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-blockquote:border-emerald-500">

            <div className="first-letter:text-6xl first-letter:font-bold first-letter:text-emerald-600 first-letter:mr-3 first-letter:float-left">
              {children}
            </div>

          </div>
        </article>

        {/* RIGHT SIDEBAR */}
        <aside className="md:col-span-3 space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="font-semibold text-gray-900">Featured Insight</h3>
            <p className="text-sm text-gray-600 mt-2">
              Recovery is not just physical — it&apos;s emotional and mental too.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold">Need Expert Care?</h3>
            <p className="text-sm mt-2 opacity-90">
              Connect with Venlakh specialists for personalized recovery plans.
            </p>
            <button className="mt-4 bg-white text-emerald-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
              Get Consultation
            </button>
          </div>

        </aside>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        © Venlakh Healthcare • Premium Recovery Experience
      </footer>

    </div>
  );
}