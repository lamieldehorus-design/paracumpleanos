import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  ZODIACOS,
  MESES_CON_SIGNOS,
  resolverSignoPorDiaMes,
  calcularEstadisticasCumpleanos,
  generarAcrostico,
  construirDedicatoriaGuiada,
  construirIcsCumpleanos,
  construirIcsAgendaCompleta,
  construirUrlGoogleCalendar,
  signoPorSlug,
  mesInfoPorSlug
} from './horoscopo';
import {
  PLANTILLAS_BANDERINES,
  FORMAS_BANDERIN,
  PATRONES_BANDERIN,
  FUENTES_BANDERIN,
  plantillaBanderinPorId,
  limpiarFraseBanderin,
  parsearPiezasBanderin,
  dividirEnHojasA4,
  calcularEspecificacionesA4,
  obtenerPathFormaSvg,
  obtenerPathInteriorSvg,
  resolverConfigBanderin
} from './banderines';

test('todos los 12 signos y los 12 meses mantienen enlaces bidireccionales consistentes', () => {
  assert.equal(ZODIACOS.length, 12);
  assert.equal(MESES_CON_SIGNOS.length, 12);

  for (const signo of ZODIACOS) {
    assert.equal(signo.mesesSlugs.length, 2);
    assert.equal(signo.frasesCumpleanos.length, 12, `Signo ${signo.slug} debe tener 12 frases`);
    assert.equal(
      new Set(signo.frasesCumpleanos.map((f) => f.texto.trim())).size,
      12,
      `Signo ${signo.slug} tiene frases repetidas`
    );
    assert.ok(
      signo.frasesCumpleanos.every((f) => ['emotivo', 'breve', 'humor', 'fe'].includes(String(f.tono))),
      `Signo ${signo.slug} tiene tono invalido`
    );
    assert.equal(signo.faqs.length, 3);
    assert.equal(signo.ideasRegalo.length, 3);

    for (const mesSlug of signo.mesesSlugs) {
      const mesInfo = mesInfoPorSlug(mesSlug);
      assert.ok(mesInfo, `Mes inexistente en ${signo.slug}: ${mesSlug}`);
      assert.ok(
        mesInfo.signos.some((s) => s.slug === signo.slug),
        `El mes ${mesSlug} no enlaza de vuelta al signo ${signo.slug}`
      );
    }
  }

  for (const mesInfo of MESES_CON_SIGNOS) {
    assert.equal(mesInfo.signos.length, 2);
    for (const ref of mesInfo.signos) {
      const signo = signoPorSlug(ref.slug);
      assert.ok(signo, `Signo inexistente en ${mesInfo.slug}: ${ref.slug}`);
      assert.ok(
        signo.mesesSlugs.includes(mesInfo.slug),
        `El signo ${signo.slug} no incluye al mes ${mesInfo.slug}`
      );
    }
  }
});

test('resolverSignoPorDiaMes cubre exactamente las fechas frontera de los 12 signos', () => {
  assert.equal(resolverSignoPorDiaMes(3, 20).slug, 'piscis');
  assert.equal(resolverSignoPorDiaMes(3, 21).slug, 'aries');
  assert.equal(resolverSignoPorDiaMes(4, 19).slug, 'aries');
  assert.equal(resolverSignoPorDiaMes(4, 20).slug, 'tauro');
  assert.equal(resolverSignoPorDiaMes(5, 20).slug, 'tauro');
  assert.equal(resolverSignoPorDiaMes(5, 21).slug, 'geminis');
  assert.equal(resolverSignoPorDiaMes(6, 20).slug, 'geminis');
  assert.equal(resolverSignoPorDiaMes(6, 21).slug, 'cancer');
  assert.equal(resolverSignoPorDiaMes(12, 21).slug, 'sagitario');
  assert.equal(resolverSignoPorDiaMes(12, 22).slug, 'capricornio');
  assert.equal(resolverSignoPorDiaMes(1, 19).slug, 'capricornio');
  assert.equal(resolverSignoPorDiaMes(1, 20).slug, 'acuario');
  assert.equal(resolverSignoPorDiaMes(2, 29).slug, 'piscis');
});

