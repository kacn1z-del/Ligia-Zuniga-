import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 px-6 bg-white/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <span className="block text-center font-mono text-xs tracking-[0.2em] text-honey-600 mb-4">
          TESTIMONIOS
        </span>
        <h2 className="text-4xl font-display text-forest-700 text-center mb-16">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-honey-50 rounded-2xl p-6 shadow-md border border-honey-200"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-honey-500 text-honey-500" />
                ))}
              </div>
              <p className="text-ink/80 italic mb-4">"{t.text}"</p>
              <span className="font-display text-forest-700">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
