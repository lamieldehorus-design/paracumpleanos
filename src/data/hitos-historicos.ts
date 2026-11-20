import { HITOS_AFRICA } from './hitos-africa.ts';
import { HITOS_AMERICA } from './hitos-america.ts';
import { HITOS_ASIA } from './hitos-asia.ts';
import { HITOS_EUROPA } from './hitos-europa.ts';
import { HITOS_OCEANIA } from './hitos-oceania.ts';
import {
  CONTINENTES_META,
  ETIQUETAS_TIPO_HITO,
  MESES_NOMBRES_HITOS,
  formatearAnioHistorico,
  formatearFechaHitoSinAnio,
  type ContinenteId,
  type HitoEvento,
  type HitoMundialGlobal,
  type PaisHito
} from './hitos-tipos.ts';

export {
  CONTINENTES_META,
  ETIQUETAS_TIPO_HITO,
  MESES_NOMBRES_HITOS,
  formatearAnioHistorico,
  formatearFechaHitoSinAnio
};
export type { ContinenteId, HitoEvento, HitoMundialGlobal, PaisHito };

export const PAISES_HITOS: PaisHito[] = [
  ...HITOS_AMERICA,
  ...HITOS_EUROPA,
  ...HITOS_ASIA,
  ...HITOS_AFRICA,
  ...HITOS_OCEANIA
].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));

export const PAIS_HITO_POR_SLUG = new Map<string, PaisHito>(
  PAISES_HITOS.map((pais) => [pais.slug, pais])
);

