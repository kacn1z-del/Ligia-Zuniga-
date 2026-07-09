import { motion } from "framer-motion";
import { brand } from "../data/content";
import ExportSeal from "./ExportSeal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bees-jar.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/85 via-forest-900/80 to-forest-900/95" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1.3fr_auto] gap-12 items-center">
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block font-mono text-xs md:text-sm tracking-[0.25em] text-honey-300 mb-6"
          >
            COSTA RICA · MIEL ARTESANAL DE EXPORTACIÓN
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl leading-[1.05] font-display text-honey-50 mb-6"
          >
            {brand.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-honey-200/90 mb-10 max-w-md mx-auto md:mx-0"
          >
            {brand.tagline}
          </motion.p>
          <motion.a
            href="#productos"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block bg-honey-500 hover:bg-honey-600 text-forest-900 font-semibold px-8 py-4 rounded-full shadow-lg transition"
          >
            Ver productos
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="mx-auto md:mx-0"
        >
          <ExportSeal className="w-44 h-44 md:w-60 md:h-60" ink="#C8862E" paper="#16241A" />
        </motion.div>
      </div>
    </section>
  );
}
