import fs from 'node:fs';
import path from 'node:path';

const FECHA_ACT = '2026-11-19';
const TOTAL_MSG = 40;

const archivos = [
  { ruta: path.resolve('data/contenido.json'), compacto: false },
  ...fs
    .readdirSync(path.resolve('data/categorias'))
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => ({
      ruta: path.resolve('data/categorias', f),
      compacto: /^g\d{2}-/.test(f)
    }))
];

function capPrimera(s) {
  const txt = String(s || '').trim();
  return txt ? txt.charAt(0).toUpperCase() + txt.slice(1) : '';
}

function limpiarNombreBase(hub) {
  let base = capPrimera(hub.keyword || hub.titulo || '')
    .replace(/\s*\(\d+\)\s*$/, '')
    .replace(/\s*-\s*\d+\s+(Mensajes|Cartas|Poemas|Textos|Frases|Palabras.*)$/i, '')
    .replace(/\bdios\b/g, 'Dios')
    .replace(/\bmama\b/g, 'mamá')
    .replace(/\bpapa\b/g, 'papá')
    .replace(/\btia\b/g, 'tía')
    .replace(/\btio\b/g, 'tío')
    .trim();
  base = base.replace(/\s+dios te bendiga$/i, ', Dios te bendiga');
  base = base.replace(/(\b(?:prima|amiga|amigo|hermana|hermano|hijo|sobrina))\s+Dios te bendiga/i, '$1, Dios te bendiga');
  return base;
}

function esDuelo(hub) {
  return /fallecid|hasta-el-cielo/.test(hub.slug);
}
function esAniversario(hub) {
  return /(meses-de-novios|ano-de-novios|anos-de-novios|bodas-de-|aniversario)/.test(hub.slug);
}
function esCarta(hub) {
  return hub.grupo === 'cartas' || /cartas-hermosas/.test(hub.slug);
}
function esPoema(hub) {
  return /^poema|poesia|-poema/.test(hub.slug);
}

const TITULOS_PERSONALIZADOS = {
  'carta-de-8-meses-de-novios': 'Carta de 8 meses de novios - 40 Cartas',
  'frases-para-mi-hijo-8-anos': 'Frases para Mi Hijo de 8 Años - 40 Mensajes',
  'feliz-cumpleanos-30-anos': 'Feliz cumpleaños 30 años - 40 Mensajes y Frases',
  'frases-para-mi-hija-de-5-anos': 'Dedicatorias y frases para mi hija de 5 años (40)',
  'feliz-cumpleanos-20-anos': 'Feliz cumpleaños 20 años: 40 frases y para mí',
  'feliz-cumpleanos-abuelo': 'Feliz cumpleaños abuelo - 40 Mensajes y Tarjeta',
  'feliz-cumpleanos-abuela': 'Feliz cumpleaños abuela - 40 Mensajes y Tarjeta',
  'feliz-cumpleanos-primo': 'Feliz cumpleaños primo - 40 Mensajes y Tarjeta',
  'frases-para-un-primo': 'Frases y mensajes para un primo - 40 Dedicatorias',
  'feliz-cumpleanos-prima-dios-te-bendiga': 'Feliz cumpleaños prima, Dios te bendiga - 40 Mensajes',
  'feliz-cumpleanos-amiga-dios-te-bendiga': 'Feliz cumpleaños amiga, Dios te bendiga - 40 Mensajes',
  'feliz-cumpleanos-amigo-dios-te-bendiga': 'Feliz cumpleaños amigo, Dios te bendiga - 40 Mensajes',
  'feliz-cumpleanos-hermana-dios-te-bendiga': 'Feliz cumpleaños hermana, Dios te bendiga (40)',
  'feliz-cumpleanos-hermano-dios-te-bendiga': 'Feliz cumpleaños hermano, Dios te bendiga (40)',
  'feliz-cumpleanos-hijo-dios-te-bendiga': 'Feliz cumpleaños hijo, Dios te bendiga - 40 Mensajes',
  'feliz-cumpleanos-sobrina-dios-te-bendiga': 'Feliz cumpleaños sobrina, Dios te bendiga (40)',
  'feliz-cumpleanos-dios-te-bendiga': 'Feliz cumpleaños, Dios te bendiga - 40 Mensajes'
};

function construirTituloCtr(hub) {
  if (TITULOS_PERSONALIZADOS[hub.slug]) {
    return TITULOS_PERSONALIZADOS[hub.slug];
  }

  let t = String(hub.titulo || '');
  const slugNums = hub.slug.match(/\d+/g) || [];
  const protege36 = slugNums.includes('36');
  const protege30 = slugNums.includes('30');

  if (!protege36) {
    t = t
      .replace(/-\s*36\s+(Cartas|Poemas|Textos|Frases|Mensajes|Palabras y Mensajes)/i, '- 40 $1')
      .replace(/\(36\)/g, '(40)');
  }
  if (!protege30) {
    t = t
      .replace(/-\s*30\s+(Cartas|Poemas|Textos|Frases|Mensajes)/i, '- 40 $1')
      .replace(/\(30\)/g, '(40)');
  }

  // Corregir posibles residuos genericos de script viejo
  t = t.replace(/\s+/g, ' ').trim();

  if (t.length > 60) {
    const base = limpiarNombreBase(hub);
    if (`${base} (40)`.length <= 60) t = `${base} (40)`;
    else t = base.slice(0, 60).replace(/\s+\S*$/, '').trim();
  }

  return t;
}

