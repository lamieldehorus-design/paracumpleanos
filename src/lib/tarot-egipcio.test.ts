import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  ARCANOS_MAYORES,
  ARCANOS_MENORES,
  TODOS_LOS_ARCANOS,
  PLANOS_ARCANO,
  NUMEROLOGIA_TAROT,
  ESQUEMAS_TIRADA,
  FAQS_TAROT_HUB,
  reducirArcanoMayor,
  reducirNumerologia,
  calcularArcanoCumpleanos,
  arcanosPorSigno,
  signosPorArcano,
  generarTiradaTarot,
  construirGrafoTarotHubLd,
  construirGrafoArcanoLd
} from './tarot-egipcio.ts';
import { ZODIACOS } from './horoscopo.ts';
import { crearCatalogo, generarUrlsSitio, construirMapaLastmodSitemap } from './catalogo.ts';

test('Baraja del Tarot Egipcio contiene exactamente 22 Arcanos Mayores + 56 Menores = 78 unicos', () => {
  assert.equal(ARCANOS_MAYORES.length, 22);
  assert.equal(ARCANOS_MENORES.length, 56);
  assert.equal(TODOS_LOS_ARCANOS.length, 78);

  const numeros = TODOS_LOS_ARCANOS.map((c) => c.numero);
  assert.equal(new Set(numeros).size, 78, 'Todos los numeros del 1 al 78 deben ser unicos');
  assert.equal(Math.min(...numeros), 1);
  assert.equal(Math.max(...numeros), 78);

  const slugsMayores = ARCANOS_MAYORES.map((a) => a.slug);
  assert.equal(new Set(slugsMayores).size, 22, 'Todos los slugs de Arcanos Mayores deben ser unicos');
  for (const slug of slugsMayores) {
    assert.match(slug, /^[a-z0-9-]+$/, `Slug invalido: ${slug}`);
  }

  for (const a of ARCANOS_MAYORES) {
    assert.equal(a.dedicatorias.length, 8, `Arcano ${a.slug} debe tener 8 dedicatorias`);
    assert.equal(a.faqs.length, 3, `Arcano ${a.slug} debe tener 3 FAQs`);
    assert.ok(a.significadoDerecho.length >= 120, `Arcano ${a.slug} derecho demasiado corto`);
    assert.ok(a.significadoInvertido.length >= 90, `Arcano ${a.slug} invertido demasiado corto`);
    assert.ok(a.filosofiaEsoterica.length >= 120, `Arcano ${a.slug} filosofia demasiado corta`);
  }

  assert.equal(PLANOS_ARCANO.length, 3);
  assert.equal(NUMEROLOGIA_TAROT.length, 9);
  assert.equal(ESQUEMAS_TIRADA.length, 4);
  assert.ok(FAQS_TAROT_HUB.length >= 6);
});

test('Vinculo bidireccional completo entre los 12 signos del horoscopo y los 22 Arcanos Mayores', () => {
  const slugsZodiacos = new Set(ZODIACOS.map((z) => z.slug));
  for (const arcano of ARCANOS_MAYORES) {
    assert.ok(arcano.signosSlugs.length >= 1, `Arcano ${arcano.slug} debe mapear al menos 1 signo`);
    for (const s of arcano.signosSlugs) {
      assert.ok(slugsZodiacos.has(s), `Signo inexistente en ${arcano.slug}: ${s}`);
    }
    assert.equal(signosPorArcano(arcano).length, arcano.signosSlugs.length);
  }

  for (const signo of ZODIACOS) {
    const arcanos = arcanosPorSigno(signo.slug);
    assert.ok(arcanos.length >= 1, `El signo ${signo.slug} debe tener al menos un Arcano Mayor vinculado`);
  }
});

test('Reduccion numerologica y calculadora de Arcano de cumpleanos / natal son consistentes', () => {
  assert.equal(reducirArcanoMayor(1), 1);
  assert.equal(reducirArcanoMayor(22), 22);
  assert.equal(reducirArcanoMayor(23), 5);
  assert.equal(reducirArcanoMayor(39), 12);
  assert.equal(reducirNumerologia(19), 1);
  assert.equal(reducirNumerologia(78), 6);

  const resSinAnio = calcularArcanoCumpleanos(11, 8);
  assert.equal(resSinAnio.arcanoCumple.numero, 19);
  assert.equal(resSinAnio.arcanoCumple.slug, 'la-inspiracion');
  assert.equal(resSinAnio.signo.slug, 'leo');
  assert.equal(resSinAnio.mesSlug, 'cumpleanos-en-agosto');
  assert.equal(resSinAnio.arcanoNatal, undefined);

  const resConAnio = calcularArcanoCumpleanos(11, 8, 1994);
  // 11 + 8 + (1+9+9+4=23) = 42 -> 4+2 = 6 (La Indecision)
  assert.equal(resConAnio.arcanoNatal?.numero, 6);
  assert.equal(resConAnio.arcanoNatal?.slug, 'la-indecision');

  const resBisiesto = calcularArcanoCumpleanos(29, 2);
  assert.equal(resBisiesto.signo.slug, 'piscis');
  assert.equal(resBisiesto.arcanoCumple.numero, 4); // 29+2=31 -> 4
});

