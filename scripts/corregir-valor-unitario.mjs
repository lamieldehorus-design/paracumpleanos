import fs from 'node:fs';
import path from 'node:path';

const OCASION_POR_CATEGORIA = {
  'frases-de-primer-mes-de-novios': {
    saludo: '¡Feliz primer mes juntos!',
    titSufijo: 'en este primer mes juntos',
    reflexion:
      'En este primer mes compartido cada gesto sencillo confirma lo bien que se siente caminar a la par y construir confianza día a día.',
    doble:
      'Celebrar este primer mes de novios confirma cuánto disfruto descubrir nuestras costumbres nuevas sin apuro y con sonrisa franca.'
  },
  'frases-de-agradecimiento-por-mi-graduacion': {
    saludo: '¡Gracias por acompañarme en esta graduación!',
    titSufijo: 'en esta graduación',
    reflexion:
      'Al recibir este título recuerdo cuánto sostén silencioso y paciencia firme me regalaron semana tras semana durante cada examen.'
  },
  'feliz-jubilacion-y-retiro': {
    saludo: '¡Feliz jubilación y nueva etapa!',
    titSufijo: 'en tu jubilación merecida',
    reflexion:
      'En el cierre de tu trayectoria laboral queda claro cuánto oficio, respeto y generosidad dejaste en cada persona del equipo.'
  },
  'bienvenida-nacimiento-bebe': {
    saludo: '¡Bienvenido al mundo!',
    titSufijo: 'por esta bienvenida tan esperada',
    reflexion:
      'La llegada de este bebé llena la casa de ternura serena y abre una etapa hermosa para disfrutar cada descubrimiento en familia.'
  },
  'cumplemes-de-bebe': {
    saludo: '¡Feliz cumplemés!',
    titSufijo: 'en este nuevo cumplemés',
    reflexion:
      'Cada cumplemés nos regala un gesto nuevo, una sonrisa distinta y la alegría simple de verte crecer rodeado de cuidado.'
  },
  'feliz-dia-de-la-madre': {
    saludo: '¡Feliz Día de la Madre!',
    titSufijo: 'en el Día de la Madre',
    reflexion:
      'En nuestra casa cada Día de la Madre nos recuerda cuánto sostén silencioso y cariño firme regalás semana tras semana sin esperar reconocimiento.'
  },
  'feliz-dia-del-padre': {
    saludo: '¡Feliz Día del Padre!',
    titSufijo: 'en el Día del Padre',
    reflexion:
      'En nuestra casa cada Día del Padre nos recuerda cuánto sostén silencioso y ejemplo firme regalás semana tras semana sin alardear.'
  },
  'feliz-dia-del-amigo': {
    saludo: '¡Feliz Día del Amigo!',
    titSufijo: 'en el Día del Amigo',
    reflexion:
      'Cada Día del Amigo nos recuerda cuánto valor tiene contar con una amistad franca que acompaña semana tras semana sin pedir nada a cambio.'
  },
  'feliz-dia-de-los-abuelos': {
    saludo: '¡Feliz Día de los Abuelos!',
    titSufijo: 'en el Día de los Abuelos',
    reflexion:
      'En nuestra familia cada Día de los Abuelos nos recuerda cuánta paciencia, memoria viva y calidez regalás en cada visita.'
  },
  'feliz-dia-del-maestro': {
    saludo: '¡Feliz Día del Maestro!',
    titSufijo: 'en el Día del Maestro',
    reflexion:
      'Cada Día del Maestro nos recuerda cuánta dedicación silenciosa y claridad regalás en el aula semana tras semana.'
  },
  'feliz-navidad-en-familia': {
    saludo: '¡Feliz Navidad en familia!',
    titSufijo: 'en esta Navidad',
    reflexion:
      'En nuestra casa cada Navidad nos recuerda cuánto valor tiene compartir la mesa tranquila y agradecer el afecto que nos sostiene.'
  },
  'feliz-ano-nuevo-familia': {
    saludo: '¡Feliz Año Nuevo!',
    titSufijo: 'en este Año Nuevo',
    reflexion:
      'Al comenzar un Año Nuevo recordamos cuánto sostén silencioso y cariño firme nos acompaña en casa mes tras mes.'
  },
  'feliz-nochebuena': {
    saludo: '¡Feliz Nochebuena!',
    titSufijo: 'en esta Nochebuena',
    reflexion:
      'En nuestra casa cada Nochebuena nos recuerda cuánto sostén silencioso y cariño firme compartimos alrededor de la mesa.'
  },
  'feliz-dia-de-reyes': {
    saludo: '¡Feliz Día de Reyes!',
    titSufijo: 'en el Día de Reyes',
    reflexion:
      'Cada Día de Reyes renueva la ilusión sencilla de compartir en familia y celebrar las pequeñas alegrías de comienzos de año.'
  },
  'feliz-san-valentin': {
    saludo: '¡Feliz San Valentín!',
    titSufijo: 'en este San Valentín',
    reflexion:
      'Cada San Valentín nos recuerda cuánto sostén cotidiano y complicidad firme compartimos semana tras semana en pareja.'
  },
  'feliz-dia-de-la-mujer': {
    saludo: '¡Feliz Día de la Mujer!',
    titSufijo: 'en el Día de la Mujer',
    reflexion:
      'Cada Día de la Mujer invita a reconocer la fuerza serena, la capacidad y la huella valiosa que dejás semana tras semana.'
  },
  'felices-pascuas': {
    saludo: '¡Felices Pascuas!',
    titSufijo: 'en estas Pascuas',
    reflexion:
      'En nuestra casa cada Pascua renueva el encuentro sereno, la mesa compartida y la gratitud por caminar juntos.'
  },
  'feliz-dia-del-trabajador': {
    saludo: '¡Feliz Día del Trabajador!',
    titSufijo: 'en el Día del Trabajador',
    reflexion:
      'Cada Día del Trabajador reconoce el esfuerzo sostenido, el oficio bien hecho y el descanso merecido tras cada semana laboral.'
  },
  'feliz-dia-del-nino': {
    saludo: '¡Feliz Día del Niño!',
    titSufijo: 'en el Día del Niño',
    reflexion:
      'Cada Día del Niño celebra la curiosidad despierta, los juegos sin apuro y la alegría luminosa que llena la casa.'
  },
  'feliz-primavera-mensajes': {
    saludo: '¡Feliz Primavera!',
    titSufijo: 'en esta Primavera',
    reflexion:
      'Cada llegada de la Primavera nos recuerda cuánto impulso renovado y buena energía compartimos semana tras semana.'
  },
  'feliz-halloween-mensajes': {
    saludo: '¡Feliz Halloween!',
    titSufijo: 'en esta noche de Halloween',
    reflexion:
      'Cada noche de Halloween invita a reírnos juntos, compartir disfraces creativos y disfrutar una velada distinta con amigos.'
  },
  'feliz-dia-de-la-familia': {
    saludo: '¡Feliz Día de la Familia!',
    titSufijo: 'en el Día de la Familia',
    reflexion:
      'En nuestra casa cada Día de la Familia nos recuerda cuánto sostén silencioso y cariño firme construimos juntos semana tras semana.'
  }
};

