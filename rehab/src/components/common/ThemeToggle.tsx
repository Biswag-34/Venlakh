"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // defer state update to avoid sync cascading render
    const init = () => {
      let initialTheme: Theme = "light";

      const stored = localStorage.getItem("theme") as Theme | null;

      if (stored) {
        initialTheme = stored;
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        initialTheme = prefersDark ? "dark" : "light";
      }

      document.documentElement.classList.toggle("dark", initialTheme === "dark");

      setTheme(initialTheme);
      setMounted(true);
    };

    // microtask defer (prevents cascading render)
    queueMicrotask(init);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // ✅ prevents hydration mismatch
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-[999] rounded-full p-3 bg-black/60 text-white backdrop-blur-lg"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}