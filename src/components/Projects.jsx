import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const others = PROJECTS.filter((p) => p !== featured);

  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="mt-2 text-sm opacity-70">
              A few things I’ve built recently.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs opacity-70">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
            <span>Selected work</span>
          </div>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
        >
          <div className="grid md:grid-cols-2">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="h-64 w-full object-cover md:h-full"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs backdrop-blur">
                Featured
              </div>
            </motion.div>

            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider opacity-70">
                Featured project
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {featured.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed opacity-80">
                {featured.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.technologies?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={featured.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15"
                >
                  View on GitHub
                </motion.a>

                {featured.live && (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={featured.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium hover:bg-emerald-400/15"
                  >
                    Live demo
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p, idx) => (
            <motion.a
              key={p.title}
              custom={idx + 2}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10"
            >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-70" />
              </div>

              <div className="p-5">
                <h4 className="text-lg font-semibold tracking-tight">
                  {p.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed opacity-80 line-clamp-3">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.technologies?.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3 text-sm justify-between">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    GitHub
                  </motion.a>

                  {p.live && (
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium underline underline-offset-4 text-emerald-400"
                    >
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
