export type FormaBanderin = 'triangulo' | 'golondrina' | 'escudo' | 'banderola';
export type PatronBanderin = 'liso' | 'franja' | 'marco' | 'puntos' | 'estrellas' | 'diagonales';
export type FuenteBanderin = 'editorial' | 'moderna' | 'calida';
export type CategoriaPlantillaBanderin = 'fiesta' | 'elegante' | 'infantil' | 'natural' | 'minimal';

export interface ColorBanderin {
  bg: string;
  border: string;
  text: string;
  accent: string;
}

export interface PlantillaBanderin {
  id: string;
  nombre: string;
  categoria: CategoriaPlantillaBanderin;
  descripcion: string;
  forma: FormaBanderin;
  patron: PatronBanderin;
  fuente: FuenteBanderin;
  iconoPunta: string;
  colores: ColorBanderin[];
}

export interface ConfigBanderin {
  frase: string;
  plantillaId: string;
  forma: FormaBanderin;
  patron: PatronBanderin;
  fuente: FuenteBanderin;
  incluirPuntas: boolean;
  iconoPunta: string;
}

export interface PiezaBanderin {
  indice: number;
  caracter: string;
  esDecorativo: boolean;
  etiquetaAria: string;
}

export interface EspecificacionesA4Banderin {
  piezas: number;
  hojasA4: number;
  largoGuirnaldaCm: number;
  cordonSugeridoCm: number;
}

export const CATEGORIAS_PLANTILLA_BANDERIN: { id: 'todos' | CategoriaPlantillaBanderin; label: string }[] = [
  { id: 'todos', label: 'Todos los diseños' },
  { id: 'fiesta', label: 'Fiesta' },
  { id: 'elegante', label: 'Elegante' },
  { id: 'infantil', label: 'Infantil y pastel' },
  { id: 'natural', label: 'Natural y kraft' },
  { id: 'minimal', label: 'Minimal / Colorear' }
];

export const FORMAS_BANDERIN: { id: FormaBanderin; nombre: string; medida: string }[] = [
  { id: 'triangulo', nombre: 'Triángulo clásico', medida: '14 × 19 cm' },
  { id: 'golondrina', nombre: 'Cola de golondrina', medida: '14 × 19 cm' },
  { id: 'escudo', nombre: 'Escudo curvo', medida: '14 × 19 cm' },
  { id: 'banderola', nombre: 'Banderola rectangular', medida: '14 × 19 cm' }
];

export const PATRONES_BANDERIN: { id: PatronBanderin; nombre: string }[] = [
  { id: 'marco', nombre: 'Marco clásico' },
  { id: 'franja', nombre: 'Doble franja' },
  { id: 'puntos', nombre: 'Lunares / Confeti' },
  { id: 'estrellas', nombre: 'Estrellas suaves' },
  { id: 'diagonales', nombre: 'Rayas diagonales' },
  { id: 'liso', nombre: 'Liso limpio' }
];

export const FUENTES_BANDERIN: { id: FuenteBanderin; nombre: string; cssFamily: string; canvasFamily: string }[] = [
  {
    id: 'editorial',
    nombre: 'Editorial serif',
    cssFamily: "'Fraunces', Georgia, serif",
    canvasFamily: "700 %SIZE%px Georgia, serif"
  },
  {
    id: 'moderna',
    nombre: 'Moderna bold',
    cssFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    canvasFamily: "800 %SIZE%px system-ui, -apple-system, sans-serif"
  },
  {
    id: 'calida',
    nombre: 'Clásica cursiva',
    cssFamily: "Georgia, 'Fraunces', serif",
    canvasFamily: "italic 700 %SIZE%px Georgia, serif"
  }
];

export const FRASES_RAPIDAS_BANDERIN: string[] = [
  'FELIZ CUMPLEAÑOS',
  'HAPPY BIRTHDAY',
  'FELIZ DÍA',
  'FELIZ VUELTA AL SOL',
  '¡A CELEBRAR!',
  'BIENVENIDOS'
];

