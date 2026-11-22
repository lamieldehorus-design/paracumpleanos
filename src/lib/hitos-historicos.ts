import { HITOS_AMERICA } from '../data/hitos/america.ts';
import { HITOS_EUROPA } from '../data/hitos/europa.ts';
import { HITOS_AFRICA } from '../data/hitos/africa.ts';
import { HITOS_ASIA } from '../data/hitos/asia.ts';
import { HITOS_OCEANIA } from '../data/hitos/oceania.ts';
import type {
  ContinenteHito,
  HitoHistoricoPais,
  PaisHitosHistoricos,
  TipoHitoHistorico
} from '../data/hitos-types.ts';
import { NOMBRES_MESES } from './horoscopo.ts';

export type { ContinenteHito, HitoHistoricoPais, PaisHitosHistoricos, TipoHitoHistorico };

export const CONTINENTES_HITOS: ContinenteHito[] = [
  'América',
  'Europa',
  'África',
  'Asia',
  'Oceanía'
];

export const ETIQUETAS_TIPO_HITO: Record<TipoHitoHistorico, string> = {
  independencia: 'Día de Independencia',
  constitucion: 'Constitución y Estado',
  unidad: 'Unidad Nacional',
  revolucion: 'Revolución y República',
  liberacion: 'Liberación y Paz',
  cultura: 'Identidad y Cultura Nacional'
};

export interface HitoConPais {
  paisSlug: string;
  paisNombre: string;
  bandera: string;
  continente: ContinenteHito;
  capital: string;
  hito: HitoHistoricoPais;
}

export const TODOS_PAISES_HITOS: PaisHitosHistoricos[] = [
  ...HITOS_AMERICA,
  ...HITOS_EUROPA,
  ...HITOS_AFRICA,
  ...HITOS_ASIA,
  ...HITOS_OCEANIA
].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));

const PAISES_POR_SLUG = new Map<string, PaisHitosHistoricos>(
  TODOS_PAISES_HITOS.map((p) => [p.slug, p])
);

export function paisPorSlug(slug: string): PaisHitosHistoricos | undefined {
  return PAISES_POR_SLUG.get(slug);
}

export function paisesPorContinente(continente: ContinenteHito): PaisHitosHistoricos[] {
  return TODOS_PAISES_HITOS.filter((p) => p.continente === continente);
}

export function paisesVecinos(pais: PaisHitosHistoricos, max: number = 6): PaisHitosHistoricos[] {
  const mismoContinente = TODOS_PAISES_HITOS.filter(
    (p) => p.continente === pais.continente && p.slug !== pais.slug
  );
  const idx = mismoContinente.findIndex((p) => p.nombre.localeCompare(pais.nombre, 'es') > 0);
  const start = idx === -1 ? 0 : Math.max(0, idx - Math.floor(max / 2));
  const out: PaisHitosHistoricos[] = [];
  for (let i = 0; i < mismoContinente.length && out.length < max; i++) {
    out.push(mismoContinente[(start + i) % mismoContinente.length]);
  }
  return out;
}

export function todosHitosAplanados(): HitoConPais[] {
  const out: HitoConPais[] = [];
  for (const p of TODOS_PAISES_HITOS) {
    for (const h of p.hitos) {
      out.push({
        paisSlug: p.slug,
        paisNombre: p.nombre,
        bandera: p.bandera,
        continente: p.continente,
        capital: p.capital,
        hito: h
      });
    }
  }
  out.sort((a, b) => a.hito.mes - b.hito.mes || a.hito.dia - b.hito.dia || a.paisNombre.localeCompare(b.paisNombre, 'es'));
  return out;
}

export function hitosPorFecha(mes: number, dia: number): HitoConPais[] {
  return todosHitosAplanados().filter((item) => item.hito.mes === mes && item.hito.dia === dia);
}

export function hitosPorMes(mes: number): HitoConPais[] {
  return todosHitosAplanados().filter((item) => item.hito.mes === mes);
}

export function formatearFechaSinAnio(mes: number, dia: number): string {
  const nombreMes = NOMBRES_MESES[mes - 1] || 'enero';
  return `${dia} de ${nombreMes}`;
}
