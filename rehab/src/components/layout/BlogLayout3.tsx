'use client'

import { motion } from "framer-motion";

export default function BlogLayoutModern({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-white text-gray-800">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Healing Stories & Insights
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Thoughtfully crafted content focused on recovery, wellness, and better living.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-gradient-to-tr from-emerald-200 to-teal-100 h-60 shadow-xl"
        />
      </div>

      {/* MAIN CONTENT + SIDE */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 pb-20">

        {/* ARTICLE */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 bg-white rounded-3xl shadow-lg p-10"
        >
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <div className="first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-600 first-letter:mr-3 first-letter:float-left">
              {children}
            </div>
          </div>
        </motion.article>

        {/* SIDEBAR */}
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-semibold text-lg text-gray-900">About Venlakh</h3>
            <p className="text-sm text-gray-600 mt-2">
              Premium recovery care designed to bring comfort, dignity, and faster healing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-lg">Need Care Support?</h3>
            <p className="text-sm mt-2 opacity-90">
              Connect with our experts for personalized recovery plans.
            </p>
            <button className="mt-4 bg-white text-emerald-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
              Contact Now
            </button>
          </div>

        </motion.aside>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        © Venlakh Healthcare • Premium Recovery Experience
      </footer>
    </div>
  );
}
