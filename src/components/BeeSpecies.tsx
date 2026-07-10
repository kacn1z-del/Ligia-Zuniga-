import { motion } from "framer-motion";
import { beeSpecies } from "../data/content";

export default function BeeSpecies() {
  return (
    <section id="especies" className="py-24 px-6 bg-white/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <span className="block text-center font-mono text-xs tracking-[0.2em] text-honey-600 mb-4">
          EL MUNDO DE LA ABEJA
        </span>
        <h2 className="text-4xl font-display text-forest-700 text-center mb-4">
          Abejas melíferas del mundo
        </h2>
        <p className="text-center text-ink/70 mb-16 max-w-2xl mx-auto">
          Existen distintas especies de abejas productoras de miel alrededor del planeta.
          Conocé un poco sobre ellas.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beeSpecies.map((b, i) => (
            <motion.div
              key={b.scientific}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="bg-honey-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-honey-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🐝</span>
                <h3 className="font-display text-forest-700">{b.name}</h3>
              </div>
              <p className="italic text-honey-600 text-sm mb-3">{b.scientific}</p>
              <p className="text-ink/70 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