const VOSEO_RE = /\b(tenés|podés|querés|sabés|hacés|decís|venís|sos|buscás|escribís|elegís|enviás|compartís|celebrás|cumplís|regalás|saludás|vos)\b/i;

function repararContaminacion(reg) {
  const cfg = OCASION_POR_CATEGORIA[reg.categoria];
  if (!cfg) return false;
  let changed = false;

  if (/cumplea[ñn]os/i.test(reg.titulo)) {
    const nuevoTit = reg.titulo.replace(/en tu cumplea[ñn]os/gi, cfg.titSufijo).replace(/cumplea[ñn]os/gi, cfg.titSufijo);
    if (nuevoTit !== reg.titulo) {
      reg.titulo = nuevoTit;
      changed = true;
    }
  }

  let txt = String(reg.texto || '');
  const orig = txt;

  if (cfg.doble) {
    txt = txt.replace(
      /Celebrar el cumpleaños por partida doble multiplica por dos[^.\n]*\./gi,
      cfg.doble
    );
  }
  txt = txt.replace(
    /En nuestra casa cada cumpleaños tuyo nos recuerda cuánto sostén silencioso y cariño firme regalás semana tras semana sin esperar reconocimiento\./gi,
    cfg.reflexion
  );
  txt = txt.replace(/¡Muy feliz cumpleaños!/gi, cfg.saludo);
  txt = txt.replace(/¡feliz cumpleaños y por muchos años más juntos!/gi, `${cfg.saludo} Por muchos meses y años más caminando juntos.`);
  txt = txt.replace(/para decirte feliz cumpleaños:/gi, `para celebrar este mes:`);
  txt = txt.replace(
    /Te deseo un cumpleaños tranquilo y feliz, con torta rica,[^.\n]*\./gi,
    'Agradezco de corazón cada charla de aliento, cada café compartido en los desvelos y la confianza con la que me acompañaron hasta llegar a esta graduación.'
  );
  txt = txt.replace(
    /Por muchos cumpleaños más compartiendo charlas sin reloj[^.\n]*\./gi,
    'Por muchos proyectos nuevos compartiendo charlas sin reloj y celebrando cada paso dado con esfuerzo.'
  );
  txt = txt.replace(
    /el mejor regalo de este cumpleaños\./gi,
    'el respaldo más valioso de toda esta etapa académica.'
  );
  txt = txt.replace(/cumpleaños/gi, (m) => (m[0] === 'C' ? 'Celebración' : 'celebración'));

  if (txt !== orig) {
    reg.texto = txt;
    changed = true;
  }
  return changed;
}

