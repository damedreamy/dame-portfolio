"use client";

import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const cardClass =
    "group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden " +
    "transition-all duration-500 ease-out " +
    "hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(236,72,153,0.25)]";

  const githubButton =
    "inline-flex items-center justify-center text-lg font-semibold " +
    "px-8 py-4 rounded-xl text-white border border-pink-400 bg-pink-500/10 " +
    "shadow-[0_0_28px_rgba(236,72,153,0.35)] " +
    "transition-all duration-500 ease-out " +
    "hover:border-pink-300 hover:shadow-[0_0_34px_rgba(236,72,153,0.45)] " +
    "hover:bg-pink-500/15 hover:-translate-y-[2px] active:scale-[0.97]";

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-24 text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            A collection of my projects demonstrating my skills in development, design, and problem-solving.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 ">
          {[
            {
              title: "My First Portfolio",
              img: "/myPortfolio.jpg",
              desc: "A responsive portfolio built with Next.js and Tailwind CSS.",
              tech: "Next.js, Tailwind",
              problem: "Lacked experience structuring a full responsive site.",
              solution: "Built modular components with responsive layouts.",
              link: "https://bravo-nextjs-portfolio-h6mrsg0lc.vercel.app/",
            },
            {
              title: "Grocery Cart App",
              img: "/groceryApp.jpg",
              desc: "A mobile app for managing grocery lists.",
              tech: "Flutter, Firebase",
              problem: "Firebase integration issues for real-time syncing.",
              solution: "Implemented real-time database structure properly.",
              link: "https://flutlab.io/editor/9c5e9a06-0449-42ac-8f06-1cb2fc5532e9",
            },
            {
              title: "Cignal Database Project",
              img: "/cignaldb.jpg",
              desc: "SQL database design for a company system.",
              tech: "MySQL, SSMS",
              problem: "Data redundancy due to poor normalization.",
              solution: "Refactored schema using normalization principles.",
              link: "#",
            },
            {
              title: "Focus Planner App",
              img: "/focusPlannerApp.jpg",
              desc: "UI design for a productivity planner app.",
              tech: "Figma",
              problem: "Complex task flow design.",
              solution: "Simplified UX using clean hierarchy in Figma.",
              link: "https://github.com/damedreamy/Focus-Planner-Application.git",
            },
            {
              title: "Ghostly Adventure Game",
              img: "/mazeGame.jpg",
              desc: "A Python-based maze adventure game.",
              tech: "Python",
              problem: "Movement and collision logic bugs.",
              solution: "Debugged core game loop and collision system.",
              link: "https://github.com/damedreamy/Ghostly-Adventure-Game.git",
            },
          ].map((project, i) => (
            <div key={i} className={cardClass}>
              {/* IMAGE */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-pink-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-base">{project.desc}</p>

                <p className="text-sm text-cyan-300">{project.tech}</p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-3 px-4 py-2 rounded-xl font-medium bg-pink-500/20 border border-pink-500/30 text-pink-300 hover:text-white hover:bg-pink-500/30 transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-5">
          <p className="text-pink-300 text-lg">
            Curious to see more of what I’ve built?
          </p>

          <a
            href="https://github.com/damedreamy"
            target="_blank"
            className={githubButton}
          >
            Visit my Github
          </a>
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-2xl max-w-lg w-full relative shadow-[0_0_40px_rgba(236,72,153,0.25)]">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-white hover:text-red-400"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-pink-300 mb-3 text-center">
              {selectedProject.title}
            </h2>

            <p className="text-gray-300 text-center mb-4">
              {selectedProject.desc}
            </p>

            <p className="text-sm text-white mb-2">
              <span className="text-red-400 font-semibold">Problem:</span>{" "}
              {selectedProject.problem}
            </p>

            <p className="text-sm text-white mb-4">
              <span className="text-green-400 font-semibold">Solution:</span>{" "}
              {selectedProject.solution}
            </p>

            <p className="text-sm text-cyan-300 mb-6">
              Language: {selectedProject.tech}
            </p>

            <a
              href={selectedProject.link}
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-2 rounded-xl font-medium text-white bg-pink-500/20 border border-pink-500/30 hover:bg-pink-500/30 transition shadow-[0_0_20px_rgba(236,72,153,0.25)]"
            >
              View Code
            </a>
          </div>
        </div>
      )}
    </section>
  );
}