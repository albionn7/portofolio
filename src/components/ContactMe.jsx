import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CONTACT } from "../constants";

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
      className="relative isolate overflow-hidden border-b border-neutral-900 py-20"
    >
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>

      <motion.h1
        variants={fadeIn(0)}
        initial="hidden"
        animate="visible"
        className="mb-4 text-center text-4xl font-semibold"
      >
        Contact{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Me
        </span>
      </motion.h1>
      <p className="mx-auto mb-12 max-w-xl px-6 text-center leading-7 text-neutral-400">
        Have a project in mind or an opportunity to discuss? I’d love to hear from you.
      </p>

      <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-6 px-6 lg:flex-row">
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
          className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/20 backdrop-blur-lg lg:w-1/2"
        >
          <h2 className="mb-6 text-2xl font-medium">Get in touch</h2>

          <div className="space-y-3 text-neutral-300">
            <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-sm font-semibold text-cyan-200">AM</span>
              <div><p className="font-medium text-white">Albion Mazari</p><p className="text-sm text-neutral-500">Full Stack Developer</p></div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3">
              <Mail className="text-cyan-400" size={22} />
              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all text-neutral-200 transition hover:text-cyan-300"
              >
                {CONTACT.email}
              </a>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3">
              <Phone className="text-cyan-400" size={22} />
              <a href={`tel:${CONTACT.phoneNo.replace(/[^+\d]/g, "")}`} className="text-neutral-200 transition hover:text-cyan-300">{CONTACT.phoneNo}</a>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3">
              <MapPin className="text-cyan-400" size={22} />
              <span>{CONTACT.address}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col gap-6 lg:w-1/2"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/20 backdrop-blur-lg">
            <h2 className="text-2xl font-medium mb-6">Social Profiles</h2>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/albionn7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-cyan-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/_albionmazari/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-cyan-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/albion-nazari/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-cyan-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <motion.div
            variants={fadeIn(0.6)}
            initial="hidden"
            animate="visible"
            className="rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] to-violet-400/[0.06] p-8 shadow-xl shadow-black/20 backdrop-blur-lg"
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
