import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Dame's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-black text-white min-h-screen flex flex-col relative overflow-x-hidden">
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-7">
            {/* BRAND */}
            <p className="text-xl font-bold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {"</> Dame's Portfolio"}
            </p>

            {/* NAV LINKS */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              <Link href="/#hero" className="hover:text-pink-400 transition">
                Home
              </Link>
              <Link href="/#about" className="hover:text-purple-400 transition">
                About Me
              </Link>
              <Link href="/#projects" className="hover:text-cyan-400 transition">
                My Projects
              </Link>
              <Link href="/#contact" className="hover:text-pink-400 transition">
                Contact Me
              </Link>
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="pt-20 flex-grow relative z-10">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="p-6 border-t border-white/10 text-center text-sm text-gray-400 backdrop-blur-md bg-black/40 relative z-10">
         © 2026 Dame's Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}