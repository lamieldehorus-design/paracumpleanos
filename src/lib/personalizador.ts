export interface OpcionesPersonalizacion {
  nombre?: string;
  firma?: string;
  tema?: string;
}

export interface TemaTarjeta {
  id: string;
  nombre: string;
  fondoCss: string;
  gradInicio: string;
  gradMedio: string;
  gradFin: string;
  borde: string;
  acento: string;
}

export const TEMAS_TARJETA: Record<string, TemaTarjeta> = {
  rosa: {
    id: 'rosa',
    nombre: 'Rosa clásica',
    fondoCss: 'linear-gradient(135deg, #fdf2f8 0%, #fff7ed 55%, #e0f2fe 100%)',
    gradInicio: '#fdf2f8',
    gradMedio: '#fff7ed',
    gradFin: '#e0f2fe',
    borde: '#e91e8c',
    acento: '#be185d'
  },
  dorada: {
    id: 'dorada',
    nombre: 'Dorado festivo',
    fondoCss: 'linear-gradient(135deg, #fef3c7 0%, #fffbeb 55%, #fde68a 100%)',
    gradInicio: '#fef3c7',
    gradMedio: '#fffbeb',
    gradFin: '#fde68a',
    borde: '#d97706',
    acento: '#b45309'
  },
  celeste: {
    id: 'celeste',
    nombre: 'Celeste calma',
    fondoCss: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 55%, #ede9fe 100%)',
    gradInicio: '#e0f2fe',
    gradMedio: '#f0f9ff',
    gradFin: '#ede9fe',
    borde: '#0284c7',
    acento: '#0369a1'
  },
  elegante: {
    id: 'elegante',
    nombre: 'Marfil sobria',
    fondoCss: 'linear-gradient(135deg, #fafaf9 0%, #f5f5f4 55%, #fce7f3 100%)',
    gradInicio: '#fafaf9',
    gradMedio: '#f5f5f4',
    gradFin: '#fce7f3',
    borde: '#9d174d',
    acento: '#831843'
  }
};

export function limpiarCampoTexto(valor?: string, maxLen: number = 40): string {
  return String(valor || '')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen);
}

export function personalizarTexto(textoBase: string, opts: OpcionesPersonalizacion = {}): string {
  const base = String(textoBase || '').trim();
  if (!base) return '';

  const nombre = limpiarCampoTexto(opts.nombre, 40);
  const firma = limpiarCampoTexto(opts.firma, 40);

  let resultado = base;
  if (nombre) {
    const yaLoContiene = new RegExp(`(^|\\s|[¡¿])${nombre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([,:!.]|\\s|$)`, 'i').test(resultado);
    if (!yaLoContiene) {
      resultado = `${nombre}, ${resultado.charAt(0).toLowerCase()}${resultado.slice(1)}`;
    }
  }
  if (firma) {
    resultado = `${resultado}\n\n— ${firma}`;
  }
  return resultado;
}
