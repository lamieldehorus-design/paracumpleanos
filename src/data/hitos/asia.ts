import { construirPaisHito, type RawPaisEntrada } from './_factory.ts';
import type { PaisHitosHistoricos } from '../hitos-types.ts';

const RAW_ASIA: RawPaisEntrada[] = [
  {
    slug: 'afganistan', nombre: 'Afganistán', nombreOficial: 'Afganistán', bandera: '🇦🇫', continente: 'Asia', capital: 'Kabul', gentilicio: 'afgano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 19, tipo: 'independencia', relatoBase: 'Recuerda el tratado histórico que reconoció la plena soberanía exterior del país centroasiático de antiguas rutas de la seda.', costumbres: 'reuniones familiares con té verde, poesía persa y pashtún y platos de arroz kabuli' },
      { titulo: 'Año Nuevo Tradicional (Nowruz)', mes: 3, dia: 21, tipo: 'cultura', relatoBase: 'Celebración milenaria del equinoccio de primavera y la renovación de la tierra, muy arraigada en las tradiciones culturales del país.', costumbres: 'preparación del postre tradicional haft mewa y paseos familiares en jardines' }
    ]
  },
  {
    slug: 'arabia-saudita', nombre: 'Arabia Saudita', nombreOficial: 'Reino de Arabia Saudita', bandera: '🇸🇦', continente: 'Asia', capital: 'Riad', gentilicio: 'saudí',
    hitos: [
      { titulo: 'Día Nacional Saudí (Al-Yaom Al-Watani)', mes: 9, dia: 23, tipo: 'unidad', relatoBase: 'Conmemora la unificación histórica de las regiones de la península arábiga bajo el nombre de Reino de Arabia Saudita.', costumbres: 'desfiles aéreos, edificios iluminados de verde en Riad y Yeda y danza tradicional ardah' },
      { titulo: 'Día de la Fundación (Yawm Al-Ta\'sis)', mes: 2, dia: 22, tipo: 'cultura', relatoBase: 'Celebra las raíces históricas en Diriyah y la artesanía, arquitectura de adobe y hospitalidad tradicional del café árabe.', costumbres: 'vestimentas históricas regionales y festivales patrimoniales' }
    ]
  },
  {
    slug: 'armenia', nombre: 'Armenia', nombreOficial: 'República de Armenia', bandera: '🇦🇲', continente: 'Asia', capital: 'Ereván', gentilicio: 'armenio',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 21, tipo: 'independencia', relatoBase: 'Celebra el referéndum ciudadano abrumador que proclamó el renacimiento de la república armenia frente al monte Ararat.', costumbres: 'conciertos en la Plaza de la República de Ereván, música de duduk y khorovats familiar' },
      { titulo: 'Día de la Primera República', mes: 5, dia: 28, tipo: 'unidad', relatoBase: 'Recuerda la proclamación fundacional que salvó y reconstruyó la estatalidad armenia moderna en el Cáucaso.', costumbres: 'ceremonias en el complejo conmemorativo de Sardarapat' }
    ]
  },
  {
    slug: 'azerbaiyan', nombre: 'Azerbaiyán', nombreOficial: 'República de Azerbaiyán', bandera: '🇦🇿', continente: 'Asia', capital: 'Bakú', gentilicio: 'azerbaiyano',
    hitos: [
      { titulo: 'Día de la Independencia (Fundación de la República)', mes: 5, dia: 28, tipo: 'independencia', relatoBase: 'Conmemora la histórica proclamación que estableció la primera república democrática parlamentaria del mundo islámico oriental, pionera en el voto femenino.', costumbres: 'celebraciones en el Bulevar de Bakú, música mugham y plov tradicional en familia' },
      { titulo: 'Día de la Restauración de la Independencia', mes: 10, dia: 18, tipo: 'constitucion', relatoBase: 'Recuerda el acta constitucional que restableció la soberanía plena de Azerbaiyán a orillas del mar Caspio.', costumbres: 'exposiciones culturales y actos educativos en escuelas' }
    ]
  },
  {
    slug: 'banglades', nombre: 'Bangladés', nombreOficial: 'República Popular de Bangladés', bandera: '🇧🇩', continente: 'Asia', capital: 'Daca', gentilicio: 'bangladesí',
    hitos: [
      { titulo: 'Día de la Independencia y Nacional', mes: 3, dia: 26, tipo: 'independencia', relatoBase: 'Evoca la proclamación de soberanía en Daca y la defensa apasionada de la lengua bengalí como raíz de libertad.', costumbres: 'ofrendas en el Memorial Nacional de Savar y desfiles culturales verde y rojo' },
      { titulo: 'Día de la Victoria (Bijoy Dibosh)', mes: 12, dia: 16, tipo: 'liberacion', relatoBase: 'Celebra la culminación victoriosa de la lucha emancipadora y el nacimiento definitivo del Estado bangladesí libre.', costumbres: 'banderas en balcones, poesía de Rabindranath Tagore y reuniones familiares' }
    ]
  },
  {
    slug: 'barein', nombre: 'Baréin', nombreOficial: 'Reino de Baréin', bandera: '🇧🇭', continente: 'Asia', capital: 'Manama', gentilicio: 'bareiní',
    hitos: [
      { titulo: 'Día Nacional de Baréin', mes: 12, dia: 16, tipo: 'unidad', relatoBase: 'Celebra la consolidación del Estado insular del Golfo Pérsico, heredero de la antigua civilización Dilmun y la tradición perlífera.', costumbres: 'fuegos artificiales sobre la bahía de Manama, mercados artesanales y café con cardamomo' },
      { titulo: 'Día de la Carta de Acción Nacional', mes: 2, dia: 14, tipo: 'constitucion', relatoBase: 'Recuerda el acuerdo cívico que sentó bases parlamentarias e institucionales contemporáneas.', costumbres: 'eventos escolares y encuentros culturales comunitarios' }
    ]
  },
  {
    slug: 'birmania', nombre: 'Birmania (Myanmar)', nombreOficial: 'Myanmar', bandera: '🇲🇲', continente: 'Asia', capital: 'Naipyidó', gentilicio: 'birmano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 1, dia: 4, tipo: 'independencia', relatoBase: 'Conmemora la emancipación formal del país del Sudeste Asiático impulsada por el ideario de unidad entre regiones de llanuras y montañas.', costumbres: 'ferias vecinales tradicionales, juegos populares y comidas compartidas en pagodas y barrios' },
      { titulo: 'Día de la Unión (Acuerdo de Panglong)', mes: 2, dia: 12, tipo: 'unidad', relatoBase: 'Recuerda el pacto histórico por la convivencia e igualdad entre los diversos grupos étnicos del territorio birmano.', costumbres: 'danzas culturales regionales y actos cívicos' }
    ]
  },
  {
    slug: 'brunei', nombre: 'Brunéi', nombreOficial: 'Estado de Brunéi Darussalam', bandera: '🇧🇳', continente: 'Asia', capital: 'Bandar Seri Begawan', gentilicio: 'bruneano',
    hitos: [
      { titulo: 'Día Nacional (Independencia)', mes: 2, dia: 23, tipo: 'independencia', relatoBase: 'Celebra la plena soberanía del sultanato en la isla de Borneo ("Morada de Paz") y el cuidado comunitario en torno a Kampong Ayer.', costumbres: 'gran desfile matinal en la Plaza Taman Sir Muda Omar Ali Saifuddien y cenas familiares' },
      { titulo: 'Día de la Lengua Malaya y el Patrimonio', mes: 5, dia: 31, tipo: 'cultura', relatoBase: 'Pone en relieve la historia marítima, los tejidos tradicionales jong sarat y el idioma compartido.', costumbres: 'exposiciones de artesanía en Bandar Seri Begawan' }
    ]
  },
  {
    slug: 'butan', nombre: 'Bután', nombreOficial: 'Reino de Bután', bandera: '🇧🇹', continente: 'Asia', capital: 'Timbu', gentilicio: 'butanés',
    hitos: [
      { titulo: 'Día Nacional de Bután', mes: 12, dia: 17, tipo: 'unidad', relatoBase: 'Conmemora la unificación del reino himalayo del Dragón del Trueno, célebre en el mundo por medir la Felicidad Nacional Bruta y cuidar sus bosques.', costumbres: 'celebraciones en el estadio Changlimithang de Timbu con danzas de máscaras y tiro con arco' },
      { titulo: 'Día de la Democracia y la Constitución', mes: 7, dia: 18, tipo: 'constitucion', relatoBase: 'Recuerda la promulgación de la Constitución democrática que equilibró tradición cultural y derechos modernos.', costumbres: 'ceremonias escolares y conservación de los dzongs históricos' }
    ]
  },
  {
    slug: 'camboya', nombre: 'Camboya', nombreOficial: 'Reino de Camboya', bandera: '🇰🇭', continente: 'Asia', capital: 'Nom Pen', gentilicio: 'camboyano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 11, dia: 9, tipo: 'independencia', relatoBase: 'Celebra la recuperación incruenta de la soberanía camboyana bajo la figura del templo de Angkor Wat en su bandera.', costumbres: 'ceremonia de la antorcha en el Monumento a la Independencia de Nom Pen y fuegos junto al Mekong' },
      { titulo: 'Día de la Constitución', mes: 9, dia: 24, tipo: 'constitucion', relatoBase: 'Conmemora la restauración constitucional y pacífica del reino tras décadas difíciles.', costumbres: 'actos oficiales y ofrendas florales familiares' }
    ]
  },
  {
    slug: 'catar', nombre: 'Catar', nombreOficial: 'Estado de Catar', bandera: '🇶🇦', continente: 'Asia', capital: 'Doha', gentilicio: 'catarí',
    hitos: [
      { titulo: 'Día Nacional de Catar (Al-Yaoum Al-Watani)', mes: 12, dia: 18, tipo: 'unidad', relatoBase: 'Honra la unión histórica de las tribus peninsulares guiada por Jassim bin Mohammed Al Thani bajo valores de hospitalidad y perseverancia.', costumbres: 'celebraciones en la Corniche de Doha, aldea patrimonial Darb Al Saai y danzas tradicionales' },
      { titulo: 'Día del Deporte Nacional', mes: 2, dia: 11, tipo: 'cultura', relatoBase: 'Jornada pública dedicada a la vida sana, la convivencia familiar en parques y la cohesión ciudadana.', costumbres: 'actividades deportivas gratuitas en parques y paseos costeros de Doha' }
    ]
  },
  {
    slug: 'china', nombre: 'China', nombreOficial: 'República Popular China', bandera: '🇨🇳', continente: 'Asia', capital: 'Pekín', gentilicio: 'chino',
    hitos: [
      { titulo: 'Día Nacional de China (Fiesta de Octubre)', mes: 10, dia: 1, tipo: 'unidad', relatoBase: 'Marca la proclamación fundacional en la Plaza de Tiananmén en Pekín y abre la Semana Dorada otoñal de viajes y reencuentro familiar.', costumbres: 'faroles rojos en avenidas principales, viajes a visitar a los abuelos y exhibiciones florales' },
      { titulo: 'Día de la Constitución Nacional', mes: 12, dia: 4, tipo: 'constitucion', relatoBase: 'Promueve el conocimiento cívico de la ley fundamental en escuelas, bibliotecas y municipios del país.', costumbres: 'lecturas legales comunitarias y jornadas abiertas en museos' }
    ]
  },
  {
    slug: 'chipre', nombre: 'Chipre', nombreOficial: 'República de Chipre', bandera: '🇨🇾', continente: 'Asia', capital: 'Nicosia', gentilicio: 'chipriota',
    hitos: [
      { titulo: 'Día de la Independencia de Chipre', mes: 10, dia: 1, tipo: 'independencia', relatoBase: 'Celebra la constitución de la República isleña del Mediterráneo Oriental y la imagen de las ramas de olivo de paz en su bandera.', costumbres: 'desfile en Nicosia, exposiciones en museos y meze mediterráneo en familia' },
      { titulo: 'Día Nacional de Primavera y Libertad', mes: 4, dia: 1, tipo: 'liberacion', relatoBase: 'Evoca el movimiento histórico por la autodeterminación de los habitantes de la isla.', costumbres: 'eventos escolares y encuentros culturales regionales' }
    ]
  },
  {
    slug: 'corea-del-norte', nombre: 'Corea del Norte', nombreOficial: 'República Popular Democrática de Corea', bandera: '🇰🇵', continente: 'Asia', capital: 'Pionyang', gentilicio: 'norcoreano',
    hitos: [
      { titulo: 'Día de la Liberación de Corea (Gwangbokjeol)', mes: 8, dia: 15, tipo: 'liberacion', relatoBase: 'Comparte en toda la península coreana la memoria del fin de la ocupación colonial extranjera y la recuperación de la lengua y cultura propias.', costumbres: 'ceremonias históricas en Pionyang y reuniones familiares' },
      { titulo: 'Día de la Fundación de la República', mes: 9, dia: 9, tipo: 'unidad', relatoBase: 'Conmemora la instauración estatal del norte peninsular a comienzos de septiembre.', costumbres: 'actos oficiales y espectáculos corales y gimnásticos' }
    ]
  },
  {
    slug: 'corea-del-sur', nombre: 'Corea del Sur', nombreOficial: 'República de Corea', bandera: '🇰🇷', continente: 'Asia', capital: 'Seúl', gentilicio: 'surcoreano',
    hitos: [
      { titulo: 'Día de la Liberación Nacional (Gwangbokjeol)', mes: 8, dia: 15, tipo: 'liberacion', relatoBase: 'Literalmente "retorno de la luz", conmemora la recuperación de la soberanía coreana y el renacimiento de la cultura y el alfabeto hangul.', costumbres: 'banderas Taegeukgi en cada calle de Seúl y Busan y entrada gratuita a palacios reales' },
      { titulo: 'Día de la Fundación Nacional (Gaecheonjeol) y Día del Hangul', mes: 10, dia: 3, tipo: 'unidad', relatoBase: 'Celebra las raíces milenarias de Gojoseon bajo el ideal humanista hongik ingan ("beneficiar ampliamente a la humanidad").', costumbres: 'ceremonias culturales, caminatas otoñales por parques nacionales y cocina tradicional' }
    ]
  },
  {
    slug: 'emiratos-arabes-unidos', nombre: 'Emiratos Árabes Unidos', nombreOficial: 'Emiratos Árabes Unidos', bandera: '🇦🇪', continente: 'Asia', capital: 'Abu Dabi', gentilicio: 'emiratí',
    hitos: [
      { titulo: 'Día de la Unión (Eid Al Etihad)', mes: 12, dia: 2, tipo: 'unidad', relatoBase: 'Celebra la unión pacífica de los siete emiratos bajo la visión integradora de Zayed bin Sultán Al Nahayan para transformar aldeas costeras y desiertos en una federación moderna.', costumbres: 'desfiles en Abu Dabi y Dubái, danzas ayyala con bastones y decoración de los colores rojo, verde, blanco y negro' },
      { titulo: 'Día de la Bandera Emiratí', mes: 11, dia: 3, tipo: 'cultura', relatoBase: 'Jornada de unión ciudadana en la que instituciones, escuelas y familias izan simultáneamente la bandera nacional.', costumbres: 'encuentros escolares y actividades comunitarias de otoño' }
    ]
  },
  {
    slug: 'estado-de-palestina', nombre: 'Estado de Palestina', nombreOficial: 'Estado de Palestina', bandera: '🇵🇸', continente: 'Asia', capital: 'Jerusalén Este / Ramala', gentilicio: 'palestino',
    hitos: [
      { titulo: 'Día de la Declaración de Independencia', mes: 11, dia: 15, tipo: 'independencia', relatoBase: 'Conmemora la proclamación histórica que expresó ante el mundo el derecho a la autodeterminación, el patrimonio milenario y la paz del pueblo palestino.', costumbres: 'actos culturales, lectura de poemas de Mahmoud Darwish y encuentros familiares' },
      { titulo: 'Día del Patrimonio y el Olivo', mes: 10, dia: 17, tipo: 'cultura', relatoBase: 'Celebra la cosecha tradicional de la aceituna, los bordados tatreez y las raíces agrícolas compartidas entre generaciones.', costumbres: 'cosecha familiar de olivares en aldeas y muestras artesanales de bordado tradicional' }
    ]
  },
  {
    slug: 'filipinas', nombre: 'Filipinas', nombreOficial: 'República de Filipinas', bandera: '🇵🇭', continente: 'Asia', capital: 'Manila', gentilicio: 'filipino',
    hitos: [
      { titulo: 'Día de la Independencia (Araw ng Kalayaan)', mes: 6, dia: 12, tipo: 'independencia', relatoBase: 'Evoca la proclamación de Kawit en Cavite que dio nacimiento a la primera república constitucional democrática de Asia.', costumbres: 'ceremonias en el Parque Rizal de Manila, barong tagalog tradicional y fiestas familiares' },
      { titulo: 'Día de José Rizal', mes: 12, dia: 30, tipo: 'cultura', relatoBase: 'Honra al médico, escritor y pensador cuyas novelas inspiraron con ideas cívicas y pacíficas la conciencia nacional filipina.', costumbres: 'ofrendas en Luneta y lecturas literarias educativas' }
    ]
  },
  {
    slug: 'georgia', nombre: 'Georgia', nombreOficial: 'Georgia', bandera: '🇬🇪', continente: 'Asia', capital: 'Tiflis', gentilicio: 'georgiano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 5, dia: 26, tipo: 'independencia', relatoBase: 'Conmemora la proclamación de la primera república democrática en Tiflis y su tradición de ocho mil años de viticultura y canto polifónico.', costumbres: 'festivales florales por la Avenida Rustaveli de Tiflis, música polifónica y banquetes supra' },
      { titulo: 'Día de la Restauración Estatal (9 de Abril)', mes: 4, dia: 9, tipo: 'unidad', relatoBase: 'Une el respeto por la lucha ciudadana pacífica por la libertad con la firma del acta restauradora de independencia.', costumbres: 'tulipanes depositados frente al Parlamento y homenajes ciudadanos' }
    ]
  },
  {
    slug: 'india', nombre: 'India', nombreOficial: 'República de la India', bandera: '🇮🇳', continente: 'Asia', capital: 'Nueva Delhi', gentilicio: 'indio',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 15, tipo: 'independencia', relatoBase: 'Recuerda la medianoche histórica del "encuentro con el destino" que selló la libertad alcanzada mediante la resistencia pacífica de millones de ciudadanos.', costumbres: 'izamiento en el Fuerte Rojo de Nueva Delhi, cometas de colores en el cielo y dulces tradicionales' },
      { titulo: 'Día de la República', mes: 1, dia: 26, tipo: 'constitucion', relatoBase: 'Celebra la entrada en vigor de la Constitución democrática más extensa del mundo inspirada en la igualdad y la diversidad lingüística.', costumbres: 'gran desfile cultural por Kartavya Path mostrando danzas de cada estado de la India' }
    ]
  },
  {
    slug: 'indonesia', nombre: 'Indonesia', nombreOficial: 'República de Indonesia', bandera: '🇮🇩', continente: 'Asia', capital: 'Yakarta', gentilicio: 'indonesio',
    hitos: [
      { titulo: 'Día de la Proclamación de Independencia (Hari Merdeka)', mes: 8, dia: 17, tipo: 'independencia', relatoBase: 'Conmemora la breve y decisiva proclamación leída por Sukarno y Hatta en Yakarta bajo el lema "Unidad en la Diversidad" (Bhinneka Tunggal Ika).', costumbres: 'juegos vecinales panjat pinang, carreras de sacos y telas batik rojo y blanco en las calles' },
      { titulo: 'Día de Pancasila (Principios Fundacionales)', mes: 6, dia: 1, tipo: 'constitucion', relatoBase: 'Recuerda los cinco pilares cívicos de convivencia, justicia social y democracia en el gran archipiélago.', costumbres: 'encuentros escolares y vestimentas tradicionales de las distintas islas' }
    ]
  },
  {
    slug: 'irak', nombre: 'Irak', nombreOficial: 'República de Irak', bandera: '🇮🇶', continente: 'Asia', capital: 'Bagdad', gentilicio: 'iraquí',
    hitos: [
      { titulo: 'Día Nacional de Irak', mes: 10, dia: 3, tipo: 'independencia', relatoBase: 'Recuerda el fin de los mandatos externos y el ingreso soberano de la cuna mesopotámica en la comunidad internacional de naciones.', costumbres: 'celebraciones culturales junto al río Tigris en Bagdad, poesía y mesas familiares con masgouf' },
      { titulo: 'Día de la República', mes: 7, dia: 14, tipo: 'revolucion', relatoBase: 'Conmemora la instauración republicana y la historia cívica contemporánea entre los ríos Tigris y Éufrates.', costumbres: 'actos culturales y encuentros literarios en la calle Mutanabbi' }
    ]
  },
  {
    slug: 'iran', nombre: 'Irán', nombreOficial: 'República Islámica de Irán', bandera: '🇮🇷', continente: 'Asia', capital: 'Teherán', gentilicio: 'iraní',
    hitos: [
      { titulo: 'Año Nuevo Persa (Nowruz)', mes: 3, dia: 21, tipo: 'cultura', relatoBase: 'Tradición tres veces milenaria de equinoccio primaveral dedicada a la limpieza del hogar, el perdón familiar y la bienvenida a la naturaleza renovada.', costumbres: 'armado de la mesa simbólica Haft-Sin con siete elementos, visitas a los mayores y poesía de Hafez' },
      { titulo: 'Día Nacional de Febrero', mes: 2, dia: 11, tipo: 'revolucion', relatoBase: 'Conmemora el cambio histórico contemporáneo del sistema institucional y la participación masiva en las plazas de Teherán.', costumbres: 'reuniones cívicas de invierno y eventos públicos' }
    ]
  },
  {
    slug: 'israel', nombre: 'Israel', nombreOficial: 'Estado de Israel', bandera: '🇮🇱', continente: 'Asia', capital: 'Jerusalén', gentilicio: 'israelí',
    hitos: [
      { titulo: 'Día de la Declaración de Independencia (5 de Iyar)', mes: 5, dia: 14, tipo: 'independencia', relatoBase: 'Conmemora la lectura en Tel Aviv de la Declaración de Independencia que estableció el Estado moderno basado en el desarrollo científico, agrícola y cultural.', costumbres: 'reuniones familiares al aire libre, bailes folclóricos y puertas abiertas en museos' },
      { titulo: 'Día de la Lengua Hebrea y la Memoria Cívica', mes: 1, dia: 7, tipo: 'cultura', relatoBase: 'Celebra el renacimiento moderno del idioma hebreo como lengua viva cotidiana de poesía, ciencia y familia.', costumbres: 'festivales literarios, charlas escolares y actividades culturales' }
    ]
  },
  {
    slug: 'japon', nombre: 'Japón', nombreOficial: 'Japón', bandera: '🇯🇵', continente: 'Asia', capital: 'Tokio', gentilicio: 'japonés',
    hitos: [
      { titulo: 'Día de la Fundación Nacional (Kenkoku Kinen no Hi)', mes: 2, dia: 11, tipo: 'unidad', relatoBase: 'Invita a reflexionar sobre el origen cultural milenario del archipiélago japonés y el amor comunitario por sus tradiciones y su naturaleza.', costumbres: 'visitas tranquilas a santuarios, ceremonias en Tokio y reuniones familiares invernales' },
      { titulo: 'Día de la Constitución (Kenpō Kinenbi)', mes: 5, dia: 3, tipo: 'constitucion', relatoBase: 'Forma parte de la Semana Dorada primaveral y conmemora la carta constitucional pacifista centrada en la soberanía popular y los derechos humanos.', costumbres: 'foros cívicos, salidas primaverales a parques y descanso familiar' }
    ]
  },
  {
    slug: 'jordania', nombre: 'Jordania', nombreOficial: 'Reino Hachemita de Jordania', bandera: '🇯🇴', continente: 'Asia', capital: 'Amán', gentilicio: 'jordano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 5, dia: 25, tipo: 'independencia', relatoBase: 'Celebra la soberanía plena del reino árabe custodio de Petra, Jerash y el desierto de Wadi Rum.', costumbres: 'desfiles en Amán, conciertos tradicionales y almuerzos familiares con mansaf' },
      { titulo: 'Día de la Bandera y la Gran Revuelta Árabe', mes: 4, dia: 16, tipo: 'unidad', relatoBase: 'Destaca los valores de convivencia, hospitalidad y paz regional defendidos en las ciudades jordanas.', costumbres: 'izamientos en escuelas y ferias culturales en la Ciudadela de Amán' }
    ]
  },
  {
    slug: 'kazajistan', nombre: 'Kazajistán', nombreOficial: 'República de Kazajistán', bandera: '🇰🇿', continente: 'Asia', capital: 'Astaná', gentilicio: 'kazajo',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 12, dia: 16, tipo: 'independencia', relatoBase: 'Conmemora la proclamación de soberanía del vasto país de la estepa euroasiática heredero de tradiciones nómades y ciencia espacial.', costumbres: 'actos festivos en Astaná y Almatý, música de dombra y mesas con beshbarmak' },
      { titulo: 'Día de la República', mes: 10, dia: 25, tipo: 'constitucion', relatoBase: 'Evoca la Declaración de Soberanía Estatal que dio fundamento jurídico al desarrollo independiente del país.', costumbres: 'encuentros deportivos ecuestres y conciertos en plazas' }
    ]
  },
  {
    slug: 'kirguistan', nombre: 'Kirguistán', nombreOficial: 'República Kirguisa', bandera: '🇰🇬', continente: 'Asia', capital: 'Biskek', gentilicio: 'kirguís',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 31, tipo: 'independencia', relatoBase: 'Celebra la soberanía del país montañoso del Tian Shan y su epopeya oral milenaria de Manas, símbolo de unidad nómada.', costumbres: 'celebraciones en la Plaza Ala-Too de Biskek, juegos ecuestres kok-boru y recitales con komuz' },
      { titulo: 'Día de la Constitución', mes: 5, dia: 5, tipo: 'constitucion', relatoBase: 'Recuerda el marco constitucional que estableció la democracia parlamentaria en Asia Central.', costumbres: 'caminatas primaverales y jornadas cívicas' }
    ]
  },
  {
    slug: 'kuwait', nombre: 'Kuwait', nombreOficial: 'Estado de Kuwait', bandera: '🇰🇼', continente: 'Asia', capital: 'Ciudad de Kuwait', gentilicio: 'kuwaití',
    hitos: [
      { titulo: 'Día Nacional de Kuwait', mes: 2, dia: 25, tipo: 'unidad', relatoBase: 'Celebra la historia marítima de constructores de dhows y la estabilidad constitucional pionera en el Golfo Pérsico.', costumbres: 'iluminación de las Torres de Kuwait, música tradicional y paseos por la costa' },
      { titulo: 'Día de la Liberación', mes: 2, dia: 26, tipo: 'liberacion', relatoBase: 'Conmemora la recuperación definitiva de la soberanía territorial kuwaití justo al día siguiente de la Fiesta Nacional.', costumbres: 'encuentros familiares en diwaniyas y celebraciones solidarias' }
    ]
  },
  {
    slug: 'laos', nombre: 'Laos', nombreOficial: 'República Democrática Popular Lao', bandera: '🇱🇦', continente: 'Asia', capital: 'Vientián', gentilicio: 'laosiano',
    hitos: [
      { titulo: 'Día Nacional de Laos', mes: 12, dia: 2, tipo: 'unidad', relatoBase: 'Celebra la consolidación contemporánea del antiguo Reino del Millón de Elefantes (Lan Xang) a lo largo del río Mekong.', costumbres: 'desfiles en Vientián frente al templo Pha That Luang y ceremonias familiares baci' },
      { titulo: 'Día de la Independencia de Octubre', mes: 10, dia: 12, tipo: 'independencia', relatoBase: 'Recuerda la primera proclamación independentista del movimiento Lao Issara por la autodeterminación nacional.', costumbres: 'actividades culturales e históricas en Luang Prabang y Vientián' }
    ]
  },
  {
    slug: 'libano', nombre: 'Líbano', nombreOficial: 'República Libanesa', bandera: '🇱🇧', continente: 'Asia', capital: 'Beirut', gentilicio: 'libanés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 11, dia: 22, tipo: 'independencia', relatoBase: 'Recuerda el triunfo de la unidad ciudadana frente al mandato externo en la fortaleza de Rashaya y el símbolo eterno del cedro libanés.', costumbres: 'actos cívicos en Beirut, visitas a los bosques de cedros y grandes mesas con tabule y kibbeh' },
      { titulo: 'Día de la Bandera del Cedro', mes: 11, dia: 21, tipo: 'unidad', relatoBase: 'Víspera escolar y comunitaria centrada en el respeto por la pluralidad religiosa y cultural del Líbano.', costumbres: 'ceremonias educativas y canciones de Fairuz en hogares y colegios' }
    ]
  },
  {
    slug: 'malasia', nombre: 'Malasia', nombreOficial: 'Malasia', bandera: '🇲🇾', continente: 'Asia', capital: 'Kuala Lumpur', gentilicio: 'malasio',
    hitos: [
      { titulo: 'Día de la Independencia (Hari Merdeka)', mes: 8, dia: 31, tipo: 'independencia', relatoBase: 'Evoca el grito siete veces repetido de "Merdeka!" en el estadio de Kuala Lumpur que dio inicio a la nación multicultural del Sudeste Asiático.', costumbres: 'gran desfile en la Plaza Merdeka y convivencia de familias malayas, chinas e indias' },
      { titulo: 'Día de Malasia (Hari Malaysia)', mes: 9, dia: 16, tipo: 'unidad', relatoBase: 'Celebra la federación ampliada con la incorporación de Sabah y Sarawak en la isla de Borneo.', costumbres: 'festivales gastronómicos y conciertos por la unidad' }
    ]
  },
  {
    slug: 'maldivas', nombre: 'Maldivas', nombreOficial: 'República de Maldivas', bandera: '🇲🇻', continente: 'Asia', capital: 'Malé', gentilicio: 'maldivo',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 26, tipo: 'independencia', relatoBase: 'Conmemora la firma del tratado que garantizó la plena independencia del archipiélago coralino de veintiséis atolones en el Índico.', costumbres: 'desfiles en la Plaza de la República de Malé, tambores boduberu y cenas isleñas' },
      { titulo: 'Día de la República', mes: 11, dia: 11, tipo: 'constitucion', relatoBase: 'Marca la adopción de la forma republicana moderna en las islas.', costumbres: 'eventos cívicos, regatas de dhonis y reuniones vecinales' }
    ]
  },
  {
    slug: 'mongolia', nombre: 'Mongolia', nombreOficial: 'Mongolia', bandera: '🇲🇳', continente: 'Asia', capital: 'Ulán Bator', gentilicio: 'mongol',
    hitos: [
      { titulo: 'Festival Naadam y Día de la Revolución Popular', mes: 7, dia: 11, tipo: 'cultura', relatoBase: 'Une la afirmación de la independencia moderna con los tres juegos tradicionales viriles —lucha mongola, tiro con arco y carreras de caballos— heredados de la estepa.', costumbres: 'ceremonias en Ulán Bator, cantos difónicos khöömii y empanadillas khuushuur' },
      { titulo: 'Día de la Proclamación de la República', mes: 11, dia: 26, tipo: 'constitucion', relatoBase: 'Conmemora la promulgación de la primera Constitución republicana y la adopción del nombre moderno del país.', costumbres: 'torneos tradicionales y actos escolares' }
    ]
  },
  {
    slug: 'nepal', nombre: 'Nepal', nombreOficial: 'República Federal Democrática de Nepal', bandera: '🇳🇵', continente: 'Asia', capital: 'Katmandú', gentilicio: 'nepalí',
    hitos: [
      { titulo: 'Día de la Constitución Nacional (Samvidhan Diwas)', mes: 9, dia: 20, tipo: 'constitucion', relatoBase: 'Celebra la carta constitucional federal promulgada por asamblea electa en el corazón del Himalaya bajo su singular bandera doble triangular.', costumbres: 'iluminación de hogares con lámparas de aceite y actos en Tundikhel en Katmandú' },
      { titulo: 'Día de la Democracia (Prajatantra Diwas)', mes: 2, dia: 19, tipo: 'revolucion', relatoBase: 'Recuerda la apertura democrática ciudadana que puso fin al antiguo régimen cerrado en el valle de Katmandú.', costumbres: 'ceremonias culturales y encuentros comunitarios' }
    ]
  },
  {
    slug: 'oman', nombre: 'Omán', nombreOficial: 'Sultanato de Omán', bandera: '🇴🇲', continente: 'Asia', capital: 'Mascate', gentilicio: 'omaní',
    hitos: [
      { titulo: 'Día Nacional de Omán', mes: 11, dia: 18, tipo: 'unidad', relatoBase: 'Celebra la historia milenaria de navegantes omaníes del océano Índico y la modernización serena basada en la tolerancia y el diálogo.', costumbres: 'desfiles en Mascate, carreras de camellos y caballos y halwa omaní con café' },
      { titulo: 'Día del Renacimiento Cultural (23 de Julio)', mes: 7, dia: 23, tipo: 'cultura', relatoBase: 'Recuerda el impulso moderno a la educación pública, los sistemas de riego tradicionales aflaj y las carreteras nacionales.', costumbres: 'conferencias patrimoniales y eventos comunitarios en Salalah y Mascate' }
    ]
  },
  {
    slug: 'pakistan', nombre: 'Pakistán', nombreOficial: 'República Islámica de Pakistán', bandera: '🇵🇰', continente: 'Asia', capital: 'Islamabad', gentilicio: 'pakistaní',
    hitos: [
      { titulo: 'Día de la Independencia (Youm-e-Azadi)', mes: 8, dia: 14, tipo: 'independencia', relatoBase: 'Conmemora la fundación de Pakistán bajo el liderazgo cívico de Muhammad Ali Jinnah y la visión poética de Allama Iqbal.', costumbres: 'banderas verdes y blancas en Islamabad y Lahore, cometas y comidas familiares' },
      { titulo: 'Día de Pakistán (Resolución de Lahore)', mes: 3, dia: 23, tipo: 'constitucion', relatoBase: 'Recuerda tanto la resolución histórica por un Estado propio como la proclamación de la primera Constitución republicana.', costumbres: 'parada nacional en Islamabad y ceremonias en el Minar-e-Pakistan' }
    ]
  },
  {
    slug: 'singapur', nombre: 'Singapur', nombreOficial: 'República de Singapur', bandera: '🇸🇬', continente: 'Asia', capital: 'Singapur', gentilicio: 'singapurense',
    hitos: [
      { titulo: 'Día Nacional de Singapur', mes: 8, dia: 9, tipo: 'independencia', relatoBase: 'Celebra el nacimiento de la ciudad-Estado independiente y su transformación en puerto próspero gracias a la educación y convivencia multirracial.', costumbres: 'espectáculo en la bahía Marina Bay, cantos colectivos y banderas rojas y blancas en edificios' },
      { titulo: 'Día de la Armonía Racial', mes: 7, dia: 21, tipo: 'unidad', relatoBase: 'Fomenta desde las escuelas el respeto cotidiano entre las comunidades china, malaya, india y euroasiática.', costumbres: 'alumnos con vestimentas de distintas culturas y ferias gastronómicas vecinales' }
    ]
  },
  {
    slug: 'siria', nombre: 'Siria', nombreOficial: 'República Árabe Siria', bandera: '🇸🇾', continente: 'Asia', capital: 'Damasco', gentilicio: 'sirio',
    hitos: [
      { titulo: 'Día de la Evacuación (Independencia)', mes: 4, dia: 17, tipo: 'independencia', relatoBase: 'Recuerda la partida definitiva de las tropas extranjeras y la afirmación soberana de Damasco y Alepo, ciudades milenarias del Mediterráneo oriental.', costumbres: 'ceremonias históricas, música clásica árabe y dulces tradicionales de pistacho' },
      { titulo: 'Día del Patrimonio de Damasco y Palmira', mes: 9, dia: 14, tipo: 'cultura', relatoBase: 'Pone en valor la escritura ugarítica, la caligrafía y las artes artesanales sirias compartidas por generaciones.', costumbres: 'exposiciones culturales y encuentros literarios' }
    ]
  },
  {
    slug: 'sri-lanka', nombre: 'Sri Lanka', nombreOficial: 'República Democrática Socialista de Sri Lanka', bandera: '🇱🇰', continente: 'Asia', capital: 'Sri Jayawardenepura Kotte / Colombo', gentilicio: 'esrilanqués',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 2, dia: 4, tipo: 'independencia', relatoBase: 'Celebra la emancipación soberana de la isla llamada "Perla del Índico" y sus dos mil años de historia agrícola y artística.', costumbres: 'desfiles en Galle Face Green en Colombo, tambores kandyanos y kiribath (arroz con leche de coco)' },
      { titulo: 'Día de la República', mes: 5, dia: 22, tipo: 'constitucion', relatoBase: 'Conmemora la adopción de la Constitución republicana que consolidó el nombre histórico de Sri Lanka.', costumbres: 'actos escolares y charlas cívicas' }
    ]
  },
  {
    slug: 'tailandia', nombre: 'Tailandia', nombreOficial: 'Reino de Tailandia', bandera: '🇹🇭', continente: 'Asia', capital: 'Bangkok', gentilicio: 'tailandés',
    hitos: [
      { titulo: 'Día Nacional y Día de la Familia y Padres', mes: 12, dia: 5, tipo: 'unidad', relatoBase: 'Honra la continuidad histórica del único país del Sudeste Asiático que preservó su independencia frente al dominio colonial europeo.', costumbres: 'prendas amarillas en señal de armonía, farolillos iluminados en Bangkok y gratitud hacia los padres' },
      { titulo: 'Día de la Constitución (Wan Ratthammanun)', mes: 12, dia: 10, tipo: 'constitucion', relatoBase: 'Conmemora la promulgación de la primera Constitución escrita que instauró la monarquía constitucional tailandesa.', costumbres: 'ofrendas en la Plaza Real y visitas educativas al Parlamento' }
    ]
  },
  {
    slug: 'tayikistan', nombre: 'Tayikistán', nombreOficial: 'República de Tayikistán', bandera: '🇹🇯', continente: 'Asia', capital: 'Dusambé', gentilicio: 'tayiko',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 9, tipo: 'independencia', relatoBase: 'Celebra la soberanía de la república montañosa del Pamir, heredera de la lengua persa tayika y la obra médica y poética de Avicena.', costumbres: 'festivales de colores en Dusambé, osh (plov) comunitario y danzas pamiris' },
      { titulo: 'Día de la Unidad Nacional', mes: 6, dia: 27, tipo: 'unidad', relatoBase: 'Recuerda el acuerdo histórico de reconciliación y paz que permitió reconstruir el país.', costumbres: 'conciertos al aire libre y reuniones familiares' }
    ]
  },
  {
    slug: 'timor-oriental', nombre: 'Timor Oriental', nombreOficial: 'República Democrática de Timor Oriental', bandera: '🇹🇱', continente: 'Asia', capital: 'Dili', gentilicio: 'timorense',
    hitos: [
      { titulo: 'Día de la Restauración de la Independencia', mes: 5, dia: 20, tipo: 'independencia', relatoBase: 'Conmemora la asunción plena de su soberanía en Dili tras un largo y ejemplar camino pacífico por la autodeterminación en el siglo XXI.', costumbres: 'ceremonias en Tasi Tolu en Dili, tejidos tais tradicionales y música de guitarra timorense' },
      { titulo: 'Día de la Proclamación Histórica de Independencia', mes: 11, dia: 28, tipo: 'liberacion', relatoBase: 'Recuerda la primera declaración unilateral de libertad defendida por el pueblo timorense frente a décadas de adversidad.', costumbres: 'desfiles escolares y homenajes junto a las playas de Dili' }
    ]
  },
  {
    slug: 'turkmenistan', nombre: 'Turkmenistán', nombreOficial: 'Turkmenistán', bandera: '🇹🇲', continente: 'Asia', capital: 'Asjabad', gentilicio: 'turcomano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 27, tipo: 'independencia', relatoBase: 'Celebra la proclamación soberana del país centroasiático conocido por sus alfombras tejidas a mano y los caballos Akhal-Teke.', costumbres: 'desfiles en Asjabad, exhibiciones ecuestres y comidas familiares' },
      { titulo: 'Día de la Neutralidad Permanente', mes: 12, dia: 12, tipo: 'constitucion', relatoBase: 'Recuerda el reconocimiento de la ONU a la política constitucional de neutralidad activa y cooperación pacífica.', costumbres: 'conferencias internacionales y actos culturales' }
    ]
  },
  {
    slug: 'turquia', nombre: 'Turquía', nombreOficial: 'República de Turquía', bandera: '🇹🇷', continente: 'Asia', capital: 'Ankara', gentilicio: 'turco',
    hitos: [
      { titulo: 'Día de la República (Cumhuriyet Bayramı)', mes: 10, dia: 29, tipo: 'constitucion', relatoBase: 'Evoca la proclamación de la República moderna impulsada por Mustafa Kemal Atatürk en Ankara, abriendo profundas reformas educativas y civiles.', costumbres: 'banderas rojas con media luna en cada balcón desde Estambul a Ankara y marchas de antorchas' },
      { titulo: 'Día de la Soberanía Nacional y del Niño', mes: 4, dia: 23, tipo: 'unidad', relatoBase: 'Conmemora la apertura de la Gran Asamblea Nacional y dedica simbólicamente el día al futuro y alegría de todos los niños.', costumbres: 'niños de todo el mundo invitados a festivales folclóricos infantiles' }
    ]
  },
  {
    slug: 'uzbekistan', nombre: 'Uzbekistán', nombreOficial: 'República de Uzbekistán', bandera: '🇺🇿', continente: 'Asia', capital: 'Taskent', gentilicio: 'uzbeko',
    hitos: [
      { titulo: 'Día de la Independencia (Mustaqillik)', mes: 9, dia: 1, tipo: 'independencia', relatoBase: 'Celebra el nacimiento soberano del país centroasiático custodio de las joyas arquitectónicas de Samarcanda, Bujará y Jiva.', costumbres: 'fiestas barriales mahalla en Taskent y Samarcanda y grandes ollas de plov compartido' },
      { titulo: 'Día de la Constitución', mes: 12, dia: 8, tipo: 'constitucion', relatoBase: 'Recuerda la sanción de la Carta Magna que garantiza derechos ciudadanos e igualdad jurídica.', costumbres: 'conciertos de música clásica shashmaqam y charlas escolares' }
    ]
  },
  {
    slug: 'vietnam', nombre: 'Vietnam', nombreOficial: 'República Socialista de Vietnam', bandera: '🇻🇳', continente: 'Asia', capital: 'Hanói', gentilicio: 'vietnamita',
    hitos: [
      { titulo: 'Día Nacional de Vietnam', mes: 9, dia: 2, tipo: 'independencia', relatoBase: 'Recuerda la lectura histórica de la Declaración de Independencia en la Plaza Ba Dinh de Hanói proclamando libertad e igualdad ciudadana.', costumbres: 'celebraciones frente al lago Hoan Kiem de Hanói, fuegos nocturnos y reuniones familiares' },
      { titulo: 'Día de la Reunificación Nacional', mes: 4, dia: 30, tipo: 'unidad', relatoBase: 'Conmemora el fin de décadas de división y guerra, dando inicio a la etapa de reconstrucción y paz entre norte y sur.', costumbres: 'encuentros familiares en Ciudad Ho Chi Minh y Hanói y festivales de verano' }
    ]
  },
  {
    slug: 'yemen', nombre: 'Yemen', nombreOficial: 'República de Yemen', bandera: '🇾🇪', continente: 'Asia', capital: 'Saná', gentilicio: 'yemení',
    hitos: [
      { titulo: 'Día de la Unidad Nacional', mes: 5, dia: 22, tipo: 'unidad', relatoBase: 'Celebra la unificación histórica de las regiones del norte y del sur en una sola república en el extremo sur de la península arábiga.', costumbres: 'poesía tradicional, música con laúd oud y mesas familiares con saltah y café moca' },
      { titulo: 'Día de la Independencia y Libertad del Sur', mes: 11, dia: 30, tipo: 'independencia', relatoBase: 'Evoca el fin de la presencia colonial en Adén y la afirmación soberana de la historia yemení.', costumbres: 'recuerdos históricos familiares y actos culturales regionales' }
    ]
  }
];

export const HITOS_ASIA: PaisHitosHistoricos[] = RAW_ASIA.map(construirPaisHito);
