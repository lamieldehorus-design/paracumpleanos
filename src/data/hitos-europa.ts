import type { PaisHito } from './hitos-tipos.ts';

export const HITOS_EUROPA: PaisHito[] = [
  {
    slug: 'albania',
    nombre: 'Albania',
    capital: 'Tirana',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇦🇱',
    hitoPrincipal: {
      dia: 28,
      mes: 11,
      anioHistorico: 1912,
      titulo: 'Día de la Bandera e Independencia de Albania',
      tipo: 'independencia',
      resumen: 'Ismail Qemali proclamó la independencia de Albania en Vlorë e izó la bandera del águila bicéfala el 28 de noviembre de 1912.',
      contextoHistorico: 'Tras casi cinco siglos bajo dominio otomano, delegados de todo el territorio albanés se reunieron en la ciudad costera de Vlorë el 28 de noviembre de 1912 para declarar la independencia soberana, eligiendo el mismo día en que el héroe nacional Skanderbeg había alzado su estandarte en Krujë en 1443.',
      comoSeFesteja: 'Tirana, Vlorë y las comunidades albanesas del mundo se visten de rojo y negro con conciertos folclóricos, danzas tradicionales valle, ofrendas florales y celebraciones que continúan el 29 de noviembre.',
      saludoSugerido: '¡Feliz Día de la Bandera e Independencia a Albania! Celebramos su historia milenaria y la fortaleza de su identidad.'
    },
    datoCurioso: 'La fecha del 28 de noviembre enlaza dos gestas separadas por 469 años: la rebelión de Skanderbeg en 1443 y la declaración de independencia de 1912.'
  },
  {
    slug: 'alemania',
    nombre: 'Alemania',
    capital: 'Berlín',
    continente: 'europa',
    subregion: 'Europa Central',
    bandera: '🇩🇪',
    hitoPrincipal: {
      dia: 3,
      mes: 10,
      anioHistorico: 1990,
      titulo: 'Día de la Unidad Alemana (Tag der Deutschen Einheit)',
      tipo: 'unificacion',
      resumen: 'Reunificación pacífica de Alemania Occidental y Alemania Oriental el 3 de octubre de 1990.',
      contextoHistorico: 'Once meses después de la caída del Muro de Berlín (9 de noviembre de 1989) y tras la firma del Tratado Dos más Cuatro, el 3 de octubre de 1990 entró en vigor la reunificación que puso fin a más de cuatro décadas de división de la Guerra Fría.',
      comoSeFesteja: 'Cada año un estado federado distinto acoge el Bürgerfest (Festival Ciudadano) junto con actos ecuménicos, conciertos al aire libre frente a la Puerta de Brandeburgo en Berlín y jornadas de puertas abiertas.',
      saludoSugerido: 'Conmemoramos el Día de la Unidad Alemana, símbolo moderno de reencuentro pacífico y diálogo entre pueblos.'
    },
    hitosSecundarios: [
      {
        dia: 9,
        mes: 11,
        anioHistorico: 1989,
        titulo: 'Caída del Muro de Berlín',
        tipo: 'efemeride-mundial',
        resumen: 'Apertura pacífica de los pasos fronterizos del Muro de Berlín la noche del 9 de noviembre de 1989.',
        contextoHistorico: 'Tras semanas de manifestaciones pacíficas en Leipzig y Berlín Oriental, miles de berlineses cruzaron los controles la noche del 9 de noviembre de 1989, derribando el símbolo más visible de la Europa dividida.',
        comoSeFesteja: 'Se realizan memoriales luminosos, exposiciones históricas y conciertos por la libertad a lo largo del antiguo trazado del muro.',
        saludoSugerido: 'Recordamos el 9 de noviembre de 1989, una noche que cambió la historia contemporánea a través de la libertad pacífica.'
      }
    ],
    datoCurioso: 'Se eligió el 3 de octubre en lugar del 9 de noviembre como día festivo porque el 9 de noviembre también coincide con la trágica Noche de los Cristales Rotos de 1938.'
  },
  {
    slug: 'andorra',
    nombre: 'Andorra',
    capital: 'Andorra la Vieja',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇦🇩',
    hitoPrincipal: {
      dia: 8,
      mes: 9,
      anioHistorico: 1278,
      titulo: 'Día de Nuestra Señora de Meritxell (Diada de Andorra)',
      tipo: 'dia-nacional',
      resumen: 'Fiesta nacional del Principado de Andorra en honor a su patrona y a los históricos Pareatges de 1278.',
      contextoHistorico: 'La identidad institucional de Andorra hunde sus raíces en el primer Pareatge firmado el 8 de septiembre de 1278 entre el obispo de Urgel y el conde de Foix, tratado que fundó el singular sistema de coprincipado que garantizó más de siete siglos de estabilidad en los Pirineos.',
      comoSeFesteja: 'Se celebra con la misa solemne en el Santuario de Meritxell, el canto del himno El Gran Carlemany, bailes tradicionales de contrapàs y sardana, y la degustación popular de escudella.',
      saludoSugerido: '¡Feliz Diada de Meritxell a Andorra! Celebramos la historia pirenaica y la tradición de uno de los Estados más antiguos de Europa.'
    },
    datoCurioso: 'El catalán es el único idioma oficial de Andorra, siendo el único Estado soberano del mundo con esta característica.'
  },
  {
    slug: 'austria',
    nombre: 'Austria',
    capital: 'Viena',
    continente: 'europa',
    subregion: 'Europa Central',
    bandera: '🇦🇹',
    hitoPrincipal: {
      dia: 26,
      mes: 10,
      anioHistorico: 1955,
      titulo: 'Día Nacional de Austria (Neutralidad Permanente)',
      tipo: 'dia-nacional',
      resumen: 'Aprobación de la Ley Constitucional de Neutralidad Permanente de Austria el 26 de octubre de 1955.',
      contextoHistorico: 'Al día siguiente de la salida del último soldado extranjero tras la posguerra, el Parlamento austríaco aprobó el 26 de octubre de 1955 la declaración de neutralidad perpetua que restauró la plena soberanía de la Segunda República.',
      comoSeFesteja: 'Los museos federales de Viena abren gratuitamente, el Palacio Hofburg ofrece visitas abiertas y miles de familias practican caminatas alpinas tradicionales en el "Día del Senderismo Nacional".',
      saludoSugerido: '¡Feliz Día Nacional de Austria! Celebramos su legado musical, sus paisajes alpinos y su vocación de paz.'
    },
    datoCurioso: 'Cada 26 de octubre la Federación Deportiva Austríaca organiza marchas populares abiertas a todas las edades por todo el país.'
  },
  {
    slug: 'belgica',
    nombre: 'Bélgica',
    capital: 'Bruselas',
    continente: 'europa',
    subregion: 'Europa Occidental',
    bandera: '🇧🇪',
    hitoPrincipal: {
      dia: 21,
      mes: 7,
      anioHistorico: 1831,
      titulo: 'Día Nacional de Bélgica',
      tipo: 'independencia',
      resumen: 'Jura constitucional de Leopoldo I como primer rey de los belgas el 21 de julio de 1831.',
      contextoHistorico: 'Tras la Revolución Belga de 1830 que separó al país del Reino Unido de los Países Bajos, Leopoldo de Sajonia-Coburgo prestó juramento a la Constitución el 21 de julio de 1831 en la Plaza Real de Bruselas, inaugurando la monarquía parlamentaria belga.',
      comoSeFesteja: 'La víspera se baila el Bal National en la plaza Jeu de Balle; el 21 hay Te Deum en la catedral de San Miguel y Santa Gúdula, desfile cívico-militar, fiesta en el Parque de Bruselas y fuegos artificiales.',
      saludoSugerido: '¡Feliz 21 de Julio, Día Nacional de Bélgica! Celebramos su arquitectura, su historia europea y su hospitalidad.'
    },
    datoCurioso: 'El lema nacional belga es "La unión hace la fuerza" (L’union fait la force / Eendracht maakt macht), reflejando la convivencia de sus comunidades lingüísticas.'
  },
  {
    slug: 'bielorrusia',
    nombre: 'Bielorrusia',
    capital: 'Minsk',
    continente: 'europa',
    subregion: 'Europa Oriental',
    bandera: '🇧🇾',
    hitoPrincipal: {
      dia: 3,
      mes: 7,
      anioHistorico: 1944,
      titulo: 'Día de la Independencia de Bielorrusia',
      tipo: 'independencia',
      resumen: 'Conmemoración de la liberación de Minsk el 3 de julio de 1944 durante la Segunda Guerra Mundial.',
      contextoHistorico: 'Tras la independencia formal de la Unión Soviética en 1991, un referéndum de 1996 estableció el 3 de julio como Día de la Independencia nacional en memoria de la liberación de la capital Minsk en 1944 tras tres años de devastadora ocupación.',
      comoSeFesteja: 'Se realizan ofrendas florales en el Monumento a la Victoria, ferias de artesanía tradicional y bordados bielorrusos, conciertos sinfónicos y espectáculos nocturnos.',
      saludoSugerido: 'Recordamos la historia y el patrimonio cultural de Bielorrusia en su fecha nacional del 3 de julio.'
    },
    datoCurioso: 'La bandera bielorrusa incorpora en su franja izquierda un patrón geométrico tradicional llamado rushnik, inspirado en un tejido artesanal de 1917.'
  },
  {
    slug: 'bosnia-y-herzegovina',
    nombre: 'Bosnia y Herzegovina',
    capital: 'Sarajevo',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇧🇦',
    hitoPrincipal: {
      dia: 1,
      mes: 3,
      anioHistorico: 1992,
      titulo: 'Día de la Independencia de Bosnia y Herzegovina',
      tipo: 'independencia',
      resumen: 'Referéndum de soberanía celebrado entre el 29 de febrero y el 1 de marzo de 1992.',
      contextoHistorico: 'El 1 de marzo de 1992 la ciudadanía votó mayoritariamente por constituir un Estado independiente y soberano respecto de la antigua Yugoslavia, obteniendo reconocimiento internacional poco después; el país también conmemora el 25 de noviembre como Día de la Estatalidad (1943).',
      comoSeFesteja: 'Se celebran ceremonias oficiales en Sarajevo, visitas a puentes y barrios históricos como Baščaršija y Mostar, conciertos culturales y reuniones familiares.',
      saludoSugerido: 'Enviamos un saludo respetuoso a Bosnia y Herzegovina en su Día de la Independencia, tierra de puentes e historia multicultural.'
    },
    datoCurioso: 'El triángulo amarillo de la bandera de Bosnia y Herzegovina representa tanto la silueta geográfica del país como a sus tres pueblos constituyentes.'
  },
  {
    slug: 'bulgaria',
    nombre: 'Bulgaria',
    capital: 'Sofía',
    continente: 'europa',
    subregion: 'Europa Oriental',
    bandera: '🇧🇬',
    hitoPrincipal: {
      dia: 3,
      mes: 3,
      anioHistorico: 1878,
      titulo: 'Día de la Liberación de Bulgaria',
      tipo: 'independencia',
      resumen: 'Firma del Tratado de San Stefano el 3 de marzo de 1878 que restauró la estatalidad búlgara tras casi cinco siglos.',
      contextoHistorico: 'Al término de la guerra ruso-turca (1877–1878), el Tratado de San Stefano del 3 de marzo de 1878 puso fin a casi quinientos años de dominio otomano y dio paso al renacimiento del Estado búlgaro moderno.',
      comoSeFesteja: 'Miles de personas suben al paso montañoso de Shipka portando banderas blancas, verdes y rojas, mientras Sofía y Plovdiv celebran con música folclórica, danzas horo y luces sobre monumentos históricos.',
      saludoSugerido: '¡Feliz 3 de Marzo, Día de la Liberación de Bulgaria! Celebramos la tierra de las rosas y el alfabeto cirílico.'
    },
    datoCurioso: 'El alfabeto cirílico fue desarrollado en el Primer Imperio Búlgaro a finales del siglo IX por los discípulos de los santos Cirilo y Metodio.'
  },
  {
    slug: 'ciudad-del-vaticano',
    nombre: 'Ciudad del Vaticano',
    capital: 'Ciudad del Vaticano',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇻🇦',
    hitoPrincipal: {
      dia: 11,
      mes: 2,
      anioHistorico: 1929,
      titulo: 'Aniversario de los Pactos de Letrán (Fundación del Estado de la Ciudad del Vaticano)',
      tipo: 'fundacion',
      resumen: 'Firma de los Pactos de Letrán el 11 de febrero de 1929 que reconocieron la plena soberanía del Estado vaticano.',
      contextoHistorico: 'Suscritos el 11 de febrero de 1929 entre la Santa Sede y el Reino de Italia, los Pactos de Letrán resolvieron la llamada "Cuestión Romana" abierta desde 1870 y constituyeron el Estado soberano más pequeño del mundo en torno a la Basílica de San Pedro.',
      comoSeFesteja: 'Es día festivo oficial en la Ciudad del Vaticano con actos diplomáticos y culturales, permaneciendo cerradas oficinas administrativas y celebrándose conciertos y encuentros conmemorativos.',
      saludoSugerido: 'Recordamos el 11 de febrero, aniversario de la fundación de la Ciudad del Vaticano y su invaluable patrimonio artístico universal.'
    },
    datoCurioso: 'La Ciudad del Vaticano es el único Estado del mundo cuyo territorio completo ha sido declarado Patrimonio de la Humanidad por la UNESCO.'
  },
  {
    slug: 'croacia',
    nombre: 'Croacia',
    capital: 'Zagreb',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇭🇷',
    hitoPrincipal: {
      dia: 30,
      mes: 5,
      anioHistorico: 1990,
      titulo: 'Día de la Estatalidad de Croacia (Dan državnosti)',
      tipo: 'dia-nacional',
      resumen: 'Constitución del primer Parlamento croata democrático y multipartidista el 30 de mayo de 1990.',
      contextoHistorico: 'El 30 de mayo de 1990 se inauguró en Zagreb el primer Sabor (Parlamento) elegido democráticamente tras el fin del régimen de partido único, paso decisivo hacia la declaración de independencia formal del 25 de junio de 1991.',
      comoSeFesteja: 'Ceremonias solemnes en la Plaza de San Marcos de Zagreb, cambio de guardia histórico de la compañía Kravat, conciertos al aire libre y celebraciones en toda la costa dálmata.',
      saludoSugerido: '¡Feliz Día de la Estatalidad a Croacia! Celebramos la historia, la música y el azul del Adriático.'
    },
    datoCurioso: 'La palabra "corbata" (cravate / kravat) deriva de los pañuelos anudados al cuello que usaban los jinetes croatas en Europa durante el siglo XVII.'
  },
  {
    slug: 'dinamarca',
    nombre: 'Dinamarca',
    capital: 'Copenhague',
    continente: 'europa',
    subregion: 'Europa del Norte',
    bandera: '🇩🇰',
    hitoPrincipal: {
      dia: 5,
      mes: 6,
      anioHistorico: 1849,
      titulo: 'Día de la Constitución de Dinamarca (Grundlovsdag)',
      tipo: 'constitucion',
      resumen: 'Firma de la primera Constitución democrática danesa por el rey Federico VII el 5 de junio de 1849.',
      contextoHistorico: 'El 5 de junio de 1849 Dinamarca pasó de manera pacífica de la monarquía absoluta a una monarquía constitucional con parlamento electo. La misma fecha de 1915 reconoció el sufragio femenino y la de 1953 aprobó la Constitución vigente.',
      comoSeFesteja: 'Es una jornada dedicada a la democracia con discursos al aire libre en parques, debates cívicos, banderas Dannebrog en casas y jardines y reuniones familiares —que además coincide con el Día del Padre danés.',
      saludoSugerido: '¡Feliz Grundlovsdag a Dinamarca! Celebramos más de siglo y medio de democracia, diseño y calidad de vida.'
    },
    datoCurioso: 'La Dannebrog, bandera roja con cruz blanca de Dinamarca, es reconocida como la bandera nacional en uso continuo más antigua del mundo (siglo XIII).'
  },
  {
    slug: 'eslovaquia',
    nombre: 'Eslovaquia',
    capital: 'Bratislava',
    continente: 'europa',
    subregion: 'Europa Central',
    bandera: '🇸🇰',
    hitoPrincipal: {
      dia: 1,
      mes: 1,
      anioHistorico: 1993,
      titulo: 'Día de la Creación de la República Eslovaca',
      tipo: 'republica',
      resumen: 'Nacimiento pacífico de la República Eslovaca independiente el 1 de enero de 1993 tras el "Divorcio de Terciopelo".',
      contextoHistorico: 'Tras la disolución pactada y totalmente pacífica de Checoslovaquia a la medianoche del 31 de diciembre de 1992, el 1 de enero de 1993 nació la República Eslovaca soberana; el país también celebra el 1 de septiembre el Día de su Constitución (1992).',
      comoSeFesteja: 'Fuegos artificiales sobre el Danubio y el Castillo de Bratislava, conciertos de Año Nuevo y entrega de altas distinciones estatales a personalidades de la cultura y la ciencia.',
      saludoSugerido: '¡Feliz Día de la República a Eslovaquia! Celebramos sus castillos, los montes Tatras y su ejemplo histórico de transición pacífica.'
    },
    datoCurioso: 'Eslovaquia tiene una de las mayores concentraciones de castillos y fortalezas por habitante de todo el planeta, con más de 180 castillos y 400 palacios.'
  },
  {
    slug: 'eslovenia',
    nombre: 'Eslovenia',
    capital: 'Liubliana',
    continente: 'europa',
    subregion: 'Europa Central',
    bandera: '🇸🇮',
    hitoPrincipal: {
      dia: 25,
      mes: 6,
      anioHistorico: 1991,
      titulo: 'Día de la Estatalidad de Eslovenia (Dan državnosti)',
      tipo: 'independencia',
      resumen: 'Declaración formal de independencia de Eslovenia respecto de Yugoslavia el 25 de junio de 1991.',
      contextoHistorico: 'Respaldado por un plebiscito en el que más del 88 % de los votantes apoyó la soberanía, el Parlamento esloveno aprobó el 25 de junio de 1991 la Carta Constitucional Básica de Independencia.',
      comoSeFesteja: 'La noche del 24 se realiza la gala estatal en la Plaza del Congreso de Liubliana; el 25 las familias disfrutan excursiones por los Alpes Julianos, el lago Bled y celebraciones culturales.',
      saludoSugerido: '¡Feliz Día de la Estatalidad a Eslovenia! Celebramos uno de los corazones verdes más bellos de Europa.'
    },
    datoCurioso: 'El escudo de la bandera eslovena retrata el monte Triglav (2.864 m), el pico más alto del país, y es tradición que cada ciudadano lo suba al menos una vez en la vida.'
  },
  {
    slug: 'espana',
    nombre: 'España',
    capital: 'Madrid',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇪🇸',
    hitoPrincipal: {
      dia: 12,
      mes: 10,
      anioHistorico: 1492,
      titulo: 'Fiesta Nacional de España (Día de la Hispanidad)',
      tipo: 'dia-nacional',
      resumen: 'Conmemoración del encuentro entre dos mundos del 12 de octubre de 1492 y proyección cultural de España e Iberoamérica.',
      contextoHistorico: 'La fecha recuerda la llegada de la expedición encabezada por Cristóbal Colón a América el 12 de octubre de 1492, acontecimiento que transformó la historia global y abrió el intercambio lingüístico y cultural del mundo hispanohablante. España también conmemora el 6 de diciembre el Día de la Constitución de 1978.',
      comoSeFesteja: 'Se realiza el desfile solemne en el Paseo de la Castellana de Madrid, jornadas de puertas abiertas en museos nacionales como el Prado y el Reina Sofía, y en Zaragoza coinciden las multitudinarias Fiestas del Pilar.',
      saludoSugerido: '¡Feliz 12 de Octubre! Celebramos el idioma que nos une y la riqueza histórica y cultural de España y todo el mundo hispanohablante.'
    },
    hitosSecundarios: [
      {
        dia: 6,
        mes: 12,
        anioHistorico: 1978,
        titulo: 'Día de la Constitución Española',
        tipo: 'constitucion',
        resumen: 'Aprobación en referéndum popular de la Constitución Española democrática el 6 de diciembre de 1978.',
        contextoHistorico: 'Con casi un 88 % de votos afirmativos, la ciudadanía española ratificó el 6 de diciembre de 1978 la Constitución que consolidó la democracia parlamentaria y el Estado de las autonomías.',
        comoSeFesteja: 'El Congreso de los Diputados abre sus puertas al público y colegios de todo el país organizan lecturas participativas de derechos y libertades.',
        saludoSugerido: 'Conmemoramos el 6 de Diciembre, aniversario de la Constitución Española y de la convivencia democrática.'
      }
    ],
    datoCurioso: 'El español o castellano, originado en la península ibérica, es hoy la segunda lengua materna más hablada del planeta con cerca de 500 millones de hablantes nativos.'
  },
  {
    slug: 'estonia',
    nombre: 'Estonia',
    capital: 'Tallin',
    continente: 'europa',
    subregion: 'Europa del Norte',
    bandera: '🇪🇪',
    hitoPrincipal: {
      dia: 24,
      mes: 2,
      anioHistorico: 1918,
      titulo: 'Día de la Independencia de Estonia (Iseseisvuspäev)',
      tipo: 'independencia',
      resumen: 'Publicación del Manifiesto a Todos los Pueblos de Estonia en Tallin el 24 de febrero de 1918.',
      contextoHistorico: 'El Comité de Salvación proclamó la República de Estonia independiente y democrática el 24 de febrero de 1918. Tras décadas de ocupación soviética, el país restauró su plena soberanía el 20 de agosto de 1991 mediante la célebre Revolución Cantada.',
      comoSeFesteja: 'Comienza al amanecer con el izamiento de la bandera azul, negra y blanca en la torre Pikk Hermann de Tallin, seguido del desfile en la Plaza de la Libertad y mesas con pan negro y espadines.',
      saludoSugerido: '¡Feliz Día de la Independencia a Estonia! Celebramos la nación báltica que ganó su libertad cantando y lidera la innovación digital.'
    },
    datoCurioso: 'Entre 1987 y 1991 cientos de miles de estonios se reunieron a entonar canciones patrióticas prohibidas en la llamada "Revolución Cantada", logrando restaurar su independencia sin derramamiento de sangre.'
  },
  {
    slug: 'finlandia',
    nombre: 'Finlandia',
    capital: 'Helsinki',
    continente: 'europa',
    subregion: 'Europa del Norte',
    bandera: '🇫🇮',
    hitoPrincipal: {
      dia: 6,
      mes: 12,
      anioHistorico: 1917,
      titulo: 'Día de la Independencia de Finlandia (Itsenäisyyspäivä)',
      tipo: 'independencia',
      resumen: 'Aprobación de la Declaración de Independencia por el Parlamento finlandés el 6 de diciembre de 1917.',
      contextoHistorico: 'Tras más de un siglo como Gran Ducado autónomo del Imperio ruso y seis siglos previos junto a Suecia, el Parlamento de Helsinki aprobó el 6 de diciembre de 1917 la declaración que estableció a Finlandia como república soberana.',
      comoSeFesteja: 'Es una jornada solemne y luminosa: a las 18:00 h las familias encienden dos velas azules y blancas en cada ventana, los estudiantes marchan con antorchas y millones miran por televisión la recepción presidencial en Helsinki.',
      saludoSugerido: '¡Feliz Itsenäisyyspäivä a Finlandia! Celebramos la serenidad de sus lagos, su educación ejemplar y la luz de sus velas de diciembre.'
    },
    datoCurioso: 'Encender dos velas en la ventana cada 6 de diciembre remite a una señal silenciosa de apoyo y refugio usada por jóvenes patriotas a comienzos del siglo XX.'
  },
  {
    slug: 'francia',
    nombre: 'Francia',
    capital: 'París',
    continente: 'europa',
    subregion: 'Europa Occidental',
    bandera: '🇫🇷',
    hitoPrincipal: {
      dia: 14,
      mes: 7,
      anioHistorico: 1789,
      titulo: 'Fiesta Nacional de Francia (Toma de la Bastilla)',
      tipo: 'revolucion',
      resumen: 'Asalto popular a la fortaleza de la Bastilla en París el 14 de julio de 1789, símbolo universal de la Revolución Francesa.',
      contextoHistorico: 'El 14 de julio de 1789 el pueblo de París tomó la prisión real de la Bastilla, precipitando el fin del absolutismo y abriendo camino a la Declaración de los Derechos del Hombre y del Ciudadano. Un año después, el 14 de julio de 1790, la Fiesta de la Federación celebró la unidad nacional.',
      comoSeFesteja: 'Por la mañana se realiza el tradicional desfile en los Campos Elíseos; por la noche pueblos y ciudades disfrutan bailes populares en los cuarteles de bomberos (Bals des Pompiers) y fuegos artificiales en la Torre Eiffel.',
      saludoSugerido: '¡Feliz 14 de Julio, Francia! Celebramos los ideales de libertad, igualdad y fraternidad que marcaron la historia moderna.'
    },
    datoCurioso: 'La fecha oficial francesa conmemora tanto la Toma de la Bastilla (1789) como la pacífica Fiesta de la Federación celebrada exactamente un año después (1790).'
  },
  {
    slug: 'grecia',
    nombre: 'Grecia',
    capital: 'Atenas',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇬🇷',
    hitoPrincipal: {
      dia: 25,
      mes: 3,
      anioHistorico: 1821,
      titulo: 'Día de la Independencia de Grecia',
      tipo: 'independencia',
      resumen: 'Inicio de la Guerra de Independencia griega contra el Imperio otomano el 25 de marzo de 1821.',
      contextoHistorico: 'El 25 de marzo de 1821 marcó el alzamiento general en el Peloponeso bajo el lema "Libertad o Muerte" (Elefthería í Thánatos), abriendo la gesta emancipadora que culminó con el reconocimiento internacional del Estado griego moderno en 1830.',
      comoSeFesteja: 'Coincide con la fiesta religiosa de la Anunciación: hay desfiles escolares y militares en Atenas y en cada isla, y el plato nacional del día es el bakaliaros skordalia (bacalao rebozado con salsa de ajo).',
      saludoSugerido: '¡Feliz 25 de Marzo, Grecia! Honramos la cuna de la democracia, la filosofía y la hospitalidad mediterránea.'
    },
    datoCurioso: 'Las nueve franjas azules y blancas de la bandera griega representan las nueve sílabas del lema histórico de la independencia: "E-lef-the-rí-a í Thá-na-tos".'
  },
  {
    slug: 'hungria',
    nombre: 'Hungría',
    capital: 'Budapest',
    continente: 'europa',
    subregion: 'Europa Central',
    bandera: '🇭🇺',
    hitoPrincipal: {
      dia: 20,
      mes: 8,
      anioHistorico: 1000,
      titulo: 'Día de San Esteban y Fundación del Estado Húngaro',
      tipo: 'fundacion',
      resumen: 'Conmemoración del rey Esteban I, fundador del Reino cristiano de Hungría en el año 1000.',
      contextoHistorico: 'Esteban I (Szent István) unificó a las tribus magiares, fue coronado rey en el año 1000 y sentó las bases legales y territoriales del Estado húngaro medieval. Su canonización el 20 de agosto de 1083 fijó la principal fiesta nacional del país.',
      comoSeFesteja: 'Budapest celebra con la bendición del Pan Nuevo de la cosecha, la procesión de la Santa Diestra, ferias de oficios tradicionales en el Castillo de Buda y uno de los espectáculos pirotécnicos más grandes de Europa sobre el Danubio.',
      saludoSugerido: '¡Feliz Día de San Esteban a Hungría! Celebramos más de mil años de historia, música y belleza junto al Danubio.'
    },
    datoCurioso: 'Cada año pasteleros de toda Hungría compiten para elegir la "Torta de Hungría" (Magyarország Tortája), que se presenta al público por primera vez cada 20 de agosto.'
  },
  {
    slug: 'irlanda',
    nombre: 'Irlanda',
    capital: 'Dublín',
    continente: 'europa',
    subregion: 'Europa Occidental',
    bandera: '🇮🇪',
    hitoPrincipal: {
      dia: 17,
      mes: 3,
      anioHistorico: 461,
      titulo: 'Día de San Patricio (Fiesta Nacional de Irlanda)',
      tipo: 'dia-nacional',
      resumen: 'Celebración nacional e internacional del patrimonio histórico y cultural irlandés cada 17 de marzo.',
      contextoHistorico: 'Conmemora la fecha tradicional del fallecimiento de San Patricio (c. 461), figura central de la historia cultural de la Isla Esmeralda. Con la diáspora irlandesa del siglo XIX y XX, el 17 de marzo se convirtió además en una de las fiestas nacionales más celebradas del planeta.',
      comoSeFesteja: 'Dublín y ciudades de los cinco continentes celebran con desfiles, música celta tradicional, literatura, bailes irlandeses y la iluminación en color verde de monumentos emblemáticos.',
      saludoSugerido: '¡Feliz Día de San Patricio a Irlanda! Que la música, la poesía y la buena fortuna acompañen hoy a la Isla Esmeralda.'
    },
    datoCurioso: 'Aunque Irlanda obtuvo su independencia efectiva tras el Tratado Anglo-Irlandés de 1921 y se proclamó República el 18 de abril de 1949, el 17 de marzo es su fiesta nacional desde 1903.'
  },
  {
    slug: 'islandia',
    nombre: 'Islandia',
    capital: 'Reikiavik',
    continente: 'europa',
    subregion: 'Europa del Norte',
    bandera: '🇮🇸',
    hitoPrincipal: {
      dia: 17,
      mes: 6,
      anioHistorico: 1944,
      titulo: 'Día Nacional y Fundación de la República de Islandia',
      tipo: 'republica',
      resumen: 'Proclamación de la República de Islandia en el histórico parlamento de Þingvellir el 17 de junio de 1944.',
      contextoHistorico: 'Tras un referéndum con más del 98 % de participación, Islandia disolvió su unión personal con Dinamarca y fundó la república el 17 de junio de 1944 en Þingvellir, eligiendo el cumpleaños de Jón Sigurðsson, líder intelectual del movimiento independentista del siglo XIX.',
      comoSeFesteja: 'Bajo la luz casi perpetua del solsticio de verano, las ciudades celebran con el recital de la "Dama de la Montaña" (Fjallkonan), desfiles callejeros, música folk y familias en plazas y puertos.',
      saludoSugerido: '¡Feliz 17 de Junio, Islandia! Celebramos la tierra de fuego y hielo y el parlamento más antiguo del mundo.'
    },
    datoCurioso: 'El Alþingi de Islandia, fundado en Þingvellir en el año 930, es considerado una de las asambleas parlamentarias más antiguas de la historia humana.'
  },
  {
    slug: 'italia',
    nombre: 'Italia',
    capital: 'Roma',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇮🇹',
    hitoPrincipal: {
      dia: 2,
      mes: 6,
      anioHistorico: 1946,
      titulo: 'Fiesta de la República Italiana (Festa della Repubblica)',
      tipo: 'republica',
      resumen: 'Referéndum institucional del 2 y 3 de junio de 1946 por el cual el pueblo italiano eligió la forma republicana de gobierno.',
      contextoHistorico: 'Tras el fin de la Segunda Guerra Mundial, en el referéndum del 2 de junio de 1946 —el primero con sufragio universal femenino y masculino a nivel nacional en Italia— la ciudadanía votó a favor de la República y eligió la Asamblea Constituyente.',
      comoSeFesteja: 'En Roma se realiza la ofrenda en el Altar de la Patria, el desfile por la Via dei Fori Imperiali, el vuelo de las Frecce Tricolori dibujando la bandera en el cielo y la apertura al público de los jardines del Palacio del Quirinal.',
      saludoSugerido: '¡Feliz Festa della Repubblica, Italia! Celebramos su arte eterno, su gastronomía y la alegría de su cultura.'
    },
    datoCurioso: 'El 2 de junio de 1946 fue la primera vez en la historia de Italia en que las mujeres votaron en una elección nacional, con una participación histórica cercana al 89 %.'
  },
  {
    slug: 'letonia',
    nombre: 'Letonia',
    capital: 'Riga',
    continente: 'europa',
    subregion: 'Europa del Norte',
    bandera: '🇱🇻',
    hitoPrincipal: {
      dia: 18,
      mes: 11,
      anioHistorico: 1918,
      titulo: 'Día de la Proclamación de la República de Letonia',
      tipo: 'independencia',
      resumen: 'Proclamación de la independencia de Letonia en el Teatro Nacional de Riga el 18 de noviembre de 1918.',
      contextoHistorico: 'El Consejo Popular de Letonia declaró la independencia el 18 de noviembre de 1918, al concluir la Primera Guerra Mundial. Tras la ocupación soviética, Letonia restauró su independencia el 4 de mayo de 1990.',
      comoSeFesteja: 'La jornada reúne marchas de antorchas desde el Monumento a la Libertad en Riga, el festival de luz Staro Rīga, conciertos corales y flores en los colores carmesí y blanco.',
      saludoSugerido: '¡Feliz 18 de Noviembre, Letonia! Celebramos sus canciones corales, sus bosques bálticos y la belleza de Riga.'
    },
    datoCurioso: 'La bandera rojo carmesí y blanco de Letonia ya aparece mencionada en una crónica medieval del año 1279, siendo uno de los diseños más antiguos de Europa.'
  },
  {
    slug: 'liechtenstein',
    nombre: 'Liechtenstein',
    capital: 'Vaduz',
    continente: 'europa',
    subregion: 'Europa Central',
    bandera: '🇱🇮',
    hitoPrincipal: {
      dia: 15,
      mes: 8,
      anioHistorico: 1940,
      titulo: 'Día Nacional de Liechtenstein (Staatsfeiertag)',
      tipo: 'dia-nacional',
      resumen: 'Fiesta estatal del Principado alpino instaurada en 1940 en coincidencia con la Asunción y el natalicio de Francisco José II.',
      contextoHistorico: 'Creado como principado imperial en 1719 y soberano desde 1806, Liechtenstein fijó su Día Nacional el 15 de agosto de 1940 en señal de unidad en plena Segunda Guerra Mundial, vinculándolo al cumpleaños del príncipe Francisco José II (16 de agosto).',
      comoSeFesteja: 'La familia principesca invita gratuitamente a toda la población a los jardines del Castillo de Vaduz, seguido de un festival popular callejero y fuegos artificiales en las montañas.',
      saludoSugerido: '¡Feliz Día Nacional a Liechtenstein! Celebramos la hospitalidad alpina y la historia de este pequeño principado.'
    },
    datoCurioso: 'En los Juegos Olímpicos de 1936 Liechtenstein descubrió que su bandera azul y roja era idéntica a la de Haití, por lo que al año siguiente le añadió una corona dorada.'
  },
  {
    slug: 'lituania',
    nombre: 'Lituania',
    capital: 'Vilna',
    continente: 'europa',
    subregion: 'Europa del Norte',
    bandera: '🇱🇹',
    hitoPrincipal: {
      dia: 16,
      mes: 2,
      anioHistorico: 1918,
      titulo: 'Día de la Restauración del Estado de Lituania',
      tipo: 'independencia',
      resumen: 'Firma del Acta de Independencia de Lituania en Vilna el 16 de febrero de 1918.',
      contextoHistorico: 'Veinte integrantes del Consejo de Lituania firmaron el 16 de febrero de 1918 el acta que restableció un Estado lituano independiente y democrático. Décadas más tarde, el 11 de marzo de 1990, Lituania fue la primera república en declarar el fin del dominio soviético.',
      comoSeFesteja: 'Se encienden dieciséis hogueras simbólicas a lo largo de la avenida Gediminas en Vilna, se realizan conciertos corales y homenajes en la Casa de los Signatarios.',
      saludoSugerido: '¡Feliz 16 de Febrero, Lituania! Honramos su historia valiente, su idioma milenario y su espíritu libre.'
    },
    datoCurioso: 'El documento original manuscrito del Acta del 16 de febrero de 1918 estuvo perdido durante décadas hasta que un historiador lituano lo redescubrió en un archivo diplomático en Berlín en 2017.'
  },
  {
    slug: 'luxemburgo',
    nombre: 'Luxemburgo',
    capital: 'Luxemburgo',
    continente: 'europa',
    subregion: 'Europa Occidental',
    bandera: '🇱🇺',
    hitoPrincipal: {
      dia: 23,
      mes: 6,
      anioHistorico: 1961,
      titulo: 'Día Nacional de Luxemburgo (Nationalfeierdag)',
      tipo: 'dia-nacional',
      resumen: 'Celebración oficial del cumpleaños público del Gran Duque cada 23 de junio desde 1961.',
      contextoHistorico: 'Desde finales del siglo XVIII Luxemburgo celebra su Día Nacional en torno al cumpleaños del monarca; en 1961 se trasladó de enero al 23 de junio para disfrutar del verano, manteniéndose fija esa fecha hasta hoy.',
      comoSeFesteja: 'La noche del 22 de junio brilla con la procesión de antorchas (Fakelzuch), conciertos gratuitos y fuegos artificiales sobre el puente Adolphe; el 23 tienen lugar el Te Deum y actos oficiales.',
      saludoSugerido: '¡Feliz Nationalfeierdag a Luxemburgo! Celebramos su historia europea, su multilingüismo y su hospitalidad.'
    },
    datoCurioso: 'Luxemburgo es el único Gran Ducado soberano que existe actualmente en el mundo.'
  },
  {
    slug: 'macedonia-del-norte',
    nombre: 'Macedonia del Norte',
    capital: 'Skopie',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇲🇰',
    hitoPrincipal: {
      dia: 8,
      mes: 9,
      anioHistorico: 1991,
      titulo: 'Día de la Independencia de Macedonia del Norte',
      tipo: 'independencia',
      resumen: 'Referéndum popular del 8 de septiembre de 1991 que proclamó la independencia pacífica del país.',
      contextoHistorico: 'Más del 95 % de los votantes apoyó el 8 de septiembre de 1991 la soberanía de la república, siendo el único territorio de la antigua Yugoslavia que accedió a la independencia sin conflicto armado en ese momento. El país también conmemora el 2 de agosto (Levantamiento de Ilinden, 1903).',
      comoSeFesteja: 'Conciertos en la plaza Macedonia de Skopie, danzas tradicionales oro, festivales en el lago Ohrid y ofrendas a figuras históricas.',
      saludoSugerido: '¡Feliz 8 de Septiembre a Macedonia del Norte! Celebramos la belleza del lago Ohrid y la calidez de su cultura balcánica.'
    },
    datoCurioso: 'El lago Ohrid, compartido por Macedonia del Norte y Albania, es uno de los lagos más antiguos y profundos de toda Europa.'
  },
  {
    slug: 'malta',
    nombre: 'Malta',
    capital: 'La Valeta',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇲🇹',
    hitoPrincipal: {
      dia: 21,
      mes: 9,
      anioHistorico: 1964,
      titulo: 'Día de la Independencia de Malta (Jum l-Indipendenza)',
      tipo: 'independencia',
      resumen: 'Fin del período colonial británico y proclamación de la independencia de Malta el 21 de septiembre de 1964.',
      contextoHistorico: 'Tras más de 160 años como enclave estratégico británico en el Mediterráneo central, Malta alcanzó la soberanía el 21 de septiembre de 1964 con Giorgio Borg Olivier como primer ministro, convirtiéndose en república en 1974.',
      comoSeFesteja: 'Misa pontificia en la Concatedral de San Juan en La Valeta, conciertos sinfónicos, regatas tradicionales en el Gran Puerto y los famosos fuegos artificiales artesanales malteses.',
      saludoSugerido: '¡Feliz Día de la Independencia a Malta! Celebramos sus templos megalíticos, su luz mediterránea y su historia milenaria.'
    },
    datoCurioso: 'La bandera maltesa muestra en su esquina superior la Cruz de Jorge, condecoración otorgada colectivamente a toda la población de la isla por su valentía durante la Segunda Guerra Mundial.'
  },
  {
    slug: 'moldavia',
    nombre: 'Moldavia',
    capital: 'Chisináu',
    continente: 'europa',
    subregion: 'Europa Oriental',
    bandera: '🇲🇩',
    hitoPrincipal: {
      dia: 27,
      mes: 8,
      anioHistorico: 1991,
      titulo: 'Día de la Independencia de la República de Moldavia',
      tipo: 'independencia',
      resumen: 'Aprobación de la Declaración de Independencia por el Parlamento en Chisináu el 27 de agosto de 1991.',
      contextoHistorico: 'Tras la Gran Asamblea Nacional celebrada en el centro de Chisináu, el Parlamento adoptó el 27 de agosto de 1991 la Declaración de Independencia que estableció la República de Moldavia como Estado soberano.',
      comoSeFesteja: 'La Plaza de la Gran Asamblea Nacional reúne desfiles folclóricos, trajes bordados, vinos tradicionales, conciertos gratuitos y homenajes al príncipe Esteban el Grande.',
      saludoSugerido: '¡Feliz 27 de Agosto a Moldavia! Celebramos sus viñedos históricos, su música folclórica y la calidez de su gente.'
    },
    datoCurioso: 'Moldavia alberga Mileștii Mici, una de las bodegas subterráneas más extensas del mundo con más de 200 kilómetros de galerías de piedra caliza.'
  },
  {
    slug: 'monaco',
    nombre: 'Mónaco',
    capital: 'Mónaco',
    continente: 'europa',
    subregion: 'Europa Occidental',
    bandera: '🇲🇨',
    hitoPrincipal: {
      dia: 19,
      mes: 11,
      anioHistorico: 1857,
      titulo: 'Día del Príncipe (Fiesta Nacional de Mónaco)',
      tipo: 'dia-nacional',
      resumen: 'Fiesta soberana del Principado de Mónaco celebrada el 19 de noviembre en honor a San Rainiero.',
      contextoHistorico: 'Tradicionalmente fijada según el santo onomástico del príncipe reinante, la Fiesta Nacional se celebra el 19 de noviembre desde el reinado de Rainiero III, fecha que su hijo Alberto II decidió conservar como homenaje permanente a su padre.',
      comoSeFesteja: 'La Roca de Mónaco se decora en rojo y blanco con Te Deum en la Catedral, parada de los Carabineros del Príncipe, saludo de la familia Grimaldi desde el balcón del Palacio y gala lírica en la Ópera de Montecarlo.',
      saludoSugerido: '¡Feliz Fiesta Nacional a Mónaco! Celebramos la historia mediterránea y la elegancia de la Costa Azul.'
    },
    datoCurioso: 'La dinastía Grimaldi gobierna Mónaco desde 1297, siendo una de las casas gobernantes con mayor continuidad histórica en Europa.'
  },
  {
    slug: 'montenegro',
    nombre: 'Montenegro',
    capital: 'Podgorica',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇲🇪',
    hitoPrincipal: {
      dia: 13,
      mes: 7,
      anioHistorico: 1878,
      titulo: 'Día de la Estatalidad de Montenegro',
      tipo: 'independencia',
      resumen: 'Reconocimiento internacional de la independencia de Montenegro en el Congreso de Berlín el 13 de julio de 1878.',
      contextoHistorico: 'El 13 de julio enlaza dos hechos fundamentales de la historia montenegrina: el reconocimiento formal de su soberanía en el Congreso de Berlín (1878) y el levantamiento popular antifascista de 1941. Además, el 21 de mayo conmemora la restauración moderna de la independencia en 2006.',
      comoSeFesteja: 'Ceremonias en la antigua capital real de Cetiña y en Podgorica, entrega del Premio 13 de Julio a las artes y las ciencias, y festivales veraniegos en Kotor y Budva.',
      saludoSugerido: '¡Feliz 13 de Julio a Montenegro! Celebramos la majestuosidad de sus montañas negras y la bahía de Kotor.'
    },
    datoCurioso: 'Montenegro fue el 27.º Estado soberano reconocido internacionalmente en el siglo XIX y recuperó su plena independencia en 2006 mediante referéndum pacífico.'
  },
  {
    slug: 'noruega',
    nombre: 'Noruega',
    capital: 'Oslo',
    continente: 'europa',
    subregion: 'Europa del Norte',
    bandera: '🇳🇴',
    hitoPrincipal: {
      dia: 17,
      mes: 5,
      anioHistorico: 1814,
      titulo: 'Día de la Constitución de Noruega (Syttende Mai)',
      tipo: 'constitucion',
      resumen: 'Firma de la Constitución de Eidsvoll el 17 de mayo de 1814, una de las más antiguas vigentes en el mundo.',
      contextoHistorico: 'Al concluir cuatro siglos de unión con Dinamarca, una asamblea reunida en Eidsvoll redactó y firmó el 17 de mayo de 1814 una carta magna inspirada en la Ilustración, base de la identidad democrática noruega que culminó con la plena independencia en 1905.',
      comoSeFesteja: 'En lugar de desfiles militares, el protagonista absoluto es el Barnetoget: desfiles infantiles con bandas escolares y trajes típicos bunad por la calle Karl Johans de Oslo frente al Palacio Real, entre helados y salchichas.',
      saludoSugerido: '¡Feliz Syttende Mai a Noruega! Celebramos una fiesta nacional llena de niños, trajes tradicionales y espíritu cívico.'
    },
    datoCurioso: 'El primer desfile infantil del 17 de mayo se organizó en Oslo en 1870 por iniciativa del escritor Bjørnstjerne Bjørnson, futuro Premio Nobel de Literatura.'
  },
  {
    slug: 'paises-bajos',
    nombre: 'Países Bajos',
    capital: 'Ámsterdam',
    continente: 'europa',
    subregion: 'Europa Occidental',
    bandera: '🇳🇱',
    hitoPrincipal: {
      dia: 27,
      mes: 4,
      anioHistorico: 1885,
      titulo: 'Día del Rey (Koningsdag)',
      tipo: 'dia-nacional',
      resumen: 'Fiesta nacional neerlandesa que celebra el cumpleaños del monarca y la unidad de la Casa de Orange-Nassau.',
      contextoHistorico: 'Iniciada en 1885 como Día de la Princesa en honor a Guillermina y celebrada durante décadas como Día de la Reina el 30 de abril, desde 2014 tiene lugar el 27 de abril por el nacimiento del rey Guillermo Alejandro (o el 26 si cae domingo).',
      comoSeFesteja: 'Todo el país se viste de naranja (Oranjegekte): canales de Ámsterdam repletos de embarcaciones, conciertos callejeros y el vrijmarkt, el gigantesco mercado libre donde niños y adultos venden objetos usados sin impuestos.',
      saludoSugerido: '¡Feliz Koningsdag a los Países Bajos! Celebramos la energía naranja, los canales y la cultura abierta neerlandesa.'
    },
    datoCurioso: 'Aunque la bandera de los Países Bajos es roja, blanca y azul, el color nacional de la fiesta es el naranja en honor a Guillermo de Orange, líder de la independencia en el siglo XVI.'
  },
  {
    slug: 'polonia',
    nombre: 'Polonia',
    capital: 'Varsovia',
    continente: 'europa',
    subregion: 'Europa Central',
    bandera: '🇵🇱',
    hitoPrincipal: {
      dia: 11,
      mes: 11,
      anioHistorico: 1918,
      titulo: 'Día Nacional de la Independencia de Polonia',
      tipo: 'independencia',
      resumen: 'Restauración de la soberanía polaca el 11 de noviembre de 1918 tras 123 años de particiones.',
      contextoHistorico: 'El mismo día del armisticio de la Primera Guerra Mundial, el 11 de noviembre de 1918, el Consejo de Regencia entregó el mando militar a Józef Piłsudski, restaurando a Polonia en el mapa de Europa después de más de un siglo dividida entre tres imperios.',
      comoSeFesteja: 'Actos solemnes en la Tumba del Soldado Desconocido en Varsovia, carreras urbanas de la Independencia vestidas de blanco y rojo, conciertos de Chopin y en Poznań los tradicionales croissants de San Martín.',
      saludoSugerido: '¡Feliz 11 de Noviembre, Polonia! Honramos la resiliencia histórica, la música y el espíritu inquebrantable del pueblo polaco.'
    },
    datoCurioso: 'Polonia también celebra el 3 de mayo la Constitución de 1791, que fue la primera Constitución moderna codificada de Europa y la segunda del mundo.'
  },
  {
    slug: 'portugal',
    nombre: 'Portugal',
    capital: 'Lisboa',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇵🇹',
    hitoPrincipal: {
      dia: 10,
      mes: 6,
      anioHistorico: 1580,
      titulo: 'Día de Portugal, de Camões y de las Comunidades Portuguesas',
      tipo: 'dia-nacional',
      resumen: 'Fiesta nacional que honra el fallecimiento del poeta Luís de Camões (1580), la lengua portuguesa y su diáspora.',
      contextoHistorico: 'En lugar de una fecha bélica, Portugal eligió celebrar su día nacional el 10 de junio en memoria de Luís Vaz de Camões, autor del poema épico Os Lusíadas, convirtiendo la literatura y el idioma portugués en emblema de la nación y sus comunidades en el mundo.',
      comoSeFesteja: 'Cada año una ciudad portuguesa y una comunidad en el exterior acogen las ceremonias oficiales, con recitales de poesía, música de fado, desfiles cívicos y encuentros culturales.',
      saludoSugerido: '¡Feliz Día de Portugal y de Camões! Celebramos la poesía, el fado y la historia atlántica del pueblo portugués.'
    },
    datoCurioso: 'Portugal es uno de los muy pocos países del mundo cuya fiesta nacional conmemora oficialmente a un poeta nacional.'
  },
  {
    slug: 'reino-unido',
    nombre: 'Reino Unido',
    capital: 'Londres',
    continente: 'europa',
    subregion: 'Europa Occidental',
    bandera: '🇬🇧',
    hitoPrincipal: {
      dia: 15,
      mes: 6,
      anioHistorico: 1215,
      titulo: 'Aniversario de la Carta Magna y Tradición del Trooping the Colour',
      tipo: 'constitucion',
      resumen: 'Firma de la Carta Magna en Runnymede el 15 de junio de 1215 y celebración oficial de junio del monarca británico.',
      contextoHistorico: 'El Reino Unido no posee un "Día de la Independencia" único, sino que celebra en junio el cumpleaños oficial del monarca (Trooping the Colour) y reconoce el 15 de junio de 1215 —sellado de la Carta Magna— como piedra angular del Estado de derecho y las libertades constitucionales.',
      comoSeFesteja: 'El desfile de la Guardia Real en Horse Guards Parade y el vuelo de los Red Arrows sobre el Palacio de Buckingham en junio reúnen a miles de visitantes junto a celebraciones vecinales.',
      saludoSugerido: 'Recordamos el 15 de junio y la histórica Carta Magna de 1215, un hito decisivo en la historia de los derechos civiles.'
    },
    datoCurioso: 'El 1 de mayo de 1707 entró en vigor el Acta de Unión que unió a los reinos de Inglaterra y Escocia dando nacimiento a Gran Bretaña.'
  },
  {
    slug: 'republica-checa',
    nombre: 'República Checa',
    capital: 'Praga',
    continente: 'europa',
    subregion: 'Europa Central',
    bandera: '🇨🇿',
    hitoPrincipal: {
      dia: 28,
      mes: 10,
      anioHistorico: 1918,
      titulo: 'Día del Establecimiento del Estado Checoslovaco Independiente',
      tipo: 'independencia',
      resumen: 'Proclamación de la independencia en Praga el 28 de octubre de 1918 tras la disolución del Imperio austrohúngaro.',
      contextoHistorico: 'Impulsada por Tomáš Garrigue Masaryk, la declaración del 28 de octubre de 1918 fundó la Primera República Checoslovaca, referente democrático de Europa Central. Tras la separación amistosa de 1993, la República Checa mantuvo esta fecha como su fiesta nacional principal.',
      comoSeFesteja: 'El Castillo de Praga alberga la entrega de condecoraciones estatales, museos y palacios abren sus puertas y se realizan conciertos de Dvořák y Smetana.',
      saludoSugerido: '¡Feliz 28 de Octubre a la República Checa! Celebramos la historia, la música clásica y la magia arquitectónica de Praga.'
    },
    datoCurioso: 'El 17 de noviembre también es feriado nacional clave en el país por la Revolución de Terciopelo de 1989 que restauró pacíficamente la democracia.'
  },
  {
    slug: 'rumania',
    nombre: 'Rumanía',
    capital: 'Bucarest',
    continente: 'europa',
    subregion: 'Europa Oriental',
    bandera: '🇷🇴',
    hitoPrincipal: {
      dia: 1,
      mes: 12,
      anioHistorico: 1918,
      titulo: 'Día de la Gran Unión de Rumanía (Ziua Marii Uniri)',
      tipo: 'unificacion',
      resumen: 'Asamblea Nacional de Alba Iulia del 1 de diciembre de 1918 que proclamó la unión de Transilvania con el Reino de Rumanía.',
      contextoHistorico: 'Más de cien mil delegados reunidos en la ciudad histórica de Alba Iulia votaron el 1 de diciembre de 1918 la unificación definitiva de las regiones históricas rumanas en un solo Estado nacional moderno.',
      comoSeFesteja: 'Bucarest celebra el gran desfile bajo el Arco de Triunfo, Alba Iulia recibe reconstrucciones históricas y en todo el país las familias comparten música popular y platos invernales como sarmale y fasole cu cârnați.',
      saludoSugerido: '¡Feliz 1 de Diciembre, Rumanía! Celebramos la Gran Unión y la riqueza cultural de los Cárpatos al Mar Negro.'
    },
    datoCurioso: 'La fecha del 1 de diciembre se adoptó como Día Nacional en 1990 tras el retorno de la democracia.'
  },
  {
    slug: 'rusia',
    nombre: 'Rusia',
    capital: 'Moscú',
    continente: 'europa',
    subregion: 'Europa Oriental',
    bandera: '🇷🇺',
    hitoPrincipal: {
      dia: 12,
      mes: 6,
      anioHistorico: 1990,
      titulo: 'Día de Rusia (Den Rossii)',
      tipo: 'dia-nacional',
      resumen: 'Adopción de la Declaración de Soberanía Estatal de la Federación de Rusia el 12 de junio de 1990.',
      contextoHistorico: 'El 12 de junio de 1990 el Primer Congreso de los Diputados del Pueblo aprobó la declaración de soberanía que sentó las bases de la Federación de Rusia contemporánea; exactamente un año después se celebraron las primeras elecciones presidenciales directas.',
      comoSeFesteja: 'Se entregan los Premios Estatales en ciencia, literatura y artes, y ciudades desde Moscú y San Petersburgo hasta Vladivostok organizan conciertos al aire libre, ferias y fuegos artificiales.',
      saludoSugerido: 'Recordamos el 12 de junio y el inmenso aporte de la literatura, la música clásica y la ciencia rusa al patrimonio cultural mundial.'
    },
    datoCurioso: 'El país se extiende a lo largo de once husos horarios distintos, por lo que las celebraciones del 12 de junio comienzan en Kamchatka nueve horas antes que en Moscú.'
  },
  {
    slug: 'san-marino',
    nombre: 'San Marino',
    capital: 'Ciudad de San Marino',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇸🇲',
    hitoPrincipal: {
      dia: 3,
      mes: 9,
      anioHistorico: 301,
      titulo: 'Fundación de la Serenísima República de San Marino',
      tipo: 'fundacion',
      resumen: 'Fundación tradicional de la república más antigua del mundo por el cantero Marino en el monte Titano el 3 de septiembre del año 301.',
      contextoHistorico: 'Según la tradición histórica, el cantero dálmata Marino fundó una comunidad libre en la cima del monte Titano el 3 de septiembre del año 301. Con estatutos escritos desde el siglo XIII y Constitución de 1600, San Marino conserva su estatus republicano ininterrumpido desde hace más de diecisiete siglos.',
      comoSeFesteja: 'La ciudad medieval revive con el Palio de los Ballesteros (Palio delle Balestre Grandi), procesiones en trajes renacentistas, conciertos de bandas y el tradicional juego popular de la tómbola.',
      saludoSugerido: '¡Feliz 3 de Septiembre a San Marino! Celebramos la historia extraordinaria de la república más antigua del planeta.'
    },
    datoCurioso: 'San Marino es gobernado por dos Capitanes Regentes con igual poder que cambian cada seis meses (1 de abril y 1 de octubre), una herencia institucional romana.'
  },
  {
    slug: 'serbia',
    nombre: 'Serbia',
    capital: 'Belgrado',
    continente: 'europa',
    subregion: 'Europa del Sur',
    bandera: '🇷🇸',
    hitoPrincipal: {
      dia: 15,
      mes: 2,
      anioHistorico: 1804,
      titulo: 'Día de la Estatalidad de Serbia (Sretenje)',
      tipo: 'constitucion',
      resumen: 'Conmemora el Primer Levantamiento Serbio (1804) y la promulgación de la Constitución de Sretenje (1835).',
      contextoHistorico: 'El 15 de febrero (fiesta de Sretenje) concentra dos hitos decisivos: el inicio de la lucha por la emancipación liderada por Karađorđe en 1804 y la sanción en 1835 de la Constitución de Kragujevac, una de las cartas más progresistas de Europa en su época al abolir el feudalismo y la esclavitud.',
      comoSeFesteja: 'Durante dos días festivos se realizan ceremonias en Orašac y Belgrado, entrada gratuita a museos nacionales, conciertos y entregas de medallas al mérito.',
      saludoSugerido: '¡Feliz Sretenje a Serbia! Celebramos su historia constitucional, su música y la energía de Belgrado.'
    },
    datoCurioso: 'La Constitución serbia de 1835 declaraba que cualquier persona esclavizada quedaba automáticamente libre en el instante en que pisaba suelo serbio.'
  },
  {
    slug: 'suecia',
    nombre: 'Suecia',
    capital: 'Estocolmo',
    continente: 'europa',
    subregion: 'Europa del Norte',
    bandera: '🇸🇪',
    hitoPrincipal: {
      dia: 6,
      mes: 6,
      anioHistorico: 1523,
      titulo: 'Día Nacional de Suecia (Sveriges nationaldag)',
      tipo: 'dia-nacional',
      resumen: 'Elección de Gustavo Vasa como rey el 6 de junio de 1523 y firma del Instrumento de Gobierno de 1809.',
      contextoHistorico: 'La fecha conmemora la coronación de Gustavo Vasa en 1523 —que selló la salida de la Unión de Kalmar y fundó la Suecia moderna— junto con la reforma constitucional del 6 de junio de 1809 que limitó el absolutismo real.',
      comoSeFesteja: 'La familia real participa en la fiesta tradicional en el museo al aire libre de Skansen en Estocolmo, se celebran ceremonias de bienvenida para nuevos ciudadanos suecos y se izan banderas azules y amarillas en todo el país.',
      saludoSugerido: '¡Feliz Día Nacional de Suecia! Celebramos la luz nórdica, la innovación y las tradiciones del 6 de junio.'
    },
    datoCurioso: 'Aunque el 6 de junio se celebra como Día de la Bandera Sueca desde 1916, recién en 2005 se convirtió oficialmente en día feriado nacional no laborable.'
  },
  {
    slug: 'suiza',
    nombre: 'Suiza',
    capital: 'Berna',
    continente: 'europa',
    subregion: 'Europa Central',
    bandera: '🇨🇭',
    hitoPrincipal: {
      dia: 1,
      mes: 8,
      anioHistorico: 1291,
      titulo: 'Fiesta Nacional de Suiza (Pacto Federal de 1291)',
      tipo: 'fundacion',
      resumen: 'Firma de la Carta Federal (Bundesbrief) por los cantones fundadores de Uri, Schwyz y Unterwalden a inicios de agosto de 1291.',
      contextoHistorico: 'El Pacto Federal de 1291 selló una alianza perpetua de defensa mutua y arbitraje pacífico entre los tres cantones alpinos alrededor del lago de Lucerna, dando nacimiento a la Confederación Helvética.',
      comoSeFesteja: 'Las granjas abren sus puertas para el tradicional brunch del 1 de agosto con pan trenzado Zopf; al caer la noche los niños caminan con faroles iluminados, se encienden hogueras en las cimas alpinas y se escucha el himno en cuatro idiomas.',
      saludoSugerido: '¡Feliz 1 de Agosto, Suiza! Celebramos más de siete siglos de convivencia federal, paisajes alpinos y democracia directa.'
    },
    datoCurioso: 'La bandera de Suiza es, junto con la de la Ciudad del Vaticano, una de las únicas dos banderas nacionales perfectamente cuadradas del mundo.'
  },
  {
    slug: 'ucrania',
    nombre: 'Ucrania',
    capital: 'Kiev',
    continente: 'europa',
    subregion: 'Europa Oriental',
    bandera: '🇺🇦',
    hitoPrincipal: {
      dia: 24,
      mes: 8,
      anioHistorico: 1991,
      titulo: 'Día de la Independencia de Ucrania',
      tipo: 'independencia',
      resumen: 'Adopción del Acta de Declaración de Independencia de Ucrania por el Parlamento (Verjovna Rada) el 24 de agosto de 1991.',
      contextoHistorico: 'El 24 de agosto de 1991 el Parlamento de Kiev proclamó la independencia soberana de Ucrania, ratificada masivamente el 1 de diciembre de 1991 con más del 90 % de los votos en todas las regiones del país.',
      comoSeFesteja: 'La población luce camisas tradicionales bordadas (vyshyvankas), se izan banderas azules y amarillas que simbolizan el cielo sobre los campos de trigo y se realizan conciertos culturales y homenajes cívicos.',
      saludoSugerido: 'Recordamos con profundo respeto el 24 de agosto, Día de la Independencia de Ucrania, deseando paz, cultura y dignidad para su pueblo.'
    },
    datoCurioso: 'Los colores de la bandera ucraniana representan un paisaje universal del país: el azul del cielo despejado sobre el dorado de los inmensos trigales.'
  }
];
