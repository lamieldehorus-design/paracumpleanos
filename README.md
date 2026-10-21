# Para Cumpleaños (React + Vite)

Aplicación web moderna desarrollada en React 19 y TypeScript con Vite, centrada en frases, mensajes y postales de cumpleaños para dedicar y compartir, junto a guías prácticas de organización, plantillas de invitaciones y recursos imprimibles.

## Características principales

- **Colección completa de frases y mensajes**:
  - Saludos por vínculo: mamá, papá, hermanos, pareja, hijos, abuelos, amigos y familiares a la distancia.
  - 12 colecciones dedicadas con 100 mensajes cada una, con carga progresiva (bloques de 10) y filtrado en tiempo real.
  - Copia con un clic ("Copiar mensaje" / "Copiar frase") y feedback visual inmediato.
- **Galería interactiva de postales**:
  - 12 diseños con gradientes, tipografía serif cuidada y detalles festivos.
  - Generador dinámico en Canvas para descargar cada postal en alta resolución como imagen PNG.
  - Botón de compartir con soporte para Web Share API y copia de texto.
- **Herramientas interactivas**:
  - Buscador en tiempo real de frases, ideas y artículos.
  - Calculadora interactiva de presupuesto para fiestas de cumpleaños.
  - Checklist interactivo de tareas para organizar el festejo.
  - 30 plantillas de invitaciones adaptables con impresión directa.
  - 50 banderines imprimibles con formas geométricas y descarga HTML/impresión.
- **Diseño responsive y accesible**:
  - Paleta cálida, navegación fluida sin recargas y soporte para impresión limpia (`@media print`).

## Estructura del proyecto

- `src/`:
  - `components/`: Cabecera, pie de página, buscador, postales interactivas, botones de copia y acordeones FAQ.
  - `pages/`: Vistas de inicio, frases, mensajes hub, 100 mensajes por vínculo, postales, categorías y artículos detallados.
  - `data/`: Acceso tipado a categorías, artículos y mensajes.
  - `utils/`: Renderizado Canvas para postales y utilidades de portapapeles.
  - `router.tsx`: Enrutamiento cliente limpio compatible con URLs semánticas.
- `data/`:
  - `categories.json`: Categorías editoriales.
  - `posts.json`: Artículos, secciones, plantillas y banderines.
  - `relationship_messages.json`: Las 12 colecciones de 100 mensajes.

## Desarrollo local

```bash
npm install
npm run dev
```

El servidor de desarrollo iniciará en `http://localhost:3000`.

## Compilación para producción

```bash
npm run build
```
