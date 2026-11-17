import { GUIAS_PARTE_1 } from './guias-parte1.ts';
import { GUIAS_PARTE_2 } from './guias-parte2.ts';
import type { GuiaEditorial } from './guias-tipos.ts';

export type {
  SeccionGuia,
  TablaGuia,
  ComparacionGuia,
  EjemploGuia,
  FaqGuia,
  DatoPropioGuia,
  FuenteAutoridadGuia,
  PasoHowToGuia,
  GuiaEditorial
} from './guias-tipos.ts';

export const GUIAS_EDITORIALES: GuiaEditorial[] = [
  ...GUIAS_PARTE_1,
  ...GUIAS_PARTE_2
];

export function guiaPorSlug(slug: string): GuiaEditorial | undefined {
  return GUIAS_EDITORIALES.find((g) => g.slug === slug);
}
