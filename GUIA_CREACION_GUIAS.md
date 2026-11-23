# Manual de Creación y Auditoría de Guías — ParaCumpleanos (Ultra Guía Cósmica v3.0 + SEO/GEO)

Toda guía editorial y publicación en `src/data/guias.ts` y `data/` debe cumplir el estándar de **Alto Valor Unitario (Ultra Guía Cósmica · Edición 3.0)**, verificado automáticamente por `scripts/validador-titulos.cjs` y `src/lib/catalogo.test.ts`.

## 1. Principios de lectura en pantalla (Patrón F y Valor Unitario)
1. **Necesidad humana antes que keyword**: toda pieza responde a una necesidad real enunciable en una sola oración.
2. **Coordenada vertical + horizontal**: el valor más alto vive **arriba y a la izquierda** (pliegue superior, tercio izquierdo, primeras 2 palabras del titular).
3. **Una sola voz (sin triple repetición)**: el titular declara, el lead completa con datos nuevos y cada H2 desarrolla un ángulo distinto. Nunca repetir tres veces lo mismo.
4. **Sintaxis web viva**: oraciones promedio cortas (meta <= 18 palabras en piezas nuevas), verbos concretos, voz activa por defecto, párrafos de 1 a 3 oraciones y voseo rioplatense consistente (sin mezclar `vos`/`tenés` con `contigo`/`eres`/`tienes`, ni jerga SMS).
5. **Honestidad y dignidad**: cero citas, autores o recuerdos inventados. Sin infantilizar a mayores, sin humor humillante, sin dramatizar el duelo ni encasquillar por edad o género.

## 2. Prueba triple del titular y Doble Título
Todo titular (`seoTitle` + `h1`) debe superar las tres pruebas simultáneamente:
- **Contexto cero**: mostrado aislado (Google, WhatsApp, feed), se entiende exactamente qué ofrece y para quién.
- **1 segundo / 2 palabras**: las primeras dos palabras cargan información real o gancho concreto.
- **Promesa fiel**: el contenido cumple exactamente lo prometido. Prohibidos superlativos sin criterio verificable (`los mejores`, `únicos`, `definitivos`), adverbios de relleno (`hoy`, `ahora`), siglas/abreviaturas innecesarias (`30s`) y signos `?`/`!` en el `seoTitle`.
- **Doble título**: `seoTitle` disciplinado (50–60 caracteres, máx. 70) + `h1` más vivo y editorial con la `keywordPrincipal`.

## 3. Catálogo de leads y arquitectura de página
Cada guía nueva declara su `tipoLead` del catálogo (`sumario`, `impacto`, `retrato`, `ambiente`, `cita`, `contraste`, `interrogante`, `color`, `cronologica`, `complementaria`, `espacial`, `pregunta`) e incluye:
- **Respuesta directa** (40–100 palabras) sobre el pliegue.
- **Índice navegable** y secciones en nivel 2 de pirámide con H2 en pregunta (`¿...?`).
- **Comparación práctica** (evitar genérico vs. ejemplo concreto con escena).
- **Tabla comparativa** de 3 columnas y >= 3 filas.
- **Plantillas adaptables** (>= 10, con anatomía de 5 capas: apertura, idea central, detalle vivo, deseo concreto y cierre con sello).
- **Caja «Cómo hacerlo tuyo»** (`comoHacerloTuyo`): instrucciones concretas para personalizar la dedicatoria.
- **Etiquetas temáticas** (`etiquetas`): 2 a 3 etiquetas reales de búsqueda.
- **Checklist interactiva** (>= 4 pasos), **3 FAQs**, **datos propios reales** (`441 categorías`, `22.280 textos`), **2–3 fuentes externas HTTPS** verificadas y **3–5 enlaces internos** a categorías existentes.

## 4. Checklist obligatorio On-Page (validado por tests)

| Campo en `GuiaEditorial` | Regla obligatoria |
| --- | --- |
| `seoTitle` | **50 a 60 caracteres**, incluye `keywordPrincipal`, sin `hoy`, sin abreviaturas, sin `!/?`, sin superlativos vacíos |
| `descripcion` | **150 a 160 caracteres**, pitch claro y fiel |
| `h1` | Uno solo, incluye `keywordPrincipal`, sin relleno `hoy` |
| `slug` | Minúsculas y guiones (`^[a-z0-9-]+$`), único |
| `respuestaDirecta` | **40 a 100 palabras**, incluye `keywordPrincipal` |
| `secciones` | Mínimo **3 secciones**, H2 en pregunta (`¿...?`), al menos uno con `keywordPrincipal` |
| `ejemplosAdaptables` | Mínimo **10 plantillas** con etiquetas y textos únicos |
| `comoHacerloTuyo` | 3 a 5 pautas concretas de personalización (obligatorio en guías v3) |
| `etiquetas` | 2 a 3 etiquetas temáticas reales (obligatorio en guías v3) |
| `checklistPractica` | Mínimo **4 acciones verificables** |
| `faqs` | **3 preguntas frecuentes** literales |
| `categoriasRelacionadas` | **3 a 5** slugs existentes en `data/` |
| `fuentesAutoridad` | **2 a 3** URLs `https://` reales |
| Extensión total | **>= 900 palabras** útiles editoriales por guía |
| Voseo y tono | Voseo rioplatense consistente; cero contaminación temática |

## 5. Flujo para publicar o corregir
1. Auditá `src/lib/editorial.ts` (`guiaRelacionadaParaHub`) para confirmar que ninguna guía o categoría existente cubra ya el mismo ángulo.
2. Sumá o corregí la guía en `src/data/guias-parte*.ts` y conectala en `src/data/guias.ts` y `src/lib/editorial.ts`.
3. Ejecutá `npm run validate` y `npx --yes tsx --test src/lib/catalogo.test.ts`.
4. Ejecutá `npm run build` y verificá que `/guias/`, `/guias/<slug>/` y `dist/sitemap.xml` compilen sin errores.
