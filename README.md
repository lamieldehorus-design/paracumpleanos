# ParaCumpleanos

Sitio de felicitaciones de cumpleaños: Astro 5 + GitHub Pages, 100% estático.

Dominio: paracumpleanos.com

## Comandos

- npm install — instalar dependencias
- npm run dev — servidor local en http://localhost:3000
- npm run validate — validar títulos y slugs sin construir
- npm run build — valida y construye el sitio en /dist

## Estructura

- data/contenido.json — hubs y mensajes (el corazón del sitio)
- src/pages — home, categorías, páginas de hubs y mensajes, estáticas
- scripts/validador-titulos.cjs — el portero de calidad (ver VALIDADOR_TITULOS.md)

## Reglas del proyecto

1. Una keyword = una página = una intención. Nunca dos páginas por la misma keyword.
2. Todo texto es 100% original. Se replica el modelo, nunca el contenido ajeno.
3. Los mensajes NO llevan la keyword de su categoría en el título (la keyword es del hub).
4. Ninguna página a más de 3 clics de la home.
5. Se publica por push a main: GitHub Actions valida, construye y despliega.

## Flujo editorial

1. Escribí el mensaje nuevo en un archivo JSON aparte.
2. npm run validate -- mensaje m.json — si pasa, recién ahí sumarlo a data/contenido.json.
3. Push a main. El prebuild vuelve a validar todo antes de construir.
