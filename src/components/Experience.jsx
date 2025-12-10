import { useState } from "react";
import { EXPERIENCES, EDUCATION } from "../constants";
import { BsBriefcase } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Experience = () => {
  const [active, setActive] = useState("education");

  const data = active === "education" ? EDUCATION : EXPERIENCES;

  return (
    <div className="w-full flex flex-col items-center py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        Qualification
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-500 mb-10"
      >
        My personal journey
      </motion.p>

      {/* Tabs */}
      <div className="flex gap-10 mb-12 text-lg font-semibold">
        {/* Education Tab */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive("education")}
          className={`cursor-pointer flex items-center gap-2 transition ${
            active === "education"
              ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500"
              : "text-slate-400 hover:text-pink-300"
          }`}
        >
          <motion.div
            animate={{
              scale: active === "education" ? 1.2 : 1,
              color: active === "education" ? "#fff" : "#94a3b8",
            }}
          >
            <TbSchool size={20} />
          </motion.div>
          Education
        </motion.button>

        {/* Experience Tab */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive("experience")}
          className={`cursor-pointer flex items-center gap-2 transition ${
            active === "experience"
              ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500"
              : "text-slate-400 hover:text-purple-300"
          }`}
        >
          <motion.div
            animate={{
              scale: active === "experience" ? 1.2 : 1,
              color: active === "experience" ? "#fff" : "#94a3b8",
            }}
          >
            <BsBriefcase size={20} />
          </motion.div>
          Experience
        </motion.button>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl">
        {/* Middle line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
              exit: { opacity: 0, y: -20 },
            }}
            className="flex flex-col gap-16"
          >
            {data.map((item, index) => (
              <motion.div
                variants={fadeInUp}
                key={index}
                className="relative flex justify-between w-full"
              >
                {active === "education" ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="font-semibold text-xl">{item.role}</h3>
                      <p className="text-gray-500">{item.company}</p>
                      <p className="text-gray-400 text-sm">{item.year}</p>
                      <p className="text-gray-500 mt-2">{item.description}</p>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full shadow-md"></div>

                    <div className="w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2"></div>

                    <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full shadow-md"></div>

                    <div className="w-1/2 pl-8">
                      <h3 className="font-semibold text-xl">{item.role}</h3>
                      <p className="text-gray-500">{item.company}</p>
                      <p className="text-gray-400 text-sm">{item.year}</p>
                      <p className="text-gray-500 mt-2">{item.description}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;
