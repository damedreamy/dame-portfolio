"use client";

import Projects from "./projects/page";
import Contact from "./contact/page";
import AboutMe from "./about/page";
import Hero from "./hero/page";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <TracingBeam>
      <main className="text-white min-h-screen pb-40">
        {/* HERO */}
        <section id="hero">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about">
          <AboutMe />
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <Projects />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </TracingBeam>
  );
}