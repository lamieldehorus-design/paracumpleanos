export interface RedireccionLegada {
  slugOrigen: string;
  destinoSlug: string;
  titulo: string;
  alternativoSlug?: string;
  alternativoTexto?: string;
}

export const REDIRECCIONES_POSTS: RedireccionLegada[] = [
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-papa',
    destinoSlug: 'feliz-cumpleanos-papa',
    titulo: 'Frases y felicitaciones de cumpleaños para mi papá',
    alternativoSlug: 'cumpleanos-para-un-papa',
    alternativoTexto: 'Ver también mensajes para un papá'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-abuelos',
    destinoSlug: 'feliz-cumpleanos-abuelo',
    titulo: 'Frases de cumpleaños para abuelos: abuelo y abuela',
    alternativoSlug: 'feliz-cumpleanos-abuela',
    alternativoTexto: 'Ir a frases de cumpleaños para mi abuela'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-hijo',
    destinoSlug: 'feliz-cumpleanos-hijo',
    titulo: 'Frases de cumpleaños para mi hijo'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-mama',
    destinoSlug: 'feliz-cumpleanos-mama',
    titulo: 'Frases de cumpleaños para mi mamá'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-hija',
    destinoSlug: 'feliz-cumpleanos-hija',
    titulo: 'Frases de cumpleaños para mi hija'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-una-amiga',
    destinoSlug: 'feliz-cumpleanos-amiga',
    titulo: 'Frases de cumpleaños para una amiga'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-amiga',
    destinoSlug: 'feliz-cumpleanos-amiga',
    titulo: 'Frases de cumpleaños para mi amiga'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-un-amigo',
    destinoSlug: 'feliz-cumpleanos-amigo',
    titulo: 'Frases de cumpleaños para un amigo'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-hermana',
    destinoSlug: 'feliz-cumpleanos-hermana',
    titulo: 'Frases de cumpleaños para mi hermana'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-hermano',
    destinoSlug: 'feliz-cumpleanos-para-un-hermano',
    titulo: 'Frases de cumpleaños para mi hermano'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-novia',
    destinoSlug: 'feliz-cumpleanos-novia',
    titulo: 'Frases de cumpleaños para mi novia'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-novio',
    destinoSlug: 'feliz-cumpleanos-novio',
    titulo: 'Frases de cumpleaños para mi novio'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-esposa',
    destinoSlug: 'feliz-cumpleanos-para-mi-esposa',
    titulo: 'Frases de cumpleaños para mi esposa'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-esposo',
    destinoSlug: 'feliz-cumpleanos-para-mi-esposo',
    titulo: 'Frases de cumpleaños para mi esposo'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-tia',
    destinoSlug: 'feliz-cumpleanos-para-una-tia',
    titulo: 'Frases de cumpleaños para mi tía'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-tio',
    destinoSlug: 'feliz-cumpleanos-para-mi-tio',
    titulo: 'Frases de cumpleaños para mi tío'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-prima',
    destinoSlug: 'feliz-cumpleanos-prima',
    titulo: 'Frases de cumpleaños para mi prima'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-primo',
    destinoSlug: 'feliz-cumpleanos-primo',
    titulo: 'Frases de cumpleaños para mi primo'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-un-primo',
    destinoSlug: 'feliz-cumpleanos-primo',
    titulo: 'Frases de cumpleaños para un primo',
    alternativoSlug: 'frases-para-un-primo',
    alternativoTexto: 'Ver frases breves para un primo'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-sobrina',
    destinoSlug: 'feliz-cumpleanos-para-una-sobrina',
    titulo: 'Frases de cumpleaños para mi sobrina'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-sobrino',
    destinoSlug: 'feliz-cumpleanos-para-un-sobrino',
    titulo: 'Frases de cumpleaños para mi sobrino'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-abuela',
    destinoSlug: 'feliz-cumpleanos-abuela',
    titulo: 'Frases de cumpleaños para mi abuela'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-abuelo',
    destinoSlug: 'feliz-cumpleanos-abuelo',
    titulo: 'Frases de cumpleaños para mi abuelo'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-jefe',
    destinoSlug: 'feliz-cumpleanos-jefe',
    titulo: 'Frases de cumpleaños para mi jefe'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-mi-amor',
    destinoSlug: 'feliz-cumpleanos-mi-amor',
    titulo: 'Frases de cumpleaños para mi amor'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-cristianas',
    destinoSlug: 'feliz-cumpleanos-cristiano',
    titulo: 'Frases de cumpleaños cristianas'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-cortas',
    destinoSlug: 'frases-cortas-las-mas-bonitas',
    titulo: 'Frases cortas de cumpleaños'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-graciosas',
    destinoSlug: 'feliz-cumpleanos-gracioso',
    titulo: 'Frases graciosas de cumpleaños'
  }
];

