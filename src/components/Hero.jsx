import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/me.jpg";

const container = (delay = 0) => ({
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const wordAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Hero = () => {
  const words = HERO_CONTENT.split(" ");

  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950/60 px-6 py-12 shadow-2xl shadow-black/30 sm:px-10 lg:px-14 lg:py-16">
      <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full bg-cyan-400/15 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-36 left-1/3 -z-10 h-80 w-80 rounded-full bg-violet-500/15 blur-[100px]" />
      <div className="flex flex-wrap items-center justify-between gap-12 lg:flex-nowrap">
        <div className="w-full lg:w-[58%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-sm font-medium text-cyan-100"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
            Available for opportunities
          </motion.div>
          <motion.h1
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hey, I’m{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              Albion Mazari
            </span>
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-5 bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
          >
            Full Stack Developer
          </motion.span>

          <motion.p
            className="mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordAnimation}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-300 to-sky-400 px-6 py-3 font-semibold text-neutral-950 shadow-lg shadow-cyan-950/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/20"
            >
              Contact Me
            </a>
            {/* <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium hover:scale-105 transition-all duration-300 shadow-lg">
                    Download CV
                    </button> */}
          </motion.div>
        </div>

        <div className="w-full lg:w-[42%] flex justify-center lg:justify-end">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[390px] lg:w-[390px]">
            {/* soft blurred glow behind */}
            <img
              src={profilePic}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full rounded-3xl object-cover blur-2xl scale-110 opacity-40"
            />

            {/* main image */}
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Albion Mazari"
              className="relative h-full w-full rounded-[2rem] border border-white/15 object-cover object-[50%_25%]
                 shadow-2xl shadow-black/50
                 contrast-110 brightness-105 saturate-110
                 scale-y-[-1]"
            />
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
        {[
          ["3+ years", "building for the web"],
          ["Full Stack", "from idea to MVP"],
          ["User focused", "thoughtful digital products"],
        ].map(([title, detail]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 text-center sm:text-left"
          >
            <p className="font-semibold text-white">{title}</p>
            <p className="mt-1 text-sm text-neutral-400">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
