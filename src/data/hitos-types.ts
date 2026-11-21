export type ContinenteHito = 'América' | 'Europa' | 'África' | 'Asia' | 'Oceanía';

export type TipoHitoHistorico =
  | 'independencia'
  | 'constitucion'
  | 'unidad'
  | 'revolucion'
  | 'liberacion'
  | 'cultura';

export interface HitoHistoricoPais {
  id: string;
  titulo: string;
  mes: number; // 1 a 12
  dia: number; // 1 a 31
  tipo: TipoHitoHistorico;
  explicacionHistorica: string; // >= 100 palabras, sin anio en texto visible
  tradicionPopular: string;
  mensajeConmemorativo: string;
}

export interface FaqPaisHito {
  pregunta: string;
  respuesta: string;
}

export interface PaisHitosHistoricos {
  slug: string;
  nombre: string;
  nombreOficial: string;
  bandera: string;
  continente: ContinenteHito;
  capital: string;
  gentilicio: string;
  seoTitle: string;
  descripcion: string;
  introHistoria: string;
  hitos: HitoHistoricoPais[];
  faqs: FaqPaisHito[];
}
