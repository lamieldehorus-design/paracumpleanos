#!/usr/bin/env node
/**
 * Optimización integral anti-canibalización, CTR basado en Google Search Console
 * y sincronización de conteos reales (50 mensajes vs antiguos textos "40").
 *
 * REGLAS:
 * - Nunca modifica ningún `slug` (preserva el 100% de las URLs indexadas).
 * - Diferencia los 29 clústeres de hubs hermanos para eliminar canibalización.
 * - Optimiza títulos (<= 60 chars, frente cargado con intención real GSC) y metas (130-158 chars).
 * - Corrige los 8 títulos abruptos terminados en "- 50" y los 50 metas truncados o robóticos.
 * - Sincroniza menciones antiguas de "40" en lead y seoTexto cuando el hub tiene 50 textos.
 */
import fs from 'node:fs';
import path from 'node:path';

const ARCHIVOS = [
  'data/contenido.json',
  ...fs
    .readdirSync('data/categorias')
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => path.join('data/categorias', f))
];

/**
 * Mapa de optimización específica por slug (GSC top queries + des-canibalización de pares).
 * Cada entrada define título (<= 60 chars) y meta (130-158 chars) diferenciados.
 */
const OVERRIDES = {
  // === TOP GSC: BENDICIONES / CRISTIANOS (500+ impresiones) ===
  'feliz-cumpleanos-prima-dios-te-bendiga': {
    titulo: 'Feliz cumpleaños prima, Dios te bendiga: 50 frases',
    meta: 'Feliz cumpleaños prima, Dios te bendiga: 50 frases, textos y bendiciones cristianas para copiar en 1 clic, personalizar con su nombre y enviar por WhatsApp.'
  },
  'feliz-cumpleanos-sobrina-dios-te-bendiga': {
    titulo: 'Feliz cumpleaños sobrina, Dios te bendiga: 50 frases',
    meta: 'Feliz cumpleaños sobrina, Dios te bendiga: 50 frases y bendiciones llenas de fe y cariño. Personalizá con su nombre y descargá tarjeta PNG o Story gratis.'
  },
  'feliz-cumpleanos-amigo-dios-te-bendiga': {
    titulo: 'Feliz cumpleaños amigo, Dios te bendiga: 50 frases',
    meta: 'Feliz cumpleaños amigo, Dios te bendiga: 50 frases cristianas y mensajes sinceros de amistad y fe listos para copiar, editar con su nombre y enviar hoy.'
  },
  'feliz-cumpleanos-amiga-dios-te-bendiga': {
    titulo: 'Feliz cumpleaños amiga, Dios te bendiga: 50 frases',
    meta: 'Feliz cumpleaños querida amiga, Dios te bendiga: 50 frases de fe, gratitud y amistad listas para copiar en WhatsApp o descargar en tarjeta personalizada.'
  },
  'feliz-cumpleanos-hijo-dios-te-bendiga': {
    titulo: 'Feliz cumpleaños hijo, Dios te bendiga: 50 mensajes',
    meta: 'Feliz cumpleaños hijo, Dios te bendiga: 50 mensajes y oraciones de mamá o papá llenas de orgullo y fe. Editá con su nombre y compartí en WhatsApp o tarjeta.'
  },
  'feliz-cumpleanos-hermano-dios-te-bendiga': {
    titulo: 'Feliz cumpleaños hermano, Dios te bendiga: 50 frases',
    meta: 'Feliz cumpleaños hermano, Dios te bendiga: 50 frases cristianas de gratitud y protección para dedicarle en su día. Copiá gratis o bajá su tarjeta PNG.'
  },
  'palabras-de-agradecimiento-a-dios-por-mi-cumpleanos': {
    titulo: 'Palabras de agradecimiento a Dios por mi cumpleaños',
    meta: '50 palabras de agradecimiento a Dios por mi cumpleaños: frases cortas para estados, oraciones y cartas de gratitud listas para copiar o descargar en tarjeta.'
  },

  // === TOP GSC: PAPÁ (400+ impresiones — 3 hubs diferenciados) ===
  'feliz-cumpleanos-papa': {
    titulo: 'Feliz cumpleaños papá: 50 frases y mensajes bonitos',
    meta: 'Feliz cumpleaños papá: 50 frases, dedicatorias y mensajes bonitos para copiar en 1 clic, personalizar con el nombre de tu papá y enviar por WhatsApp o tarjeta.'
  },
  'cumpleanos-para-un-papa': {
    titulo: 'Saludos de cumpleaños para un padre: 50 textos',
    meta: '50 saludos de cumpleaños para un padre (tuyo, un amigo que es papá o un suegro): textos respetuosos, cálidos y breves listos para copiar o bajar en tarjeta.'
  },
  'cartas-para-mi-papa-que-lo-haga-llorar': {
    titulo: 'Palabras y cartas para mi papá que lo hagan llorar',
    meta: '50 palabras y cartas largas de cumpleaños para mi papá que lo hagan llorar de emoción: textos profundos y sinceros listos para personalizar con su nombre.'
  },
  'feliz-cumpleanos-padrastro': {
    titulo: 'Palabras de cumpleaños para mi padrastro: 50 textos',
    meta: '50 palabras y mensajes de cumpleaños para mi padrastro que lo emocionen: textos de gratitud sincera por elegir cuidar y acompañar, listos para personalizar.'
  },

  // === TOP GSC: ESPOSO / ESPOSA (200+ impresiones, recuperación de caída legacy) ===
  'feliz-cumpleanos-para-mi-esposo': {
    titulo: 'Feliz cumpleaños para mi esposo: 50 mensajes de amor',
    meta: 'Feliz cumpleaños para mi esposo: 50 mensajes, palabras de amor y dedicatorias profundas para celebrar su vida. Personalizá con su nombre y enviá por WhatsApp.'
  },
  'frases-para-mi-esposo': {
    titulo: 'Frases de cumpleaños para mi esposo cortas y bonitas',
    meta: '50 frases de cumpleaños para mi esposo cortas, románticas y listas para estados, tarjeta o WhatsApp. Editá con su nombre y descargá postal PNG gratis.'
  },
  'carta-de-feliz-cumpleanos-para-mi-esposo-que-lo-haga-llorar': {
    titulo: 'Carta de cumpleaños para mi esposo que lo haga llorar',
    meta: '50 cartas y mensajes largos de cumpleaños para mi esposo que lo hagan llorar de alegría: dedicatorias honestas sobre la vida compartida, listas para editar.'
  },
  'feliz-cumpleanos-para-mi-esposa': {
    titulo: 'Feliz cumpleaños para mi esposa: 50 mensajes y frases',
    meta: 'Feliz cumpleaños esposa mía: 50 mensajes, saludos y dedicatorias llenas de amor para sorprenderla hoy. Personalizá con su nombre y bajá tarjeta PNG o Story.'
  },
  'frases-para-mi-esposa': {
    titulo: 'Frases de cumpleaños para mi esposa románticas (50)',
    meta: '50 frases de cumpleaños para mi esposa románticas, emotivas y hasta para hacerla llorar de alegría. Copiá en 1 clic, sumá su nombre y compartí por WhatsApp.'
  },

  // === TOP GSC: HIJO / HIJA / LEJOS / EDADES ===
  'feliz-cumpleanos-hijo': {
    titulo: 'Feliz cumpleaños hijo: 50 mensajes y dedicatorias',
    meta: 'Feliz cumpleaños hijo: 50 mensajes, palabras bonitas y dedicatorias de orgullo para dedicarle en su día. Editá con su nombre y compartí por WhatsApp o tarjeta.'
  },
  'frases-para-un-hijo': {
    titulo: 'Frases de cumpleaños para un hijo cortas y bonitas',
    meta: '50 frases de cumpleaños para un hijo breves, alegres y directas para WhatsApp, estados o tarjeta de regalo. Personalizá con su nombre y copiá en 1 clic.'
  },
  'frases-para-un-hijo-que-esta-lejos': {
    titulo: 'Mensajes para un hijo que está lejos: 50 frases',
    meta: '50 mensajes y frases para un hijo que está lejos de su madre o padre: abrazos a la distancia, palabras llenas de orgullo y cartas listas para enviar hoy.'
  },
  'frases-para-un-hijo-de-2-anos': {
    titulo: 'Palabras y frases para mi hijo de 2 años: 50 textos',
    meta: '50 palabras y frases de cumpleaños para mi hijo de 2 años: dedicatorias tiernas para fotos, álbum o WhatsApp. Sumá su nombre y descargá tarjeta PNG gratis.'
  },
  'carta-para-mi-hijo-de-3-anos': {
    titulo: 'Feliz 3 años hijo: 50 cartas y dedicatorias bonitas',
    meta: 'Feliz 3 años hijo: 50 cartas y palabras llenas de ternura para guardar en su recuerdo o acompañar su foto de cumpleaños. Personalizá con su nombre gratis.'
  },
  'carta-para-hijo-de-4-anos': {
    titulo: 'Carta para mi hijo de 4 años en su cumpleaños (50)',
    meta: '50 cartas y dedicatorias para mi hijo de 4 años en su cumpleaños: palabras tiernas para leerle hoy y atesorar. Editá con su nombre y bajá tarjeta PNG.'
  },
  'carta-para-mi-hijo-de-10-anos': {
    titulo: 'Carta para mi hijo que cumple 10 años: 50 mensajes',
    meta: '50 cartas y palabras para mi hijo que cumple 10 años: celebrá su primera década con textos emocionantes de mamá o papá listos para personalizar e imprimir.'
  },
  'feliz-cumpleanos-hija': {
    titulo: 'Feliz cumpleaños hija: 50 mensajes y dedicatorias',
    meta: 'Feliz cumpleaños hija: 50 dedicatorias, palabras de amor y mensajes de orgullo para su día especial. Editá con su nombre y descargá tarjeta PNG o Story.'
  },
  'frases-para-una-hija': {
    titulo: 'Frases cortas para una hija en su cumpleaños (50)',
    meta: '50 frases cortas y bonitas para una hija en su cumpleaños: ideales para WhatsApp, pie de foto en Instagram o tarjeta de regalo. Copiá y editá al instante.'
  },
  'frases-para-mi-hija-de-5-anos': {
    titulo: 'Dedicatoria para mi hija de 5 años: 50 frases',
    meta: '50 dedicatorias y frases para mi hija de 5 años en su cumpleaños: textos dulces para fotos, tarjeta o WhatsApp. Personalizá con su nombre en 1 clic.'
  },
  'feliz-cumpleanos-mi-princesa': {
    titulo: 'Feliz cumpleaños mi princesa: 50 frases tiernas',
    meta: 'Feliz cumpleaños a mi princesa hermosa: 50 frases y mensajes tiernos para tu hija, sobrina o pareja. Personalizá con su nombre y descargá tarjeta PNG.'
  },

  // === TOP GSC: MAMÁ / HERMANA / PRIMO / ABUELO ===
  'feliz-cumpleanos-mama': {
    titulo: 'Feliz cumpleaños mamá: 50 frases cortas y bonitas',
    meta: 'Feliz cumpleaños mamá: 50 frases cortas, mensajes emotivos y saludos llenos de gratitud para copiar en WhatsApp o descargar en tarjeta personalizada.'
  },
  'frases-para-mama': {
    titulo: 'Dedicatorias para mamá en su cumpleaños: 50 textos',
    meta: '50 dedicatorias cálidas para mamá en tarjetas, flores o regalos de cumpleaños. Personalizá con su nombre y tu firma en vivo y compartí sin registrarte.'
  },
  'mensajes-largos-para-mama': {
    titulo: 'Feliz cumpleaños mamá texto largo: 50 cartas bellas',
    meta: 'Feliz cumpleaños mamá texto largo: 50 mensajes extensos y cartas llenas de agradecimiento para emocionarla en su día. Editá con su nombre y firma gratis.'
  },
  'feliz-cumpleanos-hermana': {
    titulo: 'Feliz cumpleaños hermana: 50 mensajes originales',
    meta: 'Feliz cumpleaños hermana: 50 mensajes originales, cómplices y cariñosos para WhatsApp o tarjeta. Sumá su nombre en 1 clic y descargá postal PNG o Story.'
  },
  'frases-para-una-hermana': {
    titulo: 'Frases cortas para una hermana en su cumpleaños',
    meta: '50 frases cortas y bonitas para felicitar a una hermana en su cumpleaños por WhatsApp, Instagram o tarjeta breve. Personalizá con su apodo al instante.'
  },
  'carta-para-mi-hermana-que-la-haga-llorar': {
    titulo: 'Carta para mi hermana que la haga llorar: 50 textos',
    meta: '50 cartas para mi hermana en su cumpleaños que la hagan llorar de emoción: recuerdos compartidos y gratitud sincera listos para personalizar con su nombre.'
  },
  'carta-para-mi-hermana-menor-que-la-haga-llorar': {
    titulo: 'Carta para mi hermana menor que la haga llorar (50)',
    meta: '50 cartas para mi hermana menor en su cumpleaños que la hagan llorar de alegría: textos llenos de orgullo y complicidad para personalizar y enviar hoy.'
  },
  'frases-para-una-hermana-fallecida-en-su-cumpleanos': {
    titulo: 'Frases para una hermana fallecida en su cumpleaños',
    meta: '50 frases y dedicatorias serenas para una hermana fallecida en su cumpleaños: palabras respetuosas hasta el cielo para honrar su recuerdo con amor y paz.'
  },
  'feliz-cumpleanos-primo': {
    titulo: 'Feliz cumpleaños primo: 50 mensajes y tarjetas PNG',
    meta: '50 mensajes de cumpleaños para un primo: divertidos, cercanos y sinceros para enviar por WhatsApp o descargar en tarjeta personalizada con su nombre.'
  },
  'frases-para-un-primo': {
    titulo: 'Frases cortas y graciosas para un primo (50)',
    meta: '50 frases cortas, originales y graciosas para felicitar a un primo en WhatsApp o estados. Editá con su nombre en 1 clic y compartí gratis sin registrarte.'
  },
  'frases-para-un-primo-que-esta-lejos': {
    titulo: 'Feliz cumpleaños primo desde la distancia: 50 frases',
    meta: 'Feliz cumpleaños primo desde la distancia: 50 frases y mensajes cálidos para achicar kilómetros y recordarle tu cariño. Personalizá con su nombre gratis.'
  },
  'feliz-cumpleanos-abuelo': {
    titulo: 'Feliz cumpleaños abuelo: 50 frases y dedicatorias',
    meta: 'Feliz cumpleaños abuelo: 50 frases, mensajes llenos de respeto y dedicatorias emotivas para honrar sus historias. Editá con su nombre y bajá tarjeta PNG.'
  },
  'feliz-cumpleanos-abuelito': {
    titulo: 'Feliz cumpleaños abuelito: 50 palabras tiernas',
    meta: 'Feliz cumpleaños abuelito: 50 palabras tiernas y cariñosas de nietos para abrazarlo en su día. Personalizá con su nombre y compartí por WhatsApp o postal.'
  },

  // === TOP GSC: AMIGO / AMIGA / AMOR / NOVIO / DOCTORA / CORTOS ===
  'feliz-cumpleanos-amigo': {
    titulo: 'Feliz cumpleaños amigo: 50 mensajes para un hombre',
    meta: 'Feliz cumpleaños amigo: 50 mensajes y frases para un amigo hombre, entre el humor, la lealtad y el afecto sincero. Editá con su nombre y enviá por WhatsApp.'
  },
  'cumpleanos-para-un-amigo': {
    titulo: 'Dedicatorias de cumpleaños para amigos: 50 textos',
    meta: '50 dedicatorias de cumpleaños para amigos en tarjetas, brindis o regalos: textos cuidados y cercanos que salen del cliché, listos para personalizar gratis.'
  },
  'frases-para-amigo': {
    titulo: 'Frases de cumpleaños para un buen amigo: 50 ideas',
    meta: '50 frases originales para un buen amigo en su cumpleaños: ideales para estados, fotos en redes o un saludo breve por chat. Copiá y editá en 1 clic.'
  },
  'feliz-cumpleanos-amigo-hermano': {
    titulo: 'Feliz cumpleaños amigo hermano: 50 frases sinceras',
    meta: 'Feliz cumpleaños amigo hermano: 50 frases y mensajes de hermandad elegida para ese amigo que es familia. Personalizá con su nombre y descargá tarjeta PNG.'
  },
  'feliz-cumpleanos-amiga': {
    titulo: 'Feliz cumpleaños amiga: 50 mensajes y saludos',
    meta: 'Feliz cumpleaños amiga: 50 mensajes, saludos y dedicatorias de amistad real para WhatsApp o tarjeta. Sumá su nombre y descargá postal PNG o Story IG.'
  },
  'frases-para-mi-amiga': {
    titulo: 'Frases bonitas para mi amiga en su cumpleaños (50)',
    meta: '50 frases bonitas y breves para mi amiga en su cumpleaños: listas para estados de WhatsApp, historias de Instagram o tarjeta de regalo. Copiá gratis.'
  },
  'feliz-cumpleanos-mejor-amigo': {
    titulo: 'Feliz cumpleaños mejor amigo: 50 mensajes leales',
    meta: 'Feliz cumpleaños mejor amigo: 50 mensajes auténticos de complicidad, risas y gratitud por tantos años juntos. Personalizá con su nombre y compartí hoy.'
  },
  'frases-para-mi-mejor-amigo': {
    titulo: 'Frases cortas y cómplices para mi mejor amigo (50)',
    meta: '50 frases cortas, divertidas y cómplices para mi mejor amigo en fotos, estados o WhatsApp. Editá con su apodo en 1 clic y bajá tu tarjeta PNG.'
  },
  'feliz-cumpleanos-mejor-amiga': {
    titulo: 'Feliz cumpleaños mejor amiga: 50 mensajes de alma',
    meta: 'Feliz cumpleaños mejor amiga: 50 mensajes profundos y cálidos para celebrar su amistad incondicional. Editá con su nombre y descargá tarjeta PNG o Story.'
  },
  'frases-para-mi-mejor-amiga': {
    titulo: 'Frases cortas y divertidas para mi mejor amiga (50)',
    meta: '50 frases cortas, lindas y divertidas para mi mejor amiga en Instagram, WhatsApp o tarjeta. Personalizá con su nombre al instante y copiá gratis.'
  },
  'feliz-cumpleanos-mi-amor': {
    titulo: 'Feliz cumpleaños mi amor: 50 frases románticas',
    meta: 'Feliz cumpleaños mi amor: 50 frases románticas y mensajes apasionados para sorprender a tu pareja hoy. Personalizá con su nombre y bajá tarjeta PNG o Story.'
  },
  'frases-para-un-amor': {
    titulo: 'Frases de cumpleaños para un gran amor: 50 textos',
    meta: '50 frases de cumpleaños para un gran amor (pareja, amor especial o historia naciente): palabras tiernas y sinceras listas para personalizar en 1 clic.'
  },
  'feliz-cumpleanos-novio': {
    titulo: 'Feliz cumpleaños novio: 50 mensajes románticos',
    meta: 'Feliz cumpleaños novio: 50 mensajes románticos, originales y cariñosos para dedicarle en su día por WhatsApp o tarjeta. Editá con su nombre al instante.'
  },
  'mensajes-largos-para-mi-novio': {
    titulo: 'Textos y mensajes largos para mi novio: 50 cartas',
    meta: '50 mensajes largos y cartas románticas de cumpleaños para mi novio: textos extensos para emocionar de verdad. Personalizá con su nombre y tu firma gratis.'
  },
  'feliz-cumpleanos-para-doctora': {
    titulo: 'Feliz cumpleaños doctora: 50 frases de admiración',
    meta: 'Feliz cumpleaños doctora: 50 frases y saludos elegantes para felicitar a una médica amiga, colega o familiar por su vocación y su nuevo año de vida.'
  },
  'feliz-cumpleanos-cortos-y-bonitos': {
    titulo: 'Mensajes de feliz cumpleaños cortos y bonitos (50)',
    meta: '50 mensajes de feliz cumpleaños cortos y bonitos que llegan al corazón en pocas líneas. Listos para copiar en 1 clic, personalizar con nombre y enviar.'
  },
  'mensajes-cortos-de-cumpleanos': {
    titulo: 'Frases cortas de cumpleaños para WhatsApp (50)',
    meta: '50 frases breves y directas de cumpleaños pensadas para mandar rápido por WhatsApp o escribir en una etiqueta de regalo. Copiá gratis o bajá tarjeta PNG.'
  },

  // === DES-CANIBALIZACIÓN DE LOS OTROS 15 CLÚSTERES HERMANOS ===
  'feliz-cumpleanos-para-una-tia': {
    titulo: 'Feliz cumpleaños tía: 50 mensajes llenos de cariño',
    meta: 'Feliz cumpleaños tía: 50 mensajes cálidos y agradecidos para celebrar a esa tía que siempre está presente. Personalizá con su nombre y enviá por WhatsApp.'
  },
  'frases-para-una-tia': {
    titulo: 'Frases cortas para una tía por WhatsApp (50)',
    meta: '50 frases cortas, lindas y listas para dedicar a una tía en WhatsApp, tarjeta o flores. Sumá su nombre en 1 clic y descargá tu postal PNG sin registro.'
  },
  'feliz-cumpleanos-para-mi-tio': {
    titulo: 'Feliz cumpleaños para mi tío: 50 saludos cálidos',
    meta: 'Feliz cumpleaños para mi tío: 50 saludos sinceros, alegres y respetuosos para festejar su día. Editá con su nombre y firma y compartí por WhatsApp o tarjeta.'
  },
  'frases-para-un-tio': {
    titulo: 'Frases graciosas y breves para un tío (50)',
    meta: '50 frases breves, ocurrentes y cariñosas para felicitar a un tío en su cumpleaños por chat o tarjeta. Personalizá con su nombre y copiá en 1 clic.'
  },
  'feliz-cumpleanos-para-una-cunada': {
    titulo: 'Feliz cumpleaños cuñada: 50 mensajes de cariño',
    meta: 'Feliz cumpleaños cuñada: 50 mensajes cercanos y alegres para celebrar su día en familia. Editá con su nombre en vivo y descargá tarjeta PNG o Story.'
  },
  'frases-para-una-cunada': {
    titulo: 'Frases originales para una cuñada en su día (50)',
    meta: '50 frases breves y originales para felicitar a una cuñada por WhatsApp, estados o tarjeta de regalo. Personalizá con su nombre y compartí gratis.'
  },
  'feliz-cumpleanos-para-mi-nieto': {
    titulo: 'Feliz cumpleaños para mi nieto: 50 bendiciones',
    meta: 'Feliz cumpleaños para mi nieto: 50 dedicatorias y bendiciones de abuelos llenas de orgullo y ternura. Editá con su nombre y bajá tarjeta PNG para guardar.'
  },
  'frases-para-un-nieto': {
    titulo: 'Frases tiernas y cortas para un nieto (50)',
    meta: '50 frases tiernas, breves y alegres para saludar a un nieto en su cumpleaños por WhatsApp o tarjeta. Sumá su nombre y firma en vivo sin registrarte.'
  },
  'feliz-cumpleanos-para-mi-nieta': {
    titulo: 'Feliz cumpleaños para mi nieta: 50 dedicatorias',
    meta: 'Feliz cumpleaños para mi nieta: 50 dedicatorias dulces y emocionantes de abuelos para su día especial. Personalizá con su nombre y descargá postal PNG.'
  },
  'frases-para-mi-nieta': {
    titulo: 'Frases dulces y breves para mi nieta (50)',
    meta: '50 frases cortas y dulces para felicitar a mi nieta en tarjetas, fotos o WhatsApp. Editá con su nombre en 1 clic y compartí gratis al instante.'
  },
  'feliz-cumpleanos-suegra': {
    titulo: 'Feliz cumpleaños suegra: 50 mensajes de respeto',
    meta: 'Feliz cumpleaños suegra: 50 mensajes respetuosos, cálidos y agradecidos para celebrar su día con elegancia. Editá con su nombre y enviá por WhatsApp.'
  },
  'frases-para-mi-suegra': {
    titulo: 'Frases cordiales y lindas para mi suegra (50)',
    meta: '50 frases breves, cordiales y cariñosas para saludar a mi suegra en tarjetas, flores o WhatsApp. Personalizá con su nombre y descargá tarjeta PNG.'
  },
  'feliz-cumpleanos-para-una-nina': {
    titulo: 'Feliz cumpleaños para una niña: 50 saludos mágicos',
    meta: 'Feliz cumpleaños para una niña: 50 saludos tiernos, alegres y llenos de fantasía para festejar su día. Personalizá con su nombre y bajá tarjeta PNG.'
  },
  'frases-para-una-nina': {
    titulo: 'Frases cortas y dulces para una niña (50)',
    meta: '50 frases breves y dulces para felicitar a una niña en tarjetas de regalo, invitaciones o WhatsApp familiar. Editá con su nombre y copiá gratis.'
  },
  'palabras-de-agradecimiento': {
    titulo: 'Palabras de agradecimiento por un año más (50)',
    meta: '50 palabras de agradecimiento sinceras para celebrar la vida, la familia y los aprendizajes de un nuevo año. Editá con tu firma y compartí en redes.'
  },
  'frases-de-agradecimiento': {
    titulo: 'Frases cortas de agradecimiento por mi día (50)',
    meta: '50 frases breves de agradecimiento por tu cumpleaños ideales para estados de WhatsApp o pie de foto en Instagram. Copiá en 1 clic o bajá tarjeta PNG.'
  },
  'agradecimiento-por-saludos-cumpleanos': {
    titulo: 'Gracias por los saludos de cumpleaños: 50 respuestas',
    meta: '50 respuestas cálidas y originales para agradecer los saludos de cumpleaños en grupos de WhatsApp, mensajes privados o historias. Copiá y enviá hoy.'
  },
  'felicitaciones-de-cumpleanos-originales': {
    titulo: 'Felicitaciones de cumpleaños originales (50)',
    meta: '50 felicitaciones de cumpleaños originales que escapan a las frases repetidas: textos ingeniosos y cálidos listos para personalizar y enviar por WhatsApp.'
  },
  'felicitaciones-y-frases-originales-de-cumpleanos': {
    titulo: 'Frases creativas y diferentes de cumpleaños (50)',
    meta: '50 frases creativas y diferentes de cumpleaños para sorprender a amigos, pareja o familia sin repetir lo de siempre. Editá con nombre y bajá tarjeta PNG.'
  },
  'feliz-cumpleanos-alguien-especial': {
    titulo: 'Feliz cumpleaños alguien especial: 50 mensajes',
    meta: '50 mensajes de feliz cumpleaños para alguien especial en tu vida: palabras sinceras con la dosis justa de afecto para WhatsApp o tarjeta personalizada.'
  },
  'frases-y-cumpleanos-para-alguien-especial': {
    titulo: 'Frases bonitas para una persona especial (50)',
    meta: '50 frases bonitas y delicadas para felicitar a una persona especial en su cumpleaños sin sonar exagerado. Personalizá con su nombre y copiá gratis.'
  },
  'feliz-cumpleanos-mujer': {
    titulo: 'Feliz cumpleaños mujer: 50 mensajes de admiración',
    meta: 'Feliz cumpleaños mujer: 50 mensajes inspiradores y cálidos para celebrar a una mujer valiosa en su día. Editá con su nombre y descargá tarjeta PNG o Story.'
  },
  'mensajes-cortos-para-mujer': {
    titulo: 'Mensajes cortos de cumpleaños para una mujer (50)',
    meta: '50 mensajes cortos y elegantes de cumpleaños para una mujer: ideales para WhatsApp, ramo de flores o tarjeta breve. Personalizá con su nombre en 1 clic.'
  },
  'feliz-cumpleanos-15-anos': {
    titulo: 'Feliz cumpleaños 15 años: 50 mensajes especiales',
    meta: 'Feliz cumpleaños 15 años: 50 mensajes emotivos y alegres para dedicar a una quinceañera en su gran día. Personalizá con su nombre y bajá tarjeta PNG.'
  },
  'frases-de-15-anos': {
    titulo: 'Frases de 15 años cortas para tarjeta o estados',
    meta: '50 frases cortas de 15 años para invitaciones, dedicatorias en libro de firmas o fotos de Instagram. Editá con nombre al instante y copiá gratis.'
  },
  'feliz-cumpleanos-18-anos': {
    titulo: 'Feliz cumpleaños 18 años: 50 saludos para dedicar',
    meta: 'Feliz cumpleaños 18 años: 50 saludos y dedicatorias para felicitar a quien llega a la mayoría de edad. Editá con su nombre y enviá por WhatsApp o postal.'
  },
  'feliz-cumpleanos-18-anos-para-mi': {
    titulo: 'Felices 18 años para mí: 50 frases y captions',
    meta: 'Felices 18 años para mí: 50 frases propias y captions auténticos para celebrar tu mayoría de edad en Instagram, WhatsApp o tu diario personal.'
  },
  'feliz-cumpleanos-20-anos': {
    titulo: 'Feliz cumpleaños 20 años: 50 mensajes para dedicar',
    meta: 'Feliz cumpleaños 20 años: 50 mensajes y dedicatorias para felicitar a quien empieza una nueva década con energía. Editá con su nombre y bajá tarjeta PNG.'
  },
  'feliz-cumpleanos-20-anos-para-mi': {
    titulo: 'Felices 20 años para mí: 50 textos propios',
    meta: 'Felices 20 años para mí: 50 textos propios y captions sinceros para celebrar tus veinte en Instagram, WhatsApp o reflexión personal sin caer en clichés.'
  },
  'feliz-cumpleanos-30-anos': {
    titulo: 'Feliz cumpleaños 30 años: 50 mensajes para dedicar',
    meta: 'Feliz cumpleaños 30 años: 50 mensajes originales, emotivos y con humor para felicitar a quien llega a los treinta. Personalizá con su nombre en 1 clic.'
  },
  'feliz-cumpleanos-30-anos-para-mi': {
    titulo: 'Felices 30 años para mí: 50 reflexiones propias',
    meta: 'Felices 30 años para mí: 50 reflexiones y frases de gratitud para celebrar tus treinta con autenticidad en redes o WhatsApp. Copiá y editá al instante.'
  },
  'feliz-cumpleanos-para-mi': {
    titulo: 'Feliz cumpleaños para mí: 50 frases de gratitud',
    meta: 'Feliz cumpleaños para mí: 50 frases de gratitud, orgullo y nuevos comienzos para celebrar tu propio día en WhatsApp, Instagram o tu diario personal.'
  },
  'frases-por-mi-cumpleanos': {
    titulo: 'Frases por mi cumpleaños para estados e Instagram',
    meta: '50 frases cortas y captions por mi cumpleaños listos para acompañar tu foto en Instagram, TikTok o estado de WhatsApp. Editá con tu edad y copiá gratis.'
  },
  'frases-de-cumpleanos': {
    titulo: 'Frases de cumpleaños originales: 50 ideas cortas',
    meta: '50 frases de cumpleaños originales y versátiles para saludar a cualquier persona especial por WhatsApp o tarjeta. Personalizá con nombre en 1 clic.'
  },
  'felicitaciones-de-cumpleanos': {
    titulo: 'Felicitaciones de cumpleaños: 50 saludos listos',
    meta: '50 felicitaciones de cumpleaños cálidas y completas para enviar a familiares, amigos o colegas. Sumá nombre y firma en vivo y descargá postal PNG.'
  },
  'dedicatorias-de-cumpleanos': {
    titulo: 'Dedicatorias de cumpleaños emotivas: 50 tarjetas',
    meta: '50 dedicatorias de cumpleaños emotivas pensadas para escribir en tarjetas, regalos o cartas inolvidables. Editá con nombre y posdata gratis.'
  },
  'feliz-cumpleanos-de-mama-a-hija': {
    titulo: 'Feliz cumpleaños de mamá a hija: 50 dedicatorias',
    meta: '50 dedicatorias de cumpleaños de mamá a hija llenas de ternura, orgullo y complicidad materna. Personalizá con su nombre y descargá tarjeta PNG.'
  },
  'feliz-cumpleanos-de-hija-para-mama': {
    titulo: 'Feliz cumpleaños de hija para mamá: 50 mensajes',
    meta: '50 mensajes de cumpleaños de hija para mamá llenos de gratitud por su ejemplo y amor incondicional. Editá con su nombre y compartí por WhatsApp o postal.'
  },

  // === CORRECCIÓN DE LOS 8 TÍTULOS ABRUPTOS TERMINADOS EN "- 50" ===
  'feliz-cumpleanos-para-mi-si-estoy-lejos-o-solo': {
    titulo: 'Cumpleaños para mí lejos o solo: 50 palabras serenas',
    meta: '50 palabras serenas y honestas para tu cumpleaños si estás lejos de casa o celebrando en calma: reflexiones de compañía interior listas para guardar.'
  },
  'frases-para-acompanar-a-una-familia-en-duelo': {
    titulo: 'Frases para acompañar a una familia en duelo (50)',
    meta: '50 frases respetuosas y serenas para acompañar a una familia en duelo por WhatsApp o tarjeta, sin frases hechas que incomoden. Editá con nombre gratis.'
  },
  'aniversario-luctuoso-recuerdos-serenos': {
    titulo: 'Aniversario luctuoso: 50 palabras y recuerdos serenos',
    meta: '50 palabras serenas y respetuosas para un aniversario luctuoso: mensajes para honrar la memoria con paz y acompañar a quienes extrañan hoy.'
  },
  'palabras-de-consuelo-cristianas-para-duelo': {
    titulo: 'Palabras de consuelo cristianas para duelo (50)',
    meta: '50 palabras de consuelo cristianas para acompañar en el duelo con fe, paz y respeto. Mensajes sobrios para enviar por WhatsApp o descargar en tarjeta.'
  },
  'mensajes-de-pesame-cortos-para-whatsapp': {
    titulo: 'Mensajes de pésame cortos para WhatsApp (50 textos)',
    meta: '50 mensajes de pésame cortos, sobrios y respetuosos para enviar por WhatsApp cuando cuesta encontrar palabras. Copiá y personalizá con el nombre en 1 clic.'
  },
  'condolencias-para-companero-de-trabajo': {
    titulo: 'Condolencias para compañero de trabajo: 50 textos',
    meta: '50 mensajes sobrios y cordiales de condolencias para un compañero de trabajo, colega o jefe en duelo. Listos para enviar por WhatsApp, correo o tarjeta.'
  },
  'discursos-cortos-de-cumpleanos-para-leer': {
    titulo: 'Discursos cortos de cumpleaños para leer (50 ideas)',
    meta: '50 discursos cortos de cumpleaños para leer en fiestas, cenas o brindis familiares: textos naturales y claros que emocionan sin extenderse de más.'
  },
  'invitaciones-de-cumpleanos-para-editar-e-imprimir': {
    titulo: 'Invitaciones de cumpleaños para editar e imprimir',
    meta: '50 textos e ideas de invitaciones de cumpleaños para editar, enviar por WhatsApp o imprimir en casa: infantiles, adultos y fiestas temáticas.'
  },

  // === CORRECCIÓN DE 30 EN RETRO VINTAGE ===
  'feliz-cumpleanos-retro-vintage-elegante': {
    titulo: 'Feliz cumpleaños retro vintage elegante: 50 ideas',
    meta: '50 dedicatorias de cumpleaños con estilo retro vintage y elegante: textos atemporales, sobrios y cálidos para tarjetas impresas, brindis o WhatsApp.'
  }
};