export const PLANTILLAS_BANDERINES: PlantillaBanderin[] = [
  {
    id: 'rosa-fiesta',
    nombre: 'Rosa Fiesta Editorial',
    categoria: 'fiesta',
    descripcion: 'Crema y rosa vibrante con marco festivo',
    forma: 'triangulo',
    patron: 'marco',
    fuente: 'editorial',
    iconoPunta: '★',
    colores: [
      { bg: '#fdf2f8', border: '#e11d74', text: '#9f1239', accent: '#f472b6' },
      { bg: '#fff7ed', border: '#ea580c', text: '#9a3412', accent: '#fb923c' },
      { bg: '#fef2f2', border: '#be123c', text: '#881337', accent: '#fb7185' }
    ]
  },
  {
    id: 'gala-dorada',
    nombre: 'Gala Negra & Oro',
    categoria: 'elegante',
    descripcion: 'Alto contraste dorado y negro para cenas y adultos',
    forma: 'golondrina',
    patron: 'franja',
    fuente: 'editorial',
    iconoPunta: '✦',
    colores: [
      { bg: '#1c1917', border: '#d97706', text: '#fde68a', accent: '#f59e0b' },
      { bg: '#fffbeb', border: '#b45309', text: '#78350f', accent: '#d97706' }
    ]
  },
  {
    id: 'pastel-cielo',
    nombre: 'Pastel Cielo & Menta',
    categoria: 'infantil',
    descripcion: 'Tonos suaves con confeti para mesas infantiles',
    forma: 'triangulo',
    patron: 'puntos',
    fuente: 'moderna',
    iconoPunta: '♥',
    colores: [
      { bg: '#e0f2fe', border: '#0284c7', text: '#075985', accent: '#38bdf8' },
      { bg: '#dcfce7', border: '#16a34a', text: '#166534', accent: '#4ade80' },
      { bg: '#ffedd5', border: '#ea580c', text: '#9a3412', accent: '#fb923c' },
      { bg: '#f3e8ff', border: '#9333ea', text: '#6b21a8', accent: '#c084fc' }
    ]
  },
  {
    id: 'botanico-salvia',
    nombre: 'Botánico Salvia',
    categoria: 'natural',
    descripcion: 'Verde salvia, crema y terracota natural',
    forma: 'escudo',
    patron: 'marco',
    fuente: 'editorial',
    iconoPunta: '✿',
    colores: [
      { bg: '#ecfdf5', border: '#059669', text: '#065f46', accent: '#34d399' },
      { bg: '#fef3c7', border: '#b45309', text: '#78350f', accent: '#f59e0b' },
      { bg: '#fff1f2', border: '#e11d48', text: '#9f1239', accent: '#fda4af' }
    ]
  },
  {
    id: 'arcoiris-alegre',
    nombre: 'Arcoíris Festivo',
    categoria: 'infantil',
    descripcion: 'Seis colores vivos con destellos para patios',
    forma: 'triangulo',
    patron: 'estrellas',
    fuente: 'moderna',
    iconoPunta: '★',
    colores: [
      { bg: '#ffe4e6', border: '#e11d48', text: '#9f1239', accent: '#fb7185' },
      { bg: '#ffedd5', border: '#ea580c', text: '#9a3412', accent: '#fb923c' },
      { bg: '#fef9c3', border: '#ca8a04', text: '#854d0e', accent: '#facc15' },
      { bg: '#dcfce7', border: '#16a34a', text: '#166534', accent: '#4ade80' },
      { bg: '#dbeafe', border: '#2563eb', text: '#1e40af', accent: '#60a5fa' },
      { bg: '#f3e8ff', border: '#9333ea', text: '#6b21a8', accent: '#c084fc' }
    ]
  },
  {
    id: 'colorear-bn',
    nombre: 'Blanco y Negro Colorear',
    categoria: 'minimal',
    descripcion: 'Ahorro total de tinta o actividad infantil para pintar',
    forma: 'triangulo',
    patron: 'marco',
    fuente: 'moderna',
    iconoPunta: '☆',
    colores: [
      { bg: '#ffffff', border: '#1f2937', text: '#111827', accent: '#9ca3af' }
    ]
  },
  {
    id: 'marino-banderola',
    nombre: 'Marino & Champagne',
    categoria: 'elegante',
    descripcion: 'Banderola vertical azul noche y dorado sobrio',
    forma: 'banderola',
    patron: 'franja',
    fuente: 'editorial',
    iconoPunta: '✦',
    colores: [
      { bg: '#0f172a', border: '#d4a359', text: '#fef3c7', accent: '#eab308' },
      { bg: '#f8fafc', border: '#1e3a8a', text: '#0f172a', accent: '#d4a359' }
    ]
  },
  {
    id: 'coral-confeti',
    nombre: 'Coral & Sol',
    categoria: 'fiesta',
    descripcion: 'Coral luminoso, mandarina y lunares alegres',
    forma: 'golondrina',
    patron: 'puntos',
    fuente: 'moderna',
    iconoPunta: '♥',
    colores: [
      { bg: '#fff1f2', border: '#f43f5e', text: '#be123c', accent: '#fb7185' },
      { bg: '#ffedd5', border: '#f97316', text: '#9a3412', accent: '#fdba74' },
      { bg: '#fefce8', border: '#eab308', text: '#854d0e', accent: '#fde047' }
    ]
  },
  {
    id: 'kraft-artesanal',
    nombre: 'Kraft Artesanal',
    categoria: 'natural',
    descripcion: 'Tonos papel madera y crema cálido rústico',
    forma: 'escudo',
    patron: 'diagonales',
    fuente: 'calida',
    iconoPunta: '✿',
    colores: [
      { bg: '#f5ebe0', border: '#8b5e3c', text: '#4a2c18', accent: '#c89f7b' },
      { bg: '#fffbf5', border: '#a47148', text: '#5c3a21', accent: '#ddb892' }
    ]
  },
  {
    id: 'lavanda-dulce',
    nombre: 'Lavanda & Lila',
    categoria: 'infantil',
    descripcion: 'Escudo delicado lila y violeta con estrellitas',
    forma: 'escudo',
    patron: 'estrellas',
    fuente: 'calida',
    iconoPunta: '★',
    colores: [
      { bg: '#f5f3ff', border: '#7c3aed', text: '#4c1d95', accent: '#a78bfa' },
      { bg: '#fdf4ff', border: '#c026d3', text: '#701a75', accent: '#e879f9' },
      { bg: '#eff6ff', border: '#2563eb', text: '#1e3a8a', accent: '#93c5fd' }
    ]
  },
  {
    id: 'rojo-bistro',
    nombre: 'Fiesta Roja & Crema',
    categoria: 'fiesta',
    descripcion: 'Banderola clásica con rayas festivas de alto impacto',
    forma: 'banderola',
    patron: 'diagonales',
    fuente: 'editorial',
    iconoPunta: '★',
    colores: [
      { bg: '#fef2f2', border: '#dc2626', text: '#991b1b', accent: '#f87171' },
      { bg: '#fffbeb', border: '#d97706', text: '#92400e', accent: '#fbbf24' }
    ]
  },
  {
    id: 'minimal-tinta',
    nombre: 'Minimalista Crema',
    categoria: 'minimal',
    descripcion: 'Banderola sobria lista para cualquier decoración',
    forma: 'banderola',
    patron: 'liso',
    fuente: 'moderna',
    iconoPunta: '✦',
    colores: [
      { bg: '#faf8f5', border: '#334155', text: '#0f172a', accent: '#94a3b8' },
      { bg: '#f1f5f9', border: '#475569', text: '#0f172a', accent: '#94a3b8' }
    ]
  }
];