const METAS_CUSTOM = {
  'feliz-cumpleanos-papa':
    '40 frases para desear feliz cumpleaños a mi papá: cortas para WhatsApp, emotivas y cartas largas. Personalizá con su nombre y bajá tarjeta PNG o Story IG.',
  'feliz-cumpleanos-mama':
    '40 mensajes originales para desear feliz cumpleaños a mi mamá: saludos breves, cartas largas y bendiciones. Personalizá con nombre y descargá en tarjeta PNG.',
  'feliz-cumpleanos-abuelo':
    '40 frases de cumpleaños para abuelo y abuelos: mensajes tiernos, con humor sano y cartas para imprimir. Personalizá con nombre y bajá tarjeta PNG gratis.',
  'feliz-cumpleanos-abuela':
    '40 frases de cumpleaños para abuela y abuelos llenas de gratitud y ternura. Copiá gratis para WhatsApp o creá una tarjeta PNG personalizada con su nombre.',
  'feliz-cumpleanos-primo':
    '40 mensajes de cumpleaños para un primo: graciosos, breves para WhatsApp y dedicatorias sinceras. Personalizá con su nombre y descargá tarjeta PNG o Story IG.',
  'frases-para-un-primo':
    '40 frases y mensajes de cumpleaños para un primo listos para enviar por WhatsApp o redes. Editá con nombre y firma y bajá tu tarjeta PNG sin registrarte.',
  'feliz-cumpleanos-prima-dios-te-bendiga':
    'Feliz cumpleaños prima, Dios te bendiga: 40 mensajes cristianos con fe, gratitud y cariño para WhatsApp. Personalizá con su nombre y descargá tarjeta PNG.',
  'feliz-cumpleanos-amiga-dios-te-bendiga':
    'Feliz cumpleaños amiga, Dios te bendiga: 40 dedicatorias cristianas breves y emotivas para WhatsApp. Personalizá con su nombre y descargá tarjeta PNG.',
  'frases-para-mi-hija-de-5-anos':
    'Dedicatoria para mi hija de 5 años: 40 frases y mensajes tiernos para mamá, papá y familia. Personalizá con su nombre, copiá o descargá tu tarjeta PNG.',
  'feliz-cumpleanos-20-anos':
    '40 frases de feliz cumpleaños 20 años para felicitar o dedicar "felices 20 años para mí". Copiá gratis para WhatsApp, Instagram Story o tarjeta PNG con nombre.',
  'feliz-cumpleanos-para-mi':
    '40 frases de cumpleaños para mí (18, 20, 30 y más): agradecé tu nuevo año en Instagram o WhatsApp. Editá firma, posdata y descargá Story PNG 1080×1920.'
};

