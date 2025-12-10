import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col gap-14">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex flex-wrap lg:justify-center gap-8 p-4 rounded-xl"
          >
            {/* Image */}
            <motion.div
              className="w-full lg:w-1/4 overflow-hidden rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="rounded-xl object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Text */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 text-2xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                {project.title}
              </h6>

              <p className="mb-4 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-900 text-purple-300 border border-neutral-800"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* View Project Button */}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-neutral-800 bg-neutral-900 text-white font-semibold hover:border-purple-400 transition"
                >
                  View Project <FiExternalLink />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