export const REDIRECCIONES_RAIZ_LEGADAS: RedireccionLegada[] = [
  {
    slugOrigen: 'mensajes-de-cumpleanos-para-un-primo',
    destinoSlug: 'feliz-cumpleanos-primo',
    titulo: 'Mensajes de cumpleaños para un primo',
    alternativoSlug: 'frases-para-un-primo',
    alternativoTexto: 'Ver también frases cortas para un primo'
  },
  {
    slugOrigen: 'mensajes-de-cumpleanos-para-papa',
    destinoSlug: 'feliz-cumpleanos-papa',
    titulo: 'Mensajes de cumpleaños para papá',
    alternativoSlug: 'cumpleanos-para-un-papa',
    alternativoTexto: 'Ver también dedicatorias para un papá'
  },
  {
    slugOrigen: 'frases-de-cumpleanos-para-abuelos',
    destinoSlug: 'feliz-cumpleanos-abuelo',
    titulo: 'Frases de cumpleaños para abuelos',
    alternativoSlug: 'feliz-cumpleanos-abuela',
    alternativoTexto: 'Ir a frases de cumpleaños para mi abuela'
  },
  {
    slugOrigen: 'felices-20-anos-para-mi',
    destinoSlug: 'feliz-cumpleanos-20-anos-para-mi',
    titulo: 'Felices 20 años para mí y mensajes de 20 años',
    alternativoSlug: 'feliz-cumpleanos-20-anos',
    alternativoTexto: 'Ver mensajes de 20 años para dedicar a otra persona'
  },
  {
    slugOrigen: 'dedicatoria-para-mi-hija-de-5-anos',
    destinoSlug: 'frases-para-mi-hija-de-5-anos',
    titulo: 'Dedicatoria para mi hija de 5 años',
    alternativoSlug: 'feliz-cumpleanos-hija',
    alternativoTexto: 'Ver todas las dedicatorias para mi hija'
  }
];

const STOPWORDS_SLUG = new Set([
  'posts', 'post', 'frases', 'mensajes', 'mensaje', 'frase', 'dedicatorias', 'dedicatoria',
  'cumpleanos', 'cumple', 'feliz', 'felices', 'para', 'de', 'del', 'la', 'el', 'los', 'las',
  'un', 'una', 'mi', 'tu', 'su', 'que', 'con', 'por', 'en', 'y', 'a', 'al'
]);

function normTokens(texto: string): string[] {
  return String(texto || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 2 && !STOPWORDS_SLUG.has(t));
}

export function sugerirHubParaRutaLegada(
  ruta: string,
  hubsDisponibles: { slug: string; keyword?: string; destinatario?: string }[]
): string | null {
  const limpio = String(ruta || '')
    .toLowerCase()
    .replace(/^https?:\/\/[^/]+/, '')
    .replace(/^\/+|\/+$/g, '')
    .replace(/\.(html?|php)$/i, '');

  if (!limpio) return null;

  const sinPrefijo = limpio.replace(/^posts\//, '');
  for (const r of REDIRECCIONES_POSTS) {
    if (r.slugOrigen === sinPrefijo) return r.destinoSlug;
  }
  for (const r of REDIRECCIONES_RAIZ_LEGADAS) {
    if (r.slugOrigen === sinPrefijo) return r.destinoSlug;
  }

  const tokens = normTokens(sinPrefijo);
  if (!tokens.length) return null;

  let mejorSlug: string | null = null;
  let mejorPuntaje = 0;

  for (const hub of hubsDisponibles) {
    const hubTokens = new Set(normTokens(`${hub.slug} ${hub.keyword || ''} ${hub.destinatario || ''}`));
    let aciertos = 0;
    for (const t of tokens) {
      if (hubTokens.has(t)) aciertos += 2;
      else if (t === 'abuelos' && (hubTokens.has('abuelo') || hubTokens.has('abuela'))) aciertos += 2;
    }
    if (aciertos > mejorPuntaje) {
      mejorPuntaje = aciertos;
      mejorSlug = hub.slug;
    }
  }

  return mejorPuntaje >= 2 ? mejorSlug : null;
}
