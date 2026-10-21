# Reglas y Metodología Mobile-First & SEO Técnico
> **Documento Oficial de Metodología de Desarrollo y Optimización**  
> Aplicable a la red de sitios: `paracumpleanos.com`, `buenosdia.com` e `imagenesypostales.com`.  
> Basado en la doctrina Mobile-First de Romuald Fons, las directrices oficiales de Google Search Central (Indexación Mobile-First 2024) y UX/UI táctil de alta conversión.

---

## 1. Los 4 Pilares Cardinales de Nuestros Sitios

### 1.1. Primero el Celular, Después la Computadora
* **Diseño desde pantallas pequeñas (360px – 414px):** Toda pantalla, componente o flujo se concibe, diseña y prueba primero en viewport móvil.
* **Escalado progresivo:** La interfaz se expande armónicamente para tablets (768px) y computadoras de escritorio (1024px+), eliminando para siempre el error de "comprimir una web de escritorio para que quepa en un teléfono".
* **Ergonomía del pulgar (Thumb Zone):** Los elementos críticos de interacción (copiar, compartir por WhatsApp, votar, navegar) deben ubicarse en zonas de alcance natural sin forzar la mano.

### 1.2. Velocidad y Rendimiento Real (Core Web Vitals)
* **Código eficiente y liviano:** Cero librerías redundantes, bundle modularizado y renderizado sin bloqueos.
* **Optimización de activos e imágenes:** Formatos modernos, compresión visual sin pérdida y carga diferida inteligente (`loading="lazy"`) en imágenes fuera de pantalla sin perjudicar las métricas LCP (*Largest Contentful Paint*).
* **Carga progresiva amigable:** En listas extensas (100+ mensajes o postales), mostrar bloques iniciales inmediatos con paginación/carga progresiva fluida que evite el colapso del DOM en dispositivos modestos.

### 1.3. Lectura y Navegación Cómodas en Pantalla Táctil
* **Cero zoom no deseado en iOS/Android:** Todo `<input>`, `<select>` y `<textarea>` tiene un tamaño de fuente base de **16px mínimo**, impidiendo el zoom automático intrusivo de Safari y Chrome móvil.
* **Objetivos táctiles (Touch Targets) mínimos de 44px:** Todos los botones (`.button`, `.share-button`, `.whatsapp-button`, `.vote-button`, menús) cuentan con un área interactiva mínima de 44×44 píxeles para evitar toques erróneos.
* **Legibilidad y jerarquía visual:** Tipografía con contraste superior (WCAG AA), espaciados generosos (`line-height: 1.6–1.7`), botones autoexplicativos y menús claros desplegables en 1 toque.

### 1.4. SEO Accesible e Indexable para Googlebot Smartphone
* **Indexación Centrada en Móviles (Google Mobile-First 100%):** Google completó en julio de 2024 la transición definitiva donde su rastreador evalúa estrictamente la versión móvil. Todo contenido relevante para rankear debe existir en el DOM móvil, accesible sin requerir interacciones complejas.
* **Estructura Semántica Impecable:** Encabezados jerárquicos (`h1`, `h2`, `h3`), enlaces semánticos rastreables (`<a href="...">`), URLs canónicas normalizadas y metadatos OpenGraph y Twitter Cards.
* **Datos Estructurados Schema.org (JSON-LD):** `WebSite`, `Organization`, `BreadcrumbList`, `Article` e `ItemList` insertados en el DOM para potenciar fragmentos enriquecidos en las SERPs.

---

## 2. Aplicación Específica por Proyecto

| Sitio | Prioridad Mobile-First & Search Intent |
| :--- | :--- |
| **`paracumpleanos.com`** | Categorías de mensajes de acceso inmediato, botón de **copiar al portapapeles** en 1 toque, botón directo de **compartir en WhatsApp**, buscador instantáneo y carga progresiva crawlable para colecciones de 100 mensajes. |
| **`imagenesypostales.com`** | Herramientas utilizables desde el celular, imágenes vectoriales y comprimidas de carga ultra-rápida, tarjetas de postales con vista previa nítida y descarga/envío directo sin ralentizar el navegador móvil. |
| **`buenosdia.com`** | Lectura cómoda de devocionales, reflexiones y saludos matutinos, textos bien aireados, navegación limpia y botones para compartir la frase del día en redes y mensajería en segundos. |

---

## 3. Resolución de la Intención de Búsqueda (Search Intent)
### El Mito de las 300 Palabras (Romuald Fons)
* **Calidad y resolución sobre volumen artificial:** No existe un "número mágico de 300 palabras" para posicionar. Agregar texto de relleno ("keyword stuffing" o párrafos redundantes que nadie lee) deteriora la experiencia del usuario, aumenta la tasa de rebote y perjudica el posicionamiento.
* **La longitud exacta:** La extensión de cada página debe ser estrictamente la requerida para resolver con máxima satisfacción lo que el usuario busca.
  * Si el usuario busca *"frases cortas para WhatsApp"*, su intención se satisface mostrándole de inmediato las mejores frases con botones de **Copiar** y **WhatsApp**, sin obligarlo a leer 500 palabras de historia sobre los cumpleaños antes de llegar al contenido.
  * Si el usuario busca una guía de planificación o protocolo de fiesta, su intención requiere estructura, pasos, listas de verificación y detalles prácticos.

---

## 4. Dos Precisiones Técnicas Esenciales

1. **La carga progresiva NO debe ocultar contenido a Google:**
   * La navegación interna debe enlazar a las categorías, colecciones y páginas individuales mediante etiquetas `<a href="...">` estándar en HTML para que los rastreadores descubran el 100% del árbol de URLs.
   * Los primeros elementos se renderizan de forma inmediata para una respuesta instantánea (FCP/LCP), y los subsiguientes se cargan dinámicamente o paginan sin bloquear el hilo principal.
2. **Carga diferida inteligente (`loading="lazy"`):**
   * El banner o elemento visual principal visible en pantalla inicial (above-the-fold) **no** debe llevar lazy load diferido para asegurar un LCP récord.
   * Las postales, imágenes secundarias y recursos inferiores utilizan carga diferida nativa (`loading="lazy"` con `decoding="async"`), ahorrando datos móviles a los usuarios.

---

## 5. Regla de Oro de Publicación
> **Ninguna página o cambio se considera listo ni se publica hasta validar:**
> 1. Que funciona con total fluidez en un celular (360px a 414px).
> 2. Que los botones tienen un área táctil mínima de 44px y los formularios no hacen auto-zoom.
> 3. Que la intención de búsqueda se resuelve de inmediato (copiar/compartir en 1 clic).
> 4. Que los metadatos, canonicals y Schema JSON-LD están presentes y válidos.
