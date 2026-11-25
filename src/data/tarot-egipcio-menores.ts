export interface ArcanoMenor {
  numero: number;
  nombre: string;
  planeta: 'Sol' | 'Luna' | 'Mercurio' | 'Venus' | 'Marte' | 'Júpiter' | 'Saturno' | 'Urano' | 'Neptuno' | 'Plutón';
  notaPlanetaria: string;
  numerologia: number;
  derecho: string;
  invertido: string;
  consejo: string;
}

export const ARCANOS_MENORES: ArcanoMenor[] = [
  {
    numero: 23,
    nombre: 'El Labrador',
    planeta: 'Mercurio',
    notaPlanetaria: 'Inteligencia y actuación práctica',
    numerologia: 5,
    derecho: 'Inteligencia aplicada, experiencia, trabajo constante y consecución concreta de resultados.',
    invertido: 'Breve contrariedad práctica que se destraba aceptando apoyo sincero.',
    consejo: 'Sostené la siembra diaria con método: lo que trabajás hoy con cuidado da fruto seguro.'
  },
  {
    numero: 24,
    nombre: 'La Laboriosidad',
    planeta: 'Venus',
    notaPlanetaria: 'Dedicación y alegría en el oficio',
    numerologia: 6,
    derecho: 'Hacendosidad, orden económico, dedicación prolija y cumplimiento sereno de compromisos.',
    invertido: 'Malestar interior o intranquilidad por sobrecarga de tareas pendientes.',
    consejo: 'Cuidá los pequeños detalles con gusto, pero reservá también descanso para que el esfuerzo siga siendo alegre.'
  },
  {
    numero: 25,
    nombre: 'El Viajero',
    planeta: 'Neptuno',
    notaPlanetaria: 'Espíritu viajero y aventurero',
    numerologia: 7,
    derecho: 'Afrontar desafíos nuevos con éxito, viajes provechosos y vínculos con el extranjero.',
    invertido: 'Mudanzas apuradas, cambios laborales inesperados o tensiones domésticas pasajeras.',
    consejo: 'Abrite a cambiar de paisaje o de mirada: salir de lo habitual hoy despeja respuestas.'
  },
  {
    numero: 26,
    nombre: 'La Fortuna',
    planeta: 'Saturno',
    notaPlanetaria: 'Premio y solución de un problema',
    numerologia: 8,
    derecho: 'Sorpresas agradables, ideas rentables, nuevo afecto y prosperidad merecida.',
    invertido: 'Contratiempo menor que pide cautela antes de comprometer recursos.',
    consejo: 'Aprovechá el impulso a favor con los pies en la tierra para que el buen momento perdure.'
  },
  {
    numero: 27,
    nombre: 'Lo Imprevisto',
    planeta: 'Marte',
    notaPlanetaria: 'Fuerza y empuje repentino',
    numerologia: 9,
    derecho: 'Triunfo alcanzado tras un giro inesperado, hallazgo tardío o sorpresa oportuna.',
    invertido: 'Sorpresa incómoda o promesa poco clara que conviene verificar a tiempo.',
    consejo: 'Mantené flexibilidad: un cambio fuera de libreto puede abrirte una puerta mejor que el plan original.'
  },
  {
    numero: 28,
    nombre: 'La Desesperación',
    planeta: 'Plutón',
    notaPlanetaria: 'Olvido sano del pasado',
    numerologia: 1,
    derecho: 'Misterio que empieza a aclararse cuando usás el conocimiento que ya tenés a mano.',
    invertido: 'Retraso, prueba emocional o adversidad pasajera que pide calma y acompañamiento.',
    consejo: 'No te quedes mirando ayer: pedí claridad, respirá hondo y resolvé primero el paso más cercano.'
  },
  {
    numero: 29,
    nombre: 'La Tranquilidad',
    planeta: 'Luna',
    notaPlanetaria: 'Pasividad fértil y reflexión',
    numerologia: 2,
    derecho: 'Alegría serena, acuerdo ventajoso, recompensa justa al esfuerzo y calma en casa.',
    invertido: 'Indecisión prolongada o exceso de acomodamiento que frena una mejora.',
    consejo: 'Disfrutá el momento de paz ganado y aprovechalo para pensar con cabeza despejada.'
  },
  {
    numero: 30,
    nombre: 'El Comercio',
    planeta: 'Júpiter',
    notaPlanetaria: 'Conocimiento e intercambio',
    numerologia: 3,
    derecho: 'Intercambios complejos que prosperan cuando ponés condiciones claras sobre la mesa.',
    invertido: 'Sensibilidad alta en acuerdos; relaciones comerciales que piden trato amable y prolijo.',
    consejo: 'Hablá con transparencia sobre tiempos y expectativas: un buen acuerdo siempre beneficia a las dos partes.'
  },
  {
    numero: 31,
    nombre: 'Las Dificultades',
    planeta: 'Urano',
    notaPlanetaria: 'Tardanzas y ajustes de ritmo',
    numerologia: 4,
    derecho: 'Expectativas en maduración y promesas que requieren paciencia antes de concretarse.',
    invertido: 'Restricciones pasajeras o demoras administrativas que exigen revisar trámites.',
    consejo: 'Usá la espera para pulir tu propuesta en vez de desgastarte peleando contra el reloj.'
  },
  {
    numero: 32,
    nombre: 'La Generosidad',
    planeta: 'Mercurio',
    notaPlanetaria: 'Distribución inteligente',
    numerologia: 5,
    derecho: 'Cooperación genuina, altruismo, alianzas leales y cumplimiento de compromisos.',
    invertido: 'Egoísmo o desacuerdos materiales por falta de reciprocidad clara.',
    consejo: 'Compartir lo que sabés o tenés multiplica vínculos valiosos cuando también cuidás tus propios límites.'
  },
  {
    numero: 33,
    nombre: 'Los Acuerdos',
    planeta: 'Venus',
    notaPlanetaria: 'Unión y alianzas duraderas',
    numerologia: 6,
    derecho: 'Alianza afectiva o laboral sólida, prosperidad compartida y progreso en equipo.',
    invertido: 'Papeles pendientes o inversión apresurada que conviene leer dos veces.',
    consejo: 'Celebrá los acuerdos que unen voluntades y dejá por escrito todo lo que importe cuidar.'
  },
  {
    numero: 34,
    nombre: 'El Cambio',
    planeta: 'Neptuno',
    notaPlanetaria: 'Profundidad y transformación',
    numerologia: 7,
    derecho: 'Ideas renovadoras, nuevo emprendimiento y encuentro afortunado que abre camino.',
    invertido: 'Miedo a dar el paso o dudas frente a una novedad que ya toca tu puerta.',
    consejo: 'Animarte a renovar un hábito viejo hoy puede destrabar toda la segunda mitad del año.'
  },
  {
    numero: 35,
    nombre: 'La Tristeza',
    planeta: 'Saturno',
    notaPlanetaria: 'Templanza ante la pena',
    numerologia: 8,
    derecho: 'Fortaleza de espíritu que emerge frente a una noticia o cambio imprevisto.',
    invertido: 'Melancolía pasajera o desánimo que mejora al compartirlo con gente de confianza.',
    consejo: 'Honrá lo que sentís sin encerrarte: la calma vuelve más rápido cuando dejás entrar afecto cercano.'
  },
  {
    numero: 36,
    nombre: 'La Guerra',
    planeta: 'Marte',
    notaPlanetaria: 'Conflicto y conquista decidida',
    numerologia: 9,
    derecho: 'Nacimiento de una etapa firme, empuje ganador, buenos negocios y defensa justa de tus metas.',
    invertido: 'Desgaste innecesario en discusiones que te quitan impulso para lo importante.',
    consejo: 'Elegí bien qué batallas valen tu energía y reservá tu empuje para construir algo duradero.'
  },
  {
    numero: 37,
    nombre: 'El Arte',
    planeta: 'Sol',
    notaPlanetaria: 'Amistad, creatividad y placer',
    numerologia: 1,
    derecho: 'Amistad sincera, ayuda oportuna, reconocimiento público e ingenio creativo.',
    invertido: 'Malentendidos pequeños o críticas ajenas que no reflejan el valor real de tu obra.',
    consejo: 'Sumá belleza y creatividad a lo que hacés: tu toque personal hoy marca toda la diferencia.'
  },
  {
    numero: 38,
    nombre: 'La Infidelidad',
    planeta: 'Luna',
    notaPlanetaria: 'Pruebas de lealtad',
    numerologia: 2,
    derecho: 'Presencia de personas decididas, sabias y honradas que sostienen la verdad sin vueltas.',
    invertido: 'Falta de transparencia o promesas incumplidas que piden poner límites claros.',
    consejo: 'Rodeate de vínculos donde las palabras coincidan con los hechos cotidianos.'
  },
  {
    numero: 39,
    nombre: 'La Herencia',
    planeta: 'Júpiter',
    notaPlanetaria: 'Verdad y legado familiar',
    numerologia: 3,
    derecho: 'Legado valioso, herencia material o simbólica y celebraciones que reúnen a la familia.',
    invertido: 'Tensiones afectivas o repartos complejos que requieren diálogo sereno.',
    consejo: 'Agradecé lo mejor que recibiste de tus raíces y elegí qué legado lindo querés dejar hoy.'
  },
  {
    numero: 40,
    nombre: 'El Presentimiento',
    planeta: 'Urano',
    notaPlanetaria: 'Alerta intuitiva súbita',
    numerologia: 4,
    derecho: 'Trabajo bien valorado, simpatía inmediata y atracción hacia una oportunidad real.',
    invertido: 'Pérdida de foco o descuido afectivo por andar con la cabeza en demasiadas cosas.',
    consejo: 'Prestá atención a esa corazonada clara y confirmala con datos concretos antes de avanzar.'
  },
  {
    numero: 41,
    nombre: 'La Angustia',
    planeta: 'Mercurio',
    notaPlanetaria: 'Revisión interior lúcida',
    numerologia: 5,
    derecho: 'Vínculos intensos, familia numerosa y recuerdos afectivos que piden lugar y calma.',
    invertido: 'Agitación externa o enojo acumulado por cargar problemas que no te pertenecen.',
    consejo: 'Poné en palabras lo que te preocupa: apenas lo nombrás con orden, deja de parecer gigante.'
  },
  {
    numero: 42,
    nombre: 'La Constancia',
    planeta: 'Venus',
    notaPlanetaria: 'Presencia afectuosa e insistencia',
    numerologia: 6,
    derecho: 'Ventajas sostenidas, triunfos por perseverancia, vínculos sorprendentes y viaje productivo.',
    invertido: 'Distracción afectiva pasajera que se corrige retomando lo que te importa.',
    consejo: 'Tu constancia tranquila vence cualquier apuro: seguí un paso más sin aflojar.'
  },
  {
    numero: 43,
    nombre: 'La Alucinación',
    planeta: 'Neptuno',
    notaPlanetaria: 'Sensibilidad extrema e imaginación',
    numerologia: 7,
    derecho: 'Alegría inesperada, satisfacción sencilla, modestia y buen resultado en un proyecto.',
    invertido: 'Confusión en pareja o suposiciones sin confirmar que generan ruido innecesario.',
    consejo: 'Antes de imaginar escenarios difíciles, preguntá directo con calidez y claridad.'
  },
  {
    numero: 44,
    nombre: 'El Pensamiento',
    planeta: 'Saturno',
    notaPlanetaria: 'Solución metódica de problemas',
    numerologia: 8,
    derecho: 'Proyecto bien pensado, intención firme y decisión madura que ordena el panorama.',
    invertido: 'Objetivo alcanzable aceptando una mirada externa o asesoramiento puntual.',
    consejo: 'Anotá tu plan en tres pasos simples: la claridad mental es la mitad del resultado.'
  },
  {
    numero: 45,
    nombre: 'La Regeneración',
    planeta: 'Marte',
    notaPlanetaria: 'Cambio drástico y renovación',
    numerologia: 9,
    derecho: 'Influencia familiar importante en decisiones afectivas y renovación de acuerdos.',
    invertido: 'Cierre de una etapa o vínculo que ya cumplió su ciclo para dar paso a mayor paz.',
    consejo: 'No temas recomenzar: cada renovación honesta te devuelve vitalidad.'
  },
  {
    numero: 46,
    nombre: 'El Patrimonio',
    planeta: 'Sol',
    notaPlanetaria: 'Recogida de lo sembrado',
    numerologia: 1,
    derecho: 'Legado firme, donación, reconocimiento económico y afinidad estable en pareja.',
    invertido: 'Cautela frente a promesas ajenas exageradas sobre dinero o negocios.',
    consejo: 'Administrá con gratitud y prudencia lo que construiste durante años.'
  },
  {
    numero: 47,
    nombre: 'La Conjetura',
    planeta: 'Luna',
    notaPlanetaria: 'Sueños e intuición afectiva',
    numerologia: 2,
    derecho: 'Alegría venidera, amor puro y duradero, comprensión profunda dentro de la familia.',
    invertido: 'Aflicción pasajera nacida de suposiciones que no se corresponden con la realidad.',
    consejo: 'Confiá en lo que se demuestra con cariño constante y soltá las dudas imaginarias.'
  },
  {
    numero: 48,
    nombre: 'El Logro',
    planeta: 'Júpiter',
    notaPlanetaria: 'Poder de concretar metas',
    numerologia: 3,
    derecho: 'Victoria limpia, consumación de un esfuerzo largo y conocimiento consolidado.',
    invertido: 'Meta afectiva o personal cercana que solo pide un poco más de paciencia.',
    consejo: 'Tomate un momento para celebrar lo que ya concretaste antes de correr detrás del siguiente objetivo.'
  },
  {
    numero: 49,
    nombre: 'La Duplicidad',
    planeta: 'Urano',
    notaPlanetaria: 'Caminos distintos en paralelo',
    numerologia: 4,
    derecho: 'Traslado favorable, ampliación de círculos y nuevas amistades enriquecedoras.',
    invertido: 'Encrucijada afectiva o competencia que se resuelve eligiendo con transparencia.',
    consejo: 'Integrá tus distintas facetas sin dividir tu lealtad: la coherencia da tranquilidad.'
  },
  {
    numero: 50,
    nombre: 'La Compenetración',
    planeta: 'Mercurio',
    notaPlanetaria: 'Capacidad mental y sintonía',
    numerologia: 5,
    derecho: 'Ilusión viva, amor correspondido, pasión y discernimiento claro frente a engaños.',
    invertido: 'Temor a trámites complejos o cautela excesiva ante riesgos manejables.',
    consejo: 'Escuchá con empatía sin apagar tu sentido común: corazón y cabeza trabajan mejor juntos.'
  },
  {
    numero: 51,
    nombre: 'El Asesoramiento',
    planeta: 'Venus',
    notaPlanetaria: 'Seguridad y buen consejo',
    numerologia: 6,
    derecho: 'Éxito en responsabilidades nuevas y trato favorable con personas experimentadas.',
    invertido: 'Rivalidades fuertes o discusiones que conviene mediar con diplomacia.',
    consejo: 'Consultar a quien ya recorrió el camino te ahorra tropiezos y fortalece tu decisión.'
  },
  {
    numero: 52,
    nombre: 'La Previsión',
    planeta: 'Neptuno',
    notaPlanetaria: 'Elegancia y estrategia serena',
    numerologia: 7,
    derecho: 'Orden inteligente, disciplina suave y defensa serena ante posibles conflictos.',
    invertido: 'Apariencias engañosas o celos que se disuelven con hechos claros.',
    consejo: 'Anticiparte con calma a lo que viene te permite disfrutar el presente sin sobresaltos.'
  },
  {
    numero: 53,
    nombre: 'La Venganza',
    planeta: 'Saturno',
    notaPlanetaria: 'Cautela ante el temor o el rencor',
    numerologia: 8,
    derecho: 'Llamado a actuar con prudencia fría y no responder desde el impulso herido.',
    invertido: 'Críticas, rumores o discusiones innecesarias de las que conviene correrse a tiempo.',
    consejo: 'Soltar el rencor libera tu paz: responder con altura siempre protege mejor tu camino.'
  },
  {
    numero: 54,
    nombre: 'El Estudio',
    planeta: 'Marte',
    notaPlanetaria: 'Observación atenta y rigor',
    numerologia: 9,
    derecho: 'Analizar a fondo, investigar con rigor y dominar un tema antes de decidir.',
    invertido: 'Rumores o distracciones externas que intentan sacarte de tu foco.',
    consejo: 'Invertir una hora en entender bien el asunto hoy vale más que diez intentos apresurados.'
  },
  {
    numero: 55,
    nombre: 'El Arrepentimiento',
    planeta: 'Plutón',
    notaPlanetaria: 'Desafío interior y revisión',
    numerologia: 1,
    derecho: 'Recogimiento honesto, humildad y pausa reflexiva que corrige el rumbo a tiempo.',
    invertido: 'Pruebas espirituales o presiones externas que exigen perdonarte y seguir.',
    consejo: 'Aprender de un error ya es victoria: corregí lo necesario y seguí liviano hacia adelante.'
  },
  {
    numero: 56,
    nombre: 'La Búsqueda',
    planeta: 'Luna',
    notaPlanetaria: 'Distanciamiento reflexivo',
    numerologia: 2,
    derecho: 'Logros materiales que invitan a revisar qué valores querés priorizar ahora.',
    invertido: 'Lamentaciones por lo postergado que se transforman en acción apenas empezás hoy.',
    consejo: 'Preguntate qué te da verdadero sentido y ajustá tu agenda en esa dirección.'
  },
  {
    numero: 57,
    nombre: 'La Rivalidad',
    planeta: 'Júpiter',
    notaPlanetaria: 'Defensa firme del propio valor',
    numerologia: 3,
    derecho: 'Asuntos delicados que se resuelven bien combinando cautela y seguridad propia.',
    invertido: 'Oposición o críticas externas que ponen a prueba tu serenidad.',
    consejo: 'Enfocate en hacer excelente tu parte en lugar de compararte con la carrera ajena.'
  },
  {
    numero: 58,
    nombre: 'La Recapacitación',
    planeta: 'Urano',
    notaPlanetaria: 'Estrategia y reconsideración lúcida',
    numerologia: 4,
    derecho: 'Deseo firme de superación, esfuerzo renovado y lucidez para ajustar planes.',
    invertido: 'Aviso de descuidos o comentarios injustos que se aclaran con calma y pruebas.',
    consejo: 'Cambiar de opinión cuando descubrís algo mejor es señal de inteligencia, no de debilidad.'
  },
  {
    numero: 59,
    nombre: 'El Descubrimiento',
    planeta: 'Mercurio',
    notaPlanetaria: 'Hallazgo y noticias clave',
    numerologia: 5,
    derecho: 'Autorizaciones aprobadas, viajes, mensajes esperados y hallazgos que abren puertas.',
    invertido: 'Contradicciones menores o demoras breves en una noticia que ya está en camino.',
    consejo: 'Mantené los ojos curiosos: una conversación sencilla hoy puede traerte el dato que buscabas.'
  },
  {
    numero: 60,
    nombre: 'El Progreso',
    planeta: 'Venus',
    notaPlanetaria: 'Mejora continua y evolución',
    numerologia: 6,
    derecho: 'Aprender, evolucionar, crecer de forma sostenida y mejorar tu bienestar cotidiano.',
    invertido: 'Tropiezos materiales pequeños o cansancio pasajero que se supera sin apuro.',
    consejo: 'Celebrá cada mejora concreta del camino: avanzar un poco cada semana cambia todo el año.'
  },
  {
    numero: 61,
    nombre: 'La Soledad',
    planeta: 'Neptuno',
    notaPlanetaria: 'Retraimiento fértil y autocuidado',
    numerologia: 7,
    derecho: 'Economía cuidada, comportamiento recto, prudencia y espacio propio reparador.',
    invertido: 'Aislamiento excesivo que pide volver a abrir la puerta a un café con amigos.',
    consejo: 'Disfrutá tu tiempo a solas para recargarte, sin olvidar a quienes disfrutan tu compañía.'
  },
  {
    numero: 62,
    nombre: 'La Autoridad',
    planeta: 'Saturno',
    notaPlanetaria: 'Autoridad justa y mediación',
    numerologia: 8,
    derecho: 'Mediador amable, equilibrio en acuerdos y liderazgo que ordena sin lastimar.',
    invertido: 'Rigidez o rupturas evitables si se escucha primero a la otra parte.',
    consejo: 'Ejercé tu criterio con serenidad y respeto: la autoridad genuina siempre construye confianza.'
  },
  {
    numero: 63,
    nombre: 'La Comunión',
    planeta: 'Marte',
    notaPlanetaria: 'Unión y afinidad activa',
    numerologia: 9,
    derecho: 'Afecto recíproco, cariño sincero, ayuda mutua e ideales compartidos en armonía.',
    invertido: 'Frialdad pasajera que se derrite dando el primer paso hacia la reconciliación.',
    consejo: 'Cuidá los espacios compartidos: caminar acompañado vuelve más liviana cualquier cuesta.'
  },
  {
    numero: 64,
    nombre: 'La Condescendencia',
    planeta: 'Sol',
    notaPlanetaria: 'Gentileza y trato noble',
    numerologia: 1,
    derecho: 'Superar una empresa difícil con tacto y disfrutar un momento amoroso cálido.',
    invertido: 'Presión excesiva o enojo contenido que pide expresarse con claridad respetuosa.',
    consejo: 'La gentileza sincera abre más puertas que la dureza, siempre que no signifique callar lo justo.'
  },
  {
    numero: 65,
    nombre: 'El Aprendizaje',
    planeta: 'Luna',
    notaPlanetaria: 'Enseñanza y acompañamiento',
    numerologia: 2,
    derecho: 'Progreso real gracias a la guía, protección y experiencia de alguien generoso.',
    invertido: 'Baja momentánea de ritmo que invita a practicar con paciencia antes de rendir.',
    consejo: 'Mantené mente de aprendiz: siempre hay un oficio o hábito nuevo capaz de alegrarte la etapa.'
  },
  {
    numero: 66,
    nombre: 'La Perplejidad',
    planeta: 'Júpiter',
    notaPlanetaria: 'Sorpresas y apoyo inesperado',
    numerologia: 3,
    derecho: 'Bienestar que llega de la mano de alguien influyente o un gesto generoso inesperado.',
    invertido: 'Duda momentánea o asunto temporalmente detenido hasta contar con más claridad.',
    consejo: 'No te paralices si algo sorprende tus planes: preguntá, observá y aceptá ayuda valiosa.'
  },
  {
    numero: 67,
    nombre: 'La Amistad',
    planeta: 'Urano',
    notaPlanetaria: 'Espiritualidad y lazo fraterno',
    numerologia: 4,
    derecho: 'Amistad sincera, afectos leales, calma compartida y conversaciones que sanan.',
    invertido: 'Malentendido menor con alguien querido que se aclara rápido con un mensaje franco.',
    consejo: 'Escribile hoy a ese amigo que hace días tenés presente: los buenos lazos se riegan con gestos simples.'
  },
  {
    numero: 68,
    nombre: 'La Inversión',
    planeta: 'Mercurio',
    notaPlanetaria: 'Prosperidad e inteligencia financiera',
    numerologia: 5,
    derecho: 'Riqueza material bien ganada, generosidad, acierto e inteligencia práctica.',
    invertido: 'Descuido económico por confiar sin revisar en propuestas interesadas.',
    consejo: 'Invertí tiempo, afecto y recursos donde veas transparencia, cuidado y horizonte real.'
  },
  {
    numero: 69,
    nombre: 'El Azar',
    planeta: 'Venus',
    notaPlanetaria: 'Sincronicidad favorable',
    numerologia: 6,
    derecho: 'Retribución justa, mejora inesperada, recompensa, cambio favorable y acierto oportuno.',
    invertido: 'Demora temporal en un proyecto útil que igual sigue bien encaminado.',
    consejo: 'Estate atento a las coincidencias lindas: la buena suerte suele favorecer a quien ya está en movimiento.'
  },
  {
    numero: 70,
    nombre: 'La Ayuda',
    planeta: 'Neptuno',
    notaPlanetaria: 'Profundidad y apoyo solidario',
    numerologia: 7,
    derecho: 'Afecto concreto, promesa cumplida, mano tendida y progreso compartido.',
    invertido: 'Expectativas demoradas o beneficio que llega por una vía distinta a la imaginada.',
    consejo: 'Tanto pedir ayuda como ofrecerla con humildad fortalece el puente entre las personas.'
  },
  {
    numero: 71,
    nombre: 'La Codicia',
    planeta: 'Saturno',
    notaPlanetaria: 'Conservadurismo y medida',
    numerologia: 8,
    derecho: 'Cuidar con prudencia tu trabajo, tus ahorros y la estabilidad de tu casa.',
    invertido: 'Exceso de apego material o apuro por acumular descuidando el disfrute del presente.',
    consejo: 'Valorá lo que ya construiste: la seguridad real nace de administrar bien sin perder generosidad.'
  },
  {
    numero: 72,
    nombre: 'La Purificación',
    planeta: 'Marte',
    notaPlanetaria: 'Belleza y claridad renovada',
    numerologia: 9,
    derecho: 'Sencillez luminosa, buena adquisición, alivio y noticia agradable en camino.',
    invertido: 'Esfuerzo intenso de orden que termina desembocando en buena suerte y paz.',
    consejo: 'Simplificá tu espacio y tus compromisos: sacar lo que sobra deja entrar aire limpio.'
  },
  {
    numero: 73,
    nombre: 'El Amor y el Deseo',
    planeta: 'Sol',
    notaPlanetaria: 'Enamoramiento y vitalidad afectiva',
    numerologia: 1,
    derecho: 'Enamoramiento vivo, pasión correspondida, alegría compartida y bienes esperados.',
    invertido: 'Entorno poco sincero o desorden afectivo que pide cuidar primero tu dignidad.',
    consejo: 'Expresá tu cariño con hechos claros: el amor crece cuando se celebra todos los días.'
  },
  {
    numero: 74,
    nombre: 'La Ofrenda',
    planeta: 'Luna',
    notaPlanetaria: 'Comienzo, nacimiento y dedicación',
    numerologia: 2,
    derecho: 'Dedicación noble, equilibrio, inspiración afectiva y amor expresado con gestos.',
    invertido: 'Enfriamiento del interés o esfuerzo no correspondido que conviene reequilibrar.',
    consejo: 'Un detalle sincero hecho con dedicación vale infinitamente más que cualquier regalo costoso sin alma.'
  },
  {
    numero: 75,
    nombre: 'El Reparto',
    planeta: 'Júpiter',
    notaPlanetaria: 'Reparto equitativo y abundancia',
    numerologia: 3,
    derecho: 'Ascenso merecido, legado justo, reconocimiento económico y prosperidad compartida.',
    invertido: 'Cuidado atento de nuevos comienzos o asuntos familiares que piden equidad.',
    consejo: 'Cuando repartís crédito, tiempo y frutos con justicia, todo tu equipo y tu casa prosperan.'
  },
  {
    numero: 76,
    nombre: 'El Dispensador',
    planeta: 'Urano',
    notaPlanetaria: 'Dar suerte y abrir caminos',
    numerologia: 4,
    derecho: 'Trabajo abundante, reconocimiento merecido y nacimiento de un proyecto valioso.',
    invertido: 'Humor cambiante o dispersión que se ordena volviendo a tus prioridades.',
    consejo: 'Agradecé las puertas que se abren hoy y devolvé el gesto abriendo paso a alguien más.'
  },
  {
    numero: 77,
    nombre: 'El Desconcierto',
    planeta: 'Mercurio',
    notaPlanetaria: 'Indecisión antes de la claridad',
    numerologia: 5,
    derecho: 'Augurios de buena suerte que aparecen apenas atravesás un momento de duda.',
    invertido: 'Confusión breve o imprevisto menor que se ordena tomando distancia un día.',
    consejo: 'No decidas apurado en medio del ruido: dormilo una noche y mañana la respuesta se ve limpia.'
  },
  {
    numero: 78,
    nombre: 'El Renacimiento',
    planeta: 'Venus',
    notaPlanetaria: 'Razón de vivir y plenitud renovada',
    numerologia: 6,
    derecho: 'Placer genuino, honradez, fortuna serena y satisfacción profunda con la vida.',
    invertido: 'Objetivos finalmente logrados tras haber atravesado una etapa exigente.',
    consejo: 'Celebrá este nuevo comienzo con gratitud abierta: la vida siempre guarda capítulos hermosos por estrenar.'
  }
];
