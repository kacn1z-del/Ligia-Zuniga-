import { brand } from "../data/content";
import ExportSeal from "./ExportSeal";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-honey-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        <ExportSeal className="w-24 h-24" ink="#C8862E" paper="#16241A" />
        <p className="font-display text-lg">{brand.name}</p>
        <p className="text-sm text-honey-300">
          © {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.
        </p>
        <p className="text-xs text-honey-300/70">Sitio desarrollado por KCN Studio</p>
      </div>
    </footer>
  );
}