test('Tiradas interactivas son deterministas con semilla, sin cartas repetidas y con regente valido', () => {
  const t1 = generarTiradaTarot('respuesta-destino', 'completo', true, 12345);
  const t2 = generarTiradaTarot('respuesta-destino', 'completo', true, 12345);
  assert.deepEqual(t1, t2, 'Misma semilla debe producir la misma tirada exacta');
  assert.equal(t1.cartas.length, 7);
  assert.equal(new Set(t1.cartas.map((c) => c.carta.numero)).size, 7, 'No puede haber cartas duplicadas');
  assert.equal(t1.regente.posicion.indice, 4, 'En La Respuesta del Destino la carta regente es la #4');

  const soloMayores = generarTiradaTarot('cuadrado-corazon', 'mayores', false, 77);
  assert.equal(soloMayores.cartas.length, 5);
  assert.ok(soloMayores.cartas.every((c) => c.carta.tipo === 'mayor'));
  assert.ok(soloMayores.cartas.every((c) => c.invertida === false));
  assert.equal(soloMayores.regente.posicion.indice, 5, 'En Cuadrado del Corazon la carta mentora es la #5');
});

test('Redaccion del Tarot Egipcio mantiene voseo rioplatense puro sin tuteo mezclado', () => {
  const regexTuteo = /\b(tú|puedes|tienes|quieres|sientes|encuentras|eliges|recibes|descubres|necesitas|celebras|caminas|sueltas\s+(?:el|la|lo|los|las|tu|tus))\b/i;
  for (const a of ARCANOS_MAYORES) {
    const textos = [
      a.esencia,
      a.significadoDerecho,
      a.significadoInvertido,
      a.planoEspiritual,
      a.planoMental,
      a.planoFisico,
      a.filosofiaEsoterica,
      a.consejoCumpleanos,
      ...a.dedicatorias.map((d) => `${d.titulo} ${d.texto}`),
      ...a.faqs.map((f) => `${f.pregunta} ${f.respuesta}`)
    ];
    for (const t of textos) {
      assert.ok(!regexTuteo.test(t), `Se detecto tuteo en Arcano ${a.slug}: "${t.slice(0, 120)}"`);
    }
  }
  for (const m of ARCANOS_MENORES) {
    const blob = `${m.derecho} ${m.invertido} ${m.consejo}`;
    assert.ok(!regexTuteo.test(blob), `Se detecto tuteo en Arcano Menor #${m.numero}: "${blob}"`);
  }
});

test('Sitemap y JSON-LD incluyen /tarot-egipcio/ y los 22 Arcanos Mayores', () => {
  const base = JSON.parse(fs.readFileSync(path.resolve('data/contenido.json'), 'utf8'));
  const cat = crearCatalogo(base);
  const slugsTarot = ARCANOS_MAYORES.map((a) => a.slug);
  const urls = generarUrlsSitio(cat, [], [], [], slugsTarot);

  assert.ok(urls.includes('https://paracumpleanos.com/tarot-egipcio/'));
  for (const slug of slugsTarot) {
    assert.ok(
      urls.includes(`https://paracumpleanos.com/tarot-egipcio/${slug}/`),
      `Falta /tarot-egipcio/${slug}/ en sitemap`
    );
  }

  const lastmod = construirMapaLastmodSitemap(cat, [], [], [], '2026-11-25', slugsTarot);
  assert.equal(lastmod['https://paracumpleanos.com/tarot-egipcio/'], lastmod['https://paracumpleanos.com/']);
  assert.equal(lastmod['https://paracumpleanos.com/tarot-egipcio/el-mago/'], '2026-11-25');

  const grafoHub = construirGrafoTarotHubLd({
    sitio: 'https://paracumpleanos.com',
    marca: 'ParaCumpleanos',
    titulo: 'Tarot Egipcio',
    descripcion: 'Descripcion de prueba'
  });
  assert.equal(grafoHub['@graph'].length, 5);

  const grafoArcano = construirGrafoArcanoLd({
    sitio: 'https://paracumpleanos.com',
    marca: 'ParaCumpleanos',
    arcano: ARCANOS_MAYORES[0],
    titulo: 'El Mago',
    descripcion: 'Descripcion de prueba'
  });
  assert.equal(grafoArcano['@graph'].length, 3);
});
