import { motion } from "framer-motion";
import { process } from "../data/content";

export default function Process() {
  return (
    <section id="proceso" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="block text-center font-mono text-xs tracking-[0.2em] text-honey-600 mb-4">
          TRAZABILIDAD
        </span>
        <h2 className="text-4xl font-display text-forest-700 text-center mb-16">
          De la colmena al frasco
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-forest-700 text-honey-100 flex items-center justify-center font-mono font-bold text-xl">
                {s.step}
              </div>
              <h3 className="font-display text-forest-700 mb-2">{s.title}</h3>
              <p className="text-ink/70 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