export const HITOS_MUNDIALES: HitoMundialGlobal[] = [
  {
    id: 'ano-nuevo-calendario',
    dia: 1,
    mes: 1,
    anioHistorico: 1582,
    titulo: 'Inicio del año calendario global y Día Mundial de la Paz',
    ambito: 'Efeméride mundial',
    icono: '🕊️',
    resumen: 'Primera jornada del calendario gregoriano y fecha dedicada internacionalmente a la paz entre naciones.',
    explicacion:
      'El 1 de enero marca el comienzo de un nuevo ciclo en la mayor parte del planeta desde la adopción del calendario gregoriano y reúne además independencias históricas como la de Haití (1804), Sudán (1956) y la creación de Eslovaquia (1993).'
  },
  {
    id: 'dia-lengua-materna',
    dia: 21,
    mes: 2,
    anioHistorico: 1999,
    titulo: 'Día Internacional de la Lengua Materna (UNESCO)',
    ambito: 'Cultura y patrimonio',
    icono: '📚',
    resumen: 'Jornada dedicada a celebrar la diversidad lingüística y cultural de los más de 7.000 idiomas vivos del mundo.',
    explicacion:
      'Proclamado por la UNESCO en 1999 en memoria del Movimiento por la Lengua Bengalí de 1952 en Daca, recuerda que cada idioma encierra una manera irreemplazable de nombrar el mundo.'
  },
  {
    id: 'dia-internacional-mujer',
    dia: 8,
    mes: 3,
    anioHistorico: 1975,
    titulo: 'Día Internacional de la Mujer',
    ambito: 'Derechos humanos',
    icono: '💜',
    resumen: 'Conmemoración mundial de la lucha histórica por la igualdad de derechos, educación y participación plena de las mujeres.',
    explicacion:
      'Reconocido oficialmente por las Naciones Unidas en 1975, hunde sus raíces en los movimientos obreros y sufragistas de comienzos del siglo XX por condiciones dignas de trabajo y voto femenino.'
  },
  {
    id: 'dia-internacional-tierra',
    dia: 22,
    mes: 4,
    anioHistorico: 1970,
    titulo: 'Día Internacional de la Madre Tierra',
    ambito: 'Ciencia y ambiente',
    icono: '🌍',
    resumen: 'Movilización global nacida el 22 de abril de 1970 en defensa de los ecosistemas, el agua y el clima.',
    explicacion:
      'En su primera edición de 1970 movilizó a veinte millones de personas y dio impulso a leyes ambientales pioneras y tratados internacionales de conservación en todo el planeta.'
  },
  {
    id: 'dia-internacional-libro',
    dia: 23,
    mes: 4,
    anioHistorico: 1995,
    titulo: 'Día Mundial del Libro y del Derecho de Autor',
    ambito: 'Literatura universal',
    icono: '📖',
    resumen: 'Homenaje universal a la lectura en la fecha simbólica de 1616 asociada a Miguel de Cervantes, William Shakespeare y el Inca Garcilaso.',
    explicacion:
      'Establecido por la UNESCO en 1995, celebra la lectura, la industria editorial y la tradición de regalar libros y rosas (Sant Jordi) como puente entre culturas.'
  },
  {
    id: 'dia-internacional-trabajador',
    dia: 1,
    mes: 5,
    anioHistorico: 1886,
    titulo: 'Día Internacional de los Trabajadores',
    ambito: 'Historia social',
    icono: '🛠️',
    resumen: 'Homenaje a los Mártires de Chicago (1886) y a la conquista histórica de la jornada laboral de ocho horas.',
    explicacion:
      'Conmemorado en más de ochenta países, recuerda las movilizaciones iniciadas el 1 de mayo de 1886 que impulsaron derechos laborales fundamentales en todo el mundo.'
  },
  {
    id: 'dia-europa-schuman',
    dia: 9,
    mes: 5,
    anioHistorico: 1950,
    titulo: 'Declaración Schuman y Día de Europa',
    ambito: 'Integración internacional',
    icono: '🤝',
    resumen: 'El 9 de mayo de 1950 Robert Schuman propuso la cooperación supranacional que dio origen a la Unión Europea.',
    explicacion:
      'Cinco años después de la Segunda Guerra Mundial, la Declaración Schuman sentó las bases de la paz duradera y la integración económica y ciudadana en Europa.'
  },
  {
    id: 'dia-mundial-ambiente',
    dia: 5,
    mes: 6,
    anioHistorico: 1972,
    titulo: 'Día Mundial del Medio Ambiente (Conferencia de Estocolmo)',
    ambito: 'Ciencia y ambiente',
    icono: '🌿',
    resumen: 'Instaurado por la ONU en 1972 al abrirse la primera Conferencia Mundial sobre el Medio Humano en Estocolmo.',
    explicacion:
      'Cada 5 de junio convoca a más de 150 países en acciones educativas y comunitarias para proteger la biodiversidad, los bosques y los océanos.'
  },
  {
    id: 'llegada-luna-apolo-11',
    dia: 20,
    mes: 7,
    anioHistorico: 1969,
    titulo: 'Llegada del ser humano a la Luna (Apolo 11)',
    ambito: 'Ciencia y exploración',
    icono: '🌕',
    resumen: 'El 20 de julio de 1969 la misión Apolo 11 alunizó en el Mar de la Tranquilidad, inspirando también el Día del Amigo en el Cono Sur.',
    explicacion:
      'Neil Armstrong, Buzz Aldrin y Michael Collins concretaron el primer alunizaje tripulado de la historia humana, seguido en directo por cientos de millones de personas. Ese gesto universal motivó al profesor argentino Enrique Febbraro a impulsar el 20 de julio como Día del Amigo.'
  },
  {
    id: 'dia-internacional-juventud',
    dia: 12,
    mes: 8,
    anioHistorico: 1999,
    titulo: 'Día Internacional de la Juventud',
    ambito: 'Sociedad global',
    icono: '✨',
    resumen: 'Fecha proclamada por la Asamblea General de la ONU para destacar el aporte cultural, científico y cívico de los jóvenes.',
    explicacion:
      'Reconoce la creatividad y el liderazgo de las nuevas generaciones en la construcción de sociedades más justas, tecnológicas y solidarias.'
  },
  {
    id: 'dia-internacional-paz',
    dia: 21,
    mes: 9,
    anioHistorico: 1981,
    titulo: 'Día Internacional de la Paz',
    ambito: 'Convivencia global',
    icono: '🕊️',
    resumen: 'Instituido por las Naciones Unidas en 1981 como jornada mundial de no violencia, diálogo y alto el fuego.',
    explicacion:
      'Coincide con el equinoccio de septiembre —primavera en el hemisferio sur y otoño en el norte— y convoca a comunidades y escuelas de todo el mundo a promover la cultura de paz.'
  },
  {
    id: 'dia-naciones-unidas',
    dia: 24,
    mes: 10,
    anioHistorico: 1945,
    titulo: 'Fundación de las Naciones Unidas (Carta de San Francisco)',
    ambito: 'Diplomacia internacional',
    icono: '🌐',
    resumen: 'Entrada en vigor de la Carta de las Naciones Unidas el 24 de octubre de 1945 para preservar la paz y la cooperación mundial.',
    explicacion:
      'Tras la devastación de la Segunda Guerra Mundial, cincuenta y un Estados fundadores ratificaron la Carta de la ONU el 24 de octubre de 1945, creando el principal foro multilateral de cooperación internacional.'
  },
  {
    id: 'caida-muro-berlin-global',
    dia: 9,
    mes: 11,
    anioHistorico: 1989,
    titulo: 'Caída del Muro de Berlín',
    ambito: 'Historia contemporánea',
    icono: '🧱',
    resumen: 'Apertura pacífica del Muro de Berlín el 9 de noviembre de 1989, símbolo del fin de la Guerra Fría.',
    explicacion:
      'Tras 28 años dividiendo familias y una ciudad entera, la movilización cívica pacífica derribó la frontera interior alemana y transformó el mapa político de Europa y del mundo.'
  },
  {
    id: 'declaracion-derechos-humanos',
    dia: 10,
    mes: 12,
    anioHistorico: 1948,
    titulo: 'Declaración Universal de los Derechos Humanos',
    ambito: 'Derechos humanos',
    icono: '⚖️',
    resumen: 'Adopción en París de los 30 artículos de la Declaración Universal de los Derechos Humanos el 10 de diciembre de 1948.',
    explicacion:
      'Proclamada por la Asamblea General de la ONU en el Palais de Chaillot, es el documento más traducido de la historia (más de 500 idiomas) y sienta el ideal común de dignidad e igualdad para toda la humanidad.'
  }
];

