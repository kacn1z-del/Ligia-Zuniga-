const marks = [
  "PRODUCTO DE COSTA RICA",
  "100% ORGÁNICO",
  "ARTESANAL",
  "CALIDAD DE EXPORTACIÓN",
];

export default function TrustStrip() {
  return (
    <div className="bg-forest-900 py-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {marks.map((m, i) => (
          <span key={m} className="flex items-center gap-x-6">
            <span className="font-mono text-[11px] md:text-xs tracking-[0.18em] text-honey-200">
              {m}
            </span>
            {i < marks.length - 1 && (
              <span className="hidden sm:inline text-honey-600">•</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
