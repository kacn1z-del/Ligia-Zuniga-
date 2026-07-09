# Miel Dorada CR

Sitio web para empresa productora de miel, construido con React 19 + Vite + TypeScript + Tailwind + Framer Motion.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí http://localhost:5173

## Cómo compilarlo para producción

```bash
npm run build
```

## Personalización

Editá `src/data/content.ts` para cambiar:
- Nombre de marca, WhatsApp, ubicación (`brand`)
- Productos y presentaciones (`products`)
- Pasos del proceso (`process`)
- Testimonios (`testimonials`)

Las imágenes de productos van en `public/images/` con los nombres referenciados en `content.ts` (ej: `miel-multifloral.jpg`). Si no subís imágenes, la tarjeta simplemente no muestra foto (no rompe el diseño).

## Deploy en Vercel

1. Subí el proyecto a un repo de GitHub
2. Conectá el repo en vercel.com
3. Framework preset: Vite (autodetectado)
4. Deploy

---
Desarrollado por KCN Studio
