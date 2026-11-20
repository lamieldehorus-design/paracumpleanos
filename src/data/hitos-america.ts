import type { PaisHito } from './hitos-tipos.ts';

export const HITOS_AMERICA: PaisHito[] = [
  {
    slug: 'antigua-y-barbuda',
    nombre: 'Antigua y Barbuda',
    capital: 'Saint John’s',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇦🇬',
    hitoPrincipal: {
      dia: 1,
      mes: 11,
      anioHistorico: 1981,
      titulo: 'Día de la Independencia de Antigua y Barbuda',
      tipo: 'independencia',
      resumen: 'Proclamación de la independencia plena respecto del Reino Unido el 1 de noviembre de 1981.',
      contextoHistorico: 'Tras más de tres siglos bajo dominio británico y una etapa previa como Estado Asociado desde 1967, Antigua y Barbuda alcanzó su soberanía plena el 1 de noviembre de 1981 con Vere Bird como primer ministro inaugural, manteniéndose dentro de la Mancomunidad de Naciones.',
      comoSeFesteja: 'La semana de la independencia reúne desfiles cívicos en Saint John’s, ferias gastronómicas con fungie y pepperpot, concursos de calipso y steelpan, y el izamiento solemne de la bandera nacional en plazas y escuelas.',
      saludoSugerido: '¡Feliz Día de la Independencia a Antigua y Barbuda! Celebramos su historia, su música caribeña y la calidez de su pueblo.'
    },
    datoCurioso: 'La bandera nacional fue diseñada por un docente y escultor local, Reginald Samuel, en un concurso abierto antes de la emancipación.'
  },
  {
    slug: 'argentina',
    nombre: 'Argentina',
    capital: 'Buenos Aires',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇦🇷',
    hitoPrincipal: {
      dia: 9,
      mes: 7,
      anioHistorico: 1816,
      titulo: 'Declaración de la Independencia de la Argentina',
      tipo: 'independencia',
      resumen: 'El Congreso de Tucumán proclamó la independencia de las Provincias Unidas del Río de la Plata el 9 de julio de 1816.',
      contextoHistorico: 'Reunidos en la histórica Casa de Tucumán, veintinueve diputados de las provincias firmaron el 9 de julio de 1816 el Acta de la Independencia, rompiendo formalmente los vínculos políticos con la monarquía española y con toda otra dominación extranjera, consolidando el proceso iniciado en mayo de 1810.',
      comoSeFesteja: 'Se realizan actos escolares, tedeums y desfiles cívico-militares en San Miguel de Tucumán y todo el país. Las familias celebran con comidas criollas tradicionales como locro, empanadas tucumanas, pastelitos de batata y membrillo y chocolate caliente.',
      saludoSugerido: '¡Feliz 9 de Julio, Día de la Independencia Argentina! Que el espíritu de unión, libertad y encuentro nos acompañe hoy en cada mesa.'
    },
    hitosSecundarios: [
      {
        dia: 25,
        mes: 5,
        anioHistorico: 1810,
        titulo: 'Revolución de Mayo y Primer Gobierno Patrio',
        tipo: 'revolucion',
        resumen: 'Conformación de la Primera Junta de Gobierno en el Cabildo de Buenos Aires el 25 de mayo de 1810.',
        contextoHistorico: 'Tras la Semana de Mayo y las deliberaciones en el Cabildo Abierto, el 25 de mayo de 1810 se constituyó la Primera Junta presidida por Cornelio Saavedra, dando inicio al camino emancipador del actual territorio argentino.',
        comoSeFesteja: 'Es tradicional lucir la escarapela celeste y blanca, reunirse alrededor del locro o el guiso de lentejas y asistir a actos culturales en plazas y centros cívicos.',
        saludoSugerido: '¡Feliz 25 de Mayo! Recordamos con orgullo el nacimiento de la Patria y compartimos un abrazo celeste y blanco.'
      },
      {
        dia: 20,
        mes: 6,
        anioHistorico: 1820,
        titulo: 'Día de la Bandera Argentina',
        tipo: 'dia-nacional',
        resumen: 'Homenaje a Manuel Belgrano, creador de la bandera argentina, en la fecha de su fallecimiento en 1820.',
        contextoHistorico: 'Manuel Belgrano enarboló por primera vez la bandera celeste y blanca a orillas del río Paraná en Rosario el 27 de febrero de 1812; desde 1938 cada 20 de junio se conmemora oficialmente el Día de la Bandera.',
        comoSeFesteja: 'Estudiantes de cuarto grado de todo el país realizan su promesa de lealtad a la bandera, con acto central en el Monumento Histórico Nacional a la Bandera en Rosario.',
        saludoSugerido: 'En el Día de la Bandera, honramos el ejemplo de Manuel Belgrano y el símbolo que nos une en cada rincón del país.'
      }
    ],
    datoCurioso: 'El Acta de la Independencia de 1816 se imprimió en español, quechua y aimara para que pudiera ser leída por los pueblos originarios del Alto Perú y del norte argentino.'
  },
  {
    slug: 'bahamas',
    nombre: 'Bahamas',
    capital: 'Nasáu',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇧🇸',
    hitoPrincipal: {
      dia: 10,
      mes: 7,
      anioHistorico: 1973,
      titulo: 'Día de la Independencia de las Bahamas',
      tipo: 'independencia',
      resumen: 'El archipiélago de las Bahamas proclamó su independencia del Reino Unido el 10 de julio de 1973.',
      contextoHistorico: 'En la medianoche del 10 de julio de 1973, en Clifford Park (Nasáu), se izó por primera vez la bandera aguamarina, amarilla y negra bajo el liderazgo del primer ministro Lynden Pindling, culminando la transición constitucional hacia una nación soberana.',
      comoSeFesteja: 'Las celebraciones incluyen vigilias culturales con música junkanoo, fuegos artificiales en Nasáu y Gran Bahama, regatas de vela tradicional y encuentros familiares en la playa.',
      saludoSugerido: '¡Feliz Día de la Independencia a las Bahamas! Celebramos su alegría caribeña, sus aguas turquesas y su orgullo nacional.'
    },
    datoCurioso: 'Los tres colores de la bandera bahameña simbolizan el mar caribeño (aguamarina), el sol y la arena (dorado) y la fuerza unida de su pueblo (triángulo negro).'
  },
  {
    slug: 'barbados',
    nombre: 'Barbados',
    capital: 'Bridgetown',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇧🇧',
    hitoPrincipal: {
      dia: 30,
      mes: 11,
      anioHistorico: 1966,
      titulo: 'Día de la Independencia y República de Barbados',
      tipo: 'independencia',
      resumen: 'Independencia de Barbados en 1966 y proclamación como república parlamentaria el 30 de noviembre de 2021.',
      contextoHistorico: 'El 30 de noviembre de 1966 Barbados se independizó del Reino Unido con Errol Barrow como primer ministro. Exactamente 55 años después, el 30 de noviembre de 2021, el país inauguró una nueva etapa histórica convirtiéndose en república con Sandra Mason como primera presidenta.',
      comoSeFesteja: 'Se realiza el gran desfile de la independencia en la Garrison Savannah de Bridgetown, iluminación en azul ultramar y oro de edificios históricos, conciertos y festivales culinarios de pez volador y cou-cou.',
      saludoSugerido: '¡Feliz Día de la Independencia a Barbados! Honramos su historia soberana y la riqueza cultural de su isla.'
    },
    datoCurioso: 'El tridente partido en el centro de la bandera representa la ruptura histórica con el pasado colonial mientras mantiene la conexión vital con el océano.'
  },
  {
    slug: 'belice',
    nombre: 'Belice',
    capital: 'Belmopán',
    continente: 'america',
    subregion: 'América Central',
    bandera: '🇧🇿',
    hitoPrincipal: {
      dia: 21,
      mes: 9,
      anioHistorico: 1981,
      titulo: 'Día de la Independencia de Belice',
      tipo: 'independencia',
      resumen: 'Belice dejó de ser Honduras Británica y alcanzó su independencia soberana el 21 de septiembre de 1981.',
      contextoHistorico: 'Encabezado por George Cadle Price, considerado el Padre de la Patria beliceña, Belice logró su independencia del Reino Unido el 21 de septiembre de 1981 con reconocimiento de la ONU, uniendo herencias mayas, garífunas, criollas y mestizas.',
      comoSeFesteja: 'El mes de septiembre entero se vive con las "Celebraciones de Septiembre": carnavales callejeros, desfile ciudadano en Ciudad de Belice y Belmopán, música punta y soca y ceremonias oficiales.',
      saludoSugerido: '¡Feliz Día de la Independencia a Belice! Que el orgullo multicultural de su pueblo brille hoy con fuerza.'
    },
    datoCurioso: 'La bandera de Belice es la única bandera nacional del mundo que representa figuras humanas (dos trabajadores forestales) en su escudo central.'
  },
  {
    slug: 'bolivia',
    nombre: 'Bolivia',
    capital: 'Sucre / La Paz',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇧🇴',
    hitoPrincipal: {
      dia: 6,
      mes: 8,
      anioHistorico: 1825,
      titulo: 'Día de la Independencia de Bolivia',
      tipo: 'independencia',
      resumen: 'Firma del Acta de la Independencia del Alto Perú en la Casa de la Libertad de Sucre el 6 de agosto de 1825.',
      contextoHistorico: 'Tras más de quince años de luchas emancipadoras y las victorias decisivas de Junín y Ayacucho, la Asamblea Deliberante reunida en Chuquisaca (hoy Sucre) proclamó la independencia el 6 de agosto de 1825, adoptando el nombre de Bolivia en homenaje al libertador Simón Bolívar.',
      comoSeFesteja: 'El país celebra con sesiones de honor en Sucre, desfiles escolares y cívicos con trajes típicos, música de bandas folclóricas y platos tradicionales como salteñas, silpancho y picante de pollo.',
      saludoSugerido: '¡Feliz 6 de Agosto, Día de la Patria en Bolivia! Celebramos su historia andina, amazónica y la diversidad de su gente.'
    },
    datoCurioso: 'La fecha del 6 de agosto fue elegida expresamente para coincidir con el primer aniversario de la Batalla de Junín (1824).'
  },
  {
    slug: 'brasil',
    nombre: 'Brasil',
    capital: 'Brasilia',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇧🇷',
    hitoPrincipal: {
      dia: 7,
      mes: 9,
      anioHistorico: 1822,
      titulo: 'Día de la Independencia de Brasil (Grito de Ipiranga)',
      tipo: 'independencia',
      resumen: 'El príncipe regente Pedro proclamó la independencia de Brasil a orillas del arroyo Ipiranga el 7 de septiembre de 1822.',
      contextoHistorico: 'Al recibir despachos de las Cortes de Lisboa que exigían su regreso a Portugal y recortaban la autonomía brasileña, don Pedro pronunció el célebre "¡Independencia o muerte!" el 7 de septiembre de 1822 cerca de São Paulo, dando nacimiento al Brasil independiente.',
      comoSeFesteja: 'La Explanada de los Ministerios en Brasilia y las principales avenidas de Río de Janeiro, São Paulo y Salvador albergan desfiles cívicos, bandas marciales y exhibiciones aéreas de la Escuadrilla de Humo.',
      saludoSugerido: '¡Feliz 7 de Septiembre, Día de la Independencia de Brasil! Celebramos su cultura vibrante, su alegría y su inmensa diversidad.'
    },
    datoCurioso: 'El cielo estrellado de la bandera brasileña reproduce exactamente la bóveda celeste de Río de Janeiro a las 8:30 de la mañana del 15 de noviembre de 1889, día de la proclamación de la República.'
  },
  {
    slug: 'canada',
    nombre: 'Canadá',
    capital: 'Ottawa',
    continente: 'america',
    subregion: 'América del Norte',
    bandera: '🇨🇦',
    hitoPrincipal: {
      dia: 1,
      mes: 7,
      anioHistorico: 1867,
      titulo: 'Día de Canadá (Confederación Canadiense)',
      tipo: 'fundacion',
      resumen: 'Entrada en vigor del Acta de la Norteamérica Británica que unió las primeras provincias canadienses el 1 de julio de 1867.',
      contextoHistorico: 'El 1 de julio de 1867 se constituyó la Confederación de Canadá al unirse Ontario, Quebec, Nueva Escocia y Nuevo Brunswick en un solo dominio autónomo. Conocido originalmente como Dominion Day, en 1982 adoptó el nombre oficial de Canada Day.',
      comoSeFesteja: 'Las calles se tiñen de rojo y blanco con conciertos al aire libre en Ottawa y cada provincia, ceremonias de nueva ciudadanía, pícnics familiares y fuegos artificiales nocturnos sobre ríos y lagos.',
      saludoSugerido: '¡Feliz Día de Canadá! Celebramos sus paisajes infinitos, su espíritu multicultural y la hospitalidad de su gente.'
    },
    datoCurioso: 'La hoja de arce de once puntas que hoy identifica mundialmente a Canadá fue adoptada oficialmente como bandera nacional recién en 1965.'
  },
  {
    slug: 'chile',
    nombre: 'Chile',
    capital: 'Santiago',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇨🇱',
    hitoPrincipal: {
      dia: 18,
      mes: 9,
      anioHistorico: 1810,
      titulo: 'Fiestas Patrias de Chile (Primera Junta Nacional de Gobierno)',
      tipo: 'independencia',
      resumen: 'Instalación de la Primera Junta Nacional de Gobierno en Santiago el 18 de septiembre de 1810.',
      contextoHistorico: 'El Cabildo Abierto del 18 de septiembre de 1810 constituyó la Primera Junta Nacional de Gobierno presidida por Mateo de Toro y Zambrano, hito que inauguró el proceso emancipador de Chile y que culminaría con la Declaración de Independencia firmada en 1818.',
      comoSeFesteja: 'El "Dieciocho" se celebra durante varios días con fondas y ramadas, bailes de cueca, elevación de volantines, empanadas de pino, asados familiares y la tradicional Parada Militar el 19 de septiembre.',
      saludoSugerido: '¡Felices Fiestas Patrias, Chile! Que este 18 de septiembre abunden la cueca, el encuentro familiar y el orgullo por nuestra tierra.'
    },
    datoCurioso: 'En Chile es tradición popular elevar volantines (cometas) en septiembre aprovechando los vientos de fines del invierno y comienzos de la primavera austral.'
  },
  {
    slug: 'colombia',
    nombre: 'Colombia',
    capital: 'Bogotá',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇨🇴',
    hitoPrincipal: {
      dia: 20,
      mes: 7,
      anioHistorico: 1810,
      titulo: 'Día de la Independencia de Colombia (Grito de Independencia)',
      tipo: 'independencia',
      resumen: 'El episodio del Florero de Llorente desencadenó la firma del Acta de Independencia en Santa Fe de Bogotá el 20 de julio de 1810.',
      contextoHistorico: 'Un incidente planeado por criollos en la tienda del comerciante José González Llorente encendió una movilización popular en la Plaza Mayor de Santa Fe que derivó en la firma del Acta de la Revolución del 20 de julio de 1810 y la creación de la Junta Suprema de Gobierno.',
      comoSeFesteja: 'Las casas y balcones despliegan la bandera tricolor amarilla, azul y roja, se celebran desfiles cívicos, conciertos de música colombiana en todo el país y encuentros familiares.',
      saludoSugerido: '¡Feliz 20 de Julio, Día de la Independencia de Colombia! Celebramos la alegría, la música y el corazón trabajador de su pueblo.'
    },
    hitosSecundarios: [
      {
        dia: 7,
        mes: 8,
        anioHistorico: 1819,
        titulo: 'Batalla de Boyacá',
        tipo: 'independencia',
        resumen: 'Victoria decisiva del ejército libertador de Simón Bolívar en el Puente de Boyacá el 7 de agosto de 1819.',
        contextoHistorico: 'Tras cruzar el Páramo de Pisba, las fuerzas patriotas lideradas por Simón Bolívar y Francisco de Paula Santander vencieron al ejército realista el 7 de agosto de 1819, sellando la independencia de la Nueva Granada.',
        comoSeFesteja: 'Es feriado nacional en Colombia, fecha de conmemoración histórica en el Puente de Boyacá y día tradicional de posesión presidencial cada cuatro años.',
        saludoSugerido: 'Recordamos con respeto la Batalla de Boyacá, gesta histórica que consolidó la libertad de Colombia.'
      }
    ],
    datoCurioso: 'La casa donde ocurrió el famoso episodio del florero en 1810 sigue en pie en la esquina nororiental de la Plaza de Bolívar de Bogotá y funciona como el Museo de la Independencia.'
  },
  {
    slug: 'costa-rica',
    nombre: 'Costa Rica',
    capital: 'San José',
    continente: 'america',
    subregion: 'América Central',
    bandera: '🇨🇷',
    hitoPrincipal: {
      dia: 15,
      mes: 9,
      anioHistorico: 1821,
      titulo: 'Día de la Independencia de Costa Rica',
      tipo: 'independencia',
      resumen: 'Firma del Acta de Independencia de Centroamérica el 15 de septiembre de 1821.',
      contextoHistorico: 'El 15 de septiembre de 1821 se firmó en Guatemala el Acta de Independencia de las provincias de la Capitanía General; la noticia llegó a Cartago, entonces capital de Costa Rica, el 13 de octubre y el 29 de octubre se ratificó la independencia absoluta de forma pacífica.',
      comoSeFesteja: 'La noche del 14 de septiembre miles de niños desfilan con faroles encendidos y cantan el Himno Nacional a las 18:00 h; el 15 llegan la Antorcha de la Independencia y los desfiles estudiantiles de bandas.',
      saludoSugerido: '¡Feliz 15 de Septiembre, Costa Rica! Celebramos su tradición de paz, naturaleza y educación con un saludo de pura vida.'
    },
    datoCurioso: 'Costa Rica abolió su ejército de forma permanente en 1948, destinando esos recursos a educación pública y salud, por lo que sus desfiles patrios son exclusivamente estudiantiles y civiles.'
  },
  {
    slug: 'cuba',
    nombre: 'Cuba',
    capital: 'La Habana',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇨🇺',
    hitoPrincipal: {
      dia: 10,
      mes: 10,
      anioHistorico: 1868,
      titulo: 'Inicio de las Guerras de Independencia de Cuba (Grito de Yara)',
      tipo: 'independencia',
      resumen: 'Carlos Manuel de Céspedes liberó a sus esclavos en el ingenio La Demajagua e inició la lucha por la independencia el 10 de octubre de 1868.',
      contextoHistorico: 'El 10 de octubre de 1868, Carlos Manuel de Céspedes tocó la campana del ingenio La Demajagua, proclamó el Manifiesto de Independencia y otorgó la libertad a las personas esclavizadas para que se sumaran como ciudadanos libres a la lucha emancipadora.',
      comoSeFesteja: 'Se realizan actos conmemorativos históricos en La Demajagua (Granma) y plazas culturales de todo el país, con conciertos de trova, poesía de José Martí y encuentros comunitarios.',
      saludoSugerido: 'Recordamos el 10 de octubre y la historia cultural de Cuba, tierra de música, literatura y profunda identidad caribeña.'
    },
    datoCurioso: 'El 20 de mayo de 1902 se estableció formalmente la República de Cuba, mientras que el 10 de octubre de 1868 permanece como la fecha fundacional del movimiento independentista.'
  },
  {
    slug: 'dominica',
    nombre: 'Dominica',
    capital: 'Roseau',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇩🇲',
    hitoPrincipal: {
      dia: 3,
      mes: 11,
      anioHistorico: 1978,
      titulo: 'Día de la Independencia de Dominica',
      tipo: 'independencia',
      resumen: 'La Isla de la Naturaleza proclamó su independencia como república el 3 de noviembre de 1978.',
      contextoHistorico: 'Dominica obtuvo su independencia del Reino Unido el 3 de noviembre de 1978, convirtiéndose de inmediato en una república parlamentaria dentro de la Mancomunidad de Naciones. La fecha coincide además con el avistamiento europeo de la isla un domingo de 1493.',
      comoSeFesteja: 'Precedida por el Día Criollo (Creole Day) donde todos visten trajes tradicionales wob dwiyet, la jornada del 3 de noviembre incluye desfiles en Roseau, música bouyon y cadencia, y degustación de cocina criolla.',
      saludoSugerido: '¡Feliz Día de la Independencia a Dominica! Celebramos la belleza verde de la Isla de la Naturaleza y su cultura criolla.'
    },
    datoCurioso: 'La bandera de Dominica es una de las poquísimas banderas nacionales del mundo que incluye el color púrpura, presente en el pecho del loro sisserou.'
  },
  {
    slug: 'ecuador',
    nombre: 'Ecuador',
    capital: 'Quito',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇪🇨',
    hitoPrincipal: {
      dia: 10,
      mes: 8,
      anioHistorico: 1809,
      titulo: 'Primer Grito de Independencia de Ecuador',
      tipo: 'independencia',
      resumen: 'Constitución de la Primera Junta de Gobierno Autónoma en Quito el 10 de agosto de 1809.',
      contextoHistorico: 'El 10 de agosto de 1809 un grupo de patriotas quiteños depuso a las autoridades coloniales y estableció una Junta Soberana, un acontecimiento pionero en Hispanoamérica que valió a Quito el título de "Luz de América" y abrió el proceso sellado en la Batalla de Pichincha en 1822.',
      comoSeFesteja: 'Quito y las provincias celebran con ofrendas florales en la Plaza de la Independencia, desfiles cívicos, festivales de luz en el centro histórico y gastronomía andina y costeña.',
      saludoSugerido: '¡Feliz 10 de Agosto, Ecuador! Honramos el Primer Grito de Independencia y celebramos la riqueza cultural de los cuatro mundos ecuatorianos.'
    },
    hitosSecundarios: [
      {
        dia: 24,
        mes: 5,
        anioHistorico: 1822,
        titulo: 'Batalla de Pichincha',
        tipo: 'independencia',
        resumen: 'Triunfo definitivo de las tropas lideradas por Antonio José de Sucre en las faldas del volcán Pichincha el 24 de mayo de 1822.',
        contextoHistorico: 'El combate librado a más de 3.000 metros de altura junto a Quito aseguró la liberación de la Real Audiencia de Quito y consolidó la independencia territorial ecuatoriana.',
        comoSeFesteja: 'Es feriado nacional, fecha de solemne cambio de mando presidencial y homenajes en la Cima de la Libertad en Quito.',
        saludoSugerido: 'Conmemoramos el 24 de Mayo y la gesta histórica de la Batalla de Pichincha en honor al pueblo ecuatoriano.'
      }
    ],
    datoCurioso: 'Manuela Cañizares fue figura central en la noche previa al 10 de agosto de 1809 al albergar y alentar en su propia casa a los patriotas que dudaban en dar el paso decisivo.'
  },
  {
    slug: 'el-salvador',
    nombre: 'El Salvador',
    capital: 'San Salvador',
    continente: 'america',
    subregion: 'América Central',
    bandera: '🇸🇻',
    hitoPrincipal: {
      dia: 15,
      mes: 9,
      anioHistorico: 1821,
      titulo: 'Día de la Independencia de El Salvador',
      tipo: 'independencia',
      resumen: 'Proclamación de la independencia de Centroamérica el 15 de septiembre de 1821, tras el primer grito salvadoreño de 1811.',
      contextoHistorico: 'Con el antecedente fundamental del levantamiento del 5 de noviembre de 1811 liderado por José Matías Delgado en San Salvador, el territorio alcanzó la emancipación de la Corona española el 15 de septiembre de 1821 con la firma del Acta de Independencia centroamericana.',
      comoSeFesteja: 'Las calles de San Salvador y cada departamento se llenan de bandas de paz estudiantiles, cachiporristas, antorchas escolares y platos típicos como pupusas y atol de elote.',
      saludoSugerido: '¡Feliz 15 de Septiembre, El Salvador! Celebramos la fuerza, la alegría y las tradiciones del Pulgarcito de América.'
    },
    datoCurioso: 'Diez años antes de 1821, el repique de las campanas de la iglesia La Merced en San Salvador dio origen al primer movimiento independentista centroamericano.'
  },
  {
    slug: 'estados-unidos',
    nombre: 'Estados Unidos',
    capital: 'Washington D. C.',
    continente: 'america',
    subregion: 'América del Norte',
    bandera: '🇺🇸',
    hitoPrincipal: {
      dia: 4,
      mes: 7,
      anioHistorico: 1776,
      titulo: 'Día de la Independencia de los Estados Unidos (Fourth of July)',
      tipo: 'independencia',
      resumen: 'Adopción oficial de la Declaración de Independencia por el Segundo Congreso Continental el 4 de julio de 1776.',
      contextoHistorico: 'Redactada principalmente por Thomas Jefferson y aprobada en Filadelfia por los representantes de las Trece Colonias, la Declaración de Independencia proclamó los principios de igualdad y soberanía popular que fundaron la república estadounidense.',
      comoSeFesteja: 'Millones de personas celebran el verano con barbacoas familiares, desfiles locales, conciertos patrióticos, partidos de béisbol y espectáculos masivos de fuegos artificiales al anochecer.',
      saludoSugerido: '¡Feliz 4 de Julio! Celebramos una fecha emblemática de la historia moderna con un deseo de paz y encuentro.'
    },
    datoCurioso: 'Aunque el Congreso votó formalmente a favor de separarse de Gran Bretaña el 2 de julio de 1776, la aprobación del texto impreso de la Declaración el 4 de julio fijó para siempre la fecha nacional.'
  },
  {
    slug: 'granada',
    nombre: 'Granada',
    capital: 'Saint George’s',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇬🇩',
    hitoPrincipal: {
      dia: 7,
      mes: 2,
      anioHistorico: 1974,
      titulo: 'Día de la Independencia de Granada',
      tipo: 'independencia',
      resumen: 'Granada alcanzó su independencia del Reino Unido el 7 de febrero de 1974.',
      contextoHistorico: 'Conocida como la "Isla de las Especias" por su producción de nuez moscada, Granada fue el primero de los Estados Asociados de las Indias Occidentales en lograr su independencia plena el 7 de febrero de 1974.',
      comoSeFesteja: 'Desfiles escolares y militares en el Estadio Nacional de Saint George’s, conciertos de calipso, festivales culturales y preparación comunitaria del plato nacional oil down.',
      saludoSugerido: '¡Feliz Día de la Independencia a Granada! Celebramos el aroma de la Isla de las Especias y la calidez de su pueblo.'
    },
    datoCurioso: 'La bandera de Granada incluye en su franja izquierda una ilustración estilizada de una nuez moscada, símbolo de su identidad agrícola.'
  },
  {
    slug: 'guatemala',
    nombre: 'Guatemala',
    capital: 'Ciudad de Guatemala',
    continente: 'america',
    subregion: 'América Central',
    bandera: '🇬🇹',
    hitoPrincipal: {
      dia: 15,
      mes: 9,
      anioHistorico: 1821,
      titulo: 'Día de la Independencia de Guatemala',
      tipo: 'independencia',
      resumen: 'Firma del Acta de Independencia en el Real Palacio de la Nueva Guatemala de la Asunción el 15 de septiembre de 1821.',
      contextoHistorico: 'En la capital de la antigua Capitanía General de Guatemala, representantes civiles y religiosos firmaron el 15 de septiembre de 1821 el acta que puso fin a casi tres siglos de dominio colonial español en Centroamérica.',
      comoSeFesteja: 'Grupos de estudiantes y vecinos corren en relevos portando la Antorcha de la Libertad desde la Plaza del Obelisco hacia todos los municipios, entre sonidos de marimba, desfiles y comidas típicas.',
      saludoSugerido: '¡Feliz 15 de Septiembre, Guatemala! Que la marimba, los colores y la historia de la tierra del quetzal brillen hoy.'
    },
    datoCurioso: 'Cada septiembre la Antorcha Centroamericana de la Paz parte desde Guatemala y recorre miles de kilómetros a pie pasando por El Salvador, Honduras, Nicaragua y Costa Rica.'
  },
  {
    slug: 'guyana',
    nombre: 'Guyana',
    capital: 'Georgetown',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇬🇾',
    hitoPrincipal: {
      dia: 26,
      mes: 5,
      anioHistorico: 1966,
      titulo: 'Día de la Independencia de Guyana',
      tipo: 'independencia',
      resumen: 'Fin del período colonial de la Guayana Británica y nacimiento de la Guyana independiente el 26 de mayo de 1966.',
      contextoHistorico: 'El 26 de mayo de 1966 se izó por primera vez la "Punta de Flecha Dorada" en Georgetown, marcando el nacimiento del único país de habla inglesa de América del Sur, que en 1970 se convertiría en República Cooperativa.',
      comoSeFesteja: 'Se celebra con ceremonias de izamiento a medianoche, conciertos culturales, festivales que reflejan sus raíces indígenas, afroguyanesas e indoguyanesas y reuniones familiares.',
      saludoSugerido: '¡Feliz Día de la Independencia a Guyana! Celebramos la riqueza natural de la Tierra de Muchas Aguas y su diversidad cultural.'
    },
    datoCurioso: 'El nombre Guyana proviene de una lengua indígena amerindia que significa literalmente "tierra de muchas aguas".'
  },
  {
    slug: 'haiti',
    nombre: 'Haití',
    capital: 'Puerto Príncipe',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇭🇹',
    hitoPrincipal: {
      dia: 1,
      mes: 1,
      anioHistorico: 1804,
      titulo: 'Día de la Independencia de Haití',
      tipo: 'independencia',
      resumen: 'Proclamación de la independencia de Haití el 1 de enero de 1804, primera república independiente de América Latina y el Caribe.',
      contextoHistorico: 'Tras la única revolución triunfante de personas esclavizadas en la historia mundial —iniciada por Toussaint Louverture y culminada por Jean-Jacques Dessalines en la Batalla de Vertières—, el 1 de enero de 1804 se proclamó la independencia en Gonaïves, recuperando el nombre indígena taíno Ayiti.',
      comoSeFesteja: 'Las familias haitianas de la isla y la diáspora comparten la tradicional sopa joumou (sopa de calabaza), símbolo histórico de libertad pues durante la colonia estaba prohibida para los esclavizados.',
      saludoSugerido: '¡Feliz Día de la Independencia a Haití! Honramos la gesta histórica pionera de libertad en todo el continente americano.'
    },
    datoCurioso: 'En 2021 la UNESCO declaró a la sopa joumou haitiana Patrimonio Cultural Inmaterial de la Humanidad por su vínculo directo con la emancipación del 1 de enero de 1804.'
  },
  {
    slug: 'honduras',
    nombre: 'Honduras',
    capital: 'Tegucigalpa',
    continente: 'america',
    subregion: 'América Central',
    bandera: '🇭🇳',
    hitoPrincipal: {
      dia: 15,
      mes: 9,
      anioHistorico: 1821,
      titulo: 'Día de la Independencia de Honduras',
      tipo: 'independencia',
      resumen: 'Emancipación de Honduras junto a las demás provincias centroamericanas el 15 de septiembre de 1821.',
      contextoHistorico: 'Los pliegos de independencia firmados el 15 de septiembre de 1821 en Guatemala fueron redactados por el prócer hondureño José Cecilio del Valle y llegaron a Comayagua y Tegucigalpa el 28 de septiembre, abriendo la etapa soberana del país.',
      comoSeFesteja: 'Miles de estudiantes desfilan hacia el Estadio Nacional de Tegucigalpa y plazas departamentales con bandas marciales, palillonas, cuadro de danzas folclóricas y lectura solemne del Acta.',
      saludoSugerido: '¡Feliz 15 de Septiembre, Honduras! Celebramos con cariño las cinco estrellas azules y la calidez del pueblo catracho.'
    },
    datoCurioso: 'Las cinco estrellas de la bandera hondureña simbolizan los cinco países históricos de la antigua República Federal de Centroamérica y la aspiración a su hermandad.'
  },
  {
    slug: 'jamaica',
    nombre: 'Jamaica',
    capital: 'Kingston',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇯🇲',
    hitoPrincipal: {
      dia: 6,
      mes: 8,
      anioHistorico: 1962,
      titulo: 'Día de la Independencia de Jamaica',
      tipo: 'independencia',
      resumen: 'Jamaica alcanzó su soberanía plena respecto del Reino Unido el 6 de agosto de 1962.',
      contextoHistorico: 'Luego de más de tres siglos de gobierno colonial británico y tras la disolución de la Federación de las Indias Occidentales, Jamaica izó su bandera verde, amarilla y negra el 6 de agosto de 1962 con Alexander Bustamante como primer ministro.',
      comoSeFesteja: 'La semana de Emancipación e Independencia culmina el 6 de agosto con el Grand Gala en el Estadio Nacional de Kingston, desfiles callejeros, conciertos de reggae y ska y cocina jamaicana.',
      saludoSugerido: '¡Feliz Día de la Independencia a Jamaica! Celebramos la música, la energía y la influencia cultural de la isla en el mundo.'
    },
    datoCurioso: 'La bandera de Jamaica es actualmente la única bandera nacional soberana del mundo que no contiene ninguno de los colores rojo, blanco o azul.'
  },
  {
    slug: 'mexico',
    nombre: 'México',
    capital: 'Ciudad de México',
    continente: 'america',
    subregion: 'América del Norte',
    bandera: '🇲🇽',
    hitoPrincipal: {
      dia: 16,
      mes: 9,
      anioHistorico: 1810,
      titulo: 'Día de la Independencia de México (Grito de Dolores)',
      tipo: 'independencia',
      resumen: 'Inicio de la gesta independentista mexicana en la madrugada del 16 de septiembre de 1810 en Dolores, Guanajuato.',
      contextoHistorico: 'Al tañido de la campana de la parroquia de Dolores, el cura Miguel Hidalgo y Costilla convocó al pueblo en la madrugada del 16 de septiembre de 1810 para levantarse contra el régimen colonial, dando inicio a once años de lucha que culminaron el 27 de septiembre de 1821.',
      comoSeFesteja: 'La noche del 15 se celebra el tradicional Grito de Independencia en el Zócalo y todas las plazas públicas, seguido el 16 por el desfile cívico-militar y mesas festivas con pozole, chiles en nogada, mariachis y verbenas.',
      saludoSugerido: '¡Viva México! Feliz 16 de Septiembre, celebrando con orgullo la historia, los sabores y el corazón de toda su gente.'
    },
    hitosSecundarios: [
      {
        dia: 5,
        mes: 5,
        anioHistorico: 1862,
        titulo: 'Batalla de Puebla (Cinco de Mayo)',
        tipo: 'dia-nacional',
        resumen: 'Victoria del ejército mexicano al mando de Ignacio Zaragoza sobre el ejército francés en Puebla el 5 de mayo de 1862.',
        contextoHistorico: 'Pese a la superioridad numérica y técnica de las tropas del Segundo Imperio francés, las fuerzas mexicanas defendieron los fuertes de Loreto y Guadalupe el 5 de mayo de 1862, convirtiendo la fecha en símbolo de soberanía y dignidad nacional.',
        comoSeFesteja: 'Se realizan grandes desfiles y recreaciones históricas en Puebla y celebraciones de orgullo cultural mexicano en Norteamérica.',
        saludoSugerido: 'Conmemoramos el 5 de Mayo recordando la valentía de Puebla y la riqueza cultural de México.'
      },
      {
        dia: 20,
        mes: 11,
        anioHistorico: 1910,
        titulo: 'Día de la Revolución Mexicana',
        tipo: 'revolucion',
        resumen: 'Inicio del movimiento revolucionario encabezado por Francisco I. Madero el 20 de noviembre de 1910.',
        contextoHistorico: 'El Plan de San Luis convocó al levantamiento del 20 de noviembre de 1910 contra la dictadura porfirista, desatando una profunda transformación social, agraria y constitucional plasmada en la Carta Magna de 1917.',
        comoSeFesteja: 'En todo México se celebran desfiles cívico-deportivos, tablas rítmicas escolares y evocaciones de figuras como Emiliano Zapata y Francisco Villa.',
        saludoSugerido: 'Conmemoramos el 20 de Noviembre, aniversario de la Revolución Mexicana y de sus conquistas sociales.'
      }
    ],
    datoCurioso: 'La campana original que tocó Miguel Hidalgo en Dolores fue trasladada en 1896 al balcón central del Palacio Nacional en la Ciudad de México, donde sigue repicando cada 15 de septiembre.'
  },
  {
    slug: 'nicaragua',
    nombre: 'Nicaragua',
    capital: 'Managua',
    continente: 'america',
    subregion: 'América Central',
    bandera: '🇳🇮',
    hitoPrincipal: {
      dia: 15,
      mes: 9,
      anioHistorico: 1821,
      titulo: 'Día de la Independencia de Nicaragua',
      tipo: 'independencia',
      resumen: 'Proclamación de la independencia de Nicaragua junto con Centroamérica el 15 de septiembre de 1821.',
      contextoHistorico: 'Integrada entonces a la Capitanía General de Guatemala, Nicaragua se emancipó de España el 15 de septiembre de 1821; la conmemoración se une cada año con el 14 de septiembre, aniversario de la Batalla de San Jacinto de 1856 en defensa de la soberanía nacional.',
      comoSeFesteja: 'Los días 14 y 15 de septiembre son fiestas patrias nacionales con desfiles estudiantiles, recibimiento de la Antorcha Centroamericana, música de marimba y ferias de gastronomía tradicional.',
      saludoSugerido: '¡Feliz 15 de Septiembre, Nicaragua! Celebramos la tierra de lagos, volcanes y poesía en su día patrio.'
    },
    datoCurioso: 'El escudo nacional de Nicaragua incluye un triángulo equilátero con cinco volcanes bañados por dos océanos y un gorro frigio rojo símbolo de libertad.'
  },
  {
    slug: 'panama',
    nombre: 'Panamá',
    capital: 'Ciudad de Panamá',
    continente: 'america',
    subregion: 'América Central',
    bandera: '🇵🇦',
    hitoPrincipal: {
      dia: 3,
      mes: 11,
      anioHistorico: 1903,
      titulo: 'Separación de Panamá de Colombia y nacimiento de la República',
      tipo: 'independencia',
      resumen: 'Proclamación de la República de Panamá como Estado independiente el 3 de noviembre de 1903.',
      contextoHistorico: 'Tras haberse independizado de España el 28 de noviembre de 1821 y haberse unido voluntariamente a la Gran Colombia, Panamá proclamó su separación definitiva el 3 de noviembre de 1903, abriendo el Mes de la Patria panameño.',
      comoSeFesteja: 'Noviembre entero reúne dianas al amanecer, desfiles de bandas estudiantiles y típicas con polleras y sombreros pintados, y actos cívicos el 3, 4, 5, 10 y 28 de noviembre.',
      saludoSugerido: '¡Felices Fiestas Patrias, Panamá! Celebramos al puente del mundo y corazón del universo en su mes histórico.'
    },
    hitosSecundarios: [
      {
        dia: 28,
        mes: 11,
        anioHistorico: 1821,
        titulo: 'Independencia de Panamá de España',
        tipo: 'independencia',
        resumen: 'Proclamación incruenta de la independencia del istmo de Panamá de la Corona española el 28 de noviembre de 1821.',
        contextoHistorico: 'Tras el Primer Grito de la Villa de Los Santos el 10 de noviembre, el cabildo abierto de la Ciudad de Panamá declaró formalmente la independencia de España el 28 de noviembre de 1821.',
        comoSeFesteja: 'Cierra oficialmente el Mes de la Patria con desfiles folclóricos en La Chorrera, Boquete y todo el país.',
        saludoSugerido: '¡Feliz 28 de Noviembre, Panamá! Honramos la independencia histórica del istmo y el orgullo de su pueblo.'
      }
    ],
    datoCurioso: 'Panamá es uno de los pocos países del mundo que celebra dos grandes hitos de independencia distintos en el mismo mes: el 3 y el 28 de noviembre.'
  },
  {
    slug: 'paraguay',
    nombre: 'Paraguay',
    capital: 'Asunción',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇵🇾',
    hitoPrincipal: {
      dia: 14,
      mes: 5,
      anioHistorico: 1811,
      titulo: 'Día de la Independencia del Paraguay',
      tipo: 'independencia',
      resumen: 'Gesta emancipadora de la noche del 14 y madrugada del 15 de mayo de 1811 en Asunción.',
      contextoHistorico: 'Un grupo de jóvenes oficiales y civiles encabezados por Pedro Juan Caballero, Vicente Ignacio Iturbe y Fulgencio Yegros intimó pacíficamente la rendición del gobernador español Bernardo de Velasco entre el 14 y el 15 de mayo de 1811, logrando una de las primeras independencias sudamericanas sin derramamiento de sangre.',
      comoSeFesteja: 'El 14 y el 15 de mayo —que coincide con el Día de la Madre en Paraguay— se celebran con desfiles por la calle Palma en Asunción, serenatas de arpa y guitarra, chipa y sopa paraguaya en familia.',
      saludoSugerido: '¡Feliz Día de la Independencia del Paraguay! Celebramos la historia guaraní, su música de arpa y la hospitalidad de su gente.'
    },
    datoCurioso: 'La bandera paraguaya es una de las muy pocas banderas nacionales del mundo que tiene un escudo distinto en el anverso y en el reverso.'
  },
  {
    slug: 'peru',
    nombre: 'Perú',
    capital: 'Lima',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇵🇪',
    hitoPrincipal: {
      dia: 28,
      mes: 7,
      anioHistorico: 1821,
      titulo: 'Fiestas Patrias y Proclamación de la Independencia del Perú',
      tipo: 'independencia',
      resumen: 'José de San Martín proclamó la independencia del Perú en la Plaza Mayor de Lima el 28 de julio de 1821.',
      contextoHistorico: 'Ante miles de ciudadanos congregados en la Plaza Mayor de Lima, el general José de San Martín pronunció las palabras históricas: "Desde este momento el Perú es libre e independiente por la voluntad general de los pueblos y por la justicia de su causa que Dios defiende".',
      comoSeFesteja: 'Durante julio las viviendas colocan la bandera rojiblanca; el 28 se realizan la Misa Te Deum y el Mensaje a la Nación, y el 29 la Gran Parada y Desfile Cívico Militar, acompañados de gastronomía peruana y danzas de costa, sierra y selva.',
      saludoSugerido: '¡Felices Fiestas Patrias, Perú! Celebramos el 28 de Julio con orgullo por su historia milenaria, su cultura y su gastronomía.'
    },
    datoCurioso: 'Durante todo el mes de julio es costumbre en el Perú llevar en el pecho una escarapela roja y blanca como signo cívico de identidad nacional.'
  },
  {
    slug: 'republica-dominicana',
    nombre: 'República Dominicana',
    capital: 'Santo Domingo',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇩🇴',
    hitoPrincipal: {
      dia: 27,
      mes: 2,
      anioHistorico: 1844,
      titulo: 'Día de la Independencia de la República Dominicana',
      tipo: 'independencia',
      resumen: 'El trabucazo de Matías Ramón Mella en la Puerta de la Misericordia selló la independencia el 27 de febrero de 1844.',
      contextoHistorico: 'Impulsada por la sociedad secreta La Trinitaria fundada por Juan Pablo Duarte, junto con Francisco del Rosario Sánchez y Matías Ramón Mella, la noche del 27 de febrero de 1844 se izó por primera vez la bandera tricolor en la Puerta del Conde proclamando la República Dominicana.',
      comoSeFesteja: 'La fecha coincide con el apogeo del Carnaval Dominicano: desfiles llenos de diablos cojuelos, merengue, bachata, ofrendas en el Altar de la Patria y reuniones familiares.',
      saludoSugerido: '¡Feliz 27 de Febrero, República Dominicana! Celebramos la alegría, la música y el espíritu libre del pueblo quisqueyano.'
    },
    datoCurioso: 'La bandera de la República Dominicana es la única del mundo que lleva una Biblia abierta en el centro de su escudo nacional.'
  },
  {
    slug: 'san-cristobal-y-nieves',
    nombre: 'San Cristóbal y Nieves',
    capital: 'Basseterre',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇰🇳',
    hitoPrincipal: {
      dia: 19,
      mes: 9,
      anioHistorico: 1983,
      titulo: 'Día de la Independencia de San Cristóbal y Nieves',
      tipo: 'independencia',
      resumen: 'La federación bicameral de las dos islas caribeñas obtuvo su independencia el 19 de septiembre de 1983.',
      contextoHistorico: 'Tras más de tres siglos bajo administración británica, San Cristóbal y Nieves se convirtió el 19 de septiembre de 1983 en el Estado soberano más pequeño de América tanto en superficie como en población.',
      comoSeFesteja: 'Conciertos patrióticos en Warner Park (Basseterre), desfiles cívicos, ceremonias de reconocimiento a héroes nacionales y festivales culturales en ambas islas.',
      saludoSugerido: '¡Feliz Día de la Independencia a San Cristóbal y Nieves! Celebramos la historia y el encanto de sus dos islas hermanas.'
    },
    datoCurioso: 'Las dos estrellas blancas de la bandera no representan a las dos islas, como suele creerse, sino a la esperanza y la libertad.'
  },
  {
    slug: 'san-vicente-y-las-granadinas',
    nombre: 'San Vicente y las Granadinas',
    capital: 'Kingstown',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇻🇨',
    hitoPrincipal: {
      dia: 27,
      mes: 10,
      anioHistorico: 1979,
      titulo: 'Día de la Independencia de San Vicente y las Granadinas',
      tipo: 'independencia',
      resumen: 'Proclamación de la soberanía del archipiélago el 27 de octubre de 1979.',
      contextoHistorico: 'Después de haber sido Estado Asociado al Reino Unido desde 1969, el país accedió a la independencia plena el 27 de octubre de 1979 con Milton Cato como primer ministro.',
      comoSeFesteja: 'El Victoria Park de Kingstown recibe desfiles uniformados, exhibiciones de danza y tambor, competencias deportivas y platos tradicionales como fruta de pan asada con pescado.',
      saludoSugerido: '¡Feliz Día de la Independencia a San Vicente y las Granadinas! Celebramos la belleza de las Antillas y su gente.'
    },
    datoCurioso: 'Los tres diamantes verdes dispuestos en forma de "V" en el centro de la bandera aluden a "Vicente" y al apodo del país: "Las Gemas de las Antillas".'
  },
  {
    slug: 'santa-lucia',
    nombre: 'Santa Lucía',
    capital: 'Castries',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇱🇨',
    hitoPrincipal: {
      dia: 22,
      mes: 2,
      anioHistorico: 1979,
      titulo: 'Día de la Independencia de Santa Lucía',
      tipo: 'independencia',
      resumen: 'Santa Lucía se independizó del Reino Unido el 22 de febrero de 1979.',
      contextoHistorico: 'Disputada catorce veces entre Francia y Gran Bretaña durante los siglos XVII y XVIII, la isla alcanzó finalmente su independencia soberana el 22 de febrero de 1979 bajo el liderazgo de John Compton.',
      comoSeFesteja: 'Se celebran carreras de antorchas por las parroquias de la isla, desfiles en Castries, exhibiciones de artes escénicas, música soca y ferias artesanales.',
      saludoSugerido: '¡Feliz Día de la Independencia a Santa Lucía! Celebramos la tierra de los Pitons y de grandes premios Nobel.'
    },
    datoCurioso: 'A pesar de ser una isla pequeña, Santa Lucía cuenta con dos premios Nobel nacidos en su territorio: Arthur Lewis (Economía) y Derek Walcott (Literatura).'
  },
  {
    slug: 'surinam',
    nombre: 'Surinam',
    capital: 'Paramaribo',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇸🇷',
    hitoPrincipal: {
      dia: 25,
      mes: 11,
      anioHistorico: 1975,
      titulo: 'Día de la Independencia de Surinam (Srefidensi Dey)',
      tipo: 'independencia',
      resumen: 'Surinam proclamó su independencia de los Países Bajos el 25 de noviembre de 1975.',
      contextoHistorico: 'Tras haber sido colonia neerlandesa y luego país constituyente del Reino de los Países Bajos, Surinam nació como república soberana el 25 de noviembre de 1975 con Johan Ferrier como primer presidente y Henck Arron como primer ministro.',
      comoSeFesteja: 'El Srefidensi Dey reúne desfiles en la Plaza de la Independencia de Paramaribo, festivales que celebran su convivencia de culturas indígenas, cimarronas, javanesas, indostaníes y criollas, y espectáculos musicales.',
      saludoSugerido: '¡Feliz Srefidensi Dey, Surinam! Celebramos la riqueza amazónica y la diversidad armoniosa de su pueblo.'
    },
    datoCurioso: 'El centro histórico de madera de Paramaribo, donde se proclamó la independencia, es Patrimonio de la Humanidad de la UNESCO.'
  },
  {
    slug: 'trinidad-y-tobago',
    nombre: 'Trinidad y Tobago',
    capital: 'Puerto España',
    continente: 'america',
    subregion: 'Caribe',
    bandera: '🇹🇹',
    hitoPrincipal: {
      dia: 31,
      mes: 8,
      anioHistorico: 1962,
      titulo: 'Día de la Independencia de Trinidad y Tobago',
      tipo: 'independencia',
      resumen: 'Independencia de Trinidad y Tobago respecto del Reino Unido el 31 de agosto de 1962.',
      contextoHistorico: 'Guiada por el historiador y primer ministro Eric Williams, la nación caribeña obtuvo su independencia el 31 de agosto de 1962 y se constituyó en república en 1976, siendo cuna del tambor metálico (steelpan) y del calipso.',
      comoSeFesteja: 'Grandes desfiles en el Queen’s Park Savannah de Puerto España, entrega de condecoraciones nacionales, conciertos de steelband y espectáculos de luces sobre la bahía.',
      saludoSugerido: '¡Feliz Día de la Independencia a Trinidad y Tobago! Celebramos la música del steelpan y la energía única de sus dos islas.'
    },
    datoCurioso: 'El steelpan (tambor de acero), inventado en Trinidad y Tobago en el siglo XX, es el único instrumento acústico nuevo creado en ese siglo.'
  },
  {
    slug: 'uruguay',
    nombre: 'Uruguay',
    capital: 'Montevideo',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇺🇾',
    hitoPrincipal: {
      dia: 25,
      mes: 8,
      anioHistorico: 1825,
      titulo: 'Declaratoria de la Independencia del Uruguay',
      tipo: 'independencia',
      resumen: 'El Congreso de la Florida proclamó la independencia de la Provincia Oriental el 25 de agosto de 1825.',
      contextoHistorico: 'Tras el desembarco de los Treinta y Tres Orientales liderados por Juan Antonio Lavalleja, la Sala de Representantes reunida en la Piedra Alta de Florida sancionó las tres leyes fundamentales de Independencia, Unión y Pabellón el 25 de agosto de 1825.',
      comoSeFesteja: 'La noche anterior se vive la tradicional "Noche de la Nostalgia" con música retro en todo el país; el 25 se realizan actos patrios en Florida y plazas de los 19 departamentos junto a asados y encuentros familiares.',
      saludoSugerido: '¡Feliz 25 de Agosto, Uruguay! Celebramos la Declaratoria de la Independencia con un cálido abrazo oriental.'
    },
    hitosSecundarios: [
      {
        dia: 18,
        mes: 7,
        anioHistorico: 1830,
        titulo: 'Jura de la Constitución del Uruguay',
        tipo: 'constitucion',
        resumen: 'Jura pública de la primera Constitución de la República Oriental del Uruguay el 18 de julio de 1830.',
        contextoHistorico: 'En la Plaza Matriz de Montevideo y en todos los pueblos del país, autoridades y ciudadanos juraron la primera Carta Magna, que consolidó institucionalmente al Estado uruguayo.',
        comoSeFesteja: 'Es feriado nacional no laborable con ceremonias cívicas y da nombre a la avenida principal de Montevideo.',
        saludoSugerido: 'Conmemoramos el 18 de Julio, Jura de la Constitución y pilar institucional de la historia uruguaya.'
      }
    ],
    datoCurioso: 'La víspera del feriado del 25 de agosto dio origen en 1978 a la "Noche de la Nostalgia", hoy declarada evento de interés turístico nacional en todo Uruguay.'
  },
  {
    slug: 'venezuela',
    nombre: 'Venezuela',
    capital: 'Caracas',
    continente: 'america',
    subregion: 'América del Sur',
    bandera: '🇻🇪',
    hitoPrincipal: {
      dia: 5,
      mes: 7,
      anioHistorico: 1811,
      titulo: 'Día de la Independencia de Venezuela',
      tipo: 'independencia',
      resumen: 'Firma del Acta de la Declaración de Independencia de Venezuela en Caracas el 5 de julio de 1811.',
      contextoHistorico: 'Tras los sucesos del 19 de abril de 1810, el Primer Congreso Nacional reunido en la Capilla Santa Rosa de Lima en Caracas declaró formalmente la independencia absoluta el 5 de julio de 1811, siendo la primera nación de Hispanoamérica en firmar su acta soberana.',
      comoSeFesteja: 'Se realiza la apertura solemne del arca que guarda el Acta de 1811 en el Palacio Federal Legislativo, desfiles cívicos, conciertos de joropo y encuentros familiares.',
      saludoSugerido: '¡Feliz 5 de Julio, Venezuela! Recordamos la gesta histórica de 1811 y enviamos un abrazo cálido a todos los venezolanos.'
    },
    datoCurioso: 'El arca de bronce que resguarda el libro original del Acta de Independencia de 1811 se abre al público solemnemente cada 5 de julio en Caracas.'
  }
];
