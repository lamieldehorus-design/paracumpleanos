// Utilidades puras para el contador público de lo más compartido por red
// (WhatsApp, Instagram, Facebook y Copiar), historial cronológico de cada compartido
// y respaldo de dedicatorias guardadas.

export const REDES_COMPARTIR = ['whatsapp', 'instagram', 'facebook', 'copiar'] as const;
export type RedCompartir = (typeof REDES_COMPARTIR)[number];
export type FiltroRedCompartir = 'todas' | RedCompartir;

export const COMPARTIDOS_STORAGE_KEY = 'pc_compartidos_v1';
export const ARCHIVO_COMPARTIDOS_PUBLICO = '/compartidos-historial.json';
export const MAX_HISTORIAL_COMPARTIDOS = 500;

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

export interface EventoCompartido {
  id: string;
  red: RedCompartir;
  slug: string;
  titulo: string;
  url: string;
  emoji: string;
  pagina: string;
  fecha: string;
}

export interface EstadoCompartidos {
  version: number;
  actualizado: string;
  totales: ContadoresRed;
  totalGlobal: number;
  items: Record<string, RegistroCompartido>;
  historial: EventoCompartido[];
}

export interface MetaCompartido {
  slug: string;
  titulo?: string;
  url?: string;
  emoji?: string;
  pagina?: string;
  id?: string;
}

export function crearContadoresRedVacios(): ContadoresRed {
  return { whatsapp: 0, instagram: 0, facebook: 0, copiar: 0 };
}

export function crearEstadoCompartidosVacio(): EstadoCompartidos {
  return {
    version: 1,
    actualizado: '',
    totales: crearContadoresRedVacios(),
    totalGlobal: 0,
    items: {},
    historial: []
  };
}

function enteroPositivo(v: unknown): number {
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.floor(n);
}

function esRedValida(v: unknown): v is RedCompartir {
  return typeof v === 'string' && (REDES_COMPARTIR as readonly string[]).includes(v);
}