function limpiarMetaRoboticoOTruncado(hub, cantMensajes) {
  let meta = String(hub.meta || '').trim();
  const h1Limpio = String(hub.h1 || hub.titulo || '')
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

  const truncado = /\b(este|esta|estos|estas|para|de|con|por|en|el|la|los|las|un|una|y|o|del|al|su|tu)\.$/i.test(meta);
  const robotico = /(?:para\s+(?:frases|mensajes|cartas|palabras|dedicatorias)|de\s+(?:frases|mensajes|cartas|palabras|dedicatorias)\s+para)/i.test(meta);

  if (truncado || robotico || meta.length < 110 || meta.length > 162) {
    const base = h1Limpio || hub.keyword || hub.slug.replace(/-/g, ' ');
    const cap = base.charAt(0).toUpperCase() + base.slice(1);
    const esDuelo = /duelo|fallecid|condolenc|pesame|luctuos|cielo/i.test(hub.slug);
    const esCarta = /carta|largos|extensos/i.test(hub.slug);
    let nueva = '';
    if (esDuelo) {
      nueva = `${cap}: ${cantMensajes} mensajes serenos y respetuosos para recordar y acompañar. Personalizá con nombre en vivo y copiá o bajá tarjeta sobria.`;
    } else if (esCarta) {
      nueva = `${cap}: ${cantMensajes} cartas y textos emotivos listos para personalizar con nombre y firma. Copiá en 1 clic, enviá por WhatsApp o bajá tarjeta PNG.`;
    } else {
      nueva = `${cap}: ${cantMensajes} mensajes originales listos para copiar en 1 clic. Personalizá con nombre y firma en vivo y compartí por WhatsApp o tarjeta PNG.`;
    }
    if (nueva.length > 158) {
      nueva = `${cap}: ${cantMensajes} mensajes originales para copiar en 1 clic, personalizar con nombre y enviar por WhatsApp o tarjeta PNG.`;
    }
    if (nueva.length > 158) {
      nueva = `${cap}: ${cantMensajes} dedicatorias inéditas para editar con nombre en vivo y compartir gratis por WhatsApp o tarjeta PNG.`;
    }
    return nueva;
  }
  return meta;
}