export interface HitoPaisEnFecha {
  pais: PaisHito;
  evento: HitoEvento;
  esPrincipal: boolean;
}

export function hitoPaisPorSlug(slug: string): PaisHito | undefined {
  return PAIS_HITO_POR_SLUG.get(slug);
}

export function paisesPorContinente(continente: ContinenteId): PaisHito[] {
  return PAISES_HITOS.filter((p) => p.continente === continente);
}

export function todosLosEventosDePaises(): HitoPaisEnFecha[] {
  const resultado: HitoPaisEnFecha[] = [];
  for (const pais of PAISES_HITOS) {
    resultado.push({ pais, evento: pais.hitoPrincipal, esPrincipal: true });
    for (const sec of pais.hitosSecundarios ?? []) {
      resultado.push({ pais, evento: sec, esPrincipal: false });
    }
  }
  return resultado;
}

export function hitosPaisesPorDiaMes(mes: number, dia: number): HitoPaisEnFecha[] {
  return todosLosEventosDePaises().filter(
    (item) => item.evento.mes === mes && item.evento.dia === dia
  );
}

export function hitosGlobalesPorDiaMes(mes: number, dia: number): HitoMundialGlobal[] {
  return HITOS_MUNDIALES.filter((h) => h.mes === mes && h.dia === dia);
}

export function hitosPaisesPorMes(mes: number): HitoPaisEnFecha[] {
  return todosLosEventosDePaises()
    .filter((item) => item.evento.mes === mes)
    .sort((a, b) => a.evento.dia - b.evento.dia || a.pais.nombre.localeCompare(b.pais.nombre, 'es'));
}

export function paisesVecinosMismoContinente(pais: PaisHito, limite = 6): PaisHito[] {
  const delContinente = paisesPorContinente(pais.continente).filter((p) => p.slug !== pais.slug);
  const mismaSubregion = delContinente.filter((p) => p.subregion === pais.subregion);
  const otros = delContinente.filter((p) => p.subregion !== pais.subregion);
  return [...mismaSubregion, ...otros].slice(0, limite);
}