export function plantillaBanderinPorId(id?: string): PlantillaBanderin {
  if (!id) return PLANTILLAS_BANDERINES[0];
  return PLANTILLAS_BANDERINES.find((p) => p.id === id) || PLANTILLAS_BANDERINES[0];
}

export function limpiarFraseBanderin(frase: string, maxLen: number = 32): string {
  const limpio = String(frase || '')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen)
    .toUpperCase();
  return limpio || 'FELIZ CUMPLEAÑOS';
}

export function parsearPiezasBanderin(
  frase: string,
  opciones: { incluirPuntas?: boolean; iconoPunta?: string } = {}
): PiezaBanderin[] {
  const texto = limpiarFraseBanderin(frase, 36);
  const chars = Array.from(texto).filter((ch) => ch.trim().length > 0);
  const icono = (opciones.iconoPunta || '★').trim() || '★';
  const piezas: PiezaBanderin[] = [];

  if (opciones.incluirPuntas) {
    piezas.push({
      indice: 0,
      caracter: icono,
      esDecorativo: true,
      etiquetaAria: 'Banderín decorativo inicial'
    });
  }

  for (const ch of chars) {
    piezas.push({
      indice: piezas.length,
      caracter: ch,
      esDecorativo: false,
      etiquetaAria: `Banderín letra ${ch}`
    });
  }

  if (opciones.incluirPuntas) {
    piezas.push({
      indice: piezas.length,
      caracter: icono,
      esDecorativo: true,
      etiquetaAria: 'Banderín decorativo final'
    });
  }

  if (!piezas.length) {
    piezas.push({
      indice: 0,
      caracter: icono,
      esDecorativo: true,
      etiquetaAria: 'Banderín decorativo'
    });
  }

  return piezas;
}

