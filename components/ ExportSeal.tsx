import { useId } from "react";

interface ExportSealProps {
  className?: string;
  /** Color principal del sello (anillos, texto, ícono) */
  ink?: string;
  /** Color de contraste sobre la cinta y las rayas de la abeja */
  paper?: string;
}

/**
 * Sello circular inspirado en los timbres de exportación agrícola costarricense
 * (café, cacao). Es el elemento de firma de la marca: se repite en tamaños
 * distintos por toda la página para anclar el mensaje "Producto de Costa Rica,
 * 100% orgánico, artesanal, calidad de exportación".
 */
export default function ExportSeal({
  className = "w-40 h-40",
  ink = "#2F4A3C",
  paper = "#FBF6EA",
}: ExportSealProps) {
  const uid = useId().replace(/[:]/g, "");
  const topId = `seal-top-${uid}`;
  const bottomId = `seal-bottom-${uid}`;

  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      role="img"
      aria-label="Sello: Producto de Costa Rica, 100% orgánico, artesanal, calidad de exportación"
    >
      <defs>
        <path id={topId} d="M 24 118 A 86 86 0 0 1 196 118" fill="none" />
        <path id={bottomId} d="M 196 122 A 86 86 0 0 1 24 122" fill="none" />
      </defs>

      <circle cx="110" cy="110" r="104" fill="none" stroke={ink} strokeWidth="1.25" opacity="0.55" />
      <circle cx="110" cy="110" r="97" fill="none" stroke={ink} strokeWidth="1" opacity="0.3" />

      {/* marco hexagonal, guiño al panal */}
      <path
        d="M110,42 L169,76 L169,144 L110,178 L51,144 L51,76 Z"
        fill="none"
        stroke={ink}
        strokeWidth="1"
        opacity="0.55"
      />

      <text fontSize="12" letterSpacing="3.2" fill={ink} fontFamily="'Space Mono', monospace" fontWeight="700">
        <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
          PRODUCTO DE COSTA RICA
        </textPath>
      </text>

      <text fontSize="10.5" letterSpacing="2.6" fill={ink} fontFamily="'Space Mono', monospace">
        <textPath href={`#${bottomId}`} startOffset="50%" textAnchor="middle">
          100% ORGÁNICO · ARTESANAL
        </textPath>
      </text>

      {/* marca central: abeja geométrica simplificada */}
      <g transform="translate(110,92)">
        <ellipse cx="-8" cy="-5" rx="10" ry="6.5" fill={ink} opacity="0.22" transform="rotate(-24 -8 -5)" />
        <ellipse cx="8" cy="-5" rx="10" ry="6.5" fill={ink} opacity="0.22" transform="rotate(24 8 -5)" />
        <ellipse cx="0" cy="4" rx="9" ry="12" fill={ink} />
        <rect x="-9" y="-1" width="18" height="3" fill={paper} />
        <rect x="-9" y="6" width="18" height="3" fill={paper} />
      </g>

      {/* cinta inferior */}
      <g transform="translate(110,142)">
        <rect x="-62" y="-12" width="124" height="24" fill={ink} />
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fontSize="10"
          letterSpacing="1.6"
          fill={paper}
          fontFamily="'Space Mono', monospace"
          fontWeight="700"
        >
          CALIDAD DE EXPORTACIÓN
        </text>
      </g>
    </svg>
  );
}
