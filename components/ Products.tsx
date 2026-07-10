import { motion } from "framer-motion";
import { products } from "../data/content";

export default function Products() {
  return (
    <section id="productos" className="py-24 px-6 bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <span className="block text-center font-mono text-xs tracking-[0.2em] text-honey-600 mb-4">
          CATÁLOGO
        </span>
        <h2 className="text-4xl font-display text-forest-700 text-center mb-16">
          Nuestros productos
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-honey-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-honey-200"
            >
              <span className="absolute top-3 right-3 z-10 font-mono text-[9px] tracking-[0.1em] uppercase bg-forest-900 text-honey-200 px-2 py-1 rounded-full">
                Exportación
              </span>
              <div className="h-48 bg-honey-200 flex items-center justify-center text-honey-500">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-forest-700 text-lg mb-1">{p.name}</h3>
                <p className="text-ink/70 text-sm mb-3">{p.desc}</p>
                <span className="text-xs uppercase tracking-wide text-honey-600 font-semibold">
                  {p.presentations}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