test('calcularEstadisticasCumpleanos calcula edad exacta, 10000 dias, bisiestos y enlace mes/signo', () => {
  const stats = calcularEstadisticasCumpleanos('1995-06-05', '2026-11-19');
  assert.equal(stats.anios, 31);
  assert.equal(stats.meses, 5);
  assert.equal(stats.dias, 14);
  assert.equal(stats.diaSemanaNacimiento, 'lunes');
  assert.equal(stats.signo.slug, 'geminis');
  assert.equal(stats.mesSlug, 'cumpleanos-en-junio');
  assert.equal(stats.hito10MilDiasIso, '2022-10-21');
  assert.equal(stats.hito10MilDiasPasado, true);
  assert.equal(stats.proximoCumpleIso, '2027-06-05');
  assert.equal(stats.edadProximoCumple, 32);

  // Año bisiesto 29 de febrero ajustado al 28 en 2027
  const statsBisiesto = calcularEstadisticasCumpleanos('2000-02-29', '2026-11-19');
  assert.equal(statsBisiesto.signo.slug, 'piscis');
  assert.equal(statsBisiesto.mesSlug, 'cumpleanos-en-febrero');
  assert.equal(statsBisiesto.proximoCumpleIso, '2027-02-28');
});

test('generarAcrostico maneja tildes, eñe, letras repetidas y los 3 tonos', () => {
  const ac = generarAcrostico('Sofía', 'emotivo');
  assert.equal(ac.length, 5);
  assert.deepEqual(
    ac.map((l) => l.letra),
    ['S', 'O', 'F', 'Í', 'A']
  );
  assert.ok(ac.every((l) => l.verso.length >= 25));

  const acHumor = generarAcrostico('Ana', 'humor');
  assert.equal(acHumor.length, 3);
  assert.notEqual(acHumor[0].verso, acHumor[2].verso, 'Letras repetidas deben alternar verso');

  const acEne = generarAcrostico('Iñaki', 'fe');
  assert.equal(acEne[1].letra, 'Ñ');
});

test('construirDedicatoriaGuiada y construirIcsCumpleanos producen salidas validas', () => {
  const texto = construirDedicatoriaGuiada({
    vinculo: 'amistad',
    tono: 'emotivo',
    nombre: 'Camila',
    detalle: 'aquella charla infinita de verano con mates',
    firma: 'Martín'
  });
  assert.ok(texto.includes('Camila'));
  assert.ok(texto.includes('aquella charla infinita de verano con mates'));
  assert.ok(texto.includes('— Martín'));

  const ics = construirIcsCumpleanos({
    nombre: 'Mamá, Lucía',
    mes: 5,
    dia: 25,
    relacion: 'mamá',
    anioBase: 2026
  });
  assert.ok(ics.includes('RRULE:FREQ=YEARLY'));
  assert.ok(ics.includes('DTSTART;VALUE=DATE:20260525'));
  assert.ok(ics.includes('DTEND;VALUE=DATE:20260526'));
  assert.ok(ics.includes('TRIGGER;RELATED=START:PT9H'));
  assert.ok(ics.includes('Cumpleaños de Mamá\\, Lucía'));
  assert.ok(ics.includes('https://paracumpleanos.com/cumpleanos-en-mayo/'));
  assert.ok(ics.includes('https://paracumpleanos.com/horoscopo/geminis/'));

  // 29 de febrero en año no bisiesto (2026) ajusta a próximo año bisiesto (2028)
  const icsBisiesto = construirIcsCumpleanos({
    nombre: 'Juli',
    mes: 2,
    dia: 29,
    anioBase: 2026
  });
  assert.ok(icsBisiesto.includes('DTSTART;VALUE=DATE:20280229'));

  // Agenda completa multi-evento + validación vacía
  assert.throws(() => construirIcsAgendaCompleta([]));
  const icsCompleto = construirIcsAgendaCompleta(
    [
      { nombre: 'Mamá', mes: 5, dia: 25, relacion: 'mamá' },
      { nombre: 'Papá', mes: 10, dia: 12, relacion: 'papá' }
    ],
    2026
  );
  assert.equal((icsCompleto.match(/BEGIN:VEVENT/g) || []).length, 2);
  assert.equal((icsCompleto.match(/END:VEVENT/g) || []).length, 2);

  // Enlace directo Google Calendar
  const gcalUrl = construirUrlGoogleCalendar({
    nombre: 'Sofía',
    mes: 6,
    dia: 5,
    relacion: 'amiga',
    anioBase: 2026
  });
  assert.ok(gcalUrl.startsWith('https://calendar.google.com/calendar/render?action=TEMPLATE'));
  assert.ok(gcalUrl.includes('20260605%2F20260606') || gcalUrl.includes('dates=20260605/20260606'));
  assert.ok(gcalUrl.includes('RRULE%3AFREQ%3DYEARLY'));
});

