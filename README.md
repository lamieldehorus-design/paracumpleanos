# ParaCumpleanos.com

Sitio estático mobile-first publicado con GitHub Pages y dominio propio.

## Principios editoriales y SEO
- Fondo blanco y diseño minimalista; amarillo y violeta como acentos discretos.
- La lista editorial de publicaciones está en `scripts/build-publications.mjs`; el mapa de intención de búsqueda se conserva en `data/keyword-map.json`.
- Una intención principal por URL. Las variantes equivalentes se agrupan para reducir canibalización.
- No se fuerza un número universal de palabras: la extensión depende de lo que la persona necesita resolver.
- Los enlaces internos conectan contenidos relacionados con la página actual, no páginas al azar.
- Metadatos únicos, canonical, Open Graph, Twitter Cards, datos estructurados, sitemap y robots.
- StatCounter en las páginas públicas.
- IndexNow automatizado mediante `indexnow-key.txt` y workflow.

## Validación automática
GitHub Actions genera las publicaciones, actualiza el sitemap desde las URLs canónicas y comprueba títulos, descripciones, canonicals, StatCounter y destinos del sitemap antes de desplegar.

## Publicar
Cada URL se genera como un directorio con `index.html` para que GitHub Pages la sirva sin depender de renderizado del lado del cliente.
