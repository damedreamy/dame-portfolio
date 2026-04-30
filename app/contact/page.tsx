"use client";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";



export default function Contact() {
  return (
    <main>


      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center space-y-4 mb-14">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Contact Me
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Want to collaborate, build something great, or just say hi? <br /> I’d love to hear from you.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - PROFILE */}
          <div className="flex flex-col items-center text-center space-y-6">

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 blur-2xl opacity-60 animate-pulse"></div>

              <Image
                src="/Bravo.jpg"
                width={260}
                height={260}
                alt="Profile"
                className="
                  relative z-10 rounded-full object-cover
                  border border-white/20
                  shadow-[0_0_40px_rgba(236,72,153,0.6)]
                "
              />
            </div>



            {/* ROLE */}
            <p className="text-yellow-200 max-w-sm">
              Full Stack Developer · Mobile Developer · Database Designer · UI/UX Designer
            </p>

            <p className="text-gray-300 max-w-sm">
              📩 rencessdame18@gmail.com <br />
              📍 Iloilo City, Philippines
            </p>

            {/* LINKS */}
            <div className="flex gap-6 flex-wrap justify-center text-sm">

              <a
                href="https://www.linkedin.com/in/rencess-dame-bravo-085337404/"
                target="_blank"
                className="text-cyan-300 hover:text-cyan-400 transition"
              >
                🔗 LinkedIn
              </a>

              <a
                href="https://github.com/damedreamy"
                target="_blank"
                className="text-pink-300 hover:text-pink-400 transition"
              >
                🔗 GitHub
              </a>

              <a
                href="mailto:rencessdame18@gmail.com"
                className="text-purple-300 hover:text-purple-400 transition"
              >
                📧 Email
              </a>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <BackgroundGradient className="rounded-2xl h-full">
            <form
              className="
              space-y-5
              bg-[#1a1a22] backdrop-blur-md
              border border-white/10
              p-8 rounded-2xl
              shadow-[0_0_30px_rgba(236,72,153,0.15)]
            "
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40 outline-none resize-none"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="
      px-7 py-3 rounded-xl font-medium text-white
      bg-gradient-to-r from-purple-400 to-pink-400
      shadow-[0_0_20px_rgba(34,211,238,0.25)]
      transition-all duration-500 ease-out
      hover:from-green-400 hover:to-green-600
      hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
      active:scale-[0.97]
    "
                >
                  Send
                </button>
              </div>
            </form>
          </BackgroundGradient>


        </div>

      </div>
    </main>
  );
}