import Image from "next/image";

export default function Hero() {
    return (
        <main
            id="hero"
            className="min-h-screen flex items-center justify-center text-white px-4"
        >
            <section className="w-full max-w-[1250px] flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
                
                {/* LEFT CONTENT */}
                <div className="relative max-w-[550px] w-full">

                    {/* GLASS BACKGROUND */}
                    <div className="absolute inset-0 -m-6 rounded-3xl bg-black/20 backdrop-blur-md" />

                    {/* CONTENT */}
                    <div className="relative flex flex-col gap-6 p-6 md:p-10">

                        <h3 className="font-medium text-sm tracking-widest uppercase text-pink-300 drop-shadow-[0_0_8px_#00f5ff]">
                            Welcome to My Portfolio ⚡
                        </h3>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Dame
                            </span>
                        </h1>

                        <p className="text-gray-300">
                            Full Stack Developer · Mobile Developer · Database Designer · UI/UX Designer
                        </p>

                        {/* BUTTONS */}
                        <div className="flex gap-4 mt-4 flex-wrap">
                            <a
                                href="/#projects"
                                className="px-6 py-3 rounded-xl 
                                bg-gradient-to-r from-purple-500 via-pink-300 to-pink-400 
                                shadow-[0_0_20px_rgba(168,85,247,0.6)] 
                                hover:shadow-[0_0_45px_rgba(236,72,153,0.9)]
                                transform hover:scale-105 active:scale-95
                                transition-transform duration-300 ease-out"
                            >
                                See my Projects
                            </a>

                            <a
                                href="/DAME'S_CV.pdf"
                                download
                                className="px-6 py-3 rounded-xl 
                                border border-pink-400
                                bg-white/5 backdrop-blur-md
                                shadow-[0_0_28px_rgba(236,72,153,0.35)]
                                hover:border-pink-300
                                hover:shadow-[0_0_34px_rgba(236,72,153,0.45)]
                                hover:bg-pink-500/15
                                transform hover:scale-105 active:scale-95
                                transition-transform duration-300 ease-out"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative w-[220px] md:w-[340px] flex justify-center">

                    <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-60"></div>
                    <div className="absolute inset-2 rounded-full border border-white/10 backdrop-blur-md"></div>

                    <Image
                        src="/Bravo.jpg"
                        width={420}
                        height={420}
                        alt="Profile"
                        className="relative z-10 rounded-full object-cover border border-white/10"
                    />
                </div>

            </section>
        </main>
    );
}