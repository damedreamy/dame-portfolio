import Image from "next/image";


const cardClass =
  "bg-[#1a1a22] p-6 rounded-2xl space-y-4 text-center transition-all duration-300 ease-out " +
  "shadow-[0_0_22px_rgba(236,72,153,0.18),0_0_55px_rgba(236,72,153,0.08)] " +
  "hover:-translate-y-2";


const skillClass =
  "px-3 py-1 text-sm bg-pink-500/20 text-pink-300 rounded-full " +
  "transition-all duration-300 hover:bg-pink-500/40 hover:text-white hover:scale-105";

export default function AboutMe() {
  return (
    <main
      id="about"
      className="min-h-screen text-gray-200 px-6 py-16 flex justify-center"
    >
      <div className="max-w-5xl w-full space-y-16">

        {/* HEADER */}
        <section className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about who I am, my skills, and what what drives me as a developer.
          </p>
        </section>

        {/* INTRO */}
        <section className={`${cardClass} text-left`}>
          <p>
            Hello World! I am{" "}
            <span className="text-pink-400 font-semibold">
              Rencess Dame Bravo
            </span>
            , a Full-Stack Developer based in the Philippines focused on building
            fast, scalable, and user-friendly web applications.
          </p>

          <p>
            I specialize in modern web technologies like{" "}
            <span className="text-pink-400">
              Next.js, TypeScript, and SQL
            </span>
            , creating clean interfaces and efficient backend systems.
          </p>

          <p>
            I also have experience in networking, system configuration, and foundational
            security practices including ethical hacking.
          </p>

          <p className="italic text-pink-300">
            Still learning. Still building. Always improving.
          </p>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold text-center text-white">
            My Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {/* FRONTEND */}
            <div className={cardClass + " group"}>
              <h4 className="text-lg font-semibold text-white group-hover:text-pink-300 transition">
                Frontend
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "HTML/CSS",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "Next.js",
                  "Responsive Design",
                  "UI/UX Principles",
                ].map((skill) => (
                  <span key={skill} className={skillClass}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div className={cardClass + " group"}>
              <h4 className="text-lg font-semibold text-white group-hover:text-pink-300 transition">
                Backend
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Node.js",
                  "Python",
                  "PHP",
                  "REST APIs",
                  "Server-side Rendering",
                  "Authentication",
                  "Java",
                ].map((skill) => (
                  <span key={skill} className={skillClass}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OTHER SKILLS */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold text-center text-white">
            Other Skills
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {/* DATABASE */}
            <div className={cardClass + " group"}>
              <h4 className="text-lg font-semibold text-white group-hover:text-pink-300 transition">
                Database
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {["MySQL", "Database Design"].map((skill) => (
                  <span key={skill} className={skillClass}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* NETWORKING */}
            <div className={cardClass + " group"}>
              <h4 className="text-lg font-semibold text-white group-hover:text-pink-300 transition">
                Networking
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Cisco Configuration",
                  "Network Troubleshooting",
                  "System Administration",
                ].map((skill) => (
                  <span key={skill} className={skillClass}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* SECURITY */}
            <div className={cardClass + " group"}>
              <h4 className="text-lg font-semibold text-white group-hover:text-pink-300 transition">
                Security
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Web Security Fundamentals",
                  "Ethical Hacking",
                  "Kali Linux",
                ].map((skill) => (
                  <span key={skill} className={skillClass}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-5">
          <p className="text-pink-300 text-lg">
            Got a project in mind? Let’s make it happen.
          </p>

          <a
            href="/#contact"
            className="
  inline-flex items-center justify-center
  text-lg font-semibold
  px-7 py-4 rounded-xl font-medium text-white
  border border-pink-400
  bg-pink-500/10

  shadow-[0_0_28px_rgba(236,72,153,0.35)]

  transition-all duration-500

  hover:border-pink-300
  hover:shadow-[0_0_34px_rgba(236,72,153,0.45)]
  hover:bg-pink-500/15
  hover:-translate-y-[2px]

active:scale-[0.97]
"
          >
            Contact Me
          </a>

        </section>

      </div>
    </main>
  );
}