import { construirPaisHito, type RawPaisEntrada } from './_factory.ts';
import type { PaisHitosHistoricos } from '../hitos-types.ts';

const RAW_OCEANIA: RawPaisEntrada[] = [
  {
    slug: 'australia', nombre: 'Australia', nombreOficial: 'Mancomunidad de Australia', bandera: '🇦🇺', continente: 'Oceanía', capital: 'Canberra', gentilicio: 'australiano',
    hitos: [
      { titulo: 'Día de la Federación de Australia', mes: 1, dia: 1, tipo: 'unidad', relatoBase: 'Conmemora la unión constitucional de las seis colonias australianas en una sola federación parlamentaria soberana del Pacífico Sur.', costumbres: 'encuentros en parques costeros, ceremonias de ciudadanía y almuerzos veraniegos' },
      { titulo: 'Día de Australia y Reflexión Nacional', mes: 1, dia: 26, tipo: 'cultura', relatoBase: 'Jornada de reconocimiento histórico donde conviven los eventos cívicos de ciudadanía, el respeto por los pueblos originarios y la vida comunitaria.', costumbres: 'barbacoas al aire libre, cricket en la playa y actos en Canberra' }
    ]
  },
  {
    slug: 'fiyi', nombre: 'Fiyi', nombreOficial: 'República de Fiyi', bandera: '🇫🇯', continente: 'Oceanía', capital: 'Suva', gentilicio: 'fiyiano',
    hitos: [
      { titulo: 'Día de Fiyi (Independencia)', mes: 10, dia: 10, tipo: 'independencia', relatoBase: 'Marca la fecha exacta en que el archipiélago del Pacífico recuperó su soberanía nacional y dio comienzo a la república contemporánea.', costumbres: 'desfiles coloridos en Albert Park en Suva, ceremonias lovo y música polinesia' },
      { titulo: 'Día de la Constitución', mes: 9, dia: 7, tipo: 'constitucion', relatoBase: 'Recuerda el compromiso legal de igualdad ciudadana entre todas las comunidades que habitan las islas de Fiyi.', costumbres: 'charlas escolares y encuentros vecinales en las islas principales' }
    ]
  },
  {
    slug: 'islas-marshall', nombre: 'Islas Marshall', nombreOficial: 'República de las Islas Marshall', bandera: '🇲🇭', continente: 'Oceanía', capital: 'Majuro', gentilicio: 'marshalés',
    hitos: [
      { titulo: 'Día de la Constitución', mes: 5, dia: 1, tipo: 'constitucion', relatoBase: 'Celebra la entrada en vigor del pacto constitucional propio que dio autogobierno democrático a los atolones micronesios.', costumbres: 'torneos de canoas tradicionales, deportes comunitarios y comidas en Majuro' },
      { titulo: 'Día de la Cultura y los Ancestros', mes: 9, dia: 25, tipo: 'cultura', relatoBase: 'Honra el arte milenario de la navegación en el Pacífico con cartas de palos y conchas marinas transmitido de generación en generación.', costumbres: 'demostraciones artesanales de tejido y navegación tradicional' }
    ]
  },
  {
    slug: 'islas-salomon', nombre: 'Islas Salomón', nombreOficial: 'Islas Salomón', bandera: '🇸🇧', continente: 'Oceanía', capital: 'Honiara', gentilicio: 'salomonense',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 7, tipo: 'independencia', relatoBase: 'Conmemora el nacimiento del Estado soberano melanesio y la unión de cientos de islas bajo una bandera común.', costumbres: 'danzas tradicionales con flautas de pan en Honiara y festivales de canoas' },
      { titulo: 'Día de la Unidad Provincial', mes: 8, dia: 15, tipo: 'unidad', relatoBase: 'Destaca la convivencia entre las distintas provincias insulares y sus lenguas locales.', costumbres: 'encuentros deportivos y ferias comunitarias locales' }
    ]
  },
  {
    slug: 'kiribati', nombre: 'Kiribati', nombreOficial: 'República de Kiribati', bandera: '🇰🇮', continente: 'Oceanía', capital: 'Tarawa Sur', gentilicio: 'kiribatiano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 12, tipo: 'independencia', relatoBase: 'Celebra la soberanía plena del archipiélago ecuatorial repartido a ambos lados de la línea internacional de cambio de fecha.', costumbres: 'ceremonias en Bairiki, cantos corales y comidas colectivas en las casas maneaba' },
      { titulo: 'Día de los Ancianos y Tradiciones (Te Mauri)', mes: 7, dia: 11, tipo: 'cultura', relatoBase: 'Jornada de gratitud comunitaria hacia los mayores que custodian la sabiduría marítima y oral del pueblo kiribatiano.', costumbres: 'encuentros intergeneracionales en los atolones' }
    ]
  },
  {
    slug: 'micronesia', nombre: 'Micronesia', nombreOficial: 'Estados Federados de Micronesia', bandera: '🇫🇲', continente: 'Oceanía', capital: 'Palikir', gentilicio: 'micronesio',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 11, dia: 3, tipo: 'independencia', relatoBase: 'Recuerda el reconocimiento internacional de la plena soberanía federal de los cuatro estados de Chuuk, Kosrae, Pohnpei y Yap.', costumbres: 'ceremonias con collares de flores mwaramwar, danzas y banquetes comunitarios' },
      { titulo: 'Día de la Constitución Federal', mes: 5, dia: 10, tipo: 'constitucion', relatoBase: 'Celebra la entrada en vigor de la Constitución federal que articuló las tradiciones locales con el gobierno parlamentario.', costumbres: 'encuentros cívicos en Palikir y ferias isleñas' }
    ]
  },
  {
    slug: 'nauru', nombre: 'Nauru', nombreOficial: 'República de Nauru', bandera: '🇳🇷', continente: 'Oceanía', capital: 'Yaren', gentilicio: 'nauruano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 1, dia: 31, tipo: 'independencia', relatoBase: 'Conmemora la emancipación definitiva de la república insular más pequeña del mundo, afirmando su dignidad y voz propia en el Pacífico.', costumbres: 'ceremonias de bandera en Yaren, competencias deportivas y cenas familiares' },
      { titulo: 'Día de Angam (Renacimiento del Pueblo)', mes: 10, dia: 26, tipo: 'unidad', relatoBase: 'Significa "regreso a casa" y recuerda la recuperación demográfica y el espíritu resiliente de la población nauruana.', costumbres: 'festejos comunitarios en cada distrito de la isla' }
    ]
  },
  {
    slug: 'nueva-zelanda', nombre: 'Nueva Zelanda', nombreOficial: 'Nueva Zelanda', bandera: '🇳🇿', continente: 'Oceanía', capital: 'Wellington', gentilicio: 'neozelandés',
    hitos: [
      { titulo: 'Día de Waitangi', mes: 2, dia: 6, tipo: 'unidad', relatoBase: 'Recuerda la firma del Tratado de Waitangi en la Bahía de las Islas, pacto fundacional entre los jefes maoríes y la Corona británica.', costumbres: 'ceremonias en los marae maoríes, navegación de waka y diálogos nacionales' },
      { titulo: 'Día del ANZAC', mes: 4, dia: 25, tipo: 'liberacion', relatoBase: 'Honra con respeto la memoria compartida y el coraje de quienes sirvieron por la paz y las libertades en la región.', costumbres: 'servicios al amanecer, corneta tradicional y galletas Anzac caseras' }
    ]
  },
  {
    slug: 'palaos', nombre: 'Palaos', nombreOficial: 'República de Palaos', bandera: '🇵🇼', continente: 'Oceanía', capital: 'Ngerulmud', gentilicio: 'palauano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 10, dia: 1, tipo: 'independencia', relatoBase: 'Celebra el acceso pleno a la independencia como república del Pacífico reconocida por su compromiso ambiental marino.', costumbres: 'celebraciones frente al Capitolio en Ngerulmud, regatas y gastronomía marina' },
      { titulo: 'Día de la Constitución', mes: 7, dia: 9, tipo: 'constitucion', relatoBase: 'Evoca la aprobación de la Carta Magna pionera que protegió los arrecifes, la cultura tradicional y la soberanía civil.', costumbres: 'encuentros escolares y jornadas de conservación ambiental' }
    ]
  },
  {
    slug: 'papua-nueva-guinea', nombre: 'Papúa Nueva Guinea', nombreOficial: 'Estado Independiente de Papúa Nueva Guinea', bandera: '🇵🇬', continente: 'Oceanía', capital: 'Port Moresby', gentilicio: 'papú',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 16, tipo: 'independencia', relatoBase: 'Celebra el nacimiento pacífico de una de las naciones con mayor diversidad lingüística del planeta bajo su bandera del ave del paraíso.', costumbres: 'espectaculares festivales sing-sing con cantos y danzas de todas las provincias' },
      { titulo: 'Día de la Recuerdo Nacional', mes: 7, dia: 23, tipo: 'liberacion', relatoBase: 'Honra a las comunidades de las tierras altas y costas que protegieron el territorio durante momentos críticos del siglo pasado.', costumbres: 'actos ceremoniales en Port Moresby y a lo largo del sendero Kokoda' }
    ]
  },
  {
    slug: 'samoa', nombre: 'Samoa', nombreOficial: 'Estado Independiente de Samoa', bandera: '🇼🇸', continente: 'Oceanía', capital: 'Apia', gentilicio: 'samoano',
    hitos: [
      { titulo: 'Día de la Independencia (Primer País Polinesio Libre)', mes: 6, dia: 1, tipo: 'independencia', relatoBase: 'Celebra la emancipación histórica que convirtió a Samoa en la primera nación insular del Pacífico Sur en alcanzar su independencia.', costumbres: 'desfiles en Apia, competencias de remo fautasi y banquetes umu en familia' },
      { titulo: 'Día del Patrimonio Cultural Samoano (Fa\'a Samoa)', mes: 11, dia: 14, tipo: 'cultura', relatoBase: 'Destaca los valores tradicionales de respeto familiar, hospitalidad y cuidado mutuo que guían la vida cotidiana en las aldeas.', costumbres: 'ceremonias del \'ava, danzas siva y cantos comunitarios' }
    ]
  },
  {
    slug: 'tonga', nombre: 'Tonga', nombreOficial: 'Reino de Tonga', bandera: '🇹🇴', continente: 'Oceanía', capital: 'Nukualofa', gentilicio: 'tongano',
    hitos: [
      { titulo: 'Día de la Emancipación', mes: 6, dia: 4, tipo: 'liberacion', relatoBase: 'Celebra la libertad civil y la soberanía ininterrumpida del único reino polinesio que nunca perdió su independencia formal.', costumbres: 'banderas en Nukualofa, conciertos corales y encuentros en familia' },
      { titulo: 'Día de la Constitución', mes: 11, dia: 4, tipo: 'constitucion', relatoBase: 'Conmemora la promulgación constitucional impulsada por el rey Tupou I, que consagró derechos de propiedad y ciudadanía.', costumbres: 'ceremonias oficiales y comidas tradicionales festivas' }
    ]
  },
  {
    slug: 'tuvalu', nombre: 'Tuvalu', nombreOficial: 'Tuvalu', bandera: '🇹🇻', continente: 'Oceanía', capital: 'Funafuti', gentilicio: 'tuvaluano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 10, dia: 1, tipo: 'independencia', relatoBase: 'Conmemora el nacimiento soberano del archipiélago polinesio de nueve islas unidas por la solidaridad comunitaria frente al océano.', costumbres: 'danzas tradicionales fatele en Funafuti, torneos y banquetes en los fales' },
      { titulo: 'Día Nacional de la Juventud y la Comunidad', mes: 8, dia: 4, tipo: 'cultura', relatoBase: 'Reúne a las familias de todos los atolones en torno a la música coral, el deporte y la preservación ambiental.', costumbres: 'encuentros deportivos y coros en las plazas de cada isla' }
    ]
  },
  {
    slug: 'vanuatu', nombre: 'Vanuatu', nombreOficial: 'República de Vanuatu', bandera: '🇻🇺', continente: 'Oceanía', capital: 'Port Vila', gentilicio: 'vanuatuense',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 30, tipo: 'independencia', relatoBase: 'Marca el fin de la administración conjunta colonial y el surgimiento de Vanuatu ("Nuestra Tierra para Siempre") como república libre melanesia.', costumbres: 'ceremonias de kava tradicional, danzas con tambores tam-tam en Port Vila y ferias' },
      { titulo: 'Día de la Constitución', mes: 10, dia: 5, tipo: 'constitucion', relatoBase: 'Celebra la ley suprema que reconoció las lenguas bislama, inglés y francés junto con el derecho consuetudinario isleño.', costumbres: 'jornadas educativas y festejos vecinales' }
    ]
  }
];

export const HITOS_OCEANIA: PaisHitosHistoricos[] = RAW_OCEANIA.map(construirPaisHito);
