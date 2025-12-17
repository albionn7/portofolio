import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

// Animation for each word
const wordAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const About = () => {
  const words = ABOUT_TEXT.split(" ");

  return (
    <section className="relative border-b border-neutral-900 py-20 bg-gradient-to-b from-neutral-900/5 to-transparent ">
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>

      {/* Title */}
      <h1 className="text-center text-4xl font-semibold mb-16">
        About{" "}
        <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
          Me
        </span>
      </h1>

      <motion.p
        className="mx-auto max-w-4xl text-lg leading-relaxed text-neutral-400 text-center lg:text-left"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
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
        className="mt-10 flex justify-center "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <a
          href="/AlbionMazari-cv.pdf"
          download
          className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 font-light"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default About;