function construirMetaCtr(hub, idx) {
  if (METAS_CUSTOM[hub.slug]) return METAS_CUSTOM[hub.slug];

  const nombre = limpiarNombreBase(hub);
  const duelo = esDuelo(hub);
  const aniv = esAniversario(hub);
  const carta = esCarta(hub);
  const poema = esPoema(hub);
  const motiv = hub.slug === 'motivaciones';

  if (motiv) {
    return '40 frases motivacionales diarias originales para arrancar el día con foco y calma. Copiá en 1 clic, activá tu recordatorio diario y bajá tarjetas Story IG.';
  }

  let candidatos = [];
  if (duelo) {
    candidatos = [
      `${nombre}: ${TOTAL_MSG} dedicatorias serenas y respetuosas para recordar su legado. Copiá el texto o descargá una tarjeta sobria con tu firma personal.`,
      `${TOTAL_MSG} palabras de homenaje y consuelo sobre ${nombre.toLowerCase()}. Textos íntimos y serenos listos para compartir en privado o guardar en tarjeta PNG.`
    ];
  } else if (aniv) {
    candidatos = [
      `${nombre}: ${TOTAL_MSG} textos originales para celebrar su historia juntos. Editá nombre, posdata y firma en vivo y descargá tarjeta PNG cuadrada o Story IG.`,
      `${TOTAL_MSG} dedicatorias inéditas de ${nombre.toLowerCase()}, desde notas breves para chat hasta cartas largas. Personalizá con sus nombres y descargá gratis.`
    ];
  } else if (carta) {
    candidatos = [
      `${nombre}: ${TOTAL_MSG} cartas largas en varios párrafos listas para emocionar. Sumá nombre, posdata y firma en vivo y compartí por WhatsApp o impreso.`,
      `${TOTAL_MSG} cartas extensas sobre ${nombre.toLowerCase()}, escritas con historia y afecto real. Editá el encabezado y bajá tu tarjeta PNG o texto limpio gratis.`
    ];
  } else if (poema) {
    candidatos = [
      `${nombre}: ${TOTAL_MSG} poemas originales en estrofas y versos para dedicar hoy. Personalizá con nombre y bajá tu tarjeta PNG lista para Instagram o WhatsApp.`,
      `${TOTAL_MSG} versos y rimas inéditas sobre ${nombre.toLowerCase()}. Conservá las estrofas al copiar o descargá gratis una tarjeta ilustrada con firma.`
    ];
  } else if (hub.slug.includes('bilingue') || hub.slug.includes('ingles')) {
    candidatos = [
      `${nombre}: ${TOTAL_MSG} mensajes en inglés con traducción fiel al español. Agregá nombre arriba, copiá para redes o bajá tu tarjeta Story IG en 1 clic.`
    ];
  } else {
    candidatos = [
      `${nombre}: ${TOTAL_MSG} mensajes inéditos (breves, emotivos y cartas) listos para WhatsApp. Personalizá con nombre y firma y bajá tarjeta PNG o Story IG.`,
      `${TOTAL_MSG} dedicatorias originales de ${nombre.toLowerCase()} para copiar en 1 clic. Sumá nombre, posdata P.D. y descargá tarjeta cuadrada o Story 1080×1920.`,
      `Descubrí ${TOTAL_MSG} textos reales para ${nombre.toLowerCase()}, desde frases cortas hasta cartas. Editá con nombre en vivo y compartí por WhatsApp o Instagram.`
    ];
  }

  let m = candidatos[idx % candidatos.length];
  if (m.length > 162) {
    m = m
      .replace(' y bajá tarjeta PNG o Story IG.', '.')
      .replace(' o bajá tarjeta PNG gratis.', '.')
      .replace(' cuadrada o Story 1080×1920', ' PNG')
      .replace(' en vivo y descargá tarjeta PNG cuadrada o Story IG.', ' y descargá en tarjeta PNG.');
  }
  if (m.length > 162) {
    m = m.slice(0, 159).replace(/\s+\S*$/, '').replace(/[,;:.]$/, '') + '.';
  }
  if (m.length < 120) {
    m = `${m} Copiá gratis o bajá tarjeta PNG.`;
  }
  return m;
}

const datasets = archivos.map((a) => ({
  ...a,
  datos: JSON.parse(fs.readFileSync(a.ruta, 'utf8'))
}));

let hubIdx = 0;
const titulosUsados = new Set();
let titulosCambiados = 0;
let metasCambiadas = 0;
let seoCambiados = 0;

for (const ds of datasets) {
  for (const r of ds.datos) {
    if (r.tipo !== 'hub') continue;

    let nuevoTitulo = construirTituloCtr(r);
    if (titulosUsados.has(nuevoTitulo)) {
      const base = limpiarNombreBase(r);
      const cand = `${base} · 40 Textos`.slice(0, 60).trim();
      nuevoTitulo = titulosUsados.has(cand) ? `${base} - 40 Ideas`.slice(0, 60).trim() : cand;
    }
    titulosUsados.add(nuevoTitulo);

    if (r.titulo !== nuevoTitulo) {
      r.titulo = nuevoTitulo;
      titulosCambiados++;
    }

    // Limpiar tambien H1 en "dios te bendiga" sin mayuscula o coma
    if (/dios te bendiga/i.test(r.h1 || '') && !/Dios te bendiga/.test(r.h1 || '')) {
      r.h1 = r.h1.replace(/\bdios te bendiga\b/gi, ', Dios te bendiga').replace(/\s+,\s+/g, ', ');
    }

    // Corregir metas roboticas, bugs de "36 meses"/"36 anos" o concordancia "listos"
    const metaActual = String(r.meta || '');
    const esMetaRobotic =
      /para (frases|palabras|mensajes|feliz|carta|cartas)/i.test(metaActual) ||
      /sobre (frases|palabras|mensajes|feliz|carta|cartas|felicitaciones|poemas)/i.test(metaActual) ||
      /cartas largas y sentidas listos/i.test(metaActual) ||
      /\b36\s+(meses|años|textos|cartas|poemas)/i.test(metaActual) ||
      Boolean(METAS_CUSTOM[r.slug]);

    if (esMetaRobotic) {
      const nuevaMeta = construirMetaCtr(r, hubIdx);
      if (nuevaMeta !== r.meta) {
        r.meta = nuevaMeta;
        metasCambiadas++;
      }
    }

    if (/\b36\s+publicaciones\b/.test(r.seoTexto || '')) {
      r.seoTexto = r.seoTexto.replace(/\b36\s+publicaciones\b/g, '40 publicaciones');
      seoCambiados++;
    }

    r.actualizado = FECHA_ACT;
    hubIdx++;
  }
}

for (const ds of datasets) {
  const salida = ds.compacto ? JSON.stringify(ds.datos) : JSON.stringify(ds.datos, null, 2);
  fs.writeFileSync(ds.ruta, salida);
}

console.log(
  `Optimizacion completada: ${hubIdx} hubs procesados | titulos actualizados: ${titulosCambiados} | metas optimizadas: ${metasCambiadas} | seoTextos corregidos: ${seoCambiados}`
);
