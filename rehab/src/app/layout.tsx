import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const canela = localFont({
  src: [
    { path: "../fonts/canela/canela-regular.woff2", weight: "400" },
    { path: "../fonts/canela/canela-medium.woff2", weight: "500" },
    { path: "../fonts/canela/canela-bold.woff2", weight: "700" },
  ],
  variable: "--font-canela",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venlakh",
  description: "Modern Rehabilitation Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${canela.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}