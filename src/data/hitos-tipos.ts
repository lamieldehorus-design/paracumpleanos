export type ContinenteId = 'america' | 'europa' | 'asia' | 'africa' | 'oceania';

export type TipoHito =
  | 'independencia'
  | 'dia-nacional'
  | 'constitucion'
  | 'unificacion'
  | 'revolucion'
  | 'republica'
  | 'fundacion'
  | 'efemeride-mundial';

export interface HitoEvento {
  dia: number;
  mes: number;
  anioHistorico: number;
  titulo: string;
  tipo: TipoHito;
  resumen: string;
  contextoHistorico: string;
  comoSeFesteja: string;
  saludoSugerido: string;
}

export interface PaisHito {
  slug: string;
  nombre: string;
  capital: string;
  continente: ContinenteId;
  subregion: string;
  bandera: string;
  hitoPrincipal: HitoEvento;
  hitosSecundarios?: HitoEvento[];
  datoCurioso: string;
}

export interface HitoMundialGlobal {
  id: string;
  dia: number;
  mes: number;
  anioHistorico: number;
  titulo: string;
  ambito: string;
  icono: string;
  resumen: string;
  explicacion: string;
}

export interface ContinenteMeta {
  id: ContinenteId;
  nombre: string;
  descripcion: string;
  icono: string;
}

export const CONTINENTES_META: ContinenteMeta[] = [
  {
    id: 'america',
    nombre: 'América',
    descripcion: '35 naciones del continente americano con sus declaraciones de independencia, revoluciones y días patrios.',
    icono: '🌎'
  },
  {
    id: 'europa',
    nombre: 'Europa',
    descripcion: '44 estados soberanos europeos con constituciones históricas, unificaciones, repúblicas y fiestas nacionales.',
    icono: '🌍'
  },
  {
    id: 'asia',
    nombre: 'Asia',
    descripcion: '48 países asiáticos con fundaciones milenarias, independencias modernas y efemérides nacionales.',
    icono: '🌏'
  },
  {
    id: 'africa',
    nombre: 'África',
    descripcion: '54 naciones africanas con hitos de emancipación, soberanía y días nacionales llenos de identidad cultural.',
    icono: '🌍'
  },
  {
    id: 'oceania',
    nombre: 'Oceanía',
    descripcion: '14 países de Oceanía con sus días de independencia, tratados fundacionales y celebraciones nacionales.',
    icono: '🌏'
  }
];

export const ETIQUETAS_TIPO_HITO: Record<TipoHito, string> = {
  independencia: 'Día de la Independencia',
  'dia-nacional': 'Día Nacional',
  constitucion: 'Día de la Constitución',
  unificacion: 'Día de la Unificación',
  revolucion: 'Revolución Histórica',
  republica: 'Día de la República',
  fundacion: 'Fundación Histórica',
  'efemeride-mundial': 'Efeméride Mundial'
};

export const MESES_NOMBRES_HITOS = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre'
] as const;

export function formatearFechaHitoSinAnio(dia: number, mes: number): string {
  const nombreMes = MESES_NOMBRES_HITOS[mes - 1] ?? 'enero';
  return `${dia} de ${nombreMes}`;
}

export function formatearAnioHistorico(anio: number): string {
  if (anio < 0) return `${Math.abs(anio)} a. C.`;
  return String(anio);
}
