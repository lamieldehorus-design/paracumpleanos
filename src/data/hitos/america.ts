import { construirPaisHito, type RawPaisEntrada } from './_factory.ts';
import type { PaisHitosHistoricos } from '../hitos-types.ts';

const RAW_AMERICA: RawPaisEntrada[] = [
  {
    slug: 'antigua-y-barbuda', nombre: 'Antigua y Barbuda', nombreOficial: 'Antigua y Barbuda', bandera: '🇦🇬', continente: 'América', capital: 'Saint John\'s', gentilicio: 'antiguano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 11, dia: 1, tipo: 'independencia', relatoBase: 'Esta jornada conmemora el traspaso pacífico hacia el autogobierno pleno y el nacimiento del Estado insular caribeño libre.', costumbres: 'desfiles escolares, música de tambores metálicos y encuentros gastronómicos en Saint John\'s' },
      { titulo: 'Día de los Héroes Nacionales', mes: 12, dia: 9, tipo: 'cultura', relatoBase: 'Se recuerda a Vere Cornwall Bird y a los referentes laborales y comunitarios que sentaron las bases sociales y sindicales del país.', costumbres: 'homenajes cívicos, ceremonias comunitarias y charlas educativas' }
    ]
  },
  {
    slug: 'argentina', nombre: 'Argentina', nombreOficial: 'República Argentina', bandera: '🇦🇷', continente: 'América', capital: 'Buenos Aires', gentilicio: 'argentino',
    hitos: [
      { titulo: 'Día de la Revolución de Mayo', mes: 5, dia: 25, tipo: 'revolucion', relatoBase: 'Recuerda la conformación de la Primera Junta de gobierno patrio frente al Cabildo abierto, primer paso decisivo hacia la autodeterminación rioplatense.', costumbres: 'actos escolares con escarapelas celestes y blancas, locro caliente, empanadas y pastelitos criollos en familia' },
      { titulo: 'Día de la Declaración de la Independencia', mes: 7, dia: 9, tipo: 'independencia', relatoBase: 'Evoca el Congreso reunido en San Miguel de Tucumán donde representantes de las provincias proclamaron solemnemente la ruptura de los vínculos coloniales.', costumbres: 'desfiles patrios, chocolate caliente con churros, peñas folclóricas y asados familiares' }
    ]
  },
  {
    slug: 'bahamas', nombre: 'Bahamas', nombreOficial: 'Mancomunidad de las Bahamas', bandera: '🇧🇸', continente: 'América', capital: 'Nasáu', gentilicio: 'bahameño',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 10, tipo: 'independencia', relatoBase: 'Celebra la proclamación soberana del archipiélago atlántico y el izamiento definitivo de su bandera aguamarina, amarilla y negra.', costumbres: 'conciertos nocturnos en Clifford Park, desfiles culturales Junkanoo y platos marinos en familia' },
      { titulo: 'Día de la Emancipación', mes: 8, dia: 1, tipo: 'liberacion', relatoBase: 'Honra la abolición definitiva de la esclavitud en las islas y la conquista de la libertad civil de las familias afrodescendientes.', costumbres: 'encuentros en Fox Hill, festivales musicales y ferias gastronómicas locales' }
    ]
  },
  {
    slug: 'barbados', nombre: 'Barbados', nombreOficial: 'Barbados', bandera: '🇧🇧', continente: 'América', capital: 'Bridgetown', gentilicio: 'barbadense',
    hitos: [
      { titulo: 'Día de la Independencia y la República', mes: 11, dia: 30, tipo: 'independencia', relatoBase: 'Coinciden en esta fecha tanto el inicio de su vida independiente como la posterior proclamación del sistema republicano parlamentario.', costumbres: 'ceremonias en Garrison Savannah, luces azul y oro en edificios públicos y cenas familiares' },
      { titulo: 'Día de Errol Barrow', mes: 1, dia: 21, tipo: 'cultura', relatoBase: 'Reconoce al padre de la independencia nacional por impulsar la educación gratuita, la salud pública y el proyecto soberano de la isla.', costumbres: 'actos conmemorativos, lecturas escolares y visitas a museos históricos' }
    ]
  },
  {
    slug: 'belice', nombre: 'Belice', nombreOficial: 'Belice', bandera: '🇧🇿', continente: 'América', capital: 'Belmopán', gentilicio: 'beliceño',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 21, tipo: 'independencia', relatoBase: 'Marca la emancipación política del país centroamericano y caribeño, integrando raíces mayas, creoles, garífunas y mestizas.', costumbres: 'desfiles juveniles con carrozas, música caribeña en las plazas y reuniones vecinales' },
      { titulo: 'Día de la Batalla de Cayo San Jorge', mes: 9, dia: 10, tipo: 'liberacion', relatoBase: 'Conmemora la defensa exitosa de las costas locales frente a incursiones externas, hito clave de cohesión territorial temprana.', costumbres: 'coronaciones cívicas, regatas y conciertos al aire libre' }
    ]
  },
  {
    slug: 'bolivia', nombre: 'Bolivia', nombreOficial: 'Estado Plurinacional de Bolivia', bandera: '🇧🇴', continente: 'América', capital: 'Sucre', gentilicio: 'boliviano',
    hitos: [
      { titulo: 'Día de la Patria e Independencia', mes: 8, dia: 6, tipo: 'independencia', relatoBase: 'Recuerda la firma del Acta de Independencia en la Casa de la Libertad de Sucre tras largos años de lucha emancipadora andina y oriental.', costumbres: 'desfiles estudiantiles y militares, salteñas por la mañana y almuerzos familiares' },
      { titulo: 'Día del Estado Plurinacional', mes: 1, dia: 22, tipo: 'constitucion', relatoBase: 'Destaca el reconocimiento constitucional de las múltiples naciones y culturas originarias que conviven dentro del territorio boliviano.', costumbres: 'ceremonias andinas de gratitud, música folclórica y ferias culturales' }
    ]
  },
  {
    slug: 'brasil', nombre: 'Brasil', nombreOficial: 'República Federativa del Brasil', bandera: '🇧🇷', continente: 'América', capital: 'Brasilia', gentilicio: 'brasileño',
    hitos: [
      { titulo: 'Día de la Independencia (Grito de Ipiranga)', mes: 9, dia: 7, tipo: 'independencia', relatoBase: 'Conmemora la proclamación de la emancipación a orillas del arroyo Ipiranga, dando origen al país independiente de habla portuguesa más grande del mundo.', costumbres: 'desfiles cívico-escolares en ciudades de todo el país y encuentros familiares de fin de semana' },
      { titulo: 'Proclamación de la República', mes: 11, dia: 15, tipo: 'constitucion', relatoBase: 'Evoca el paso histórico hacia el régimen republicano federativo y la modernización institucional del Estado brasileño.', costumbres: 'actos oficiales en plazas históricas y jornadas culturales abiertas' }
    ]
  },
  {
    slug: 'canada', nombre: 'Canadá', nombreOficial: 'Canadá', bandera: '🇨🇦', continente: 'América', capital: 'Ottawa', gentilicio: 'canadiense',
    hitos: [
      { titulo: 'Día de Canadá (Confederación)', mes: 7, dia: 1, tipo: 'unidad', relatoBase: 'Celebra la unión federal de las primeras provincias norteamericanas bajo una misma estructura parlamentaria de costa a costa.', costumbres: 'fuegos artificiales nocturnos, caminatas al aire libre, barbacoas y banderas con hoja de arce' },
      { titulo: 'Día Nacional de la Bandera', mes: 2, dia: 15, tipo: 'cultura', relatoBase: 'Conmemora el izamiento oficial de la emblema roja y blanca con la hoja de arce en el Parlamento de Ottawa.', costumbres: 'encuentros escolares, izamientos cívicos y difusión del patrimonio multicultural' }
    ]
  },
  {
    slug: 'chile', nombre: 'Chile', nombreOficial: 'República de Chile', bandera: '🇨🇱', continente: 'América', capital: 'Santiago', gentilicio: 'chileno',
    hitos: [
      { titulo: 'Fiestas Patrias (Primera Junta Nacional)', mes: 9, dia: 18, tipo: 'independencia', relatoBase: 'Evoca la instalación de la Primera Junta Nacional de Gobierno en Santiago, punto de partida del proceso de independencia y ciudadanía republicana.', costumbres: 'fondas y ramadas con cueca, empanadas de pino, anticuchos y juegos tradicionales' },
      { titulo: 'Día de las Glorias del Ejército', mes: 9, dia: 19, tipo: 'unidad', relatoBase: 'Completa las celebraciones dieciocheras honrando el servicio histórico a la soberanía y la convivencia cívica en todo el país.', costumbres: 'Gran Parada Militar en el Parque O\'Higgins y almuerzos extendidos en familia' }
    ]
  },
  {
    slug: 'colombia', nombre: 'Colombia', nombreOficial: 'República de Colombia', bandera: '🇨🇴', continente: 'América', capital: 'Bogotá', gentilicio: 'colombiano',
    hitos: [
      { titulo: 'Día del Grito de Independencia', mes: 7, dia: 20, tipo: 'independencia', relatoBase: 'Recuerda el episodio popular de Santafé de Bogotá alrededor del florero de Llorente que desató la firma del Acta de Revolución y autonomía.', costumbres: 'banderas tricolores en balcones, desfiles en las grandes avenidas y música folclórica regional' },
      { titulo: 'Batalla de Boyacá', mes: 8, dia: 7, tipo: 'liberacion', relatoBase: 'Conmemora la victoria decisiva que selló de manera definitiva la libertad de la Nueva Granada y consolidó la república.', costumbres: 'homenajes en el Puente de Boyacá, celebraciones escolares y paseos familiares' }
    ]
  },
  {
    slug: 'costa-rica', nombre: 'Costa Rica', nombreOficial: 'República de Costa Rica', bandera: '🇨🇷', continente: 'América', capital: 'San José', gentilicio: 'costarricense',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 15, tipo: 'independencia', relatoBase: 'Celebra la emancipación centroamericana proclamada mediante el Acta de Independencia y recibida con júbilo en Cartago y San José.', costumbres: 'desfiles de faroles artesanales la noche previa, bandas estudiantiles y platos típicos' },
      { titulo: 'Anexión del Partido de Nicoya', mes: 7, dia: 25, tipo: 'unidad', relatoBase: 'Recuerda la decisión libre y pacífica del pueblo guanacasteco de integrarse voluntariamente a la nación costarricense.', costumbres: 'bailes folclóricos de Guanacaste, marimbas y ferias culturales en todo el país' }
    ]
  },
  {
    slug: 'cuba', nombre: 'Cuba', nombreOficial: 'República de Cuba', bandera: '🇨🇺', continente: 'América', capital: 'La Habana', gentilicio: 'cubano',
    hitos: [
      { titulo: 'Grito de Yara (Inicio de las Guerras de Independencia)', mes: 10, dia: 10, tipo: 'independencia', relatoBase: 'Honra el alzamiento en el ingenio La Demajagua liderado por Carlos Manuel de Céspedes y la liberación de los esclavos para luchar por una república libre.', costumbres: 'actos culturales e históricos, música tradicional cubana y encuentros comunitarios' },
      { titulo: 'Triunfo de la Revolución y Día de la Liberación', mes: 1, dia: 1, tipo: 'revolucion', relatoBase: 'Conmemora el cambio histórico de etapa política junto al inicio del calendario anual en toda la isla.', costumbres: 'reuniones familiares ampliadas y celebraciones populares de comienzo de año' }
    ]
  },
  {
    slug: 'dominica', nombre: 'Dominica', nombreOficial: 'Mancomunidad de Dominica', bandera: '🇩🇲', continente: 'América', capital: 'Roseau', gentilicio: 'dominiqués',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 11, dia: 3, tipo: 'independencia', relatoBase: 'Celebra la soberanía plena de la llamada Isla de la Naturaleza y el fin de la tutela colonial europea en el Caribe oriental.', costumbres: 'festivales de música criolla, danzas tradicionales y ferias artesanales en Roseau' },
      { titulo: 'Día de la Cultura Criolla (Creole Day)', mes: 10, dia: 27, tipo: 'cultura', relatoBase: 'Enaltece la lengua patois, la herencia kalinago y afrocaribeña y los saberes ancestrales de Dominica.', costumbres: 'trajes típicos madras, cocina criolla de montaña y recitales folclóricos' }
    ]
  },
  {
    slug: 'ecuador', nombre: 'Ecuador', nombreOficial: 'República del Ecuador', bandera: '🇪🇨', continente: 'América', capital: 'Quito', gentilicio: 'ecuatoriano',
    hitos: [
      { titulo: 'Primer Grito de Independencia', mes: 8, dia: 10, tipo: 'independencia', relatoBase: 'Conmemora la instalación de la Junta Soberana en Quito, gesto pionero que dio a la capital el título histórico de Luz de América.', costumbres: 'colocación de ofrendas florales en el Centro Histórico de Quito y reuniones familiares' },
      { titulo: 'Batalla del Pichincha', mes: 5, dia: 24, tipo: 'liberacion', relatoBase: 'Recuerda el triunfo emancipador en las faldas del volcán Pichincha que garantizó la libertad definitiva del territorio ecuatoriano.', costumbres: 'desfiles cívicos, visitas al mirador de la Cima de la Libertad y encuentros culturales' }
    ]
  },
  {
    slug: 'el-salvador', nombre: 'El Salvador', nombreOficial: 'República de El Salvador', bandera: '🇸🇻', continente: 'América', capital: 'San Salvador', gentilicio: 'salvadoreño',
    hitos: [
      { titulo: 'Día de la Independencia Patria', mes: 9, dia: 15, tipo: 'independencia', relatoBase: 'Celebra la firma del Acta de Independencia centroamericana y la participación decisiva de próceres salvadoreños como José Matías Delgado.', costumbres: 'bandas de paz estudiantiles, desfiles por el Bulevar de los Héroes y pupusas en familia' },
      { titulo: 'Primer Movimiento Independentista', mes: 11, dia: 5, tipo: 'revolucion', relatoBase: 'Evoca el repique histórico de las campanas de La Merced en San Salvador como primer grito emancipador de Centroamérica.', costumbres: 'actos educativos en escuelas y homenajes en la plaza Libertad' }
    ]
  },
  {
    slug: 'estados-unidos', nombre: 'Estados Unidos', nombreOficial: 'Estados Unidos de América', bandera: '🇺🇸', continente: 'América', capital: 'Washington D. C.', gentilicio: 'estadounidense',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 4, tipo: 'independencia', relatoBase: 'Recuerda la aprobación de la Declaración de Independencia en Filadelfia por las trece colonias, texto fundador de la república moderna.', costumbres: 'fuegos artificiales nocturnos, desfiles vecinales, conciertos al aire libre y reuniones con parrilla' },
      { titulo: 'Día de los Presidentes y Legado Cívico', mes: 2, dia: 22, tipo: 'constitucion', relatoBase: 'Honra los ideales constitucionales y la memoria fundacional de los primeros líderes de la unión norteamericana.', costumbres: 'recorridos por monumentos nacionales, actividades educativas y feriados comerciales' }
    ]
  },
  {
    slug: 'granada', nombre: 'Granada', nombreOficial: 'Granada', bandera: '🇬🇩', continente: 'América', capital: 'Saint George\'s', gentilicio: 'granadino',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 2, dia: 7, tipo: 'independencia', relatoBase: 'Conmemora la autonomía soberana de la llamada Isla de las Especias y la adopción de sus símbolos nacionales propios.', costumbres: 'desfiles en el Estadio Nacional, platos típicos con nuez moscada y música calipso' },
      { titulo: 'Día de Acción de Gracias Nacional', mes: 10, dia: 25, tipo: 'unidad', relatoBase: 'Jornada de reflexión nacional sobre la paz institucional y el reencuentro comunitario en las parroquias de la isla.', costumbres: 'servicios ecuménicos, encuentros en familia y actos cívicos locales' }
    ]
  },
  {
    slug: 'guatemala', nombre: 'Guatemala', nombreOficial: 'República de Guatemala', bandera: '🇬🇹', continente: 'América', capital: 'Ciudad de Guatemala', gentilicio: 'guatemalteco',
    hitos: [
      { titulo: 'Día de la Independencia Nacional', mes: 9, dia: 15, tipo: 'independencia', relatoBase: 'Evoca la firma del Acta de Independencia en el Real Palacio de la Nueva Guatemala de la Asunción junto al resto de provincias centroamericanas.', costumbres: 'antorchas de la libertad corridas por estudiantes, bailes de marimba y fiambre o tamales' },
      { titulo: 'Día de la Revolución Democrática', mes: 10, dia: 20, tipo: 'revolucion', relatoBase: 'Recuerda las reformas sociales, educativas y laborales que abrieron derechos modernos para trabajadores y estudiantes guatemaltecos.', costumbres: 'caminatas cívicas, recitales universitarios y foros históricos' }
    ]
  },
  {
    slug: 'guyana', nombre: 'Guyana', nombreOficial: 'República Cooperativa de Guyana', bandera: '🇬🇾', continente: 'América', capital: 'Georgetown', gentilicio: 'guyanés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 5, dia: 26, tipo: 'independencia', relatoBase: 'Celebra la emancipación de la única nación sudamericana de habla inglesa y el inicio de su proyecto nacional multicultural.', costumbres: 'izamientos en Georgetown, desfiles escolares y festivales musicales' },
      { titulo: 'Día de la República (Mashramani)', mes: 2, dia: 23, tipo: 'constitucion', relatoBase: 'Conmemora la proclamación de la República Cooperativa con la palabra indígena mashramani, que significa celebración tras el trabajo compartido.', costumbres: 'comparsas coloridas, carrozas artísticas y música soca en las calles' }
    ]
  },
  {
    slug: 'haiti', nombre: 'Haití', nombreOficial: 'República de Haití', bandera: '🇭🇹', continente: 'América', capital: 'Puerto Príncipe', gentilicio: 'haitiano',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 1, dia: 1, tipo: 'independencia', relatoBase: 'Marca la gesta histórica que convirtió a Haití en la primera república negra libre del mundo y el primer país independiente de América Latina y el Caribe.', costumbres: 'preparación tradicional de la sopa joumou en cada hogar como símbolo de libertad compartida' },
      { titulo: 'Día de la Bandera y de la Universidad', mes: 5, dia: 18, tipo: 'unidad', relatoBase: 'Recuerda el Congreso de Arcahaie donde se cosió la bandera nacional bicolor como emblema de unión y dignidad.', costumbres: 'desfiles estudiantiles en todo el país y encuentros culturales en plazas' }
    ]
  },
  {
    slug: 'honduras', nombre: 'Honduras', nombreOficial: 'República de Honduras', bandera: '🇭🇳', continente: 'América', capital: 'Tegucigalpa', gentilicio: 'hondureño',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 15, tipo: 'independencia', relatoBase: 'Conmemora la proclamación emancipadora de Centroamérica y la llegada histórica de los pliegos de independencia a Comayagua y Tegucigalpa.', costumbres: 'desfiles de colegios, palillonas, bandas marciales y celebraciones en el Estadio Nacional' },
      { titulo: 'Día de Lempira', mes: 7, dia: 20, tipo: 'cultura', relatoBase: 'Honra al líder lenca símbolo de resistencia indígena, soberanía e identidad originaria hondureña.', costumbres: 'elección escolar de indios bonitos, trajes típicos y ferias artesanales' }
    ]
  },
  {
    slug: 'jamaica', nombre: 'Jamaica', nombreOficial: 'Jamaica', bandera: '🇯🇲', continente: 'América', capital: 'Kingston', gentilicio: 'jamaiquino',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 6, tipo: 'independencia', relatoBase: 'Celebra el nacimiento soberano del país caribeño y la proyección mundial de su música reggae, su deporte y su cultura.', costumbres: 'Grand Gala en el Estadio Nacional de Kingston, conciertos y gastronomía jerk en familia' },
      { titulo: 'Día de los Héroes Nacionales', mes: 10, dia: 21, tipo: 'cultura', relatoBase: 'Rinde homenaje a figuras fundamentales como Nanny de los Cimarrones y Marcus Garvey en la defensa de la libertad y los derechos civiles.', costumbres: 'ceremonias en Heroes Park y encuentros comunitarios en parroquias' }
    ]
  },
  {
    slug: 'mexico', nombre: 'México', nombreOficial: 'Estados Unidos Mexicanos', bandera: '🇲🇽', continente: 'América', capital: 'Ciudad de México', gentilicio: 'mexicano',
    hitos: [
      { titulo: 'Grito de Dolores y Día de la Independencia', mes: 9, dia: 16, tipo: 'independencia', relatoBase: 'Evoca el llamado libertario de Miguel Hidalgo en Dolores que inició la gesta independentista y forjó la nación mexicana libre.', costumbres: 'el tradicional ¡Viva México! en plazas públicas, pozole, chiles en nogada y música de mariachi' },
      { titulo: 'Día de la Revolución Mexicana', mes: 11, dia: 20, tipo: 'revolucion', relatoBase: 'Conmemora el levantamiento social que impulsó justicia agraria, derechos laborales y la Constitución social moderna.', costumbres: 'desfiles deportivos y escolares, tablas rítmicas y verbenas populares' }
    ]
  },
  {
    slug: 'nicaragua', nombre: 'Nicaragua', nombreOficial: 'República de Nicaragua', bandera: '🇳🇮', continente: 'América', capital: 'Managua', gentilicio: 'nicaragüense',
    hitos: [
      { titulo: 'Día de la Independencia Centroamericana', mes: 9, dia: 15, tipo: 'independencia', relatoBase: 'Celebra la firma del Acta de Independencia compartida por las repúblicas hermanas del istmo centroamericano.', costumbres: 'desfiles de bandas rítmicas estudiantiles y actos cívicos frente a la bandera azul y blanco' },
      { titulo: 'Batalla de San Jacinto', mes: 9, dia: 14, tipo: 'liberacion', relatoBase: 'Recuerda la heroica defensa de la hacienda San Jacinto en defensa de la soberanía territorial nicaragüense.', costumbres: 'lecturas escolares de la piedra lanzada por Andrés Castro y actos cívicos nacionales' }
    ]
  },
  {
    slug: 'panama', nombre: 'Panamá', nombreOficial: 'República de Panamá', bandera: '🇵🇦', continente: 'América', capital: 'Ciudad de Panamá', gentilicio: 'panameño',
    hitos: [
      { titulo: 'Día de la Separación de la República', mes: 11, dia: 3, tipo: 'independencia', relatoBase: 'Abre el Mes de la Patria recordando el nacimiento de Panamá como república independiente con vocación de puente entre océanos.', costumbres: 'dianas al amanecer, desfiles de bandas independientes y trajes de pollera panameña' },
      { titulo: 'Independencia de España (Primer Grito de La Villa)', mes: 11, dia: 28, tipo: 'independencia', relatoBase: 'Cierra el mes patriótico conmemorando la emancipación pacífica de la corona española en territorio istmeño.', costumbres: 'desfiles tradicionales en La Chorrera, Boquete y Ciudad de Panamá' }
    ]
  },
  {
    slug: 'paraguay', nombre: 'Paraguay', nombreOficial: 'República del Paraguay', bandera: '🇵🇾', continente: 'América', capital: 'Asunción', gentilicio: 'paraguayo',
    hitos: [
      { titulo: 'Días de la Independencia Nacional', mes: 5, dia: 14, tipo: 'independencia', relatoBase: 'Conmemora la gesta de mayo en la Casa de la Independencia de Asunción, cuna del primer país sudamericano en consolidar su libertad.', costumbres: 'visitas al centro histórico de Asunción, sopa paraguaya, chipá y encuentros de guaranias' },
      { titulo: 'Segunda Jornada Patria y Día de la Madre', mes: 5, dia: 15, tipo: 'unidad', relatoBase: 'Completa el festejo de la emancipación paraguaya unido en la tradición popular a la gratitud hacia las madres del país.', costumbres: 'homenajes familiares, almuerzos con asado a la estaca y actos en escuelas' }
    ]
  },
  {
    slug: 'peru', nombre: 'Perú', nombreOficial: 'República del Perú', bandera: '🇵🇪', continente: 'América', capital: 'Lima', gentilicio: 'peruano',
    hitos: [
      { titulo: 'Fiestas Patrias (Proclamación de la Independencia)', mes: 7, dia: 28, tipo: 'independencia', relatoBase: 'Recuerda la proclamación en la Plaza Mayor de Lima con las palabras fundadoras sobre la libertad y justicia de la nación peruana.', costumbres: 'escarapelas rojiblancas en el pecho, gastronomía criolla y andina y serenatas criollas' },
      { titulo: 'Segunda Jornada de Fiestas Patrias', mes: 7, dia: 29, tipo: 'unidad', relatoBase: 'Completa los festejos nacionales celebrando la unidad cultural entre costa, sierra y selva del Perú.', costumbres: 'Gran Parada y Desfile Cívico Militar en Lima y paseos regionales en familia' }
    ]
  },
  {
    slug: 'republica-dominicana', nombre: 'República Dominicana', nombreOficial: 'República Dominicana', bandera: '🇩🇴', continente: 'América', capital: 'Santo Domingo', gentilicio: 'dominicano',
    hitos: [
      { titulo: 'Día de la Independencia Nacional', mes: 2, dia: 27, tipo: 'independencia', relatoBase: 'Conmemora el trabucazo de la Puerta del Conde en Santo Domingo impulsado por los Trinitarios para fundar una república libre.', costumbres: 'carnavales tradicionales de febrero, desfiles en el Malecón y merengue en las calles' },
      { titulo: 'Día de la Restauración', mes: 8, dia: 16, tipo: 'liberacion', relatoBase: 'Recuerda el Grito de Capotillo que devolvió la soberanía republicana tras la guerra restauradora.', costumbres: 'actos solemnes en Santiago de los Caballeros y celebraciones comunitarias' }
    ]
  },
  {
    slug: 'san-cristobal-y-nieves', nombre: 'San Cristóbal y Nieves', nombreOficial: 'Federación de San Cristóbal y Nieves', bandera: '🇰🇳', continente: 'América', capital: 'Basseterre', gentilicio: 'sancristobaleño',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 19, tipo: 'independencia', relatoBase: 'Celebra la plena soberanía de las dos islas hermanas caribeñas y la consolidación de su estado federal independiente.', costumbres: 'paradas ceremoniales en Basseterre, desfiles juveniles y gastronomía isleña' },
      { titulo: 'Día de los Héroes Nacionales', mes: 9, dia: 16, tipo: 'cultura', relatoBase: 'Honra a los constructores políticos y sociales de la identidad democrática de ambas islas.', costumbres: 'ofrendas en el parque conmemorativo y charlas educativas' }
    ]
  },
  {
    slug: 'san-vicente-y-las-granadinas', nombre: 'San Vicente y las Granadinas', nombreOficial: 'San Vicente y las Granadinas', bandera: '🇻🇨', continente: 'América', capital: 'Kingstown', gentilicio: 'sanvicentino',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 10, dia: 27, tipo: 'independencia', relatoBase: 'Conmemora el nacimiento independiente de la nación isleña antillana y el orgullo por sus raíces garífunas y caribeñas.', costumbres: 'desfiles en Victoria Park en Kingstown, música soca y comidas comunitarias' },
      { titulo: 'Día de los Héroes Nacionales y el Patrimonio', mes: 3, dia: 14, tipo: 'cultura', relatoBase: 'Recuerda la resistencia histórica de Joseph Chatoyer en defensa de la tierra y la libertad de las islas.', costumbres: 'peregrinaciones a Dorsetshire Hill, danzas tradicionales y actos culturales' }
    ]
  },
  {
    slug: 'santa-lucia', nombre: 'Santa Lucía', nombreOficial: 'Santa Lucía', bandera: '🇱🇨', continente: 'América', capital: 'Castries', gentilicio: 'santalucense',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 2, dia: 22, tipo: 'independencia', relatoBase: 'Celebra la soberanía nacional y el patrimonio cultural de una isla reconocida por sus dos premios Nobel y sus montañas Pitons.', costumbres: 'desfiles militares y juveniles en Castries, exhibiciones deportivas y conciertos' },
      { titulo: 'Día Nacional (Fiesta de Santa Lucía)', mes: 12, dia: 13, tipo: 'cultura', relatoBase: 'Festival de luces y música que celebra la identidad artística, los faroles navideños y las raíces de la isla.', costumbres: 'concursos de faroles luminosos y música criolla en las plazas' }
    ]
  },
  {
    slug: 'surinam', nombre: 'Surinam', nombreOficial: 'República de Surinam', bandera: '🇸🇷', continente: 'América', capital: 'Paramaribo', gentilicio: 'surinamés',
    hitos: [
      { titulo: 'Día de la Independencia (Srefidensi)', mes: 11, dia: 25, tipo: 'independencia', relatoBase: 'Recuerda la proclamación soberana de la república sudamericana y la unión de comunidades indígenas, cimarronas, javanesas, indostaníes y criollas.', costumbres: 'celebraciones frente al Palacio Presidencial en Paramaribo, danzas y cocina plural' },
      { titulo: 'Día de la Libertad (Keti Koti)', mes: 7, dia: 1, tipo: 'liberacion', relatoBase: 'Significa literalmente "cadenas rotas", conmemorando la abolición definitiva de la esclavitud en Surinam.', costumbres: 'desfiles tradicionales koto y angisa, música kawina y ofrendas de gratitud' }
    ]
  },
  {
    slug: 'trinidad-y-tobago', nombre: 'Trinidad y Tobago', nombreOficial: 'República de Trinidad y Tobago', bandera: '🇹🇹', continente: 'América', capital: 'Puerto España', gentilicio: 'trinitense',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 31, tipo: 'independencia', relatoBase: 'Celebra la autonomía plena de las dos islas y el legado cultural creador del instrumento steelpan y el calipso.', costumbres: 'desfiles frente a Queen\'s Park Savannah en Puerto España y conciertos de tambores metálicos' },
      { titulo: 'Día de la República', mes: 9, dia: 24, tipo: 'constitucion', relatoBase: 'Conmemora la entrada en vigencia de la Constitución republicana y el fortalecimiento de sus instituciones propias.', costumbres: 'ceremonias de distinción cívica y encuentros familiares' }
    ]
  },
  {
    slug: 'uruguay', nombre: 'Uruguay', nombreOficial: 'República Oriental del Uruguay', bandera: '🇺🇾', continente: 'América', capital: 'Montevideo', gentilicio: 'uruguayo',
    hitos: [
      { titulo: 'Declaratoria de la Independencia', mes: 8, dia: 25, tipo: 'independencia', relatoBase: 'Evoca las leyes fundamentales votadas en la Piedra Alta de Florida que declararon la libertad oriental y la unión rioplatense.', costumbres: 'actos oficiales en Florida y Montevideo, peñas folclóricas y asados con mate compartido' },
      { titulo: 'Jura de la Primera Constitución', mes: 7, dia: 18, tipo: 'constitucion', relatoBase: 'Recuerda la jura solemne del texto constitucional fundacional en la plaza principal de Montevideo, pilar de la república.', costumbres: 'ceremonias frente al Cabildo de Montevideo y jornadas de lectura histórica' }
    ]
  },
  {
    slug: 'venezuela', nombre: 'Venezuela', nombreOficial: 'República Bolivariana de Venezuela', bandera: '🇻🇪', continente: 'América', capital: 'Caracas', gentilicio: 'venezolano',
    hitos: [
      { titulo: 'Día de la Firma del Acta de Independencia', mes: 7, dia: 5, tipo: 'independencia', relatoBase: 'Recuerda la histórica proclamación del Congreso en Caracas que convirtió a Venezuela en la primera nación hispanoamericana en declarar su independencia formal.', costumbres: 'actos cívicos en el Panteón Nacional, música llanera con arpa y cuatro y reuniones familiares' },
      { titulo: 'Proclamación del 19 de Abril', mes: 4, dia: 19, tipo: 'revolucion', relatoBase: 'Evoca el cabildo caraqueño que inició el camino hacia el autogobierno y la emancipación sudamericana.', costumbres: 'actos escolares y conmemoraciones culturales regionales' }
    ]
  }
];

export const HITOS_AMERICA: PaisHitosHistoricos[] = RAW_AMERICA.map(construirPaisHito);
