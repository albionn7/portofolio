import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C#", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "Zod", "Radix UI"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "FastAPI", "ASP.NET Core 8", "REST APIs", "Swagger / OpenAPI"],
  },
  {
    title: "Databases & data",
    items: ["SQL", "PostgreSQL", "MongoDB", "ChromaDB", "Entity Framework Core", "Mongoose"],
  },
  {
    title: "AI & integrations",
    items: ["Ollama", "Local LLMs", "RAG", "Embeddings", "Semantic search", "Stripe"],
  },
  {
    title: "CI/CD, infrastructure & testing",
    items: ["Linux · 2 years", "GitHub Actions", "SST", "Jest", "Git"],
  },
];

const Technologies = () => {
  return (
    <section className="border-b border-neutral-800 py-20 sm:py-24" aria-labelledby="technologies-heading">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          My toolkit
        </p>
        <h2 id="technologies-heading" className="mb-4 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Languages & technologies
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center leading-7 text-neutral-400">
          Tools I use to build, connect, and ship reliable digital products.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-cyan-300/25 hover:bg-white/[0.05]"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-200">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/[0.08] bg-neutral-900/80 px-2.5 py-1.5 text-sm text-neutral-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