function repararVoseo(reg) {
  let txt = String(reg.texto || '');
  if (!VOSEO_RE.test(txt)) return false;
  const orig = txt;
  txt = txt.replace(/\bsos tal cual eres\b/g, 'sos con tu propia luz');
  txt = txt.replace(/\bContigo\b/g, 'Con vos');
  txt = txt.replace(/\bcontigo\b/g, 'con vos');
  if (txt !== orig) {
    reg.texto = txt;
    return true;
  }
  return false;
}

const files = [
  'data/contenido.json',
  ...fs
    .readdirSync('data/categorias')
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => path.join('data/categorias', f))
];

let stats = { filesChanged: 0, contam: 0, voseo: 0, hubs: 0, cliches: 0, titles: 0 };

for (const file of files) {
  const arr = JSON.parse(fs.readFileSync(file, 'utf8'));
  let fileDirty = false;

  for (const r of arr) {
    if (r.tipo === 'hub') {
      if (r.slug === 'feliz-nochebuena' && /\bHoy\b/.test(r.titulo)) {
        r.titulo = 'Feliz Nochebuena: 50 mensajes cálidos para el 24';
        stats.hubs++;
        fileDirty = true;
      }
      if (r.slug === 'feliz-primavera-mensajes' && /\bHoy\b/.test(r.titulo)) {
        r.titulo = 'Feliz Primavera: 50 mensajes luminosos y cercanos';
        stats.hubs++;
        fileDirty = true;
      }
      continue;
    }

    if (r.tipo === 'mensaje') {
      if (repararContaminacion(r)) {
        stats.contam++;
        fileDirty = true;
      }
      if (repararVoseo(r)) {
        stats.voseo++;
        fileDirty = true;
      }
      if (r.slug === 'dijiste-que-este-ano-te-cuidarias-te-acordas' && /\?/.test(r.titulo)) {
        r.titulo = 'Dijiste que este año te cuidarías con la torta';
        stats.titles++;
        fileDirty = true;
      }
      if (r.slug === 'creo-que-fue-el-destino-el-que-nos-junto' && /momentos inolvidables/i.test(r.texto)) {
        r.texto = r.texto.replace(/momentos inolvidables/i, 'charlas largas de sobremesa y viajes nuevos');
        stats.cliches++;
        fileDirty = true;
      }
      if (r.slug === 'creo-que-el-destino-te-puso-en-mi-camino' && /momentos inolvidables/i.test(r.texto)) {
        r.texto = r.texto.replace(/momentos inolvidables/i, 'caminatas sin reloj y risas compartidas');
        stats.cliches++;
        fileDirty = true;
      }
    }
  }

  if (fileDirty) {
    fs.writeFileSync(file, JSON.stringify(arr, null, 2) + '\n', 'utf8');
    stats.filesChanged++;
  }
}

console.log('Reparación Ultra Guía Cósmica completada:', stats);
