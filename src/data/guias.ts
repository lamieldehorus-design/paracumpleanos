import { GUIAS_PARTE_1 } from './guias-parte1.ts';
import { GUIAS_PARTE_2 } from './guias-parte2.ts';
import { GUIAS_PARTE_3 } from './guias-parte3.ts';
import { GUIAS_PARTE_4 } from './guias-parte4.ts';
import { GUIAS_PARTE_5 } from './guias-parte5.ts';
import { PLANTILLAS_EXTRA_GUIAS_1 } from './guias-plantillas-extra-1.ts';
import { PLANTILLAS_EXTRA_GUIAS_2 } from './guias-plantillas-extra-2.ts';
import type { EjemploGuia, GuiaEditorial } from './guias-tipos.ts';

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

const PLANTILLAS_EXTRA_TODAS: Record<string, EjemploGuia[]> = {
  ...PLANTILLAS_EXTRA_GUIAS_1,
  ...PLANTILLAS_EXTRA_GUIAS_2
};

const GUIAS_BASE: GuiaEditorial[] = [
  ...GUIAS_PARTE_1,
  ...GUIAS_PARTE_2,
  ...GUIAS_PARTE_3,
  ...GUIAS_PARTE_4,
  ...GUIAS_PARTE_5
];

export const GUIAS_EDITORIALES: GuiaEditorial[] = GUIAS_BASE.map((guia) => {
  const extras = PLANTILLAS_EXTRA_TODAS[guia.slug];
  if (!extras || extras.length === 0) return guia;
  return {
    ...guia,
    ejemplosAdaptables: [...guia.ejemplosAdaptables, ...extras]
  };
});

export function guiaPorSlug(slug: string): GuiaEditorial | undefined {
  return GUIAS_EDITORIALES.find((g) => g.slug === slug);
}