function sincronizarConteosTexto(texto, slug, cantMensajes) {
  if (!texto || cantMensajes !== 50) return texto;
  const slugNums = slug.match(/\d+/g) || [];
  // No tocar categorías de edad/aniversario de 40 años
  if (slugNums.includes('40')) return texto;

  return texto
    .replace(/\b40\s+(opciones|mensajes|textos|dedicatorias|frases|cartas|saludos|ideas|ejemplos|alternativas|propuestas|publicaciones|felicitaciones|palabras)\b/gi, '50 $1')
    .replace(/\bestas\s+40\b/gi, 'estas 50')
    .replace(/\bestos\s+40\b/gi, 'estos 50')
    .replace(/\blas\s+40\s+(opciones|frases|cartas|dedicatorias|ideas|alternativas|publicaciones|felicitaciones)\b/gi, 'las 50 $1')
    .replace(/\blos\s+40\s+(mensajes|textos|saludos|ejemplos)\b/gi, 'los 50 $1');
}

// Primero contar mensajes reales por categoría en todos los archivos
const conteoPorCat = new Map();
const datosPorArchivo = [];

for (const archivo of ARCHIVOS) {
  const arr = JSON.parse(fs.readFileSync(archivo, 'utf8'));
  datosPorArchivo.push({ archivo, arr });
  for (const r of arr) {
    if (r.tipo === 'mensaje') {
      conteoPorCat.set(r.categoria, (conteoPorCat.get(r.categoria) || 0) + 1);
    }
  }
}

