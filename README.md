# Para Cumpleaños

Sitio estático en español para GitHub Pages: frases de cumpleaños, ideas de temáticas, organización y herramientas gratuitas.

## Estructura

- `data/posts.json`: contenido fuente de los artículos.
- `data/categories.json`: categorías y descripciones.
- `build.mjs`: valida las páginas generadas, verifica Statcounter en todas las URLs HTML y regenera `sitemap.xml` y `robots.txt`.
- `assets/css/site.css`: diseño responsive sin frameworks.
- `assets/js/site.js`: búsqueda, generador de frases, checklist, calculadora, copia de plantillas e impresión.
- `recursos/banderines-cumpleanos-imprimibles/index.html`: colección imprimible de 50 banderines con descarga HTML.
- `posts/<slug>/index.html`: páginas estáticas indexables con URL amigable.

## Comprobación local

Necesitás Node.js 18 o superior. Desde la raíz ejecutá:

```bash
node build.mjs
```

El script comprueba que todas las páginas previstas existan, que incluyan el código de Statcounter y que la colección de frases tenga 100 entradas. No sobrescribe el contenido editorial: así una comprobación no reemplaza accidentalmente el diseño o los textos de las páginas.

## SEO y medición

- Títulos, descripciones, canonical, Open Graph y datos estructurados.
- Páginas de categorías y artículos con enlaces internos.
- Sitemap XML y robots.txt.
- Statcounter integrado en todas las páginas HTML generadas.
- Sin frameworks, fuentes remotas ni bibliotecas obligatorias.

## Publicación

El repositorio conserva el dominio personalizado `paracumpleanos.com` y los archivos de verificación. GitHub Pages debe estar habilitado para la rama `main` y la raíz del repositorio.
