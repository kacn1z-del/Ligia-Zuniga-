import { MessageCircle, MapPin, Mail } from "lucide-react";
import { brand } from "../data/content";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="block font-mono text-xs tracking-[0.2em] text-honey-600 mb-4">
          CONTACTO
        </span>
        <h2 className="text-4xl font-display text-forest-700 mb-6">Hacé tu pedido</h2>
        <p className="text-ink/70 mb-10">
          Escribinos y coordinamos entrega o retiro en {brand.location}.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
          >
            <MessageCircle size={20} /> Escribir por WhatsApp
          </a>

          <div className="flex items-center gap-2 text-ink/70">
            <MapPin size={18} /> {brand.location}
          </div>
          <div className="flex items-center gap-2 text-ink/70">
            <Mail size={18} /> contacto@ligiazuniga.com
          </div>
        </div>
      </div>
    </section>
  );
}
