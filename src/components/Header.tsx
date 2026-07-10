import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { brand } from "../data/content";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Historia", href: "#historia" },
  { label: "Productos", href: "#productos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Especies", href: "#especies" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barra superior de contacto */}
      <div className="bg-forest-900 text-honey-200 text-center py-1.5 px-4">
        <a
          href={`https://wa.me/${brand.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] tracking-wide"
        >
          WhatsApp: +{brand.whatsapp}
        </a>
      </div>

      {/* Header principal */}
      <div
        className={`transition-all ${
          scrolled ? "bg-honey-50/95 backdrop-blur shadow-sm border-b border-honey-200" : "bg-honey-50"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-honey-600" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" />
            </svg>
            <span className="text-xl font-display text-forest-700 tracking-wide">{brand.name}</span>
          </span>

          <nav className="hidden md:flex items-center gap-8">
            {links.slice(1, -1).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs tracking-[0.12em] uppercase text-forest-700 hover:text-honey-600 transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-honey-500 hover:bg-honey-600 text-forest-900 font-semibold text-sm px-5 py-2.5 rounded-full transition"
            >
              <MessageCircle size={16} /> Contacto
            </a>
          </nav>

          <button
            className="md:hidden text-forest-700"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Menú móvil a pantalla completa */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-honey-50 flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-honey-200">
            <span className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-honey-600" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" />
              </svg>
              <span className="text-xl font-display text-forest-700 tracking-wide">{brand.name}</span>
            </span>
            <button
              className="text-forest-700 border border-forest-700 rounded p-1.5"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-5 text-lg font-display border-b border-honey-200 ${
                  i === 0 ? "text-honey-600" : "text-forest-700"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
