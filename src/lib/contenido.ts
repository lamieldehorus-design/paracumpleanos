// Carga contenido.json + todos los archivos de data/categorias/*.json
import base from '../../data/contenido.json';

const modulos = import.meta.glob('../../data/categorias/*.json', { eager: true });
let extras: any[] = [];
Object.values(modulos as any).forEach(function (m: any) {
  extras = extras.concat(m.default);
});

export const contenido: any[] = (base as any[]).concat(extras);
