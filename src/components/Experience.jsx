import internshipPic from "../assets/projects/internship-proof.jpg";
import { useState } from "react";
import { EXPERIENCES, EDUCATION } from "../constants";
import { BsBriefcase } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";

import { motion, AnimatePresence } from "framer-motion";
console.log("Internship pic:", internshipPic);

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Experience = () => {
  const [active, setActive] = useState("education");
  const [showProof, setShowProof] = useState(false);
  const [proofImage, setProofImage] = useState("");

  const data = active === "education" ? EDUCATION : EXPERIENCES;

  return (
    <div className="w-full flex flex-col items-center py-16 relative">
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

      <div className="flex gap-10 mb-12 text-lg font-semibold">
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

      <div className="relative w-full max-w-3xl">
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

                      {/* Show Proof Button — EDUCATION side */}
                      {item.company === "Inspire11" && (
                        <button
                          onClick={() => {
                            setProofImage(internshipPic);
                            setShowProof(true);
                          }}
                          className="mt-3 text-sm px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
                        >
                          Show Proof
                        </button>
                      )}
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

                      {/* Show Proof Button — EXPERIENCE side */}
                      {item.company === "Inspire11" && (
                        <button
                          onClick={() => {
                            setProofImage(internshipPic);
                            setShowProof(true);
                          }}
                          className="mt-3 text-sm px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
                        >
                          Show Proof
                        </button>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Proof Modal */}
      {showProof && proofImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-neutral-900 p-4 rounded-xl shadow-2xl max-w-3xl w-full mx-4"
          >
            <img
              src={proofImage}
              alt="Internship Proof"
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />

            <button
              onClick={() => setShowProof(false)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-neutral-800 text-white hover:bg-pink-500 transition flex items-center justify-center"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Experience;
