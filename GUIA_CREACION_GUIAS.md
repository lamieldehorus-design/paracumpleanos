# Manual de Creación y Auditoría de Guías — ParaCumpleanos (SEO + GEO 2026)

Toda guía editorial publicada o actualizada en `src/data/guias.ts` debe cumplir las reglas SEO y GEO 2026 verificadas automáticamente por `src/lib/catalogo.test.ts`.

## 1. Reglas de oro antes de escribir
1. **Una guía = una intención de búsqueda real**: definí 1 `keywordPrincipal` y entre 3 y 6 `keywordsSecundarias` (variantes y preguntas relacionadas). Nunca mezcles intenciones incompatibles en un mismo artículo.
2. **Respuesta directa en las primeras 100 palabras**: el campo `respuestaDirecta` (40 a 100 palabras) debe responder de forma completa y autónoma la pregunta principal al inicio de la guía.
3. **H2 en forma de pregunta + índice con anclas**: cada sección en `secciones` debe usar un subtítulo en forma de pregunta (`¿... ?`). Al menos un H2 debe incluir `keywordPrincipal` (o su variante exacta normalizada). El índice de contenidos se genera automáticamente en `src/pages/guias/[slug].astro`.
4. **Bloques extractables y legibilidad**: abrí cada sección con un párrafo autónomo de 40–60 palabras que responda esa subpregunta sin depender de contexto previo. Mantené párrafos de 2–4 líneas, oraciones cortas y definí cualquier término técnico enseguida.
5. **E-E-A-T y datos propios verificables**:
   - Incluí `datosPropios` con cifras reales medidas de nuestro catálogo (`352 categorías`, `14.080 dedicatorias`, distribución por longitudes o reglas editoriales reales) o estudios con fuente citada.
   - Mantené visible la bio del autor (`autor`, `autorRol`, `autorBio`) y actualizá `fechaActualizacion` (`dateModified` en JSON-LD) en cada revisión (meta: frescura < 90 días).
6. **Schema y rastreo IA (GEO)**:
   - Cada guía emite `BreadcrumbList`, `Article` (`datePublished` + `dateModified` + `author`), `FAQPage` y `HowTo` (si incluye `pasosHowTo`).
   - `public/robots.txt` habilita `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot` y `Google-Extended`.

## 2. Checklist obligatorio On-Page

| Campo en `GuiaEditorial` | Regla obligatoria (validada por tests) |
| --- | --- |
| `seoTitle` | **50 a 60 caracteres**, con `keywordPrincipal` al inicio |
| `descripcion` | **150 a 160 caracteres**, con keyword y llamada a la acción |
| `h1` | Uno solo, incluye `keywordPrincipal` |
| `slug` | Corto, minúsculas y guiones, sin tildes ni caracteres especiales |
| `respuestaDirecta` | **40 a 100 palabras**, incluye `keywordPrincipal` |
| `secciones` | Mínimo **3 secciones**, todos los `subtitulo` en formato `¿... ?`, al menos uno con `keywordPrincipal` |
| `tablaComparativa` | Tabla clara de 3 columnas y >= 3 filas |
| `ejemplosAdaptables` | Mínimo 2 plantillas concretas |
| `checklistPractica` | Mínimo **4 acciones prácticas verificables** |
| `faqs` | Mínimo **3 preguntas frecuentes** literales |
| `categoriasRelacionadas` | **3 a 5** slugs internos reales existentes en `data/` |
| `fuentesAutoridad` | **2 a 3** enlaces externos `https://` reales y verificados (`200 OK`) |
| Extensión total | **>= 900 palabras** útiles editoriales por guía |

## 3. Flujo para agregar una guía nueva
1. Verificá la intención de búsqueda y elegí la `keywordPrincipal` sin canibalizar ninguna categoría ni guía existente.
2. Agregá el objeto completo a `src/data/guias-parte1.ts` o `src/data/guias-parte2.ts` (reunidas en `GUIAS_EDITORIALES` en `src/data/guias.ts`) respetando la interfaz `GuiaEditorial`.
3. Ejecutá `npx --yes tsx --test src/lib/catalogo.test.ts` — el test valida automáticamente longitudes, keywords, H2 en pregunta, `checklistPractica`, enlaces internos, fuentes externas, bio E-E-A-T y extensión mínima.
4. Ejecutá `npm run build` y verificá que `dist/sitemap.xml` y `/guias/<slug>/` compilen sin errores.
5. Revisá cada 30–60 días en Search Console y actualizá `fechaActualizacion` tras cada mejora real.
