// Logica pura para la categoria personalizable "mas-de-10-anos-de-novios"
// Permite elegir entre 11 y 80 anos y adaptar titulo, resumen, cuerpo y tarjetas.

export const ANIOS_DEFECTO = 12;
export const ANIOS_MIN = 11;
export const ANIOS_MAX = 80;
export const CHIPS_ANIOS_RAPIDOS = [11, 12, 15, 18, 20, 25, 30, 40, 50];

export function normalizarAniosAniversario(valor: unknown, defecto: number = ANIOS_DEFECTO): number {
  const n = Math.floor(Number(valor));
  if (!Number.isFinite(n)) return defecto;
  if (n < ANIOS_MIN) return ANIOS_MIN;
  if (n > ANIOS_MAX) return ANIOS_MAX;
  return n;
}

export function adaptarTextoAniosAniversario(
  texto: string,
  anios: number,
  base: number = ANIOS_DEFECTO
): string {
  const n = normalizarAniosAniversario(anios, base);
  const src = String(texto || '');
  if (!src) return src;
  const rxNumAnios = new RegExp(`\\b${base}(\\s+a(?:ñ|n)os)\\b`, 'gi');
  const rxOrdinal = new RegExp(`\\b${base}\\.(?:º|°|o)\\b`, 'gi');
  return src
    .replace(rxNumAnios, `${n}$1`)
    .replace(rxOrdinal, `${n}.º`)
    .replace(/\bdoce(\s+años)\b/gi, `${n}$1`);
}

export function construirEtiquetaAnios(anios: number): string {
  const n = normalizarAniosAniversario(anios);
  if (n === 15) return '15 años de novios (Bodas de Cristal)';
  if (n === 20) return '20 años de novios (Bodas de Porcelana)';
  if (n === 25) return '25 años de novios (Bodas de Plata)';
  if (n === 30) return '30 años de novios (Bodas de Perla)';
  if (n === 40) return '40 años de novios (Bodas de Rubí)';
  if (n === 50) return '50 años de novios (Bodas de Oro)';
  return `${n} años de novios`;
}