test('construirIcsCumpleanos y construirUrlGoogleCalendar con tipo duelo generan recordatorio sobrio sin palabras festivas', () => {
  const icsDuelo = construirIcsCumpleanos({
    nombre: 'Abuelo Carlos',
    mes: 11,
    dia: 2,
    relacion: 'abuelo',
    anioBase: 2026,
    tipo: 'duelo'
  });
  assert.ok(icsDuelo.includes('SUMMARY:En memoria de Abuelo Carlos (abuelo)'));
  assert.ok(icsDuelo.includes('https://paracumpleanos.com/condolencias/'));
  assert.ok(icsDuelo.includes('UID:duelo-abuelo-carlos-1102@paracumpleanos.com'));
  assert.ok(!/(torta|pastel|fiesta|festej|brindis|cumple años)/i.test(icsDuelo));

  const gcalDuelo = construirUrlGoogleCalendar({
    nombre: 'Abuelo Carlos',
    mes: 11,
    dia: 2,
    relacion: 'abuelo',
    anioBase: 2026,
    tipo: 'duelo'
  });
  assert.ok(gcalDuelo.includes('En%20memoria%20de%20Abuelo%20Carlos'));
  assert.ok(gcalDuelo.includes('condolencias'));
});

test('modulo banderines calcula piezas, hojas A4, formas SVG y las 40 publicaciones de banderines tienen frases y configuracion unicas', () => {
  assert.equal(PLANTILLAS_BANDERINES.length, 12);
  assert.equal(new Set(PLANTILLAS_BANDERINES.map((p) => p.id)).size, 12);
  assert.equal(FORMAS_BANDERIN.length, 4);
  assert.equal(PATRONES_BANDERIN.length, 6);
  assert.equal(FUENTES_BANDERIN.length, 3);

  for (const f of FORMAS_BANDERIN) {
    assert.ok(obtenerPathFormaSvg(f.id).startsWith('M '));
    assert.ok(obtenerPathInteriorSvg(f.id).startsWith('M '));
  }

  assert.equal(limpiarFraseBanderin('  feliz   día  '), 'FELIZ DÍA');
  assert.equal(limpiarFraseBanderin('   '), 'FELIZ CUMPLEAÑOS');

  const piezasConPuntas = parsearPiezasBanderin('FELIZ DÍA', { incluirPuntas: true, iconoPunta: '★' });
  assert.equal(piezasConPuntas.length, 10, 'FELIZDIA (8 letras) + 2 puntas = 10 piezas');
  assert.equal(piezasConPuntas[0].esDecorativo, true);
  assert.equal(piezasConPuntas[9].esDecorativo, true);

  const piezasSinPuntas = parsearPiezasBanderin('FELIZ DÍA', { incluirPuntas: false });
  assert.equal(piezasSinPuntas.length, 8);

  const hojas = dividirEnHojasA4(piezasConPuntas, 2);
  assert.equal(hojas.length, 5);
  assert.equal(hojas[0].length, 2);

  const specs = calcularEspecificacionesA4(10);
  assert.equal(specs.hojasA4, 5);
  assert.ok(specs.largoGuirnaldaCm > 150 && specs.cordonSugeridoCm === specs.largoGuirnaldaCm + 70);

  const cfgFallback = resolverConfigBanderin({ texto: 'Probá armar la frase "FELIZ 30 AÑOS" en tu pared.' });
  assert.equal(cfgFallback.frase, 'FELIZ 30 AÑOS');

  // Verificar las 40 guias practicas independientes en data/categorias/g16-banderines.json
  const datosBanderines = JSON.parse(fs.readFileSync(path.resolve('data/categorias/g16-banderines.json'), 'utf8'));
  const msgs = datosBanderines.filter((r: any) => r.tipo === 'mensaje');
  assert.equal(msgs.length, 40, 'La categoria banderines debe tener exactamente 40 guias practicas');

  const titulosVistos = new Set<string>();
  for (const m of msgs) {
    assert.equal(m.banderinConfig, undefined, `La guia ${m.slug} debe estar separada de la herramienta (sin banderinConfig)`);
    const palabras = String(m.texto || '').trim().split(/\s+/).filter(Boolean).length;
    assert.ok(palabras >= 180, `La guia de banderines ${m.slug} debe superar 180 palabras de valor practico (tiene ${palabras})`);
    const parrafos = String(m.texto || '').trim().split(/\n\n+/).filter(Boolean).length;
    assert.ok(parrafos >= 4, `La guia de banderines ${m.slug} debe estar estructurada en al menos 4 parrafos claros (tiene ${parrafos})`);
    assert.ok(!titulosVistos.has(m.titulo), `Titulo duplicado en banderines: ${m.titulo}`);
    titulosVistos.add(m.titulo);
  }
  assert.ok(plantillaBanderinPorId(cfgFallback.plantillaId).id === cfgFallback.plantillaId);
});
