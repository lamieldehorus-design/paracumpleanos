export interface OpcionesPersonalizacion {
  nombre?: string;
  firma?: string;
  posdata?: string;
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

export interface TipografiaTarjeta {
  id: string;
  nombre: string;
  tituloCss: string;
  cuerpoCss: string;
  canvasTitulo: string;
  canvasCuerpo: string;
  canvasFirma: string;
}

export interface FormatoTarjeta {
  id: string;
  nombre: string;
  ancho: number;
  altoMin: number;
}

export const ICONOS_TARJETA = ['🎂', '💐', '✨', '🎉', '💌', '🙏', '❤️', '🥂'];

export const TIPOGRAFIAS_TARJETA: Record<string, TipografiaTarjeta> = {
  editorial: {
    id: 'editorial',
    nombre: 'Editorial clásica',
    tituloCss: "'Fraunces', Georgia, serif",
    cuerpoCss: "'Plus Jakarta Sans', system-ui, sans-serif",
    canvasTitulo: 'bold 44px Georgia, serif',
    canvasCuerpo: 'system-ui, -apple-system, sans-serif',
    canvasFirma: 'italic 600 Georgia, serif'
  },
  moderna: {
    id: 'moderna',
    nombre: 'Moderna clara',
    tituloCss: "'Plus Jakarta Sans', system-ui, sans-serif",
    cuerpoCss: "'Plus Jakarta Sans', system-ui, sans-serif",
    canvasTitulo: 'bold 42px system-ui, -apple-system, sans-serif',
    canvasCuerpo: 'system-ui, -apple-system, sans-serif',
    canvasFirma: '600 system-ui, -apple-system, sans-serif'
  },
  calida: {
    id: 'calida',
    nombre: 'Carta cálida',
    tituloCss: "'Fraunces', Georgia, serif",
    cuerpoCss: "Georgia, 'Fraunces', serif",
    canvasTitulo: 'italic bold 44px Georgia, serif',
    canvasCuerpo: 'Georgia, serif',
    canvasFirma: 'italic 600 Georgia, serif'
  }
};

export const FORMATOS_TARJETA: Record<string, FormatoTarjeta> = {
  cuadrada: {
    id: 'cuadrada',
    nombre: 'Cuadrada 1:1 (WhatsApp / Post)',
    ancho: 1080,
    altoMin: 1080
  },
  story: {
    id: 'story',
    nombre: 'Story IG 9:16 (Vertical)',
    ancho: 1080,
    altoMin: 1920
  }
};

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
  },
  lavanda: {
    id: 'lavanda',
    nombre: 'Lavanda serena',
    fondoCss: 'linear-gradient(135deg, #f3e8ff 0%, #faf5ff 55%, #fce7f3 100%)',
    gradInicio: '#f3e8ff',
    gradMedio: '#faf5ff',
    gradFin: '#fce7f3',
    borde: '#9333ea',
    acento: '#6b21a8'
  },
  oliva: {
    id: 'oliva',
    nombre: 'Oliva cálida',
    fondoCss: 'linear-gradient(135deg, #ecfdf5 0%, #f7fee7 55%, #fefce8 100%)',
    gradInicio: '#ecfdf5',
    gradMedio: '#f7fee7',
    gradFin: '#fefce8',
    borde: '#15803d',
    acento: '#166534'
  }
};

export function limpiarCampoTexto(valor?: string, maxLen: number = 40): string {
  return String(valor || '')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen);
}

function escaparRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function minusculaInicial(texto: string): string {
  if (!texto) return '';
  if (texto.startsWith('¡') || texto.startsWith('¿')) {
    return texto.length > 1
      ? `${texto.charAt(0)}${texto.charAt(1).toLowerCase()}${texto.slice(2)}`
      : texto;
  }
  return `${texto.charAt(0).toLowerCase()}${texto.slice(1)}`;
}

