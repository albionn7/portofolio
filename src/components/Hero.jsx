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
    <section
      className="relative isolate overflow-hidden rounded-[32px] border px-5 py-9 shadow-2xl shadow-black/30 sm:px-9 sm:py-12 lg:px-14 lg:py-14"
      style={{
        borderRadius: "32px",
        borderColor: "rgba(255, 255, 255, 0.12)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit]"
        style={{
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse at 88% 8%, rgba(34, 211, 238, 0.12), transparent 38%), radial-gradient(ellipse at 35% 100%, rgba(139, 92, 246, 0.10), transparent 42%)",
        }}
      />
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-cyan-100 sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
            Available for opportunities
          </motion.div>
          <motion.h1
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hey, I’m{" "}
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent lg:inline">
              Albion Mazari
            </span>
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-4 bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl"
          >
            Full Stack Developer
          </motion.span>

          <motion.p
            className="mt-5 max-w-xl text-[15px] leading-7 text-neutral-300 sm:text-base sm:leading-8"
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
            className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-300 to-sky-400 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-cyan-950/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/20 sm:text-base"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] sm:text-base"
            >
              View Projects <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </div>

        <div className="flex w-full justify-center lg:justify-end">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[390px] lg:w-[390px]">
            <img
              src={profilePic}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 rounded-3xl object-cover opacity-40 blur-2xl"
            />
            <div className="absolute inset-0" style={{ transform: "scaleY(-1)" }}>
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilePic}
                alt="Albion Mazari"
                className="h-full w-full rounded-3xl object-cover object-[50%_25%] shadow-2xl shadow-black/50 contrast-110 brightness-105 saturate-110"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 sm:mt-12 sm:gap-4 sm:pt-6">
        {[
          ["3+ years", "building for the web"],
          ["Full Stack", "from idea to MVP"],
          ["User focused", "thoughtful digital products"],
        ].map(([title, detail]) => (
          <div
            key={title}
            className="min-w-0 rounded-xl border border-white/[0.07] bg-white/[0.03] px-2 py-3 text-center sm:rounded-2xl sm:px-5 sm:py-4 sm:text-left"
          >
            <p className="text-xs font-semibold text-white sm:text-base">{title}</p>
            <p className="mt-1 text-[10px] leading-tight text-neutral-400 sm:text-sm sm:leading-normal">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
