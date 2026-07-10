import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="historia" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="block font-mono text-xs tracking-[0.2em] text-honey-600 mb-4"
        >
          NUESTRA HISTORIA
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-display text-forest-700 mb-6"
        >
          De las montañas de Costa Rica al mundo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-ink/80 leading-relaxed"
        >
          Somos una familia productora de miel en Costa Rica, dedicada al cuidado
          responsable de nuestras abejas desde hace generaciones. Cada frasco
          representa el trabajo de un ecosistema completo: flores, polinizadores
          y manos que respetan el ritmo de la naturaleza, con procesos certificados
          para cumplir estándares de exportación.
        </motion.p>
      </div>
    </section>
  );
}