let overridesAplicados = 0;
let metasReparados = 0;
let leadsSincronizados = 0;
let seoSincronizados = 0;
let archivosModificados = 0;

for (const { archivo, arr } of datosPorArchivo) {
  let cambioArchivo = false;

  for (const r of arr) {
    if (r.tipo !== 'hub') continue;
    const cant = conteoPorCat.get(r.slug) || 50;

    if (OVERRIDES[r.slug]) {
      const ov = OVERRIDES[r.slug];
      if (r.titulo !== ov.titulo) {
        r.titulo = ov.titulo;
        cambioArchivo = true;
      }
      if (r.meta !== ov.meta) {
        r.meta = ov.meta;
        cambioArchivo = true;
      }
      if (r.actualizado !== '2026-11-23') {
        r.actualizado = '2026-11-23';
        cambioArchivo = true;
      }
      overridesAplicados++;
    } else {
      const metaLimpia = limpiarMetaRoboticoOTruncado(r, cant);
      if (metaLimpia !== r.meta) {
        r.meta = metaLimpia;
        r.actualizado = '2026-11-23';
        metasReparados++;
        cambioArchivo = true;
      }
    }

    // Sincronizar menciones antiguas de "40" cuando la categoría tiene 50 mensajes
    if (r.lead) {
      const nuevoLead = sincronizarConteosTexto(r.lead, r.slug, cant);
      if (nuevoLead !== r.lead) {
        r.lead = nuevoLead;
        leadsSincronizados++;
        cambioArchivo = true;
      }
    }
    if (r.seoTexto) {
      const nuevoSeo = sincronizarConteosTexto(r.seoTexto, r.slug, cant);
      if (nuevoSeo !== r.seoTexto) {
        r.seoTexto = nuevoSeo;
        seoSincronizados++;
        cambioArchivo = true;
      }
    }
    // También eliminar cualquier mención huérfana de "30 " en retro-vintage/discursos/para-mi
    if (r.slug === 'discursos-cortos-de-cumpleanos-para-leer' && r.lead) {
      const nl = r.lead.replace(/\b30\s+a\s+60\s+segundos\b/g, 'medio minuto a un minuto');
      if (nl !== r.lead) { r.lead = nl; cambioArchivo = true; }
    }
    if (r.slug === 'feliz-cumpleanos-retro-vintage-elegante' && r.lead) {
      const nl = r.lead.replace(/\b30\b/g, 'treinta');
      if (nl !== r.lead) { r.lead = nl; cambioArchivo = true; }
    }
  }

  if (cambioArchivo) {
    fs.writeFileSync(archivo, JSON.stringify(arr, null, 2) + '\n', 'utf8');
    archivosModificados++;
  }
}

console.log(
  JSON.stringify(
    {
      archivosModificados,
      overridesAplicados,
      metasReparados,
      leadsSincronizados,
      seoSincronizados
    },
    null,
    2
  )
);
