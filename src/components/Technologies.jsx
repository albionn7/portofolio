import {
  RiReactjsLine,
  RiTailwindCssFill,
  RiWordpressFill,
  RiNodejsLine,
} from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl" style={{ color: "#61DAFB" }} />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill
            className="text-5xl"
            style={{ color: "#38BDF8" }}
          />
        </motion.div>

        <motion.div
          variants={iconVariants(3.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJs className="text-5xl" style={{ color: "#F7DF1E" }} />
        </motion.div>

        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-5xl" style={{ color: "#3178C6" }} />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNodejsLine className="text-5xl" style={{ color: "#5FA04E" }} />
        </motion.div>

        <motion.div
          variants={iconVariants(4.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-5xl" style={{ color: "#FF8080" }} />
        </motion.div>

        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-5xl text-[#4FAA41]" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiWordpressFill className="text-5xl" style={{ color: "#21759B" }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
