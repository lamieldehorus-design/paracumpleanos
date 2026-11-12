# El validador de títulos

Un script local que revisa TODO el contenido antes de que el sitio se construya. Corre solo: en el prebuild de cada build y en cada deploy. Si hay un error, el sitio no se publica.

## Qué controla

- R0: slugs únicos, en kebab-case, sin chocar con rutas fijas.
- R1: una sola página por keyword de categoría.
- R2: títulos de mensajes demasiado parecidos entre el mismo destinatario (más de 85% de similitud = error).
- R3: dentro de una categoría, dos mensajes no pueden arrancar con la misma palabra.
- R4: en los hubs, no se repite la combinación cabecera + modificador para un mismo destinatario.
- R5: los mensajes no deben contener la keyword exacta del hub (evita canibalización).
- R6: longitudes: título de mensaje 4–12 palabras, title de hub máximo 60 caracteres, meta description 120–165.
- R7: el texto del mensaje tiene sustancia (mínimo 40 palabras).

## Los tres modos

1. Gate (automático): npm run build valida data/contenido.json completo. Errores = build bloqueado.
2. Editor (antes de publicar): npm run validate -- mensaje nuevo.json — prueba un mensaje contra lo ya publicado.
3. Auditoría (mensual): exportar queries de GSC a CSV y correr npm run validate -- auditoria gsc.csv — marca queries que imprimen más de una URL.

## Umbrales ajustables

Al inicio de scripts/validador-titulos.cjs, en CONFIG. Si algún día bloquea demasiado, bajá umbralSimilitud o relajá R3 a aviso. El objetivo es diferenciación, no burocracia.
