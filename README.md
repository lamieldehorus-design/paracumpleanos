# Para Cumpleaños (`paracumpleanos.com`)

Aplicación web moderna desarrollada en React 19 y TypeScript con Vite, optimizada bajo la doctrina **Mobile-First de Romuald Fons**, indexación centrada en móviles de **Google Search Central (julio 2024)** y resolución directa de la **intención de búsqueda (Search Intent)**.

> Consulta el documento de reglas oficiales: [`MOBILE_FIRST_SEO_RULES.md`](./MOBILE_FIRST_SEO_RULES.md).

---

## Principios de Desarrollo y SEO Técnico

1. **Mobile-First Real (360px – 414px):**
   - Diseñado y probado en smartphones modestos y conexiones lentas antes de escalar a tablet o desktop.
   - Objetivos táctiles mínimos de **44px** en botones de acción, menús y votación (Thumb-Friendly).
   - Prevención de auto-zoom en iOS Safari mediante tamaño base de **16px** en todos los campos `<input>`, `<select>` y `<textarea>`.

2. **Resolución de la Intención de Búsqueda (Sin el "Mito de las 300 palabras"):**
   - El contenido entrega utilidad inmediata sin textos de relleno artificiales.
   - Botón directo de **Compartir por WhatsApp** (`api.whatsapp.com`) en cada frase, dedicatoria y plantilla.
   - Botón de **Copiar al portapapeles** con confirmación visual accesible en 1 toque.
   - Sistema de votación comunitaria (👍 / 👎) para rankear las mejores dedicatorias en tiempo real.

3. **SEO Accesible e Indexable:**
   - Metadatos dinámicos automáticos: `<title>`, `<meta name="description">`, `canonical`, OpenGraph y Twitter Cards.
   - Datos estructurados Schema.org (`BreadcrumbList`, `WebSite`, `Organization`, `Article`).
   - Carga progresiva amigable con rastreadores de Google (enlaces HTML semánticos `<a href="...">` descubribles por Googlebot Smartphone).

---

## Características de la Plataforma

- **Colección completa de frases y mensajes**:
  - Saludos por vínculo: mamá, papá, hermanos, pareja, hijos, abuelos, amigos y familiares a la distancia.
  - 12 colecciones dedicadas con 100 mensajes cada una, con carga progresiva (bloques de 10) y buscador/filtrado en tiempo real.
  - Botones táctiles de Copiar y Enviar a WhatsApp en cada elemento.
- **Galería interactiva de postales**:
  - 12 diseños con gradientes, tipografía serif cuidada y detalles festivos.
  - Generador dinámico en HTML5 Canvas para exportar y descargar cada postal en alta resolución como imagen PNG.
  - Compartir directo y copiar texto.
- **Herramientas interactivas**:
  - Buscador instantáneo con filtrado en vivo.
  - Calculadora interactiva de presupuesto para fiestas.
  - Checklist interactivo de tareas para organizar cumpleaños.
  - 30 plantillas de invitaciones adaptables con impresión directa.
  - 50 banderines imprimibles con formas geométricas y descarga/impresión.

---

## Estructura del Proyecto

- `src/`:
  - `components/`: Cabecera, pie de página, buscador, postales interactivas, botones de WhatsApp, botones de copia y ranking.
  - `pages/`: Vistas de inicio, frases, mensajes hub, 100 mensajes por vínculo, postales, categorías y artículos detallados.
  - `data/`: Acceso tipado a categorías, artículos y mensajes.
  - `utils/`: Renderizado Canvas para postales y utilidades de portapapeles.
  - `router.tsx`: Enrutamiento cliente limpio compatible con URLs semánticas de GitHub Pages.
- `MOBILE_FIRST_SEO_RULES.md`: Carta de principios SEO y Mobile-First para `paracumpleanos.com`, `buenosdia.com` e `imagenesypostales.com`.

---

## Desarrollo local

```bash
npm install
npm run dev
```

El servidor iniciará en `http://localhost:3000`.

## Compilación para producción

```bash
npm run build
```