export function dividirEnHojasA4<T>(piezas: T[], porHoja: number = 2): T[][] {
  const tam = Math.max(1, Math.floor(porHoja));
  const hojas: T[][] = [];
  for (let i = 0; i < piezas.length; i += tam) {
    hojas.push(piezas.slice(i, i + tam));
  }
  return hojas;
}

export function calcularEspecificacionesA4(cantidadPiezas: number): EspecificacionesA4Banderin {
  const piezas = Math.max(1, Math.floor(cantidadPiezas));
  const hojasA4 = Math.ceil(piezas / 2);
  // Cada banderin mide 14 cm de ancho + 2.5 cm de separacion visual en el hilo
  const largoGuirnaldaCm = Math.round(piezas * 14 + Math.max(0, piezas - 1) * 2.5);
  // Sumar 70 cm de margen (35 cm por extremo) para atar comodamente
  const cordonSugeridoCm = largoGuirnaldaCm + 70;
  return { piezas, hojasA4, largoGuirnaldaCm, cordonSugeridoCm };
}

export function obtenerPathFormaSvg(forma: FormaBanderin): string {
  switch (forma) {
    case 'golondrina':
      return 'M 10 12 L 190 12 L 190 256 L 100 202 L 10 256 Z';
    case 'escudo':
      return 'M 10 12 L 190 12 L 190 176 Q 190 236 100 258 Q 10 236 10 176 Z';
    case 'banderola':
      return 'M 14 12 L 186 12 L 186 244 Q 186 254 176 254 L 24 254 Q 14 254 14 244 Z';
    case 'triangulo':
    default:
      return 'M 10 12 L 190 12 L 100 258 Z';
  }
}

export function obtenerPathInteriorSvg(forma: FormaBanderin): string {
  switch (forma) {
    case 'golondrina':
      return 'M 20 22 L 180 22 L 180 238 L 100 189 L 20 238 Z';
    case 'escudo':
      return 'M 20 22 L 180 22 L 180 173 Q 180 224 100 245 Q 20 224 20 173 Z';
    case 'banderola':
      return 'M 24 22 L 176 22 L 176 238 Q 176 244 170 244 L 30 244 Q 24 244 24 238 Z';
    case 'triangulo':
    default:
      return 'M 23 22 L 177 22 L 100 236 Z';
  }
}

export function resolverConfigBanderin(registro?: Record<string, any> | null): ConfigBanderin {
  const cfg = registro && registro.banderinConfig ? registro.banderinConfig : null;
  const plantilla = plantillaBanderinPorId(cfg?.plantillaId);

  let frase = cfg?.frase ? limpiarFraseBanderin(cfg.frase) : '';
  if (!frase && registro?.texto) {
    const matchComillas = String(registro.texto).match(/"([^"]{3,34})"/);
    if (matchComillas) frase = limpiarFraseBanderin(matchComillas[1]);
  }
  if (!frase) frase = 'FELIZ CUMPLEAÑOS';

  return {
    frase,
    plantillaId: plantilla.id,
    forma: (cfg?.forma as FormaBanderin) || plantilla.forma,
    patron: (cfg?.patron as PatronBanderin) || plantilla.patron,
    fuente: (cfg?.fuente as FuenteBanderin) || plantilla.fuente,
    incluirPuntas: typeof cfg?.incluirPuntas === 'boolean' ? cfg.incluirPuntas : true,
    iconoPunta: cfg?.iconoPunta || plantilla.iconoPunta
  };
}
