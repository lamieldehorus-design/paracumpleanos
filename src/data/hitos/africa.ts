import { construirPaisHito, type RawPaisEntrada } from './_factory.ts';
import type { PaisHitosHistoricos } from '../hitos-types.ts';

const RAW_AFRICA: RawPaisEntrada[] = [
  {
    slug: 'angola', nombre: 'Angola', nombreOficial: 'República de Angola', bandera: '🇦🇴', continente: 'África', capital: 'Luanda', gentilicio: 'angoleño',
    hitos: [
      { titulo: 'Día de la Independencia Nacional', mes: 11, dia: 11, tipo: 'independencia', relatoBase: 'Conmemora la proclamación de soberanía en Luanda tras años de lucha anticolonial por la autodeterminación del pueblo angoleño.', costumbres: 'actos cívicos en la Plaza de la Independencia, música semba y reuniones familiares' },
      { titulo: 'Día de la Paz y la Reconciliación Nacional', mes: 4, dia: 4, tipo: 'unidad', relatoBase: 'Recuerda los acuerdos que cerraron el conflicto interno y abrieron el camino de reconstrucción y unidad nacional.', costumbres: 'conciertos comunitarios y encuentros culturales en Luanda y las provincias' }
    ]
  },
  {
    slug: 'argelia', nombre: 'Argelia', nombreOficial: 'República Argelina Democrática y Popular', bandera: '🇩🇿', continente: 'África', capital: 'Argel', gentilicio: 'argelino',
    hitos: [
      { titulo: 'Día de la Independencia y de la Juventud', mes: 7, dia: 5, tipo: 'independencia', relatoBase: 'Evoca el triunfo histórico de la soberanía argelina y la dedicación hacia las nuevas generaciones tras la emancipación nacional.', costumbres: 'homenajes en el Monumento a los Mártires de Argel, desfiles juveniles y cuscús familiar' },
      { titulo: 'Aniversario de la Revolución del 1 de Noviembre', mes: 11, dia: 1, tipo: 'revolucion', relatoBase: 'Recuerda el inicio organizado de la lucha emancipadora por la libertad y dignidad territorial del país magrebí.', costumbres: 'ceremonias cívicas nacionales y exposiciones históricas' }
    ]
  },
  {
    slug: 'benin', nombre: 'Benín', nombreOficial: 'República de Benín', bandera: '🇧🇯', continente: 'África', capital: 'Porto Novo', gentilicio: 'beninés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 1, tipo: 'independencia', relatoBase: 'Celebra la emancipación política de la nación de África Occidental y el legado cultural de antiguos reinos como Dahomey.', costumbres: 'desfile principal en Cotonú, danzas tradicionales y platos de ñame y pescado' },
      { titulo: 'Día de las Tradiciones Culturales (Vodun)', mes: 1, dia: 10, tipo: 'cultura', relatoBase: 'Reconoce oficialmente el patrimonio espiritual, artístico y comunitario ancestral en Ouidah y en toda la costa beninesa.', costumbres: 'encuentros musicales con percusión tradicional y ferias artesanales' }
    ]
  },
  {
    slug: 'botsuana', nombre: 'Botsuana', nombreOficial: 'República de Botsuana', bandera: '🇧🇼', continente: 'África', capital: 'Gaborone', gentilicio: 'botsuano',
    hitos: [
      { titulo: 'Día de Botsuana (Boipuso / Independencia)', mes: 9, dia: 30, tipo: 'independencia', relatoBase: 'Conmemora el nacimiento pacífico de una república reconocida por su estabilidad institucional y la preservación del delta del Okavango.', costumbres: 'desfiles culturales en el Estadio Nacional de Gaborone y carnes asadas seswaa' },
      { titulo: 'Día del Presidente y Servicio Cívico', mes: 7, dia: 15, tipo: 'unidad', relatoBase: 'Jornada de descanso y agradecimiento comunitario en pleno invierno austral enfocada en los valores de kagisano (armonía social).', costumbres: 'reuniones en aldeas kgotla y eventos deportivos regionales' }
    ]
  },
  {
    slug: 'burkina-faso', nombre: 'Burkina Faso', nombreOficial: 'Burkina Faso', bandera: '🇧🇫', continente: 'África', capital: 'Uagadugú', gentilicio: 'burkinés',
    hitos: [
      { titulo: 'Día de la Proclamación de la República', mes: 12, dia: 11, tipo: 'constitucion', relatoBase: 'Marca la constitución del Estado republicano en la Tierra de las Personas Íntegras, nombre que resume su ideal cívico.', costumbres: 'desfiles rotativos por las regiones del país y festivales de música mandinga' },
      { titulo: 'Día de la Independencia', mes: 8, dia: 5, tipo: 'independencia', relatoBase: 'Recuerda la emancipación formal del país saheliano y el comienzo de su camino como nación soberana.', costumbres: 'actos cívicos en Uagadugú y Bobo-Dioulasso y encuentros comunitarios' }
    ]
  },
  {
    slug: 'burundi', nombre: 'Burundi', nombreOficial: 'República de Burundi', bandera: '🇧🇮', continente: 'África', capital: 'Gitega', gentilicio: 'burundés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 1, tipo: 'independencia', relatoBase: 'Celebra la soberanía plena del país de los Grandes Lagos africanos y el arte milenario de sus tamborileros reales.', costumbres: 'espectáculos de tambores sagrados en Gitega y Buyumbura y reuniones familiares' },
      { titulo: 'Día de la Unidad Nacional', mes: 2, dia: 5, tipo: 'unidad', relatoBase: 'Promueve la reconciliación, el diálogo y la convivencia pacífica entre todas las comunidades de las colinas burundesas.', costumbres: 'asambleas vecinales, coros juveniles y marchas por la paz' }
    ]
  },
  {
    slug: 'cabo-verde', nombre: 'Cabo Verde', nombreOficial: 'República de Cabo Verde', bandera: '🇨🇻', continente: 'África', capital: 'Praia', gentilicio: 'caboverdiano',
    hitos: [
      { titulo: 'Día de la Independencia Nacional', mes: 7, dia: 5, tipo: 'independencia', relatoBase: 'Conmemora la emancipación del archipiélago atlántico impulsada por el pensamiento cultural y cívico de Amílcar Cabral.', costumbres: 'conciertos de morna y coladeira en Praia y Mindelo y cachupa compartida en familia' },
      { titulo: 'Día de la Democracia y la Libertad', mes: 1, dia: 13, tipo: 'constitucion', relatoBase: 'Recuerda las primeras elecciones multipartidarias libres que consolidaron la democracia parlamentaria caboverdiana.', costumbres: 'debates cívicos y actividades educativas en todas las islas' }
    ]
  },
  {
    slug: 'camerun', nombre: 'Camerún', nombreOficial: 'República de Camerún', bandera: '🇨🇲', continente: 'África', capital: 'Yaundé', gentilicio: 'camerunés',
    hitos: [
      { titulo: 'Día de la Unidad Nacional', mes: 5, dia: 20, tipo: 'unidad', relatoBase: 'Celebra el referéndum ciudadano que unió las regiones francófona y anglófona en un solo Estado unitario en África Central.', costumbres: 'desfiles multicolores en el Bulevar del 20 de Mayo en Yaundé y música makossa' },
      { titulo: 'Día de la Independencia', mes: 1, dia: 1, tipo: 'independencia', relatoBase: 'Marca la llegada de la soberanía temprana de Camerún, primer territorio tutelado africano en proclamarse libre.', costumbres: 'actos oficiales combinados con celebraciones familiares de Año Nuevo' }
    ]
  },
  {
    slug: 'chad', nombre: 'Chad', nombreOficial: 'República de Chad', bandera: '🇹🇩', continente: 'África', capital: 'Yamena', gentilicio: 'chadiano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 11, tipo: 'independencia', relatoBase: 'Celebra la emancipación nacional del corazón saheliano y la diversidad cultural de sus pueblos entre el Sáhara y el lago Chad.', costumbres: 'desfiles en la Plaza de la Nación de Yamena, carreras hípicas y música tradicional' },
      { titulo: 'Día de la Proclamación de la República', mes: 11, dia: 28, tipo: 'constitucion', relatoBase: 'Evoca la adopción de la forma republicana de gobierno y la identidad cívica común.', costumbres: 'ceremonias escolares y encuentros comunitarios' }
    ]
  },
  {
    slug: 'comoras', nombre: 'Comoras', nombreOficial: 'Unión de las Comoras', bandera: '🇰🇲', continente: 'África', capital: 'Moroni', gentilicio: 'comorense',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 6, tipo: 'independencia', relatoBase: 'Conmemora la proclamación de soberanía de las islas perfumadas del océano Índico frente al canal de Mozambique.', costumbres: 'danzas tradicionales en Moroni, cantos y cenas con arroz especiado y vainilla' },
      { titulo: 'Día de la Unión Insular', mes: 5, dia: 26, tipo: 'unidad', relatoBase: 'Destaca la cohesión federal entre Gran Comora, Anjouan y Mohéli bajo una bandera compartida.', costumbres: 'encuentros deportivos y celebraciones vecinales isleñas' }
    ]
  },
  {
    slug: 'costa-de-marfil', nombre: 'Costa de Marfil', nombreOficial: 'República de Costa de Marfil', bandera: '🇨🇮', continente: 'África', capital: 'Yamusukro', gentilicio: 'marfileño',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 7, tipo: 'independencia', relatoBase: 'Celebra el nacimiento soberano del país bajo el liderazgo histórico de Félix Houphouët-Boigny y su desarrollo cultural y agrícola.', costumbres: 'desfiles cívicos rotativos en Yamusukro y Abiyán, música zouglou y attieke con pescado' },
      { titulo: 'Día Nacional de la Paz', mes: 11, dia: 15, tipo: 'unidad', relatoBase: 'Jornada dedicada a la fraternidad, la hospitalidad marfileña (akwaba) y el diálogo comunitario.', costumbres: 'actos escolares y eventos culturales interregionales' }
    ]
  },
  {
    slug: 'egipto', nombre: 'Egipto', nombreOficial: 'República Árabe de Egipto', bandera: '🇪🇬', continente: 'África', capital: 'El Cairo', gentilicio: 'egipcio',
    hitos: [
      { titulo: 'Día de la Revolución Nacional', mes: 7, dia: 23, tipo: 'revolucion', relatoBase: 'Conmemora la transformación histórica que puso fin a la tutela extranjera y estableció la república egipcia contemporánea.', costumbres: 'iluminación de puentes sobre el Nilo en El Cairo y programas históricos familiares' },
      { titulo: 'Día de la Liberación del Sinaí', mes: 4, dia: 25, tipo: 'liberacion', relatoBase: 'Celebra la recuperación completa y pacífica de la península del Sinaí por vía diplomática y acuerdo de paz.', costumbres: 'homenajes cívicos y excursiones familiares al Mar Rojo' }
    ]
  },
  {
    slug: 'eritrea', nombre: 'Eritrea', nombreOficial: 'Estado de Eritrea', bandera: '🇪🇷', continente: 'África', capital: 'Asmara', gentilicio: 'eritreo',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 5, dia: 24, tipo: 'independencia', relatoBase: 'Celebra la culminación de la larga gesta de autodeterminación y la alegría popular en las avenidas de Asmara y Massawa.', costumbres: 'desfiles culturales de las nueve etnias eritreas, ceremonia tradicional del café y música tigrinya' },
      { titulo: 'Día de los Mártires (Memoria Nacional)', mes: 6, dia: 20, tipo: 'liberacion', relatoBase: 'Jornada serena de gratitud hacia quienes entregaron su vida por la libertad del país en el Cuerno de África.', costumbres: 'encendido de velas al atardecer y plantación colectiva de árboles' }
    ]
  },
  {
    slug: 'esuatini', nombre: 'Esuatini', nombreOficial: 'Reino de Esuatini', bandera: '🇸🇿', continente: 'África', capital: 'Mbabane', gentilicio: 'suazi',
    hitos: [
      { titulo: 'Día de la Independencia (Somhlolo)', mes: 9, dia: 6, tipo: 'independencia', relatoBase: 'Conmemora la recuperación plena de la soberanía nacional y el respeto por las tradiciones comunitarias suazis.', costumbres: 'ceremonias en el Estadio Somhlolo de Lobamba, danzas tradicionales y cantos corales' },
      { titulo: 'Festival Cultural Umhlanga', mes: 8, dia: 31, tipo: 'cultura', relatoBase: 'Celebración ancestral de unidad generacional, artesanía tradicional y transmisión de valores comunitarios.', costumbres: 'vestimentas bordadas tradicionales, cantos y encuentros familiares' }
    ]
  },
  {
    slug: 'etiopia', nombre: 'Etiopía', nombreOficial: 'República Democrática Federal de Etiopía', bandera: '🇪🇹', continente: 'África', capital: 'Adís Abeba', gentilicio: 'etíope',
    hitos: [
      { titulo: 'Día de la Victoria de Adua', mes: 3, dia: 2, tipo: 'liberacion', relatoBase: 'Honra la gesta histórica africana que defendió con éxito la independencia soberana de Etiopía frente a la invasión colonial europea.', costumbres: 'ceremonias junto a la estatua de Menelik II en Adís Abeba, ceremonia del café buna e injera' },
      { titulo: 'Día Nacional de la República Federal', mes: 5, dia: 28, tipo: 'revolucion', relatoBase: 'Recuerda la apertura hacia el sistema federal moderno y la convivencia entre las diversas regiones y lenguas etíopes.', costumbres: 'actos culturales y encuentros comunitarios en todo el país' }
    ]
  },
  {
    slug: 'gabon', nombre: 'Gabón', nombreOficial: 'República Gabonesa', bandera: '🇬🇦', continente: 'África', capital: 'Libreville', gentilicio: 'gabonés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 17, tipo: 'independencia', relatoBase: 'Celebra la emancipación de la nación ecuatorial conocida por sus bosques tropicales preservados y su música tradicional.', costumbres: 'desfiles en el paseo marítimo de Libreville, fuegos artificiales y platos de pescado ahumado' },
      { titulo: 'Día de la Cultura y las Libertades', mes: 8, dia: 16, tipo: 'cultura', relatoBase: 'Previa festiva de las Fiestas de la Independencia dedicada a la música, la artesanía en madera y las danzas fang y punu.', costumbres: 'conciertos populares en plazas de Libreville y Port-Gentil' }
    ]
  },
  {
    slug: 'gambia', nombre: 'Gambia', nombreOficial: 'República de Gambia', bandera: '🇬🇲', continente: 'África', capital: 'Banjul', gentilicio: 'gambiano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 2, dia: 18, tipo: 'independencia', relatoBase: 'Conmemora el nacimiento soberano del país ribereño que recorre ambos márgenes del río Gambia hacia el Atlántico.', costumbres: 'desfiles juveniles en el Estadio Independencia de Bakau y música de kora tradicional' },
      { titulo: 'Día de la Proclamación de la República', mes: 4, dia: 24, tipo: 'constitucion', relatoBase: 'Recuerda el referéndum ciudadano que convirtió a Gambia en república soberana plena.', costumbres: 'encuentros escolares y actos cívicos en Banjul' }
    ]
  },
  {
    slug: 'ghana', nombre: 'Ghana', nombreOficial: 'República de Ghana', bandera: '🇬🇭', continente: 'África', capital: 'Acra', gentilicio: 'ghanés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 3, dia: 6, tipo: 'independencia', relatoBase: 'Celebra la histórica jornada liderada por Kwame Nkrumah que convirtió a Ghana en el primer país del África subsahariana en lograr su emancipación colonial.', costumbres: 'desfiles en la Plaza de la Estrella Negra en Acra, telas kente y platos de jollof y banku' },
      { titulo: 'Día de la República', mes: 7, dia: 1, tipo: 'constitucion', relatoBase: 'Conmemora la consolidación republicana de Ghana y su rol inspirador para todo el continente africano.', costumbres: 'encuentros comunitarios, conciertos de highlife y charlas cívicas' }
    ]
  },
  {
    slug: 'guinea', nombre: 'Guinea', nombreOficial: 'República de Guinea', bandera: '🇬🇳', continente: 'África', capital: 'Conakri', gentilicio: 'guineano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 10, dia: 2, tipo: 'independencia', relatoBase: 'Evoca el valiente voto popular por la libertad inmediata que convirtió a Guinea en país pionero de la descolonización francófona africana.', costumbres: 'celebraciones en el Estadio del 28 de Septiembre en Conakri y ballets tradicionales con djembe' },
      { titulo: 'Día del Referéndum por la Libertad', mes: 9, dia: 28, tipo: 'revolucion', relatoBase: 'Recuerda el pronunciamiento cívico del "No" que eligió dignidad y autogobierno frente a cualquier tutela externa.', costumbres: 'actos educativos e históricos en todas las regiones guineanas' }
    ]
  },
  {
    slug: 'guinea-bisau', nombre: 'Guinea-Bisáu', nombreOficial: 'República de Guinea-Bisáu', bandera: '🇬🇼', continente: 'África', capital: 'Bisáu', gentilicio: 'bisauguineano',
    hitos: [
      { titulo: 'Día de la Independencia Nacional', mes: 9, dia: 24, tipo: 'independencia', relatoBase: 'Conmemora la proclamación de soberanía en Madina do Boé tras la lucha liderada por el legado de Amílcar Cabral.', costumbres: 'actos solemnes en Bisáu, música gumbe tradicional y reuniones familiares' },
      { titulo: 'Día de los Héroes Nacionales', mes: 1, dia: 20, tipo: 'cultura', relatoBase: 'Honra la memoria y el ideario educativo y libertario de quienes forjaron la independencia de Guinea-Bisáu.', costumbres: 'ceremonias cívicas y lecturas históricas en escuelas' }
    ]
  },
  {
    slug: 'guinea-ecuatorial', nombre: 'Guinea Ecuatorial', nombreOficial: 'República de Guinea Ecuatorial', bandera: '🇬🇶', continente: 'África', capital: 'Malabo', gentilicio: 'ecuatoguineano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 10, dia: 12, tipo: 'independencia', relatoBase: 'Celebra la emancipación de la única nación soberana africana de idioma oficial español, puente cultural entre África y el mundo hispano.', costumbres: 'desfiles cívicos en Malabo y Bata, danzas balele y música afrolatina' },
      { titulo: 'Día de la Constitución Nacional', mes: 8, dia: 15, tipo: 'constitucion', relatoBase: 'Recuerda el marco constitucional que estructura los poderes del Estado y las instituciones públicas del país.', costumbres: 'jornadas cívicas y culturales en ambas regiones, insular y continental' }
    ]
  },
  {
    slug: 'kenia', nombre: 'Kenia', nombreOficial: 'República de Kenia', bandera: '🇰🇪', continente: 'África', capital: 'Nairobi', gentilicio: 'keniano',
    hitos: [
      { titulo: 'Día de Jamhuri (Independencia y República)', mes: 12, dia: 12, tipo: 'independencia', relatoBase: 'Une en una misma fecha tanto la obtención de la independencia como la proclamación republicana bajo el lema de unidad "Harambee".', costumbres: 'celebraciones en el estadio Nyayo de Nairobi, nyama choma familiar y carreras atléticas' },
      { titulo: 'Día de Madaraka (Autogobierno)', mes: 6, dia: 1, tipo: 'liberacion', relatoBase: 'Conmemora la asunción del autogobierno interno keniano tras la resistencia por la tierra y la libertad.', costumbres: 'actos oficiales rotativos por condados y música benga' }
    ]
  },
  {
    slug: 'lesoto', nombre: 'Lesoto', nombreOficial: 'Reino de Lesoto', bandera: '🇱🇸', continente: 'África', capital: 'Maseru', gentilicio: 'lesotense',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 10, dia: 4, tipo: 'independencia', relatoBase: 'Celebra la soberanía plena del Reino en las Alturas y el legado diplomático del rey fundador Moshoeshoe I.', costumbres: 'ceremonias en Maseru luciendo el sombrero cónico mokorotlo y mantas tradicionales basotho' },
      { titulo: 'Día de Moshoeshoe', mes: 3, dia: 11, tipo: 'unidad', relatoBase: 'Honra al fundador de la nación basotho, recordado por unir pueblos dispersos mediante la hospitalidad, el diálogo y la paz.', costumbres: 'peregrinaciones a la meseta histórica de Thaba Bosiu y encuentros comunitarios' }
    ]
  },
  {
    slug: 'liberia', nombre: 'Liberia', nombreOficial: 'República de Liberia', bandera: '🇱🇷', continente: 'África', capital: 'Monrovia', gentilicio: 'liberiano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 26, tipo: 'independencia', relatoBase: 'Conmemora la Declaración de Independencia y Constitución que fundó la república constitucional más antigua del continente africano.', costumbres: 'actos cívicos en Monrovia, vestimentas festivas tradicionales y arroz jollof en familia' },
      { titulo: 'Día de la Bandera Nacional', mes: 8, dia: 24, tipo: 'unidad', relatoBase: 'Celebra la emblema de once franjas y una estrella solitaria que simboliza la libertad en África Occidental.', costumbres: 'desfiles escolares y programas radiales culturales' }
    ]
  },
  {
    slug: 'libia', nombre: 'Libia', nombreOficial: 'Estado de Libia', bandera: '🇱🇾', continente: 'África', capital: 'Trípoli', gentilicio: 'libio',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 12, dia: 24, tipo: 'independencia', relatoBase: 'Recuerda la proclamación soberana en Bengasi respaldada por las Naciones Unidas que unió a Tripolitania, Cirenaica y Fezán.', costumbres: 'celebraciones en la Plaza de los Mártires de Trípoli y reuniones familiares con té tradicional' },
      { titulo: 'Día de la Libertad Ciudadana', mes: 2, dia: 17, tipo: 'revolucion', relatoBase: 'Evoca el anhelo popular por derechos cívicos, justicia e instituciones representativas para todo el pueblo libio.', costumbres: 'actos comunitarios en plazas y lecturas poéticas' }
    ]
  },
  {
    slug: 'madagascar', nombre: 'Madagascar', nombreOficial: 'República de Madagascar', bandera: '🇲🇬', continente: 'África', capital: 'Antananarivo', gentilicio: 'malgache',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 6, dia: 26, tipo: 'independencia', relatoBase: 'Celebra la emancipación de la gran isla del océano Índico y el orgullo por la cultura malgache compartida de norte a sur.', costumbres: 'farolillos de papel iluminados por los niños (arendrina) en Antananarivo y fuegos artificiales' },
      { titulo: 'Día de los Héroes por la Libertad', mes: 3, dia: 29, tipo: 'liberacion', relatoBase: 'Rinde homenaje solemne a quienes resistieron por la emancipación y la dignidad de la isla.', costumbres: 'ofrendas florales conmemorativas y momentos de silencio ciudadano' }
    ]
  },
  {
    slug: 'malaui', nombre: 'Malaui', nombreOficial: 'República de Malaui', bandera: '🇲🇼', continente: 'África', capital: 'Lilongüe', gentilicio: 'malauí',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 6, tipo: 'independencia', relatoBase: 'Conmemora la soberanía plena del "Corazón Cálido de África" y el fin de la tutela colonial en torno al lago Malaui.', costumbres: 'ceremonias en el Estadio Nacional Bingu de Lilongüe, coros y chambo asado en familia' },
      { titulo: 'Día de John Chilembwe', mes: 1, dia: 15, tipo: 'cultura', relatoBase: 'Honra al educador y líder pionero por los derechos humanos y la dignidad educativa en África Austral.', costumbres: 'actos educativos y servicios conmemorativos en Blantyre y Chiradzulu' }
    ]
  },
  {
    slug: 'mali', nombre: 'Malí', nombreOficial: 'República de Malí', bandera: '🇲🇱', continente: 'África', capital: 'Bamako', gentilicio: 'maliense',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 22, tipo: 'independencia', relatoBase: 'Celebra el nacimiento de la república bajo el nombre histórico del gran Imperio de Malí y su patrimonio literario de Tombuctú.', costumbres: 'desfiles en el Bulevar de la Independencia en Bamako, conciertos de griots y kora' },
      { titulo: 'Día de la Carta de Mandén (Derechos Antiguos)', mes: 12, dia: 12, tipo: 'cultura', relatoBase: 'Difunde el legado de una de las primeras cartas orales sobre respeto humano, paz social y hospitalidad en África Occidental.', costumbres: 'recitales de historia oral y encuentros escolares' }
    ]
  },
  {
    slug: 'marruecos', nombre: 'Marruecos', nombreOficial: 'Reino de Marruecos', bandera: '🇲🇦', continente: 'África', capital: 'Rabat', gentilicio: 'marroquí',
    hitos: [
      { titulo: 'Día de la Independencia (Eid Al Istiqlal)', mes: 11, dia: 18, tipo: 'independencia', relatoBase: 'Conmemora el retorno del sultán Mohammed V y la afirmación definitiva de la independencia y unidad territorial marroquí.', costumbres: 'banderas rojas con estrella verde en Rabat, Casablanca y Marrakech y té a la menta en familia' },
      { titulo: 'Aniversario del Manifiesto de Independencia', mes: 1, dia: 11, tipo: 'revolucion', relatoBase: 'Recuerda la presentación formal del manifiesto ciudadano que exigió soberanía plena e instituciones nacionales propias.', costumbres: 'conferencias culturales y exposiciones históricas' }
    ]
  },
  {
    slug: 'mauricio', nombre: 'Mauricio', nombreOficial: 'República de Mauricio', bandera: '🇲🇺', continente: 'África', capital: 'Port Louis', gentilicio: 'mauriciano',
    hitos: [
      { titulo: 'Día de la Independencia y de la República', mes: 3, dia: 12, tipo: 'independencia', relatoBase: 'Celebra en la misma fecha tanto el acceso a la independencia como la posterior proclamación de la república multicultural en el Índico.', costumbres: 'ceremonias en el Champ de Mars de Port Louis, bailes séga y platos criollos e indios' },
      { titulo: 'Día de la Abolición de la Esclavitud', mes: 2, dia: 1, tipo: 'liberacion', relatoBase: 'Recuerda la libertad alcanzada por las comunidades afrodescendientes junto a la montaña simbólica de Le Morne Brabant.', costumbres: 'peregrinaciones culturales a Le Morne y conciertos de música séga' }
    ]
  },
  {
    slug: 'mauritania', nombre: 'Mauritania', nombreOficial: 'República Islámica de Mauritania', bandera: '🇲🇷', continente: 'África', capital: 'Nuakchot', gentilicio: 'mauritano',
    hitos: [
      { titulo: 'Día de la Independencia Nacional', mes: 11, dia: 28, tipo: 'independencia', relatoBase: 'Conmemora el nacimiento soberano del país puente entre el Magreb y el África subsahariana y custodio de antiguas bibliotecas del desierto.', costumbres: 'actos oficiales en Nuakchot y Chinguetti, poesía hassanía y té tradicional de tres tiempos' },
      { titulo: 'Día de la Unidad y el Patrimonio del Desierto', mes: 5, dia: 25, tipo: 'cultura', relatoBase: 'Pone en valor los manuscritos antiguos y la convivencia entre comunidades árabes, haratines y afro-mauritanas.', costumbres: 'ferias artesanales y encuentros musicales con tidinit' }
    ]
  },
  {
    slug: 'mozambique', nombre: 'Mozambique', nombreOficial: 'República de Mozambique', bandera: '🇲🇿', continente: 'África', capital: 'Maputo', gentilicio: 'mozambiqueño',
    hitos: [
      { titulo: 'Día de la Independencia Nacional', mes: 6, dia: 25, tipo: 'independencia', relatoBase: 'Celebra la proclamación soberana en el Estadio de Machava de Maputo y el renacimiento cultural del país de lengua portuguesa del Índico.', costumbres: 'conciertos de timbila y marrabenta en Maputo y reuniones familiares con matapa' },
      { titulo: 'Día de los Acuerdos de Lusaka y Paz', mes: 9, dia: 7, tipo: 'liberacion', relatoBase: 'Recuerda la firma histórica que garantizó la transición pacífica hacia la independencia de Mozambique.', costumbres: 'homenajes en plazas cívicas y actividades educativas' }
    ]
  },
  {
    slug: 'namibia', nombre: 'Namibia', nombreOficial: 'República de Namibia', bandera: '🇳🇦', continente: 'África', capital: 'Windhoek', gentilicio: 'namibio',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 3, dia: 21, tipo: 'independencia', relatoBase: 'Conmemora el nacimiento de Namibia como nación libre con una de las primeras constituciones en proteger constitucionalmente el ambiente.', costumbres: 'ceremonias en el Estadio de la Independencia de Windhoek y reuniones familiares al aire libre' },
      { titulo: 'Día de los Héroes Nacionales', mes: 8, dia: 26, tipo: 'liberacion', relatoBase: 'Recuerda el inicio de la lucha por la autodeterminación en Omugulugwombashe y honra a los protagonistas de la libertad namibia.', costumbres: 'actos en Heroes\' Acre cerca de Windhoek y discursos conmemorativos' }
    ]
  },
  {
    slug: 'niger', nombre: 'Níger', nombreOficial: 'República del Níger', bandera: '🇳🇪', continente: 'África', capital: 'Niamey', gentilicio: 'nigerino',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 3, tipo: 'independencia', relatoBase: 'Celebra la soberanía de la república saheliana y coincide tradicionalmente con grandes campañas nacionales de plantación de árboles.', costumbres: 'jornadas de reforestación comunitaria (Día del Árbol), desfiles en Niamey y cenas vecinales' },
      { titulo: 'Día de la Proclamación de la República', mes: 12, dia: 18, tipo: 'constitucion', relatoBase: 'Conmemora la instauración de la república y la cohesión cultural entre las regiones a lo largo del río Níger.', costumbres: 'festivales de lucha tradicional kokowa y música local' }
    ]
  },
  {
    slug: 'nigeria', nombre: 'Nigeria', nombreOficial: 'República Federal de Nigeria', bandera: '🇳🇬', continente: 'África', capital: 'Abuya', gentilicio: 'nigeriano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 10, dia: 1, tipo: 'independencia', relatoBase: 'Celebra la emancipación de la nación más poblada de África, cuna de vigorosas expresiones musicales, literarias y cinematográficas.', costumbres: 'desfiles en la Plaza Eagle de Abuya, ropa tradicional verde y blanca y arroz jollof compartido' },
      { titulo: 'Día de la Democracia', mes: 6, dia: 12, tipo: 'constitucion', relatoBase: 'Honra la voluntad democrática ciudadana expresada en las urnas como pilar de la vida civil nigeriana.', costumbres: 'foros ciudadanos, conciertos y mensajes conmemorativos' }
    ]
  },
  {
    slug: 'republica-centroafricana', nombre: 'República Centroafricana', nombreOficial: 'República Centroafricana', bandera: '🇨🇫', continente: 'África', capital: 'Bangui', gentilicio: 'centroafricano',
    hitos: [
      { titulo: 'Día de la Proclamación de la República', mes: 12, dia: 1, tipo: 'constitucion', relatoBase: 'Conmemora el ideario humanista de Barthélemy Boganda ("Zo kwe zo": todo ser humano es una persona) al fundar la república.', costumbres: 'desfiles en la Avenida de los Mártires en Bangui y regatas de piraguas en el río Ubangui' },
      { titulo: 'Día de la Independencia', mes: 8, dia: 13, tipo: 'independencia', relatoBase: 'Recuerda la obtención plena de la soberanía internacional del país en el corazón geográfico del continente.', costumbres: 'actos oficiales y música tradicional con arpa africana' }
    ]
  },
  {
    slug: 'republica-del-congo', nombre: 'República del Congo', nombreOficial: 'República del Congo', bandera: '🇨🇬', continente: 'África', capital: 'Brazzaville', gentilicio: 'congoleño',
    hitos: [
      { titulo: 'Día de la Independencia (Les Trois Glorieuses)', mes: 8, dia: 15, tipo: 'independencia', relatoBase: 'Celebra la proclamación soberana en Brazzaville junto al gran río Congo y el florecimiento de la rumba congoleña.', costumbres: 'desfiles en el Bulevar Alfred Raoul, conciertos de rumba y platos de saka-saka' },
      { titulo: 'Día de la República', mes: 11, dia: 28, tipo: 'constitucion', relatoBase: 'Recuerda el paso institucional hacia el régimen republicano moderno en África Central.', costumbres: 'encuentros escolares y actividades culturales' }
    ]
  },
  {
    slug: 'republica-democratica-del-congo', nombre: 'República Democrática del Congo', nombreOficial: 'República Democrática del Congo', bandera: '🇨🇩', continente: 'África', capital: 'Kinsasa', gentilicio: 'congoleño',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 6, dia: 30, tipo: 'independencia', relatoBase: 'Conmemora la proclamación de libertad en Kinsasa y los ideales de dignidad e independencia económica impulsados por Patrice Lumumba.', costumbres: 'música rumba en todos los barrios de Kinsasa, desfiles y comidas familiares' },
      { titulo: 'Día de los Héroes Nacionales', mes: 1, dia: 17, tipo: 'cultura', relatoBase: 'Honra la memoria de los líderes y ciudadanos que defendieron la soberanía íntegra del gigante centroafricano.', costumbres: 'ofrendas florales y charlas en escuelas y universidades' }
    ]
  },
  {
    slug: 'ruanda', nombre: 'Ruanda', nombreOficial: 'República de Ruanda', bandera: '🇷🇼', continente: 'África', capital: 'Kigali', gentilicio: 'ruandés',
    hitos: [
      { titulo: 'Día de la Liberación (Kwibohora)', mes: 7, dia: 4, tipo: 'liberacion', relatoBase: 'Celebra la reconstrucción pacífica, la seguridad, la innovación cívica y la unidad de la sociedad ruandesa contemporánea.', costumbres: 'inauguración de obras comunitarias y encuentros deportivos en Kigali' },
      { titulo: 'Día de la Independencia', mes: 7, dia: 1, tipo: 'independencia', relatoBase: 'Recuerda la emancipación política formal del país de las mil colinas en África Oriental.', costumbres: 'actividades familiares y conmemoraciones históricas' }
    ]
  },
  {
    slug: 'santo-tome-y-principe', nombre: 'Santo Tomé y Príncipe', nombreOficial: 'República Democrática de Santo Tomé y Príncipe', bandera: '🇸🇹', continente: 'África', capital: 'Santo Tomé', gentilicio: 'santotomense',
    hitos: [
      { titulo: 'Día de la Independencia Nacional', mes: 7, dia: 12, tipo: 'independencia', relatoBase: 'Celebra la soberanía pacífica del archipiélago ecuatorial atlántico y su rica fusión cultural lusoafricana.', costumbres: 'desfiles en la Plaza de la Independencia en Santo Tomé, danza tchiloli y pescado asado' },
      { titulo: 'Día de las Fuerzas Cívicas y la Cultura', mes: 9, dia: 6, tipo: 'cultura', relatoBase: 'Pone en relieve la convivencia tranquila y las tradiciones teatrales y musicales de ambas islas.', costumbres: 'representaciones culturales al aire libre en las aldeas' }
    ]
  },
  {
    slug: 'senegal', nombre: 'Senegal', nombreOficial: 'República del Senegal', bandera: '🇸🇳', continente: 'África', capital: 'Dakar', gentilicio: 'senegalés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 4, dia: 4, tipo: 'independencia', relatoBase: 'Evoca el nacimiento soberano del país bajo la visión cultural y humanista de Léopold Sédar Senghor y el valor de la teranga (hospitalidad).', costumbres: 'desfiles en la Plaza de la Nación de Dakar, música mbalax y thieboudienne familiar' },
      { titulo: 'Festival de las Artes y la Teranga', mes: 12, dia: 31, tipo: 'cultura', relatoBase: 'Destaca el papel histórico de Dakar como faro literario, musical y artístico del África occidental.', costumbres: 'exposiciones de pintura sobre vidrio, conciertos y encuentros comunitarios' }
    ]
  },
  {
    slug: 'seychelles', nombre: 'Seychelles', nombreOficial: 'República de Seychelles', bandera: '🇸🇨', continente: 'África', capital: 'Victoria', gentilicio: 'seychellense',
    hitos: [
      { titulo: 'Día Nacional (Independencia)', mes: 6, dia: 29, tipo: 'independencia', relatoBase: 'Celebra la soberanía plena del archipiélago granítico y coralino del Índico y su modelo de conservación oceánica.', costumbres: 'paradas en Victoria en la isla Mahé, música moutya y gastronomía criolla' },
      { titulo: 'Día de la Constitución', mes: 6, dia: 18, tipo: 'constitucion', relatoBase: 'Conmemora la entrada en vigor de la Constitución democrática pluripartidista de la república isleña.', costumbres: 'conciertos cívicos y encuentros vecinales' }
    ]
  },
  {
    slug: 'sierra-leona', nombre: 'Sierra Leona', nombreOficial: 'República de Sierra Leona', bandera: '🇸🇱', continente: 'África', capital: 'Freetown', gentilicio: 'sierraleonés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 4, dia: 27, tipo: 'independencia', relatoBase: 'Celebra la emancipación de la nación costera fundada en torno a Freetown como símbolo histórico de libertad.', costumbres: 'banderas verde, blanco y azul en Freetown, desfiles escolares y música palm-wine' },
      { titulo: 'Día de la República', mes: 4, dia: 19, tipo: 'constitucion', relatoBase: 'Recuerda la proclamación republicana que consolidó el sistema presidencial y las instituciones nacionales.', costumbres: 'foros cívicos y ceremonias comunitarias' }
    ]
  },
  {
    slug: 'somalia', nombre: 'Somalia', nombreOficial: 'República Federal de Somalia', bandera: '🇸🇴', continente: 'África', capital: 'Mogadiscio', gentilicio: 'somalí',
    hitos: [
      { titulo: 'Día de la Independencia y la Unidad', mes: 7, dia: 1, tipo: 'unidad', relatoBase: 'Celebra la unión histórica de las regiones norte y sur en una sola república independiente bajo la estrella blanca de cinco puntas.', costumbres: 'recitales de poesía tradicional gabay en Mogadiscio, música y reuniones familiares' },
      { titulo: 'Día de la Bandera Nacional', mes: 10, dia: 12, tipo: 'cultura', relatoBase: 'Honra el emblema azul cielo diseñado por Mohammed Awale Liban como símbolo de paz y fraternidad en el Cuerno de África.', costumbres: 'ceremonias escolares e izamientos comunitarios' }
    ]
  },
  {
    slug: 'sudafrica', nombre: 'Sudáfrica', nombreOficial: 'República de Sudáfrica', bandera: '🇿🇦', continente: 'África', capital: 'Pretoria', gentilicio: 'sudafricano',
    hitos: [
      { titulo: 'Día de la Libertad (Freedom Day)', mes: 4, dia: 27, tipo: 'liberacion', relatoBase: 'Conmemora las primeras elecciones democráticas no raciales que pusieron fin legal al apartheid y abrieron la "Nación del Arcoíris".', costumbres: 'reuniones vecinales con braai, festivales musicales y homenajes al legado de Nelson Mandela' },
      { titulo: 'Día del Patrimonio (Heritage Day)', mes: 9, dia: 24, tipo: 'cultura', relatoBase: 'Celebra la riqueza plural de las once lenguas y tradiciones culturales de todos los pueblos sudafricanos.', costumbres: 'encuentros familiares alrededor del fuego (braai) y vestimentas tradicionales' }
    ]
  },
  {
    slug: 'sudan', nombre: 'Sudán', nombreOficial: 'República del Sudán', bandera: '🇸🇩', continente: 'África', capital: 'Jartum', gentilicio: 'sudanés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 1, dia: 1, tipo: 'independencia', relatoBase: 'Recuerda el histórico izamiento de la bandera nacional en la confluencia del Nilo Blanco y el Nilo Azul en Jartum.', costumbres: 'encuentros familiares con café jabana, poesía y música nubia y sudanesa' },
      { titulo: 'Día de la Libertad y Paz Civil', mes: 12, dia: 19, tipo: 'revolucion', relatoBase: 'Evoca las aspiraciones ciudadanas pacíficas por justicia, dignidad y convivencia civil en todo el valle del Nilo.', costumbres: 'actos culturales juveniles y jornadas solidarias barriales' }
    ]
  },
  {
    slug: 'sudan-del-sur', nombre: 'Sudán del Sur', nombreOficial: 'República de Sudán del Sur', bandera: '🇸🇸', continente: 'África', capital: 'Yuba', gentilicio: 'sursudanés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 9, tipo: 'independencia', relatoBase: 'Marca el nacimiento soberano del país más joven incorporado a la comunidad de naciones tras referéndum popular.', costumbres: 'ceremonias en Yuba, danzas tradicionales y celebraciones religiosas por la paz' },
      { titulo: 'Día de los Héroes de la Paz', mes: 7, dia: 30, tipo: 'unidad', relatoBase: 'Recuerda a quienes trabajaron por el reconocimiento de las identidades del sur y los acuerdos de convivencia.', costumbres: 'vigilias comunitarias y encuentros interétnicos' }
    ]
  },
  {
    slug: 'tanzania', nombre: 'Tanzania', nombreOficial: 'República Unida de Tanzania', bandera: '🇹🇿', continente: 'África', capital: 'Dodoma', gentilicio: 'tanzano',
    hitos: [
      { titulo: 'Día de la Independencia (Uhuru)', mes: 12, dia: 9, tipo: 'independencia', relatoBase: 'Conmemora la emancipación nacional guiada por el pensamiento solidario de Julius Nyerere (Ujamaa) y el idioma suajili como puente.', costumbres: 'celebraciones en Dar es-Salam y Dodoma, partidos deportivos y pilau en familia' },
      { titulo: 'Día de la Unión (Muungano)', mes: 4, dia: 26, tipo: 'unidad', relatoBase: 'Celebra la fusión voluntaria de Tanganica y Zanzíbar en la República Unida de Tanzania.', costumbres: 'desfiles cívicos y encuentros culturales en el continente y en Zanzíbar' }
    ]
  },
  {
    slug: 'togo', nombre: 'Togo', nombreOficial: 'República Togolesa', bandera: '🇹🇬', continente: 'África', capital: 'Lomé', gentilicio: 'togolés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 4, dia: 27, tipo: 'independencia', relatoBase: 'Recuerda la proclamación soberana en Lomé de la franja atlántica de África Occidental y su riqueza artesanal y agrícola.', costumbres: 'desfiles en la Plaza de la Independencia de Lomé, música agbadja y cenas en familia' },
      { titulo: 'Festival Tradicional Evala', mes: 7, dia: 18, tipo: 'cultura', relatoBase: 'Tradición comunitaria del norte de Togo dedicada a la valentía juvenil, el respeto a los mayores y la cohesión social.', costumbres: 'lucha tradicional, música de flautas y reuniones aldeanas' }
    ]
  },
  {
    slug: 'tunez', nombre: 'Túnez', nombreOficial: 'República Tunecina', bandera: '🇹🇳', continente: 'África', capital: 'Túnez', gentilicio: 'tunecino',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 3, dia: 20, tipo: 'independencia', relatoBase: 'Conmemora la recuperación pacífica de la soberanía nacional y las tempranas reformas educativas y de derechos civiles de la mujer en el Magreb.', costumbres: 'celebraciones por la Avenida Habib Bourguiba en Túnez y cuscús familiar' },
      { titulo: 'Día de la República', mes: 7, dia: 25, tipo: 'constitucion', relatoBase: 'Recuerda la instauración del régimen republicano y la abolición de la antigua estructura monárquica.', costumbres: 'actos oficiales y conciertos veraniegos en Cartago y Hammamet' }
    ]
  },
  {
    slug: 'uganda', nombre: 'Uganda', nombreOficial: 'República de Uganda', bandera: '🇺🇬', continente: 'África', capital: 'Kampala', gentilicio: 'ugandés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 10, dia: 9, tipo: 'independencia', relatoBase: 'Celebra la soberanía de la "Perla de África" entre el lago Victoria y las nacientes del río Nilo.', costumbres: 'desfiles en los terrenos de Kololo en Kampala, danzas tradicionales y matooke en familia' },
      { titulo: 'Día de la Liberación Nacional', mes: 1, dia: 26, tipo: 'liberacion', relatoBase: 'Conmemora la reconstrucción institucional y el retorno de la estabilidad cívica en las distintas regiones ugandesas.', costumbres: 'actos oficiales y encuentros comunitarios' }
    ]
  },
  {
    slug: 'yibuti', nombre: 'Yibuti', nombreOficial: 'República de Yibuti', bandera: '🇩🇯', continente: 'África', capital: 'Yibuti', gentilicio: 'yibutiano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 6, dia: 27, tipo: 'independencia', relatoBase: 'Conmemora el nacimiento soberano del país en el estrecho de Bab el-Mandeb y la convivencia de sus comunidades afar y somalí.', costumbres: 'desfiles militares y folclóricos en la capital, fuegos nocturnos y platos especiados' },
      { titulo: 'Día de la Unidad Nacional', mes: 6, dia: 28, tipo: 'unidad', relatoBase: 'Segunda jornada festiva enfocada en el encuentro vecinal y la cultura marítima compartida.', costumbres: 'actividades deportivas y recitales poéticos en barrios costeros' }
    ]
  },
  {
    slug: 'zambia', nombre: 'Zambia', nombreOficial: 'República de Zambia', bandera: '🇿🇲', continente: 'África', capital: 'Lusaka', gentilicio: 'zambiano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 10, dia: 24, tipo: 'independencia', relatoBase: 'Celebra la libertad proclamada bajo el lema "Una Zambia, Una Nación" y el liderazgo pacífico fundacional de Kenneth Kaunda.', costumbres: 'celebraciones en el Estadio Héroes Nacionales de Lusaka y nshima compartida en familia' },
      { titulo: 'Día de la Libertad Africana', mes: 5, dia: 25, tipo: 'unidad', relatoBase: 'Subraya la solidaridad histórica de Zambia con todos los movimientos pacíficos de liberación de África Austral.', costumbres: 'debates universitarios y desfiles culturales en Lusaka' }
    ]
  },
  {
    slug: 'zimbabue', nombre: 'Zimbabue', nombreOficial: 'República de Zimbabue', bandera: '🇿🇼', continente: 'África', capital: 'Harare', gentilicio: 'zimbabuense',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 4, dia: 18, tipo: 'independencia', relatoBase: 'Recuerda la emancipación definitiva bajo el nombre histórico del Gran Zimbabue ("casas de piedra") y el renacimiento cultural shona y ndebele.', costumbres: 'celebraciones en el Estadio Nacional de Harare, música mbira y sadza tradicional' },
      { titulo: 'Día de los Héroes Nacionales', mes: 8, dia: 12, tipo: 'liberacion', relatoBase: 'Rinde homenaje a hombres y mujeres que defendieron la libertad y la tierra del país.', costumbres: 'actos en Heroes\' Acre de Harare y encuentros familiares de agosto' }
    ]
  }
];

export const HITOS_AFRICA: PaisHitosHistoricos[] = RAW_AFRICA.map(construirPaisHito);
