# Conexión en Tiempo Real con GitHub y Publicador de Contenido con SEO Automático

Este plan establece la sincronización directa entre este entorno de desarrollo y tu repositorio de GitHub para que todos los cambios (el sistema de votación, el ranking Top 10 y el nuevo contenido) se publiquen automáticamente en tu dominio de producción `paracumpleanos.com`, asegurando además una optimización SEO exhaustiva (meta tags, OpenGraph, JSON-LD estructurado y canonicals) en cada nueva publicación.

### User Review & Critical Decisions

> [!IMPORTANT]
> **Decisiones confirmadas por el usuario:**
> - **Alojamiento:** GitHub Pages / GitHub Actions automático conectado al dominio `paracumpleanos.com`.
> - **Método de Autenticación:** URL de repositorio y Token de acceso personal (Personal Access Token de GitHub con permisos `repo`).
> - **Automatización SEO:** Generación automática de etiquetas meta (`title`, `description`, `canonical`, `og:image`, `twitter:card`) y esquemas estructurados Schema.org (`Article`, `CollectionPage`, `BreadcrumbList`) en cada publicación.

---

### 1. Overview & Core Concept

- **El Problema:** Actualmente las mejoras (como las votaciones 👍/👎 y el ranking de las 10 mejores frases) residen en el entorno de desarrollo y no impactan en `paracumpleanos.com` porque el repositorio de GitHub no está sincronizado con este workspace.
- **La Solución:** 
  1. Configurar el repositorio Git local en este entorno, enlazarlo con el origen remoto de tu cuenta de GitHub y automatizar el flujo de subida (`git push`).
  2. Implementar un componente dinámico de SEO (`SEOHead`) que actualice en tiempo real los metadatos de cualquier URL visitada o publicada.
  3. Crear un panel interactivo y script de publicación de contenido que valide la calidad editorial, asigne categorías, genere URLs amigables, calcule el SEO y prepare el commit para GitHub.
- **Resultado:** Todo lo que trabajemos juntos se reflejará directamente en la web real `paracumpleanos.com` en tiempo real.

---

### 2. User Experience & Visual Design

- **Panel de Publicación Rápida & Estado de Sincronización:**
  - Un indicador discreto en la barra superior o pie de página con el estado de sincronización con GitHub (Listo / Cambios pendientes de push).
  - Herramienta para redactar nuevas frases o artículos largos con previsualización inmediata, cálculo de longitud de título SEO (30-60 caracteres) y descripción (120-160 caracteres).
- **Consistencia Visual:**
  - Mantener la paleta cálida y festiva actual: fondos ámbar/rosa suave (`#fff8f3`), acentos violetas y dorados para insignias.
  - El sistema de votos 👍 / 👎 y el bloque flotante del Top 10 permanecerán fijados e integrados en cada nueva página creada.
- **Micro-interacciones y Feedback:**
  - Confirmación visual de copia de frases.
  - Animación suave al emitir votos con contadores actualizados al instante en `localStorage`.
  - Notificaciones toast al sincronizar con GitHub y al publicar contenido.

---

### 3. Key Product Decisions & Trade-Offs

- **Decisión 1: Sincronización con GitHub vía Token Seguro**
  - *Enfoque:* Inicializar `git`, configurar la rama `main` (o la rama de despliegue configurada en tu repo) y añadir un script seguro `sync-github.sh` / comando npm para empujar los cambios con un solo comando o tras cada edición.
  - *Por qué:* Permite que cada vez que acordemos un cambio, un simple paso envíe todo el código a GitHub, activando el GitHub Action de compilación y publicación directa a `paracumpleanos.com`.
- **Decisión 2: Head Manager dinámico para SEO en SPA**
  - *Enfoque:* Crear un componente `SEOHead` que modifique el DOM (`document.title`, `<meta name="description">`, `<link rel="canonical">`, OpenGraph y etiquetas `<script type="application/ld+json">`) en cada ruta.
  - *Por qué:* Asegura que los motores de búsqueda (Google, Bing) y redes sociales obtengan la información enriquecida exacta de cada frase, persona o artículo.
- **Decisión 3: Formato de Contenido Centralizado**
  - *Enfoque:* Mantener las publicaciones en `src/data/posts.json` y los mensajes clasificados en `src/data/relationship_messages.json` con esquema tipado estricto.
  - *Por qué:* Permite añadir artículos completos y cientos de frases en segundos sin tocar código frágil ni romper el enrutador.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                   paracumpleanos.com                   │
│         (GitHub Pages / GitHub Actions Workflow)       │
└───────────────────────────▲────────────────────────────┘
                            │  git push (GitHub Token)
┌───────────────────────────┴────────────────────────────┐
│              Entorno de Desarrollo (AI Studio)         │
│                                                        │
│  ┌────────────────────┐     ┌───────────────────────┐  │
│  │  Content Pipeline  │────▶│    SEOHead Engine     │  │
│  │ (posts & messages) │     │ (Meta, JSON-LD, OG)   │  │
│  └────────────────────┘     └───────────────────────┘  │
│             │                            │             │
│  ┌──────────▼─────────┐     ┌────────────▼──────────┐  │
│  │   Votación 👍 / 👎 │     │  Top 10 Rankings      │  │
│  │    (Local & State) │     │  (TopRankedBlock)     │  │
│  └────────────────────┘     └───────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

- **Módulos a Configurar:**
  1. **Git & GitHub Integration:**
     - Inicializar repositorio git (`git init`).
     - Configurar `origin` con el repositorio del usuario: `https://<TOKEN>@github.com/<USUARIO>/<REPO>.git`.
     - Configurar script de despliegue automático `npm run deploy` / `npm run git:push`.
     - Incluir workflow de GitHub Actions (`.github/workflows/deploy.yml`) para construir Vite y desplegar a GitHub Pages con soporte de URLs limpias para el dominio personalizado.
  2. **SEO Engine Automático (`src/components/SEOHead.tsx`):**
     - Sincroniza en tiempo de ejecución las etiquetas canónicas apuntando siempre a `https://paracumpleanos.com/<ruta>`.
     - Inyecta `BreadcrumbList` y esquemas `WebPage` o `Article`.
  3. **Pipeline de Nueva Publicación:**
     - Función y plantilla de publicación estandarizada para agregar artículos con palabras clave objetivo, preguntas frecuentes (FAQ) estructuradas y frases listas para votar.