function limpiarTexto(v: unknown, maxLen: number, fallback = ''): string {
  const s = String(v ?? '').replace(/\s+/g, ' ').trim();
  if (!s) return fallback;
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

function limpiarUrlRelativa(v: unknown, slug: string): string {
  const raw = String(v ?? '').trim();
  if (raw.startsWith('/') && !raw.startsWith('//')) {
    return raw.slice(0, 220);
  }
  const slugLimpio = slug.replace(/^\/+|\/+$/g, '');
  return slugLimpio ? `/${slugLimpio}/` : '/';
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

export function normalizarHistorialCompartidos(entrada: unknown): EventoCompartido[] {
  if (!Array.isArray(entrada)) return [];
  const vistos = new Set<string>();
  const lista: EventoCompartido[] = [];

  for (let i = 0; i < entrada.length; i++) {
    const raw = entrada[i];
    if (!raw || typeof raw !== 'object') continue;
    const obj = raw as Record<string, unknown>;
    if (!esRedValida(obj.red)) continue;
    const slug = limpiarTexto(obj.slug, 140);
    if (!slug) continue;
    const fecha = limpiarTexto(obj.fecha, 40);
    const id = limpiarTexto(obj.id, 80, `${slug}_${obj.red}_${fecha || i}`);
    if (vistos.has(id)) continue;
    vistos.add(id);

    lista.push({
      id,
      red: obj.red,
      slug,
      titulo: limpiarTexto(obj.titulo, 180, slug),
      url: limpiarUrlRelativa(obj.url, slug),
      emoji: limpiarTexto(obj.emoji, 12, '🎂'),
      pagina: limpiarUrlRelativa(obj.pagina, slug),
      fecha
    });
  }

  lista.sort((a, b) => b.fecha.localeCompare(a.fecha));
  return lista.slice(0, MAX_HISTORIAL_COMPARTIDOS);
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
    const slug = limpiarTexto(item.slug || clave, 140);
    if (!slug) continue;
    const redes = normalizarContadoresRed(item.redes);
    const total = sumarContadoresRed(redes);
    if (total <= 0) continue;

    items[slug] = {
      slug,
      titulo: limpiarTexto(item.titulo, 180, slug),
      url: limpiarUrlRelativa(item.url, slug),
      emoji: limpiarTexto(item.emoji, 12, '🎂'),
      redes,
      total,
      ultimo: limpiarTexto(item.ultimo, 40)
    };
    totales.whatsapp += redes.whatsapp;
    totales.instagram += redes.instagram;
    totales.facebook += redes.facebook;
    totales.copiar += redes.copiar;
  }

  const historial = normalizarHistorialCompartidos(obj.historial);
  const actualizado =
    limpiarTexto(obj.actualizado, 40) ||
    (historial[0] ? historial[0].fecha : '');

  return {
    version: 1,
    actualizado,
    totales,
    totalGlobal: sumarContadoresRed(totales),
    items,
    historial
  };
}

export function registrarCompartidoEnEstado(
  estado: EstadoCompartidos,
  red: RedCompartir,
  meta: MetaCompartido,
  fechaIso: string = new Date().toISOString(),
  idEvento?: string
): EstadoCompartidos {
  const base = normalizarEstadoCompartidos(estado);
  const slug = limpiarTexto(meta.slug, 140);
  if (!slug || !REDES_COMPARTIR.includes(red)) return base;

  const id = limpiarTexto(
    idEvento || meta.id,
    80,
    `sh_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`
  );
  if (base.historial.some((ev) => ev.id === id)) {
    return base;
  }

  const prev = base.items[slug];
  const redesPrev = prev ? { ...prev.redes } : crearContadoresRedVacios();
  redesPrev[red] += 1;

  const titulo = limpiarTexto(meta.titulo || prev?.titulo, 180, slug);
  const url = limpiarUrlRelativa(meta.url || prev?.url, slug);
  const emoji = limpiarTexto(meta.emoji || prev?.emoji, 12, '🎂');
  const pagina = limpiarUrlRelativa(meta.pagina || url, slug);

  const actualizado: RegistroCompartido = {
    slug,
    titulo,
    url,
    emoji,
    redes: redesPrev,
    total: sumarContadoresRed(redesPrev),
    ultimo: fechaIso
  };

  const items = { ...base.items, [slug]: actualizado };
  const totales = {
    ...base.totales,
    [red]: base.totales[red] + 1
  };

  const nuevoEvento: EventoCompartido = {
    id,
    red,
    slug,
    titulo,
    url,
    emoji,
    pagina,
    fecha: fechaIso
  };

  const historial = [nuevoEvento, ...base.historial].slice(0, MAX_HISTORIAL_COMPARTIDOS);

  return {
    version: 1,
    actualizado: fechaIso,
    totales,
    totalGlobal: sumarContadoresRed(totales),
    items,
    historial
  };
}

export function fusionarEstadosCompartidos(
  publico: EstadoCompartidos,
  local: EstadoCompartidos
): EstadoCompartidos {
  let combinado = normalizarEstadoCompartidos(publico);
  const normLocal = normalizarEstadoCompartidos(local);
  const idsPublicos = new Set(combinado.historial.map((ev) => ev.id));

  // Agregar del más viejo al más nuevo cualquier evento local aún no reflejado en el archivo público
  const pendientes = normLocal.historial
    .filter((ev) => !idsPublicos.has(ev.id))
    .reverse();

  for (const ev of pendientes) {
    combinado = registrarCompartidoEnEstado(
      combinado,
      ev.red,
      {
        slug: ev.slug,
        titulo: ev.titulo,
        url: ev.url,
        emoji: ev.emoji,
        pagina: ev.pagina,
        id: ev.id
      },
      ev.fecha,
      ev.id
    );
  }

  return combinado;
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

export function filtrarHistorialCompartidos(
  estado: EstadoCompartidos,
  filtro: FiltroRedCompartir = 'todas',
  limite: number = 25
): EventoCompartido[] {
  const normalizado = normalizarEstadoCompartidos(estado);
  const lista =
    filtro === 'todas'
      ? normalizado.historial
      : normalizado.historial.filter((ev) => ev.red === filtro);
  return lista.slice(0, Math.max(1, limite));
}

export function formatearFechaHistorial(fechaIso: string): string {
  if (!fechaIso) return 'Recién';
  const d = new Date(fechaIso);
  if (Number.isNaN(d.getTime())) return fechaIso.slice(0, 16).replace('T', ' ');
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, '0');
  const mi = String(d.getMinutes()).padStart(2, '0');
  return `${dd}/${mm}/${yyyy} · ${hh}:${mi}`;
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
