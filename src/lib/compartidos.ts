// Utilidades puras para el contador de lo más compartido por red
// (WhatsApp, Instagram, Facebook y Copiar) y respaldo de dedicatorias guardadas.

export const REDES_COMPARTIR = ['whatsapp', 'instagram', 'facebook', 'copiar'] as const;
export type RedCompartir = (typeof REDES_COMPARTIR)[number];
export type FiltroRedCompartir = 'todas' | RedCompartir;

export const COMPARTIDOS_STORAGE_KEY = 'pc_compartidos_v1';

export const ETIQUETAS_RED: Record<RedCompartir, string> = {
  whatsapp: 'WhatsApp',
  instagram: 'Instagram',
  facebook: 'Facebook',
  copiar: 'Copiar'
};

export interface ContadoresRed {
  whatsapp: number;
  instagram: number;
  facebook: number;
  copiar: number;
}

export interface RegistroCompartido {
  slug: string;
  titulo: string;
  url: string;
  emoji: string;
  redes: ContadoresRed;
  total: number;
  ultimo: string;
}

export interface EstadoCompartidos {
  totales: ContadoresRed;
  totalGlobal: number;
  items: Record<string, RegistroCompartido>;
}

export interface MetaCompartido {
  slug: string;
  titulo?: string;
  url?: string;
  emoji?: string;
}

export function crearContadoresRedVacios(): ContadoresRed {
  return { whatsapp: 0, instagram: 0, facebook: 0, copiar: 0 };
}

export function crearEstadoCompartidosVacio(): EstadoCompartidos {
  return {
    totales: crearContadoresRedVacios(),
    totalGlobal: 0,
    items: {}
  };
}

function enteroPositivo(v: unknown): number {
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.floor(n);
}

export function normalizarContadoresRed(entrada: unknown): ContadoresRed {
  const obj = entrada && typeof entrada === 'object' ? (entrada as Record<string, unknown>) : {};
  return {
    whatsapp: enteroPositivo(obj.whatsapp),
    instagram: enteroPositivo(obj.instagram),
    facebook: enteroPositivo(obj.facebook),
    copiar: enteroPositivo(obj.copiar)
  };
}

export function sumarContadoresRed(redes: ContadoresRed): number {
  return redes.whatsapp + redes.instagram + redes.facebook + redes.copiar;
}

export function normalizarEstadoCompartidos(entrada: unknown): EstadoCompartidos {
  if (!entrada || typeof entrada !== 'object') return crearEstadoCompartidosVacio();
  const obj = entrada as Record<string, unknown>;
  const rawItems = obj.items && typeof obj.items === 'object' ? (obj.items as Record<string, unknown>) : {};
  const items: Record<string, RegistroCompartido> = {};
  const totales = crearContadoresRedVacios();

  for (const [clave, valor] of Object.entries(rawItems)) {
    if (!valor || typeof valor !== 'object') continue;
    const item = valor as Record<string, unknown>;
    const slug = String(item.slug || clave || '').trim();
    if (!slug) continue;
    const redes = normalizarContadoresRed(item.redes);
    const total = sumarContadoresRed(redes);
    if (total <= 0) continue;

    items[slug] = {
      slug,
      titulo: String(item.titulo || slug).trim(),
      url: String(item.url || `/${slug}/`).trim(),
      emoji: String(item.emoji || '🎂').trim() || '🎂',
      redes,
      total,
      ultimo: typeof item.ultimo === 'string' ? item.ultimo : ''
    };
    totales.whatsapp += redes.whatsapp;
    totales.instagram += redes.instagram;
    totales.facebook += redes.facebook;
    totales.copiar += redes.copiar;
  }

  return {
    totales,
    totalGlobal: sumarContadoresRed(totales),
    items
  };
}

export function registrarCompartidoEnEstado(
  estado: EstadoCompartidos,
  red: RedCompartir,
  meta: MetaCompartido,
  fechaIso: string = new Date().toISOString()
): EstadoCompartidos {
  const base = normalizarEstadoCompartidos(estado);
  const slug = String(meta.slug || '').trim();
  if (!slug || !REDES_COMPARTIR.includes(red)) return base;

  const prev = base.items[slug];
  const redesPrev = prev ? { ...prev.redes } : crearContadoresRedVacios();
  redesPrev[red] += 1;

  const actualizado: RegistroCompartido = {
    slug,
    titulo: String(meta.titulo || prev?.titulo || slug).trim(),
    url: String(meta.url || prev?.url || `/${slug}/`).trim(),
    emoji: String(meta.emoji || prev?.emoji || '🎂').trim() || '🎂',
    redes: redesPrev,
    total: sumarContadoresRed(redesPrev),
    ultimo: fechaIso
  };

  const items = { ...base.items, [slug]: actualizado };
  const totales = {
    ...base.totales,
    [red]: base.totales[red] + 1
  };

  return {
    totales,
    totalGlobal: sumarContadoresRed(totales),
    items
  };
}

export function rankearMasCompartidos(
  estado: EstadoCompartidos,
  filtro: FiltroRedCompartir = 'todas',
  limite: number = 10
): RegistroCompartido[] {
  const normalizado = normalizarEstadoCompartidos(estado);
  const lista = Object.values(normalizado.items).filter((item) =>
    filtro === 'todas' ? item.total > 0 : item.redes[filtro] > 0
  );

  lista.sort((a, b) => {
    const scoreA = filtro === 'todas' ? a.total : a.redes[filtro];
    const scoreB = filtro === 'todas' ? b.total : b.redes[filtro];
    if (scoreB !== scoreA) return scoreB - scoreA;
    if (b.total !== a.total) return b.total - a.total;
    return b.ultimo.localeCompare(a.ultimo);
  });

  return lista.slice(0, Math.max(1, limite));
}

export function resumirRedesItem(redes: ContadoresRed): string {
  const partes: string[] = [];
  for (const red of REDES_COMPARTIR) {
    if (redes[red] > 0) {
      partes.push(`${ETIQUETAS_RED[red]} ${redes[red]}`);
    }
  }
  return partes.join(' · ');
}

export function formatearRespaldoFavoritas(
  items: Array<{ titulo?: string; texto?: string; slug: string }>
): string {
  if (!Array.isArray(items) || items.length === 0) return '';
  const encabezado = 'Mis dedicatorias guardadas — ParaCumpleanos (https://paracumpleanos.com)\n';
  const cuerpo = items
    .map((item, idx) => {
      const tit = String(item.titulo || item.slug).trim();
      const txt = String(item.texto || '').trim();
      const enlace = `https://paracumpleanos.com/${item.slug}/`;
      return `${idx + 1}. ${tit}\n${txt ? txt + '\n' : ''}${enlace}`;
    })
    .join('\n\n---\n\n');
  return `${encabezado}\n${cuerpo}`;
}
