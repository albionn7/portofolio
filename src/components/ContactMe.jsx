import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="relative border-b border-neutral-900 py-20"
    >
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>

      <motion.h1
        variants={fadeIn(0)}
        initial="hidden"
        animate="visible"
        className="text-center text-4xl font-semibold mb-16"
      >
        Contact{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Me
        </span>
      </motion.h1>

      <div className="flex items-start justify-between gap-12 max-w-6xl mx-auto px-6 flex-col lg:flex-row">
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-medium mb-6">My Credentials</h2>

          <div className="space-y-5 text-neutral-300">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-white">Name:</span>
              <span>Albion Mazari</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" size={22} />
              <a
                href="mailto:albionnazari@hotmail.com"
                className="text-cyan-400 hover:underline"
              >
                albionnazari@hotmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400" size={22} />
              <span>+389 71 893 718</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" size={22} />
              <span>North Macedonia</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 flex flex-col gap-8"
        >
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-medium mb-6">Social Profiles</h2>

            <div className="flex text-2xl gap-8">
              <a
                href="https://github.com/albionn7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/_albionmazari/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/albion-nazari/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <motion.div
            variants={fadeIn(0.6)}
            initial="hidden"
            animate="visible"
            className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl"
          >
            <h2 className="text-xl font-medium mb-3">Want to work together?</h2>
            <p className="text-neutral-300">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out anytime.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
