import {
  hitosGlobalesPorDiaMes,
  hitosPaisesPorDiaMes,
  MESES_NOMBRES_HITOS,
  type HitoMundialGlobal,
  type HitoPaisEnFecha
} from '../data/hitos-historicos.ts';
import { resolverSignoPorDiaMes, type SignoZodiaco } from './horoscopo.ts';

export interface HubCalendarioRef {
  slug: string;
  titulo: string;
}

export interface MensajeCalendarioRef {
  slug: string;
  titulo: string;
  texto: string;
}

export interface FechaEspecialCalendario {
  slug: string;
  titulo: string;
  emoji: string;
  notaFecha: string;
  mes: number;
  dia?: number; // undefined cuando es fecha móvil dentro del mes (ej. Pascuas, Día de la Madre)
  esMovil?: boolean;
}

export const DIAS_POR_MES_EVERGREEN: readonly number[] = [
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

export const SLUGS_MESES: readonly string[] = [
  'cumpleanos-en-enero',
  'cumpleanos-en-febrero',
  'cumpleanos-en-marzo',
  'cumpleanos-en-abril',
  'cumpleanos-en-mayo',
  'cumpleanos-en-junio',
  'cumpleanos-en-julio',
  'cumpleanos-en-agosto',
  'cumpleanos-en-septiembre',
  'cumpleanos-en-octubre',
  'cumpleanos-en-noviembre',
  'cumpleanos-en-diciembre'
];

export const FECHAS_ESPECIALES_SITIO: FechaEspecialCalendario[] = [
  {
    slug: 'feliz-ano-nuevo-familia',
    titulo: 'Feliz Año Nuevo en familia',
    emoji: '🥂',
    notaFecha: '1 de enero',
    mes: 1,
    dia: 1
  },
  {
    slug: 'feliz-dia-de-reyes',
    titulo: 'Feliz Día de Reyes',
    emoji: '👑',
    notaFecha: '6 de enero',
    mes: 1,
    dia: 6
  },
  {
    slug: 'feliz-san-valentin',
    titulo: 'Día de San Valentín',
    emoji: '💌',
    notaFecha: '14 de febrero',
    mes: 2,
    dia: 14
  },
  {
    slug: 'feliz-dia-de-la-mujer',
    titulo: 'Día Internacional de la Mujer',
    emoji: '💜',
    notaFecha: '8 de marzo',
    mes: 3,
    dia: 8
  },
  {
    slug: 'felices-pascuas',
    titulo: 'Felices Pascuas',
    emoji: '🕊️',
    notaFecha: 'Celebración móvil (marzo / abril)',
    mes: 4,
    esMovil: true
  },
  {
    slug: 'feliz-dia-del-trabajador',
    titulo: 'Día Internacional del Trabajador',
    emoji: '🛠️',
    notaFecha: '1 de mayo',
    mes: 5,
    dia: 1
  },
  {
    slug: 'feliz-dia-de-la-madre',
    titulo: 'Día de la Madre (mayo en gran parte del mundo)',
    emoji: '💐',
    notaFecha: 'Mayo (10 de mayo / 2.º domingo)',
    mes: 5,
    dia: 10
  },
  {
    slug: 'feliz-dia-de-la-familia',
    titulo: 'Día Internacional de la Familia',
    emoji: '🏡',
    notaFecha: '15 de mayo',
    mes: 5,
    dia: 15
  },
  {
    slug: 'feliz-dia-del-padre',
    titulo: 'Día del Padre',
    emoji: '💙',
    notaFecha: 'Tercer domingo de junio (referencia 21 de junio)',
    mes: 6,
    esMovil: true
  },
  {
    slug: 'feliz-dia-del-amigo',
    titulo: 'Día del Amigo',
    emoji: '🤝',
    notaFecha: '20 de julio (Cono Sur) y 30 de julio (ONU)',
    mes: 7,
    dia: 20
  },
  {
    slug: 'feliz-dia-de-los-abuelos',
    titulo: 'Día de los Abuelos',
    emoji: '🌿',
    notaFecha: '26 de julio',
    mes: 7,
    dia: 26
  },
  {
    slug: 'feliz-dia-del-nino',
    titulo: 'Día del Niño / Día de las Infancias',
    emoji: '🎈',
    notaFecha: 'Agosto (referencia 3.er domingo; 30 de abril en México)',
    mes: 8,
    esMovil: true
  },
  {
    slug: 'feliz-dia-del-maestro',
    titulo: 'Día del Maestro',
    emoji: '📚',
    notaFecha: '11 de septiembre (Argentina) / 5 de octubre (UNESCO)',
    mes: 9,
    dia: 11
  },
  {
    slug: 'feliz-primavera-mensajes',
    titulo: 'Día de la Primavera',
    emoji: '🌸',
    notaFecha: '21 de septiembre (Sur) / 21 de marzo (Norte)',
    mes: 9,
    dia: 21
  },
  {
    slug: 'feliz-dia-de-la-madre',
    titulo: 'Día de la Madre (Argentina)',
    emoji: '💐',
    notaFecha: 'Tercer domingo de octubre en Argentina',
    mes: 10,
    esMovil: true
  },
  {
    slug: 'feliz-halloween-mensajes',
    titulo: 'Halloween / Noche de Brujas',
    emoji: '🎃',
    notaFecha: '31 de octubre',
    mes: 10,
    dia: 31
  },
  {
    slug: 'feliz-nochebuena',
    titulo: 'Nochebuena',
    emoji: '🕯️',
    notaFecha: '24 de diciembre',
    mes: 12,
    dia: 24
  },
  {
    slug: 'feliz-navidad-en-familia',
    titulo: 'Navidad en familia',
    emoji: '🎄',
    notaFecha: '25 de diciembre',
    mes: 12,
    dia: 25
  }
];

export interface ResumenFechaSinAnio {
  mes: number;
  dia: number;
  etiquetaSinAnio: string;
  nombreMes: string;
  signo: SignoZodiaco | undefined;
  hubMes: HubCalendarioRef | undefined;
  fechasEspecialesExactas: FechaEspecialCalendario[];
  fechasEspecialesDelMes: FechaEspecialCalendario[];
  hitosPaises: HitoPaisEnFecha[];
  hitosGlobales: HitoMundialGlobal[];
  motivacionDelDia: MensajeCalendarioRef | undefined;
}

export function validarMesDiaSinAnio(mes: number, dia: number): { mes: number; dia: number } {
  const m = Number.isFinite(mes) ? Math.min(12, Math.max(1, Math.trunc(mes))) : 1;
  const maxDia = DIAS_POR_MES_EVERGREEN[m - 1] ?? 31;
  const d = Number.isFinite(dia) ? Math.min(maxDia, Math.max(1, Math.trunc(dia))) : 1;
  return { mes: m, dia: d };
}

export function indiceDiaDelAnioSinAnio(mes: number, dia: number): number {
  let total = 0;
  for (let i = 0; i < mes - 1; i++) {
    total += DIAS_POR_MES_EVERGREEN[i] ?? 30;
  }
  return total + dia;
}

export function motivacionPorMesDia(
  mes: number,
  dia: number,
  mensajesMotivacion: MensajeCalendarioRef[] = []
): MensajeCalendarioRef | undefined {
  if (!mensajesMotivacion.length) return undefined;
  const idx = (indiceDiaDelAnioSinAnio(mes, dia) - 1) % mensajesMotivacion.length;
  return mensajesMotivacion[idx];
}

export function obtenerResumenFechaSinAnio(
  mesInput: number,
  diaInput: number,
  hubsPorSlug?: Map<string, HubCalendarioRef>,
  mensajesMotivacion: MensajeCalendarioRef[] = []
): ResumenFechaSinAnio {
  const { mes, dia } = validarMesDiaSinAnio(mesInput, diaInput);
  const nombreMes = MESES_NOMBRES_HITOS[mes - 1] ?? 'enero';
  const etiquetaSinAnio = `${dia} de ${nombreMes}`;
  const slugMes = SLUGS_MESES[mes - 1];
  const hubMes = slugMes ? hubsPorSlug?.get(slugMes) : undefined;
  const signo = resolverSignoPorDiaMes(mes, dia);

  const fechasEspecialesExactas = FECHAS_ESPECIALES_SITIO.filter(
    (f) => f.mes === mes && f.dia === dia
  );
  // 21 de marzo también corresponde al inicio de primavera en el hemisferio norte
  if (mes === 3 && dia === 21) {
    fechasEspecialesExactas.push({
      slug: 'feliz-primavera-mensajes',
      titulo: 'Inicio de la Primavera (Hemisferio Norte)',
      emoji: '🌸',
      notaFecha: '21 de marzo',
      mes: 3,
      dia: 21
    });
  }
  // 30 de julio: Día Internacional de la Amistad ONU
  if (mes === 7 && dia === 30) {
    fechasEspecialesExactas.push({
      slug: 'feliz-dia-del-amigo',
      titulo: 'Día Internacional de la Amistad (ONU)',
      emoji: '🤝',
      notaFecha: '30 de julio',
      mes: 7,
      dia: 30
    });
  }
  // 30 de abril: Día del Niño en México
  if (mes === 4 && dia === 30) {
    fechasEspecialesExactas.push({
      slug: 'feliz-dia-del-nino',
      titulo: 'Día del Niño (México)',
      emoji: '🎈',
      notaFecha: '30 de abril',
      mes: 4,
      dia: 30
    });
  }

  const fechasEspecialesDelMes = FECHAS_ESPECIALES_SITIO.filter(
    (f) => f.mes === mes && f.dia !== dia
  );

  return {
    mes,
    dia,
    etiquetaSinAnio,
    nombreMes,
    signo,
    hubMes,
    fechasEspecialesExactas,
    fechasEspecialesDelMes,
    hitosPaises: hitosPaisesPorDiaMes(mes, dia),
    hitosGlobales: hitosGlobalesPorDiaMes(mes, dia),
    motivacionDelDia: motivacionPorMesDia(mes, dia, mensajesMotivacion)
  };
}

export interface DiaCalendarioCompacto {
  mes: number;
  dia: number;
  etiqueta: string;
  signoSlug: string;
  signoNombre: string;
  signoSimbolo: string;
  hubMesSlug: string;
  hubMesTitulo: string;
  hitosPaises: {
    paisSlug: string;
    paisNombre: string;
    bandera: string;
    titulo: string;
    anio: number;
    resumen: string;
    comoSeFesteja: string;
    saludo: string;
  }[];
  hitosGlobales: {
    titulo: string;
    ambito: string;
    icono: string;
    anio: number;
    resumen: string;
    explicacion: string;
  }[];
  fechasEspecialesExactas: {
    slug: string;
    titulo: string;
    emoji: string;
    notaFecha: string;
  }[];
  fechasEspecialesDelMes: {
    slug: string;
    titulo: string;
    emoji: string;
    notaFecha: string;
  }[];
  motivacion: {
    slug: string;
    titulo: string;
    extracto: string;
  } | null;
}

export function generarIndiceCalendarioAnualSinAnio(
  hubsPorSlug?: Map<string, HubCalendarioRef>,
  mensajesMotivacion: MensajeCalendarioRef[] = []
): Record<string, DiaCalendarioCompacto> {
  const indice: Record<string, DiaCalendarioCompacto> = {};
  for (let mes = 1; mes <= 12; mes++) {
    const maxDia = DIAS_POR_MES_EVERGREEN[mes - 1] ?? 31;
    for (let dia = 1; dia <= maxDia; dia++) {
      const r = obtenerResumenFechaSinAnio(mes, dia, hubsPorSlug, mensajesMotivacion);
      const clave = `${mes}-${dia}`;
      indice[clave] = {
        mes,
        dia,
        etiqueta: r.etiquetaSinAnio,
        signoSlug: r.signo?.slug ?? '',
        signoNombre: r.signo?.nombre ?? '',
        signoSimbolo: r.signo?.simbolo ?? '✨',
        hubMesSlug: r.hubMes?.slug ?? SLUGS_MESES[mes - 1],
        hubMesTitulo: r.hubMes?.titulo ?? `Cumpleaños en ${r.nombreMes}`,
        hitosPaises: r.hitosPaises.map((h) => ({
          paisSlug: h.pais.slug,
          paisNombre: h.pais.nombre,
          bandera: h.pais.bandera,
          titulo: h.evento.titulo,
          anio: h.evento.anioHistorico,
          resumen: h.evento.resumen,
          comoSeFesteja: h.evento.comoSeFesteja,
          saludo: h.evento.saludoSugerido
        })),
        hitosGlobales: r.hitosGlobales.map((g) => ({
          titulo: g.titulo,
          ambito: g.ambito,
          icono: g.icono,
          anio: g.anioHistorico,
          resumen: g.resumen,
          explicacion: g.explicacion
        })),
        fechasEspecialesExactas: r.fechasEspecialesExactas.map((f) => ({
          slug: f.slug,
          titulo: f.titulo,
          emoji: f.emoji,
          notaFecha: f.notaFecha
        })),
        fechasEspecialesDelMes: r.fechasEspecialesDelMes.map((f) => ({
          slug: f.slug,
          titulo: f.titulo,
          emoji: f.emoji,
          notaFecha: f.notaFecha
        })),
        motivacion: r.motivacionDelDia
          ? {
              slug: r.motivacionDelDia.slug,
              titulo: r.motivacionDelDia.titulo,
              extracto: r.motivacionDelDia.texto.split('\n')[0] ?? ''
            }
          : null
      };
    }
  }
  return indice;
}
