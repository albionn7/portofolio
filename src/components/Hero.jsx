import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";

// Animation variants
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
    <section className="border-b border-neutral-900 py-10">
      <div className="flex flex-wrap lg:flex-nowrap items-center lg:justify-between gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-semibold tracking-tight lg:text-6xl"
          >
            Hey, I'm <span className="text-neutral-400">Albion Mazari</span>
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-3xl font-medium bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent mt-4"
          >
            Full Stack Developer
          </motion.span>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400"
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
            className="mt-8 flex gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 font-light cursor-pointer"
            >
              Contact Me
            </a>
            {/* <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium hover:scale-105 transition-all duration-300 shadow-lg">
                    Download CV
                    </button> */}
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Albion Mazari"
            className="h-72 w-72 rounded-3xl object-cover shadow-lg shadow-black/30 lg:h-[420px] lg:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