export function personalizarTexto(textoBase: string, opts: OpcionesPersonalizacion = {}): string {
  const base = String(textoBase || '').trim();
  if (!base) return '';

  const nombre = limpiarCampoTexto(opts.nombre, 40);
  const firma = limpiarCampoTexto(opts.firma, 40).replace(/^[—–-]\s*/, '').trim();
  const posdata = limpiarCampoTexto(opts.posdata, 120);

  const parrafos = base
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (nombre && parrafos.length) {
    const yaLoContiene = new RegExp(`(^|\\s|[¡¿])${escaparRegex(nombre)}([,:!.]|\\s|$)`, 'i').test(parrafos[0]);
    if (!yaLoContiene) {
      const p0 = parrafos[0];
      if (p0.length < 55 && /:$/.test(p0)) {
        // Bloque etiqueta (p. ej. "Mensaje en inglés:") -> no alterarlo, agregar encabezado limpio arriba
        const yaEnTodo = new RegExp(`(^|\\s|[¡¿])${escaparRegex(nombre)}([,:!.]|\\s|$)`, 'i').test(base);
        if (!yaEnTodo) {
          parrafos.unshift(`Para ${nombre}:`);
        }
      } else if (p0.length < 55 && /,$/.test(p0)) {
        // Saludo epistolar de primera línea (p. ej. "Querida mamá,", "Mi amor,", "Con todo cariño,")
        if (/^(Mi\s+amor|Amor\s+m[ií]o|Para\s+vos,\s*mi\s+amor),$/i.test(p0)) {
          parrafos[0] = `${nombre}, mi amor,`;
        } else {
          parrafos[0] = `${nombre},`;
        }
      } else if (p0.includes('\n')) {
        // Poema en estrofas -> conservar los versos intactos bajo encabezado personal
        parrafos.unshift(`Para ${nombre}:`);
      } else {
        parrafos[0] = `${nombre}, ${minusculaInicial(p0)}`;
      }
    }
  }

  let resultado = parrafos.join('\n\n');
  if (posdata) {
    resultado = `${resultado}\n\nP.D.: ${posdata}`;
  }
  if (firma) {
    resultado = `${resultado}\n\n— ${firma}`;
  }
  return resultado;
}

/**
 * Resume un mensaje únicamente para tarjetas de grilla en listados de categoría,
 * evitando mostrar solo un saludo corto de una palabra tras personalizar.
 */
export function resumirTextoCard(texto: string, maxChars: number = 135): string {
  const bloques = String(texto || '')
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);
  if (!bloques.length) return '';

  const cuerpoIdx = bloques.findIndex((b) => !(b.length < 55 && /[:,]$/.test(b)));
  let combinado = '';
  if (cuerpoIdx > 0) {
    const saludo = bloques[0];
    const cuerpo = bloques[cuerpoIdx];
    combinado = saludo.endsWith(',')
      ? `${saludo} ${minusculaInicial(cuerpo)}`
      : `${saludo} ${cuerpo}`;
  } else {
    combinado = bloques[0];
  }

  const plano = combinado.replace(/\s*\n\s*/g, ' ').replace(/\s+/g, ' ').trim();
  if (plano.length <= maxChars) return plano;
  return plano.slice(0, maxChars).replace(/\s+\S*$/, '') + '…';
}

export interface ParrafoTarjetaCanvas {
  esFirma: boolean;
  lineas: string[];
}

export function prepararParrafosTarjeta(
  texto: string,
  medirAncho: (s: string) => number,
  maxW: number
): ParrafoTarjetaCanvas[] {
  const bloques = String(texto || '')
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return bloques.map((bloque) => {
    const esFirma = /^—\s/.test(bloque);
    const sublineas = bloque.split('\n').map((l) => l.trim()).filter(Boolean);
    const lineasEnvueltas: string[] = [];

    for (const sub of sublineas) {
      const palabras = sub.split(/\s+/);
      let actual = '';
      for (const palabra of palabras) {
        const intento = actual ? `${actual} ${palabra}` : palabra;
        if (medirAncho(intento) > maxW && actual) {
          lineasEnvueltas.push(actual);
          actual = palabra;
        } else {
          actual = intento;
        }
      }
      if (actual) lineasEnvueltas.push(actual);
    }

    return { esFirma, lineas: lineasEnvueltas };
  });
}
