import { construirPaisHito, type RawPaisEntrada } from './_factory.ts';
import type { PaisHitosHistoricos } from '../hitos-types.ts';

const RAW_EUROPA: RawPaisEntrada[] = [
  {
    slug: 'albania', nombre: 'Albania', nombreOficial: 'República de Albania', bandera: '🇦🇱', continente: 'Europa', capital: 'Tirana', gentilicio: 'albanés',
    hitos: [
      { titulo: 'Día de la Independencia y de la Bandera', mes: 11, dia: 28, tipo: 'independencia', relatoBase: 'Conmemora el izamiento del águila bicéfala en Vlorë y la declaración de soberanía nacional tras siglos de dominio imperial.', costumbres: 'desfiles culturales en Tirana y Vlorë, danzas folclóricas y cenas familiares tradicionales' },
      { titulo: 'Día de la Liberación Nacional', mes: 11, dia: 29, tipo: 'liberacion', relatoBase: 'Recuerda la recuperación completa del territorio albanés frente a la ocupación extranjera y el renacimiento institucional del país.', costumbres: 'ofrendas florales en monumentos históricos y actos conmemorativos' }
    ]
  },
  {
    slug: 'alemania', nombre: 'Alemania', nombreOficial: 'República Federal de Alemania', bandera: '🇩🇪', continente: 'Europa', capital: 'Berlín', gentilicio: 'alemán',
    hitos: [
      { titulo: 'Día de la Unidad Alemana', mes: 10, dia: 3, tipo: 'unidad', relatoBase: 'Celebra la reunificación pacífica de los estados federados orientales y occidentales en una sola república democrática tras la caída del Muro de Berlín.', costumbres: 'festivales ciudadanos alrededor de la Puerta de Brandeburgo y en las capitales regionales' },
      { titulo: 'Día de la Ley Fundamental (Constitución)', mes: 5, dia: 23, tipo: 'constitucion', relatoBase: 'Conmemora la promulgación de la carta constitucional federal basada en la dignidad humana, las libertades civiles y el Estado de derecho.', costumbres: 'jornadas cívicas de puertas abiertas en parlamentos e instituciones' }
    ]
  },
  {
    slug: 'andorra', nombre: 'Andorra', nombreOficial: 'Principado de Andorra', bandera: '🇦🇩', continente: 'Europa', capital: 'Andorra la Vieja', gentilicio: 'andorrano',
    hitos: [
      { titulo: 'Diada de Meritxell (Día Nacional)', mes: 9, dia: 8, tipo: 'cultura', relatoBase: 'Combina la tradición pirenaica con la afirmación del autogobierno centenario de las parroquias de los valles andorranos.', costumbres: 'peregrinación al santuario de Meritxell, sardanas y comidas comunitarias' },
      { titulo: 'Día de la Constitución', mes: 3, dia: 14, tipo: 'constitucion', relatoBase: 'Recuerda la aprobación popular por referéndum de la Constitución moderna que consolidó los derechos parlamentarios del Principado.', costumbres: 'recepciones oficiales en la Casa de la Vall y actividades escolares' }
    ]
  },
  {
    slug: 'austria', nombre: 'Austria', nombreOficial: 'República de Austria', bandera: '🇦🇹', continente: 'Europa', capital: 'Viena', gentilicio: 'austriaco',
    hitos: [
      { titulo: 'Día Nacional de la Neutralidad y Soberanía', mes: 10, dia: 26, tipo: 'constitucion', relatoBase: 'Evoca la aprobación parlamentaria de la ley constitucional de neutralidad perpetua que consolidó a Austria como república soberana y pacífica.', costumbres: 'museos públicos gratuitos, caminatas nacionales al aire libre y actos en Viena' },
      { titulo: 'Proclamación de la Segunda República', mes: 4, dia: 27, tipo: 'liberacion', relatoBase: 'Recuerda la declaración de independencia democrática tras el fin de la ocupación bélica europea.', costumbres: 'conmemoraciones cívicas e históricas en las ciudades austríacas' }
    ]
  },
  {
    slug: 'belgica', nombre: 'Bélgica', nombreOficial: 'Reino de Bélgica', bandera: '🇧🇪', continente: 'Europa', capital: 'Bruselas', gentilicio: 'belga',
    hitos: [
      { titulo: 'Fiesta Nacional de Bélgica', mes: 7, dia: 21, tipo: 'constitucion', relatoBase: 'Conmemora el juramento constitucional del primer monarca tras la independencia belga, sello del pacto parlamentario moderno.', costumbres: 'desfile cívico en Bruselas, conciertos en el Parque Real y fuegos artificiales' },
      { titulo: 'Día del Armisticio y Memoria por la Paz', mes: 11, dia: 11, tipo: 'liberacion', relatoBase: 'Recuerda el fin de la Gran Guerra en suelo europeo y el compromiso permanente de Bélgica con la paz continental.', costumbres: 'ceremonias junto a la Tumba del Soldado Desconocido en Bruselas' }
    ]
  },
  {
    slug: 'bielorrusia', nombre: 'Bielorrusia', nombreOficial: 'República de Bielorrusia', bandera: '🇧🇾', continente: 'Europa', capital: 'Minsk', gentilicio: 'bielorruso',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 7, dia: 3, tipo: 'liberacion', relatoBase: 'Conmemora la liberación de Minsk y la recuperación del territorio bielorruso tras los duros años de ocupación bélica.', costumbres: 'actos conmemorativos en la Plaza de la Victoria, música folclórica y fuegos nocturnos' },
      { titulo: 'Día de la Constitución', mes: 3, dia: 15, tipo: 'constitucion', relatoBase: 'Recuerda la adopción de la ley fundamental que estableció la arquitectura institucional de la república moderna.', costumbres: 'ceremonias cívicas juveniles y entregas simbólicas de documentos ciudadanos' }
    ]
  },
  {
    slug: 'bosnia-y-herzegovina', nombre: 'Bosnia y Herzegovina', nombreOficial: 'Bosnia y Herzegovina', bandera: '🇧🇦', continente: 'Europa', capital: 'Sarajevo', gentilicio: 'bosnio',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 3, dia: 1, tipo: 'independencia', relatoBase: 'Recuerda el pronunciamiento ciudadano que consolidó la existencia soberana de la república en el corazón de los Balcanes.', costumbres: 'encuentros conmemorativos en Sarajevo, Mostar y Tuzla y actos culturales' },
      { titulo: 'Día de la Estadalidad', mes: 11, dia: 25, tipo: 'unidad', relatoBase: 'Evoca la resolución histórica de convivencia e igualdad entre todos los pueblos y ciudadanos de Bosnia y Herzegovina.', costumbres: 'homenajes históricos y jornadas académicas y vecinales' }
    ]
  },
  {
    slug: 'bulgaria', nombre: 'Bulgaria', nombreOficial: 'República de Bulgaria', bandera: '🇧🇬', continente: 'Europa', capital: 'Sofía', gentilicio: 'búlgaro',
    hitos: [
      { titulo: 'Día de la Liberación Nacional', mes: 3, dia: 3, tipo: 'liberacion', relatoBase: 'Conmemora el tratado histórico que restauró la autonomía del Estado búlgaro después de cinco siglos de dominio imperial.', costumbres: 'ceremonias en el paso de Shipka y frente a la catedral Alexander Nevski en Sofía' },
      { titulo: 'Día de la Unificación y la Cultura Cirílica', mes: 9, dia: 6, tipo: 'unidad', relatoBase: 'Celebra la unión pacífica de Rumelia Oriental con el Principado de Bulgaria en una sola nación cohesionada.', costumbres: 'desfiles en Plovdiv, música tradicional y encuentros familiares' }
    ]
  },
  {
    slug: 'ciudad-del-vaticano', nombre: 'Ciudad del Vaticano', nombreOficial: 'Estado de la Ciudad del Vaticano', bandera: '🇻🇦', continente: 'Europa', capital: 'Ciudad del Vaticano', gentilicio: 'vaticano',
    hitos: [
      { titulo: 'Día de los Pactos de Letrán (Fundación del Estado)', mes: 2, dia: 11, tipo: 'constitucion', relatoBase: 'Conmemora la firma de los acuerdos que reconocieron la soberanía plena e independencia territorial del Estado de la Ciudad del Vaticano.', costumbres: 'recepciones diplomáticas solemnes y celebraciones litúrgicas en la Basílica' },
      { titulo: 'Solemnidad de San Pedro y San Pablo', mes: 6, dia: 29, tipo: 'cultura', relatoBase: 'Honra a los patronos históricos de Roma y las raíces espirituales y artísticas que custodian los museos y archivos vaticanos.', costumbres: 'ceremonias en la Plaza de San Pedro e iluminación tradicional de la columnata' }
    ]
  },
  {
    slug: 'croacia', nombre: 'Croacia', nombreOficial: 'República de Croacia', bandera: '🇭🇷', continente: 'Europa', capital: 'Zagreb', gentilicio: 'croata',
    hitos: [
      { titulo: 'Día de la Estadalidad', mes: 5, dia: 30, tipo: 'constitucion', relatoBase: 'Recuerda la constitución del primer parlamento multipartidario moderno en Zagreb, hito clave hacia la democracia croata.', costumbres: 'guardias ceremoniales en la plaza de San Marcos y conciertos en Zagreb y Split' },
      { titulo: 'Día de la Victoria y Gratitud Patria', mes: 8, dia: 5, tipo: 'liberacion', relatoBase: 'Celebra la integridad territorial del país adriático y agradece el esfuerzo de quienes sostuvieron su reconstrucción en paz.', costumbres: 'actos en la fortaleza de Knin y encuentros familiares veraniegos' }
    ]
  },
  {
    slug: 'dinamarca', nombre: 'Dinamarca', nombreOficial: 'Reino de Dinamarca', bandera: '🇩🇰', continente: 'Europa', capital: 'Copenhague', gentilicio: 'danés',
    hitos: [
      { titulo: 'Día de la Constitución (Grundlovsdag)', mes: 6, dia: 5, tipo: 'constitucion', relatoBase: 'Conmemora la firma de la primera Constitución democrática que puso fin al absolutismo y dio origen al parlamentarismo danés.', costumbres: 'discursos al aire libre, debates cívicos en parques y encuentros con familia' },
      { titulo: 'Día de la Liberación', mes: 5, dia: 5, tipo: 'liberacion', relatoBase: 'Evoca el jubiloso momento en que el país recuperó su libertad y se encendieron velas en todas las ventanas danesas.', costumbres: 'velas simbólicas en las ventanas al caer la tarde y homenajes por la paz' }
    ]
  },
  {
    slug: 'eslovaquia', nombre: 'Eslovaquia', nombreOficial: 'República Eslovaca', bandera: '🇸🇰', continente: 'Europa', capital: 'Bratislava', gentilicio: 'eslovaco',
    hitos: [
      { titulo: 'Día de la Constitución Eslovaca', mes: 9, dia: 1, tipo: 'constitucion', relatoBase: 'Celebra la adopción de la Carta Magna de la república moderna antes del nacimiento pacífico del Estado independiente.', costumbres: 'jornadas abiertas en el Parlamento en Bratislava y visitas a castillos históricos' },
      { titulo: 'Aniversario del Levantamiento Nacional Eslovaco', mes: 8, dia: 29, tipo: 'liberacion', relatoBase: 'Honra la gesta de resistencia armada y civil en Banská Bystrica por la libertad y dignidad del pueblo eslovaco.', costumbres: 'ceremonias en Banská Bystrica, fogatas tradicionales y música folclórica' }
    ]
  },
  {
    slug: 'eslovenia', nombre: 'Eslovenia', nombreOficial: 'República de Eslovenia', bandera: '🇸🇮', continente: 'Europa', capital: 'Liubliana', gentilicio: 'esloveno',
    hitos: [
      { titulo: 'Día de la Estadalidad', mes: 6, dia: 25, tipo: 'independencia', relatoBase: 'Conmemora la declaración formal de independencia aprobada en Liubliana, cimiento de la república alpina y adriática.', costumbres: 'ceremonias junto al río Ljubljanica, caminatas por los Alpes Julianos y reuniones familiares' },
      { titulo: 'Día de Prešeren (Día de la Cultura)', mes: 2, dia: 8, tipo: 'cultura', relatoBase: 'Celebra al gran poeta France Prešeren y el rol decisivo de la lengua y literatura eslovenas como corazón nacional.', costumbres: 'acceso libre a museos y galerías y recitales poéticos en plazas' }
    ]
  },
  {
    slug: 'espana', nombre: 'España', nombreOficial: 'Reino de España', bandera: '🇪🇸', continente: 'Europa', capital: 'Madrid', gentilicio: 'español',
    hitos: [
      { titulo: 'Fiesta Nacional de España', mes: 10, dia: 12, tipo: 'cultura', relatoBase: 'Conmemora el encuentro histórico entre continentes que tejió los lazos lingüísticos y culturales de toda la comunidad hispanohablante.', costumbres: 'desfile cívico en Madrid, jornada de puertas abiertas en museos y comidas en familia' },
      { titulo: 'Día de la Constitución Española', mes: 12, dia: 6, tipo: 'constitucion', relatoBase: 'Recuerda la aprobación en referéndum del texto constitucional que consagró la democracia parlamentaria, las autonomías y los derechos civiles.', costumbres: 'visitas ciudadanas al Congreso de los Diputados y encuentros escolares sobre convivencia' }
    ]
  },
  {
    slug: 'estonia', nombre: 'Estonia', nombreOficial: 'República de Estonia', bandera: '🇪🇪', continente: 'Europa', capital: 'Tallin', gentilicio: 'estonio',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 2, dia: 24, tipo: 'independencia', relatoBase: 'Evoca el Manifiesto a todos los Pueblos de Estonia proclamado en Tallin que estableció por primera vez la república democrática báltica.', costumbres: 'izamiento al alba en la torre Pikk Hermann, desfiles invernales y platos de centeno y arenque' },
      { titulo: 'Día de la Restauración de la Independencia', mes: 8, dia: 20, tipo: 'liberacion', relatoBase: 'Celebra la recuperación pacífica de la soberanía estonia tras la Revolución Cantada en las plazas de Tallin.', costumbres: 'conciertos corales nocturnos y encuentros en el Parque del Cantar' }
    ]
  },
  {
    slug: 'finlandia', nombre: 'Finlandia', nombreOficial: 'República de Finlandia', bandera: '🇫🇮', continente: 'Europa', capital: 'Helsinki', gentilicio: 'finlandés',
    hitos: [
      { titulo: 'Día de la Independencia (Itsenäisyyspäivä)', mes: 12, dia: 6, tipo: 'independencia', relatoBase: 'Conmemora la aprobación parlamentaria de la declaración de soberanía finlandesa y el valor de la cohesión social nórdica.', costumbres: 'dos velas azul y blanca encendidas en cada ventana, marcha de antorchas estudiantil y cenas en calma' },
      { titulo: 'Día del Kalevala y la Cultura Finlandesa', mes: 2, dia: 28, tipo: 'cultura', relatoBase: 'Celebra la epopeya nacional Kalevala, obra clave para la preservación de la lengua y mitología finlandesas.', costumbres: 'lecturas públicas, conciertos de kantele y banderas en balcones' }
    ]
  },
  {
    slug: 'francia', nombre: 'Francia', nombreOficial: 'República Francesa', bandera: '🇫🇷', continente: 'Europa', capital: 'París', gentilicio: 'francés',
    hitos: [
      { titulo: 'Fiesta Nacional (Toma de la Bastilla)', mes: 7, dia: 14, tipo: 'revolucion', relatoBase: 'Evoca el estallido popular parisino que abrió paso a los derechos ciudadanos, la república y el lema de libertad, igualdad y fraternidad.', costumbres: 'desfile en los Campos Elíseos, bailes de bomberos en los barrios y fuegos sobre la Torre Eiffel' },
      { titulo: 'Día de la Victoria y la Paz Europea', mes: 5, dia: 8, tipo: 'liberacion', relatoBase: 'Honra el fin del conflicto europeo en territorio francés y a quienes resistieron por la libertad democrática.', costumbres: 'ofrendas en el Arco del Triunfo y ceremonias en cada municipio francés' }
    ]
  },
  {
    slug: 'grecia', nombre: 'Grecia', nombreOficial: 'República Helénica', bandera: '🇬🇷', continente: 'Europa', capital: 'Atenas', gentilicio: 'griego',
    hitos: [
      { titulo: 'Día de la Independencia Griega', mes: 3, dia: 25, tipo: 'independencia', relatoBase: 'Recuerda el levantamiento histórico por la libertad de la nación helénica y el renacer del Estado griego moderno.', costumbres: 'desfiles en la Plaza Sintagma de Atenas y mesas familiares con bacalao tradicional y miel' },
      { titulo: 'Día del "No" (Ochi Day)', mes: 10, dia: 28, tipo: 'liberacion', relatoBase: 'Conmemora la firme negativa de Grecia a rendir su soberanía frente a exigencias de invasión extranjera, gesto admirado en toda Europa.', costumbres: 'desfiles estudiantiles en Tesalónica y Atenas y banderas azules y blancas' }
    ]
  },
  {
    slug: 'hungria', nombre: 'Hungría', nombreOficial: 'Hungría', bandera: '🇭🇺', continente: 'Europa', capital: 'Budapest', gentilicio: 'húngaro',
    hitos: [
      { titulo: 'Día Nacional de San Esteban (Fundación del Estado)', mes: 8, dia: 20, tipo: 'unidad', relatoBase: 'Honra la fundación milenaria del Estado húngaro en la cuenca de los Cárpatos y la bendición simbólica del pan nuevo de la cosecha.', costumbres: 'desfiles aéreos y fuegos sobre el Danubio en Budapest y corte del pan nacional' },
      { titulo: 'Revolución Cívica de Marzo', mes: 3, dia: 15, tipo: 'revolucion', relatoBase: 'Evoca las jornadas juveniles de Pest lideradas por poetas y ciudadanos que exigieron libertad de prensa e igualdad ante la ley.', costumbres: 'escarapelas tricolores en la solapa y lecturas frente al Museo Nacional' }
    ]
  },
  {
    slug: 'irlanda', nombre: 'Irlanda', nombreOficial: 'Irlanda', bandera: '🇮🇪', continente: 'Europa', capital: 'Dublín', gentilicio: 'irlandés',
    hitos: [
      { titulo: 'Día de San Patricio (Fiesta Nacional)', mes: 3, dia: 17, tipo: 'cultura', relatoBase: 'Celebra en la isla y en la diáspora mundial el patrimonio espiritual, musical y literario del pueblo irlandés.', costumbres: 'desfiles festivos en Dublín, música celta tradicional en vivo y tréboles verdes' },
      { titulo: 'Aniversario del Alzamiento de Pascua', mes: 4, dia: 24, tipo: 'independencia', relatoBase: 'Recuerda la proclamación de la República Irlandesa frente a la Oficina Central de Correos de Dublín, paso decisivo hacia la libertad.', costumbres: 'lectura de la Proclamación frente al GPO de Dublín y homenajes cívicos' }
    ]
  },
  {
    slug: 'islandia', nombre: 'Islandia', nombreOficial: 'Islandia', bandera: '🇮🇸', continente: 'Europa', capital: 'Reikiavik', gentilicio: 'islandés',
    hitos: [
      { titulo: 'Día Nacional y Fundación de la República', mes: 6, dia: 17, tipo: 'independencia', relatoBase: 'Conmemora la proclamación de la República soberana en el histórico parlamento al aire libre de Thingvellir, símbolo de democracia nórdica.', costumbres: 'desfiles coloridos en Reikiavik, coros comunitarios y pastelería tradicional' },
      { titulo: 'Día de la Soberanía (Fullveldisdagurinn)', mes: 12, dia: 1, tipo: 'unidad', relatoBase: 'Recuerda el acta que reconoció a Islandia como Estado libre y soberano en el Atlántico Norte.', costumbres: 'actos universitarios y encuentros culturales de invierno' }
    ]
  },
  {
    slug: 'italia', nombre: 'Italia', nombreOficial: 'República Italiana', bandera: '🇮🇹', continente: 'Europa', capital: 'Roma', gentilicio: 'italiano',
    hitos: [
      { titulo: 'Fiesta de la República (Festa della Repubblica)', mes: 6, dia: 2, tipo: 'constitucion', relatoBase: 'Celebra el histórico referéndum ciudadano tras la guerra donde el pueblo italiano eligió la república y la participación democrática.', costumbres: 'pasada de las Frecce Tricolori sobre Roma y apertura especial de los jardines del Quirinal' },
      { titulo: 'Día de la Liberación', mes: 4, dia: 25, tipo: 'liberacion', relatoBase: 'Conmemora el fin de la ocupación y el triunfo de la resistencia civil por la paz y las libertades constitucionales.', costumbres: 'actos musicales en las plazas de Milán, Turín y Roma y caminatas populares' }
    ]
  },
  {
    slug: 'letonia', nombre: 'Letonia', nombreOficial: 'República de Letonia', bandera: '🇱🇻', continente: 'Europa', capital: 'Riga', gentilicio: 'letón',
    hitos: [
      { titulo: 'Día de la Proclamación de la República', mes: 11, dia: 18, tipo: 'independencia', relatoBase: 'Evoca la declaración fundacional leída en el Teatro Nacional de Riga que dio nacimiento al Estado independiente báltico.', costumbres: 'procesión de antorchas hacia el Monumento a la Libertad en Riga y conciertos corales' },
      { titulo: 'Día de la Restauración de la Independencia', mes: 5, dia: 4, tipo: 'liberacion', relatoBase: 'Recuerda la votación parlamentaria y la "Celebración del Mantel Blanco" para compartir mesa y gratitud entre vecinos.', costumbres: 'mesas comunitarias con manteles blancos en plazas y patios vecinales' }
    ]
  },
  {
    slug: 'liechtenstein', nombre: 'Liechtenstein', nombreOficial: 'Principado de Liechtenstein', bandera: '🇱🇮', continente: 'Europa', capital: 'Vaduz', gentilicio: 'liechtensteiniano',
    hitos: [
      { titulo: 'Fiesta Nacional (Staatsfeiertag)', mes: 8, dia: 15, tipo: 'unidad', relatoBase: 'Reúne a los ciudadanos de todos los municipios alpinos junto al Castillo de Vaduz para celebrar la estabilidad y prosperidad del país.', costumbres: 'recepción abierta en los prados del Castillo de Vaduz, fuegos artificiales y antorchas en la montaña' },
      { titulo: 'Día de la Soberanía Alpina', mes: 7, dia: 12, tipo: 'independencia', relatoBase: 'Recuerda la afirmación temprana de su autonomía territorial entre Suiza y Austria dentro del espacio alpino.', costumbres: 'caminatas históricas y encuentros vecinales en los once municipios' }
    ]
  },
  {
    slug: 'lituania', nombre: 'Lituania', nombreOficial: 'República de Lituania', bandera: '🇱🇹', continente: 'Europa', capital: 'Vilna', gentilicio: 'lituano',
    hitos: [
      { titulo: 'Día del Restablecimiento del Estado Lituano', mes: 2, dia: 16, tipo: 'independencia', relatoBase: 'Conmemora la firma del Acta de Independencia en Vilna que restauró el Estado lituano libre sobre principios democráticos.', costumbres: 'encendido de dieciséis hogueras en la Avenida Gediminas y visitas a la Casa de los Signatarios' },
      { titulo: 'Día de la Restauración de la Independencia', mes: 3, dia: 11, tipo: 'liberacion', relatoBase: 'Recuerda la sesión parlamentaria histórica en que Lituania se convirtió en la primera república báltica en recuperar su soberanía plena.', costumbres: 'gran marcha de la bandera tricolor por el centro de Vilna' }
    ]
  },
  {
    slug: 'luxemburgo', nombre: 'Luxemburgo', nombreOficial: 'Gran Ducado de Luxemburgo', bandera: '🇱🇺', continente: 'Europa', capital: 'Luxemburgo', gentilicio: 'luxemburgués',
    hitos: [
      { titulo: 'Fiesta Nacional de Luxemburgo', mes: 6, dia: 23, tipo: 'unidad', relatoBase: 'Celebra la cohesión cívica, el multilingüismo y la vocación integradora europea del Gran Ducado.', costumbres: 'desfile de antorchas la víspera en la ciudad de Luxemburgo y conciertos en plazas públicas' },
      { titulo: 'Día de Europa en Luxemburgo', mes: 5, dia: 9, tipo: 'cultura', relatoBase: 'Honra el rol fundador de Luxemburgo y de Robert Schuman en la construcción de la paz y cooperación continental.', costumbres: 'festivales ciudadanos multiculturales y ferias gastronómicas europeas' }
    ]
  },
  {
    slug: 'macedonia-del-norte', nombre: 'Macedonia del Norte', nombreOficial: 'República de Macedonia del Norte', bandera: '🇲🇰', continente: 'Europa', capital: 'Skopie', gentilicio: 'macedonio',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 8, tipo: 'independencia', relatoBase: 'Recuerda el referéndum ciudadano abrumador que sancionó la existencia soberana de la república balcánica.', costumbres: 'actos oficiales en Skopie, música tradicional oro y cenas familiares' },
      { titulo: 'Día de la República (Ilinden)', mes: 8, dia: 2, tipo: 'revolucion', relatoBase: 'Conmemora la histórica insurrección de Kruševo y la posterior proclamación de la estatalidad macedonia.', costumbres: 'celebraciones en el monumento Makedonium de Kruševo y recitales folclóricos' }
    ]
  },
  {
    slug: 'malta', nombre: 'Malta', nombreOficial: 'República de Malta', bandera: '🇲🇹', continente: 'Europa', capital: 'La Valeta', gentilicio: 'maltés',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 9, dia: 21, tipo: 'independencia', relatoBase: 'Celebra el nacimiento de Malta como Estado independiente en el corazón del Mediterráneo tras su historia milenaria.', costumbres: 'ceremonias en La Valeta y Floriana, campanas y encuentros costeros' },
      { titulo: 'Día de la Libertad (Jum il-Ħelsien)', mes: 3, dia: 31, tipo: 'liberacion', relatoBase: 'Recuerda la partida definitiva de las últimas guarniciones extranjeras y el inicio de la neutralidad maltesa.', costumbres: 'regata tradicional de barcas en el Gran Puerto de La Valeta' }
    ]
  },
  {
    slug: 'moldavia', nombre: 'Moldavia', nombreOficial: 'República de Moldavia', bandera: '🇲🇩', continente: 'Europa', capital: 'Chisináu', gentilicio: 'moldavo',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 8, dia: 27, tipo: 'independencia', relatoBase: 'Evoca la Declaración de Independencia aprobada en Chisináu y el valor de la lengua, la hospitalidad y las tradiciones vitivinícolas del país.', costumbres: 'celebraciones en la Plaza de la Gran Asamblea Nacional, danzas hora y cocina tradicional' },
      { titulo: 'Día de Nuestra Lengua (Limba Noastră)', mes: 8, dia: 31, tipo: 'cultura', relatoBase: 'Celebra la recuperación oficial del idioma literario rumano y del alfabeto latino como símbolo de identidad cultural.', costumbres: 'ferias de libros, recitales de poesía y conciertos en Chisináu' }
    ]
  },
  {
    slug: 'monaco', nombre: 'Mónaco', nombreOficial: 'Principado de Mónaco', bandera: '🇲🇨', continente: 'Europa', capital: 'Mónaco', gentilicio: 'monegasco',
    hitos: [
      { titulo: 'Fiesta Nacional del Príncipe', mes: 11, dia: 19, tipo: 'unidad', relatoBase: 'Reúne a la comunidad monegasca para celebrar la continuidad institucional, la cultura mediterránea y la vida solidaria del Principado.', costumbres: 'banderas rojas y blancas en todos los edificios, misa solemne y fuegos sobre el puerto' },
      { titulo: 'Fiesta de Santa Devota', mes: 1, dia: 27, tipo: 'cultura', relatoBase: 'Honra a la patrona protectora del Principado y las tradiciones marineras que se remontan a los orígenes de Mónaco.', costumbres: 'procesiones en el barrio de La Condamine y encendido simbólico de la barca frente al mar' }
    ]
  },
  {
    slug: 'montenegro', nombre: 'Montenegro', nombreOficial: 'Montenegro', bandera: '🇲🇪', continente: 'Europa', capital: 'Podgorica', gentilicio: 'montenegrino',
    hitos: [
      { titulo: 'Día de la Independencia', mes: 5, dia: 21, tipo: 'independencia', relatoBase: 'Recuerda la votación popular democrática que restauró a Montenegro como Estado independiente en Europa sudoriental.', costumbres: 'celebraciones en Podgorica y Cetiña, música tradicional y reuniones familiares' },
      { titulo: 'Día de la Estadalidad (13 de Julio)', mes: 7, dia: 13, tipo: 'unidad', relatoBase: 'Coinciden en la fecha tanto el reconocimiento diplomático internacional temprano como el levantamiento popular por la libertad.', costumbres: 'actos culturales en la montaña Lovćen y ceremonias nacionales' }
    ]
  },
  {
    slug: 'noruega', nombre: 'Noruega', nombreOficial: 'Reino de Noruega', bandera: '🇳🇴', continente: 'Europa', capital: 'Oslo', gentilicio: 'noruego',
    hitos: [
      { titulo: 'Día de la Constitución (Syttende Mai)', mes: 5, dia: 17, tipo: 'constitucion', relatoBase: 'Celebra la firma de la Constitución de Eidsvoll, una de las cartas fundamentales democráticas más antiguas y celebradas de Europa.', costumbres: 'grandes desfiles de niños y escolares frente al Palacio Real de Oslo con trajes típicos bunad y helados' },
      { titulo: 'Día de la Liberación de Noruega', mes: 5, dia: 8, tipo: 'liberacion', relatoBase: 'Recuerda el regreso de la libertad cívica y el fin de la ocupación tras cinco años de resistencia.', costumbres: 'ceremonias junto a la fortaleza de Akershus en Oslo' }
    ]
  },
  {
    slug: 'paises-bajos', nombre: 'Países Bajos', nombreOficial: 'Reino de los Países Bajos', bandera: '🇳🇱', continente: 'Europa', capital: 'Ámsterdam', gentilicio: 'neerlandés',
    hitos: [
      { titulo: 'Día de la Liberación (Bevrijdingsdag)', mes: 5, dia: 5, tipo: 'liberacion', relatoBase: 'Conmemora la liberación del país del dominio ocupante y promueve el debate ciudadano sobre libertad, tolerancia y paz.', costumbres: 'festivales musicales gratuitos en catorce ciudades y embarcaciones por los canales' },
      { titulo: 'Día del Rey (Koningsdag)', mes: 4, dia: 27, tipo: 'unidad', relatoBase: 'Gran celebración ciudadana teñida de color naranja que refleja la vida vecinal y comunitaria de las ciudades neerlandesas.', costumbres: 'mercados libres vecinales (vrijmarkt) en calles y parques y conciertos al aire libre' }
    ]
  },
  {
    slug: 'polonia', nombre: 'Polonia', nombreOficial: 'República de Polonia', bandera: '🇵🇱', continente: 'Europa', capital: 'Varsovia', gentilicio: 'polaco',
    hitos: [
      { titulo: 'Día Nacional de la Independencia', mes: 11, dia: 11, tipo: 'independencia', relatoBase: 'Celebra el renacimiento de la Polonia soberana tras más de un siglo de particiones territoriales, preservada gracias a su lengua y cultura.', costumbres: 'caminatas cívicas con banderas blancas y rojas y degustación de medialunas de San Martín' },
      { titulo: 'Día de la Constitución del 3 de Mayo', mes: 5, dia: 3, tipo: 'constitucion', relatoBase: 'Recuerda la promulgación de la primera Constitución moderna codificada de Europa, orgullo histórico del pensamiento cívico polaco.', costumbres: 'actos solemnes en el Castillo Real de Varsovia y recitales patrióticos' }
    ]
  },
  {
    slug: 'portugal', nombre: 'Portugal', nombreOficial: 'República Portuguesa', bandera: '🇵🇹', continente: 'Europa', capital: 'Lisboa', gentilicio: 'portugués',
    hitos: [
      { titulo: 'Día de Portugal, de Camões y de las Comunidades', mes: 6, dia: 10, tipo: 'cultura', relatoBase: 'Honra al gran poeta Luís de Camões, la lengua portuguesa repartida por cuatro continentes y a las comunidades portuguesas del mundo.', costumbres: 'actos culturales oficiales, conciertos de fado y ferias literarias' },
      { titulo: 'Día de la Libertad (Revolución de los Claveles)', mes: 4, dia: 25, tipo: 'revolucion', relatoBase: 'Evoca el levantamiento pacífico que devolvió la democracia sin derramamiento de sangre y llenó de claveles rojos las calles de Lisboa.', costumbres: 'marchas cívicas por la Avenida da Liberdade con claveles rojos en la mano' }
    ]
  },
  {
    slug: 'reino-unido', nombre: 'Reino Unido', nombreOficial: 'Reino Unido de Gran Bretaña e Irlanda del Norte', bandera: '🇬🇧', continente: 'Europa', capital: 'Londres', gentilicio: 'británico',
    hitos: [
      { titulo: 'Aniversario de la Carta Magna', mes: 6, dia: 15, tipo: 'constitucion', relatoBase: 'Recuerda el histórico documento sellado en Runnymede que limitó por primera vez el poder absoluto y sembró las bases del debido proceso legal.', costumbres: 'exhibiciones en bibliotecas históricas, charlas jurídicas y recorridos patrimoniales' },
      { titulo: 'Día del Armisticio y Recuerdo (Remembrance)', mes: 11, dia: 11, tipo: 'liberacion', relatoBase: 'Minutos de silencio en todo el país y uso de amapolas rojas para recordar a quienes entregaron su vida por la paz.', costumbres: 'ceremonia frente al Cenotafio de Whitehall en Londres y ofrendas vecinales' }
    ]
  },
  {
    slug: 'republica-checa', nombre: 'República Checa', nombreOficial: 'República Checa', bandera: '🇨🇿', continente: 'Europa', capital: 'Praga', gentilicio: 'checo',
    hitos: [
      { titulo: 'Día de la Fundación del Estado Checoslovaco', mes: 10, dia: 28, tipo: 'independencia', relatoBase: 'Conmemora la proclamación en la Plaza Wenceslao de Praga de la primera república democrática centroeuropea.', costumbres: 'apertura especial de palacios y edificios históricos en Praga y entrega de distinciones estatales' },
      { titulo: 'Día de la Lucha por la Libertad y la Democracia', mes: 11, dia: 17, tipo: 'revolucion', relatoBase: 'Recuerda tanto la resistencia estudiantil frente a la ocupación como la Revolución de Terciopelo que recuperó la democracia sin violencia.', costumbres: 'velas encendidas y flores en Národní třída en Praga' }
    ]
  },
  {
    slug: 'rumania', nombre: 'Rumanía', nombreOficial: 'Rumanía', bandera: '🇷🇴', continente: 'Europa', capital: 'Bucarest', gentilicio: 'rumano',
    hitos: [
      { titulo: 'Día de la Gran Unión (Ziua Națională)', mes: 12, dia: 1, tipo: 'unidad', relatoBase: 'Celebra la histórica asamblea de Alba Iulia que unificó las regiones rumanas en un solo Estado moderno.', costumbres: 'desfiles en Bucarest y Alba Iulia, platos calientes de invierno y música folclórica' },
      { titulo: 'Día de la Unión de los Principados', mes: 1, dia: 24, tipo: 'unidad', relatoBase: 'Recuerda la unión temprana de Moldavia y Valaquia que puso los cimientos de la Rumanía contemporánea.', costumbres: 'el tradicional baile en ronda Hora Unirii en plazas públicas' }
    ]
  },
  {
    slug: 'rusia', nombre: 'Rusia', nombreOficial: 'Federación de Rusia', bandera: '🇷🇺', continente: 'Europa', capital: 'Moscú', gentilicio: 'ruso',
    hitos: [
      { titulo: 'Día de Rusia', mes: 6, dia: 12, tipo: 'constitucion', relatoBase: 'Conmemora la declaración de soberanía estatal y el comienzo de la arquitectura federal contemporánea del país.', costumbres: 'conciertos en plazas de Moscú y San Petersburgo, ferias culturales y fuegos nocturnos' },
      { titulo: 'Día de la Victoria y Memoria Histórica', mes: 5, dia: 9, tipo: 'liberacion', relatoBase: 'Recuerda el fin de la contienda en Europa oriental y rinde tributo a las familias que sostuvieron la reconstrucción de sus ciudades.', costumbres: 'desfiles conmemorativos, cintas de San Jorge y visitas familiares a memoriales' }
    ]
  },
  {
    slug: 'san-marino', nombre: 'San Marino', nombreOficial: 'Serenísima República de San Marino', bandera: '🇸🇲', continente: 'Europa', capital: 'Ciudad de San Marino', gentilicio: 'sanmarinense',
    hitos: [
      { titulo: 'Fiesta de San Marino y Fundación de la República', mes: 9, dia: 3, tipo: 'independencia', relatoBase: 'Celebra los orígenes milenarios sobre el Monte Titano de la república constitucional más antigua que aún existe en el mundo.', costumbres: 'torneo histórico de ballesteros en traje medieval y procesiones por las murallas' },
      { titulo: 'Día de la Liberación de Arengo', mes: 3, dia: 25, tipo: 'revolucion', relatoBase: 'Evoca la asamblea histórica de jefes de familia que abrió paso al sufragio democrático directo del país.', costumbres: 'actos en el Palazzo Pubblico y encuentros cívicos en Borgo Maggiore' }
    ]
  },
  {
    slug: 'serbia', nombre: 'Serbia', nombreOficial: 'República de Serbia', bandera: '🇷🇸', continente: 'Europa', capital: 'Belgrado', gentilicio: 'serbio',
    hitos: [
      { titulo: 'Día de la Estadalidad (Sretenje)', mes: 2, dia: 15, tipo: 'constitucion', relatoBase: 'Une en una sola fecha el levantamiento por la libertad y la promulgación de la histórica Constitución de Sretenje, pionera en libertades en los Balcanes.', costumbres: 'actos oficiales en Orašac y Kragujevac y museos gratuitos' },
      { titulo: 'Día del Armisticio y Paz', mes: 11, dia: 11, tipo: 'liberacion', relatoBase: 'Rinde homenaje a la reconstrucción nacional y la memoria de quienes lucharon por la supervivencia del país.', costumbres: 'uso de la flor simbólica Ramonda de Natalia y ofrendas en Belgrado' }
    ]
  },
  {
    slug: 'suecia', nombre: 'Suecia', nombreOficial: 'Reino de Suecia', bandera: '🇸🇪', continente: 'Europa', capital: 'Estocolmo', gentilicio: 'sueco',
    hitos: [
      { titulo: 'Día Nacional de Suecia', mes: 6, dia: 6, tipo: 'constitucion', relatoBase: 'Celebra tanto la elección fundacional que consolidó el reino sueco como la adopción de su histórica reforma constitucional.', costumbres: 'ceremonias de bienvenida a nuevos ciudadanos en parques, picnics veraniegos y pasteles de frutilla' },
      { titulo: 'Día del Solsticio (Midsommar)', mes: 6, dia: 21, tipo: 'cultura', relatoBase: 'Tradición escandinava que festeja la luz del verano, las cosechas y la reunión familiar alrededor del árbol floral.', costumbres: 'coronas de flores silvestres, bailes alrededor del mástil y almuerzos campestres' }
    ]
  },
  {
    slug: 'suiza', nombre: 'Suiza', nombreOficial: 'Confederación Suiza', bandera: '🇨🇭', continente: 'Europa', capital: 'Berna', gentilicio: 'suizo',
    hitos: [
      { titulo: 'Fiesta Nacional Suiza (Pacto del Rütli)', mes: 8, dia: 1, tipo: 'unidad', relatoBase: 'Conmemora la alianza originaria de los cantones alpinos jurada en la pradera del Rütli como pacto de ayuda mutua e independencia.', costumbres: 'desayunos campestres en granjas, farolillos rojos con cruz blanca, fogatas en cumbres y fuegos' },
      { titulo: 'Aniversario del Estado Federal Moderno', mes: 9, dia: 12, tipo: 'constitucion', relatoBase: 'Recuerda la entrada en vigor de la Constitución federal que transformó una alianza laxa de cantones en un Estado federal democrático.', costumbres: 'encuentros cívicos en Berna y exposiciones sobre democracia directa' }
    ]
  },
  {
    slug: 'ucrania', nombre: 'Ucrania', nombreOficial: 'Ucrania', bandera: '🇺🇦', continente: 'Europa', capital: 'Kiev', gentilicio: 'ucraniano',
    hitos: [
      { titulo: 'Día de la Independencia de Ucrania', mes: 8, dia: 24, tipo: 'independencia', relatoBase: 'Conmemora la aprobación parlamentaria en Kiev del Acta de Declaración de Independencia, afirmación soberana de la cultura y el pueblo ucraniano.', costumbres: 'camisas bordadas tradicionales vyshyvanka, banderas azules y amarillas y actos cívicos' },
      { titulo: 'Día de la Unidad de Ucrania (Sobornist)', mes: 1, dia: 22, tipo: 'unidad', relatoBase: 'Recuerda la proclamación histórica de unión de las regiones occidentales y orientales en un solo Estado ucraniano indivisible.', costumbres: 'cadenas humanas simbólicas de unidad en puentes y plazas históricas' }
    ]
  }
];

export const HITOS_EUROPA: PaisHitosHistoricos[] = RAW_EUROPA.map(construirPaisHito);
