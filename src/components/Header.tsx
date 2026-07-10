import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { brand } from "../data/content";

const links = [
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-honey-50/95 backdrop-blur shadow-sm border-b border-honey-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-honey-600" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" />
          </svg>
          <span className="text-xl font-display text-forest-700 tracking-wide">{brand.name}</span>
        </span>

        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-[0.12em] uppercase text-forest-700 hover:text-honey-600 transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-forest-700" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-honey-50">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-[0.12em] uppercase text-forest-700"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

