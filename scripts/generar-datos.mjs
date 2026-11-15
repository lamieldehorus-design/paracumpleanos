// Generador completo de las 351 categorias y 30 mensajes originales por categoria (10,530 mensajes)
// Siguiendo el Mapa del Proyecto, las reglas del Validador de Titulos (R0-R7) y redaccion profesional (Cervantes + Pensador).
import fs from 'node:fs';
import path from 'node:path';
import {
  normalizar,
  slugify,
  bigramas,
  construirHubProfesional,
  generarMensajesProfesionales
} from './redactor-es.mjs';

// ---------------------------------------------------------------------------
// Catalogo completo de las 351 categorias (10 existentes + 341 nuevas)
// Cada entrada: [keyword, destinatario, cabecera, modificador, grupo, emoji, h1Base]
// ---------------------------------------------------------------------------
// Los 10 hubs existentes mantienen su slug original intacto.
const HUBS_EXISTENTES = [
  'feliz-cumpleanos-mama',
  'feliz-cumpleanos-amiga',
  'feliz-cumpleanos-hijo',
  'feliz-cumpleanos-mi-amor',
  'feliz-cumpleanos-amigo',
  'feliz-cumpleanos-hermana',
  'feliz-cumpleanos-hija',
  'feliz-cumpleanos-novia',
  'feliz-cumpleanos-novio',
  'feliz-cumpleanos-papa'
];

// Las 323 entradas unicas restantes de la Seccion 15 + 18 complementarias de Secciones 14A y 17 = 341 nuevas
// Formato compacto: [keyword, destinatario, cabecera, modificador, grupo]
const NUEVAS_CATEGORIAS = [
  // === GRUPO: destinatarios (complementarios a los 10 existentes) ===
  ['feliz cumpleaños para un hermano', 'hermano', 'feliz cumpleaños', 'para un hermano', 'destinatarios'],
  ['feliz cumpleaños para mi esposa', 'esposa', 'feliz cumpleaños', 'para mi esposa', 'destinatarios'],
  ['feliz cumpleaños para mi esposo', 'esposo', 'feliz cumpleaños', 'para mi esposo', 'destinatarios'],
  ['feliz cumpleaños para hombre', 'hombre', 'feliz cumpleaños', 'para hombre', 'destinatarios'],
  ['frases y cumpleaños para mujeres', 'mujer', 'frases y cumpleaños', 'para mujeres', 'destinatarios'],
  ['feliz cumpleaños para una tía', 'tía', 'feliz cumpleaños', 'para una tía', 'destinatarios'],
  ['feliz cumpleaños para mi tío', 'tío', 'feliz cumpleaños', 'para mi tío', 'destinatarios'],
  ['feliz cumpleaños prima', 'prima', 'feliz cumpleaños', 'prima', 'destinatarios'],
  ['feliz cumpleaños primo', 'primo', 'feliz cumpleaños', 'primo', 'destinatarios'],
  ['feliz cumpleaños para una sobrina', 'sobrina', 'feliz cumpleaños', 'para una sobrina', 'destinatarios'],
  ['feliz cumpleaños para un sobrino', 'sobrino', 'feliz cumpleaños', 'para un sobrino', 'destinatarios'],
  ['feliz cumpleaños para una cuñada', 'cuñada', 'feliz cumpleaños', 'para una cuñada', 'destinatarios'],
  ['feliz cumpleaños para un cuñado', 'cuñado', 'feliz cumpleaños', 'para un cuñado', 'destinatarios'],
  ['feliz cumpleaños suegra', 'suegra', 'feliz cumpleaños', 'suegra', 'destinatarios'],
  ['feliz cumpleaños para una persona especial', 'persona especial', 'feliz cumpleaños', 'para una persona especial', 'destinatarios'],
  ['feliz cumpleaños abuela', 'abuela', 'feliz cumpleaños', 'abuela', 'destinatarios'],
  ['feliz cumpleaños abuelo', 'abuelo', 'feliz cumpleaños', 'abuelo', 'destinatarios'],
  ['feliz cumpleaños mujer', 'mujer', 'feliz cumpleaños', 'mujer', 'destinatarios'],
  ['feliz cumpleaños alguien especial', 'alguien especial', 'feliz cumpleaños', 'alguien especial', 'destinatarios'],
  ['feliz cumpleaños mejor amiga', 'mejor amiga', 'feliz cumpleaños', 'mejor amiga', 'destinatarios'],
  ['feliz cumpleaños mejor amigo', 'mejor amigo', 'feliz cumpleaños', 'mejor amigo', 'destinatarios'],
  ['feliz cumpleaños pareja', 'pareja', 'feliz cumpleaños', 'pareja', 'destinatarios'],

  // === GRUPO: cartas (Seccion 14B & 15) ===
  ['carta a mi hija en su cumpleaños de 25 años', 'hija', 'carta', '25 años', 'cartas'],
  ['carta de 10 meses de novios', 'novios', 'carta', '10 meses', 'cartas'],
  ['carta de 11 meses de novios', 'novios', 'carta', '11 meses', 'cartas'],
  ['carta de 14 meses de novios', 'novios', 'carta', '14 meses', 'cartas'],
  ['carta de 15 meses de novios', 'novios', 'carta', '15 meses', 'cartas'],
  ['carta de 16 meses de novios', 'novios', 'carta', '16 meses', 'cartas'],
  ['carta de 18 meses de novios', 'novios', 'carta', '18 meses', 'cartas'],
  ['carta de 2 años de novios', 'novios', 'carta', '2 años', 'cartas'],
  ['carta de 2 meses de novios', 'novios', 'carta', '2 meses', 'cartas'],
  ['carta de 3 años de novios', 'novios', 'carta', '3 años', 'cartas'],
  ['carta de 3 meses de novios', 'novios', 'carta', '3 meses', 'cartas'],
  ['carta de 4 años de novios', 'novios', 'carta', '4 años', 'cartas'],
  ['carta de 4 meses de novios', 'novios', 'carta', '4 meses', 'cartas'],
  ['carta de 5 meses de novios', 'novios', 'carta', '5 meses', 'cartas'],
  ['carta de 6 meses de novios', 'novios', 'carta', '6 meses', 'cartas'],
  ['carta de 7 meses de novios', 'novios', 'carta', '7 meses', 'cartas'],
  ['carta de 8 meses de novios', 'novios', 'carta', '8 meses', 'cartas'],
  ['carta de 9 meses de novios', 'novios', 'carta', '9 meses', 'cartas'],
  ['carta de aniversario para mi novio', 'novio', 'carta', 'aniversario', 'cartas'],
  ['carta a mi hijo para demostrarle nuestro amor', 'hijo', 'carta', 'demostrar amor', 'cartas'],
  ['carta para amiga que está lejos', 'amiga', 'carta', 'a distancia', 'cartas'],
  ['carta para hijo de 4 años', 'hijo', 'carta', '4 años', 'cartas'],
  ['carta para mi hermana mayor', 'hermana', 'carta', 'hermana mayor', 'cartas'],
  ['carta para mi hermana menor que la haga llorar', 'hermana', 'carta', 'hermana menor llorar', 'cartas'],
  ['carta para mi hermano menor', 'hermano', 'carta', 'hermano menor', 'cartas'],
  ['carta para mi hija', 'hija', 'carta', 'para mi hija', 'cartas'],
  ['carta para mi hija de 10 años', 'hija', 'carta', '10 años', 'cartas'],
  ['carta para mi hija de 2 años', 'hija', 'carta', '2 años', 'cartas'],
  ['carta para mi hija de 3 años', 'hija', 'carta', '3 años', 'cartas'],
  ['carta para mi hija de 4 años', 'hija', 'carta', '4 años', 'cartas'],
  ['carta para mi hijo de 10 años', 'hijo', 'carta', '10 años', 'cartas'],
  ['carta para mi hijo de 3 años', 'hijo', 'carta', '3 años', 'cartas'],
  ['carta para mi mejor amiga', 'mejor amiga', 'carta', 'para mejor amiga', 'cartas'],
  ['carta para mi mejor amigo', 'mejor amigo', 'carta', 'para mejor amigo', 'cartas'],
  ['carta para mi novio', 'novio', 'carta', 'para mi novio', 'cartas'],
  ['carta para mi novio que está lejos', 'novio', 'carta', 'a distancia', 'cartas'],
  ['carta para novia que está lejos', 'novia', 'carta', 'a distancia', 'cartas'],
  ['carta para una amiga que la haga llorar', 'amiga', 'carta', 'que haga llorar', 'cartas'],
  ['carta de feliz cumpleaños', 'general', 'carta', 'feliz cumpleaños', 'cartas'],
  ['carta de feliz cumpleaños para mi esposo que lo haga llorar', 'esposo', 'carta', 'que haga llorar', 'cartas'],
  ['carta de feliz cumpleaños para mi exnovio', 'exnovio', 'carta', 'cumpleaños', 'cartas'],
  ['carta para mi prima en su cumpleaños que la haga llorar', 'prima', 'carta', 'que haga llorar', 'cartas'],
  ['carta para un hijo que cumple 21 años', 'hijo', 'carta', '21 años', 'cartas'],
  ['carta por primer aniversario de novios', 'novios', 'carta', 'primer aniversario', 'cartas'],
  ['cartas de amor de aniversario', 'pareja', 'cartas', 'amor aniversario', 'cartas'],
  ['cartas de amor para un mes de novios', 'novios', 'cartas', 'un mes', 'cartas'],
  ['cartas para mi madre', 'mamá', 'cartas', 'para mi madre', 'cartas'],
  ['cartas para mi papá que lo haga llorar', 'papá', 'cartas', 'que haga llorar', 'cartas'],
  ['cartas de feliz cumpleaños para mi exnovia', 'exnovia', 'cartas', 'cumpleaños', 'cartas'],
  ['cartas para una amiga que cumple 15 años', 'amiga', 'cartas', '15 años', 'cartas'],

  // === GRUPO: edades (Edades y hitos) ===
  ['deseos de 50 años', 'general', 'deseos', '50 años', 'edades'],
  ['felices 18 años', 'general', 'felices', '18 años', 'edades'],
  ['felices 19 años', 'general', 'felices', '19 años', 'edades'],
  ['felicitaciones de 18 años divertidas', 'general', 'felicitaciones', '18 años divertidas', 'edades'],
  ['feliz 15 años hijo', 'hijo', 'feliz cumpleaños', '15 años', 'edades'],
  ['feliz 15 años para una sobrina', 'sobrina', 'feliz cumpleaños', '15 años', 'edades'],
  ['feliz 17 años hijo', 'hijo', 'feliz cumpleaños', '17 años', 'edades'],
  ['feliz 18 años hijo', 'hijo', 'feliz cumpleaños', '18 años', 'edades'],
  ['feliz cumpleaños 10 años', 'general', 'feliz cumpleaños', '10 años', 'edades'],
  ['feliz cumpleaños 14 años', 'general', 'feliz cumpleaños', '14 años', 'edades'],
  ['feliz cumpleaños 17 años', 'general', 'feliz cumpleaños', '17 años', 'edades'],
  ['feliz cumpleaños 20 años', 'general', 'feliz cumpleaños', '20 años', 'edades'],
  ['feliz cumpleaños 21 años', 'general', 'feliz cumpleaños', '21 años', 'edades'],
  ['feliz cumpleaños 25 años', 'general', 'feliz cumpleaños', '25 años', 'edades'],
  ['feliz cumpleaños 30 años', 'general', 'feliz cumpleaños', '30 años', 'edades'],
  ['feliz cumpleaños 60 años', 'general', 'feliz cumpleaños', '60 años', 'edades'],
  ['feliz cumpleaños a mi nieta en su primer añito', 'nieta', 'feliz cumpleaños', 'primer añito', 'edades'],
  ['feliz cumpleaños a mi nieta por sus 15 años', 'nieta', 'feliz cumpleaños', '15 años', 'edades'],
  ['feliz cumpleaños para hijo de 12 años', 'hijo', 'feliz cumpleaños', '12 años', 'edades'],
  ['feliz cumpleaños para mi hija de 14 años', 'hija', 'feliz cumpleaños', '14 años', 'edades'],
  ['feliz cumpleaños para mi hija de 18 años', 'hija', 'feliz cumpleaños', '18 años', 'edades'],
  ['feliz cumpleaños para mi hija de 20 años', 'hija', 'feliz cumpleaños', '20 años', 'edades'],
  ['feliz cumpleaños para mi hija de 6 años', 'hija', 'feliz cumpleaños', '6 años', 'edades'],
  ['feliz cumpleaños para mi sobrina de 1 año', 'sobrina', 'feliz cumpleaños', '1 año', 'edades'],
  ['feliz cumpleaños para mi sobrina de 2 años', 'sobrina', 'feliz cumpleaños', '2 años', 'edades'],
  ['feliz cumpleaños para mi sobrino de 1 año', 'sobrino', 'feliz cumpleaños', '1 año', 'edades'],
  ['feliz cumpleaños para un hijo de 1 año', 'hijo', 'feliz cumpleaños', '1 año', 'edades'],
  ['feliz cumpleaños para un hijo de 6 años', 'hijo', 'feliz cumpleaños', '6 años', 'edades'],
  ['feliz cumpleaños para un hijo de 7 años', 'hijo', 'feliz cumpleaños', '7 años', 'edades'],
  ['feliz cumpleaños para una hija de 1 año', 'hija', 'feliz cumpleaños', '1 año', 'edades'],
  ['frases de 15 años', 'quinceañera', 'frases', '15 años', 'edades'],
  ['frases de bodas de oro para 50 años de amor', 'pareja', 'frases', 'bodas de oro', 'edades'],
  ['frases para mi hija de 13 años', 'hija', 'frases', '13 años', 'edades'],
  ['frases para mi hija de 5 años', 'hija', 'frases', '5 años', 'edades'],
  ['frases para mi hija de 7 años', 'hija', 'frases', '7 años', 'edades'],
  ['frases para mi hijo 8 años', 'hijo', 'frases', '8 años', 'edades'],
  ['frases para sobrino de 2 años', 'sobrino', 'frases', '2 años', 'edades'],
  ['frases para un hijo de 2 años', 'hijo', 'frases', '2 años', 'edades'],
  ['frases para un hijo de 5 años', 'hijo', 'frases', '5 años', 'edades'],
  ['frases para un sobrino que cumple 18 años', 'sobrino', 'frases', '18 años', 'edades'],
  ['frases para cumpleaños de 1 añito', 'bebé', 'frases', '1 añito', 'edades'],
  ['cumpleaños de 2 años', 'niño', 'cumpleaños', '2 años', 'edades'],
  ['cumpleaños para 13 años', 'adolescente', 'cumpleaños', '13 años', 'edades'],
  ['cumpleaños para 16 años', 'adolescente', 'cumpleaños', '16 años', 'edades'],
  ['cumpleaños por primer año de vida', 'bebé', 'cumpleaños', 'primer año', 'edades'],
  ['palabras para mi hijo de 14 años', 'hijo', 'palabras', '14 años', 'edades'],
  ['palabras para hija que cumple 15 años', 'hija', 'palabras', '15 años', 'edades'],
  ['feliz cumpleaños 15 años', 'quinceañera', 'feliz cumpleaños', '15 años', 'edades'],
  ['feliz cumpleaños 18 años', 'joven', 'feliz cumpleaños', '18 años', 'edades'],
  ['feliz cumpleaños 40 años', 'general', 'feliz cumpleaños', '40 años', 'edades'],
  ['feliz cumpleaños 50 años', 'general', 'feliz cumpleaños', '50 años', 'edades'],

  // === GRUPO: cristiano (Tono cristiano / Dios te bendiga) ===
  ['feliz cumpleaños amiga cristiana', 'amiga', 'feliz cumpleaños', 'cristiana', 'cristiano'],
  ['feliz cumpleaños amiga dios te bendiga', 'amiga', 'feliz cumpleaños', 'dios te bendiga', 'cristiano'],
  ['feliz cumpleaños amigo dios te bendiga', 'amigo', 'feliz cumpleaños', 'dios te bendiga', 'cristiano'],
  ['feliz cumpleaños cristiano', 'general', 'feliz cumpleaños', 'cristiano', 'cristiano'],
  ['feliz cumpleaños cristianos', 'cristianos', 'feliz cumpleaños', 'cristianos', 'cristiano'],
  ['feliz cumpleaños dios te bendiga', 'general', 'feliz cumpleaños', 'dios te bendiga', 'cristiano'],
  ['feliz cumpleaños hermana dios te bendiga', 'hermana', 'feliz cumpleaños', 'dios te bendiga', 'cristiano'],
  ['feliz cumpleaños hermano dios te bendiga', 'hermano', 'feliz cumpleaños', 'dios te bendiga', 'cristiano'],
  ['feliz cumpleaños hijo dios te bendiga', 'hijo', 'feliz cumpleaños', 'dios te bendiga', 'cristiano'],
  ['feliz cumpleaños prima dios te bendiga', 'prima', 'feliz cumpleaños', 'dios te bendiga', 'cristiano'],
  ['feliz cumpleaños sobrina dios te bendiga', 'sobrina', 'feliz cumpleaños', 'dios te bendiga', 'cristiano'],
  ['frases cristianas de cumpleaños', 'cristianos', 'frases', 'cristianas', 'cristiano'],
  ['frases cristianas para una sobrina', 'sobrina', 'frases', 'cristianas', 'cristiano'],
  ['frases para sobrino cristianas', 'sobrino', 'frases', 'cristianas', 'cristiano'],
  ['gracias dios por un año más de vida', 'para mí', 'gracias dios', 'un año más', 'cristiano'],
  ['palabras cristianas para una madre en su cumpleaños', 'mamá', 'palabras', 'cristianas', 'cristiano'],
  ['palabras de agradecimiento a dios por mi cumpleaños', 'para mí', 'palabras', 'agradecimiento a dios', 'cristiano'],
  ['frases para honrar a mi sacerdote', 'sacerdote', 'frases', 'honrar', 'cristiano'],

  // === GRUPO: tono (Tono, estilo y formato) ===
  ['tarjetas para mi hija', 'hija', 'tarjetas', 'para mi hija', 'tono'],
  ['tarjetas de feliz cumpleaños amor para hacer sonreír a tu pareja', 'pareja', 'tarjetas', 'hacer sonreír', 'tono'],
  ['tarjetas para un hijo que le harán sentir amado', 'hijo', 'tarjetas', 'sentir amado', 'tono'],
  ['lindas frases para agradecer el apoyo de un amigo', 'amigo', 'frases', 'agradecer apoyo', 'tono'],
  ['frases hermosas para mi papá', 'papá', 'frases', 'hermosas', 'tono'],
  ['frases motivadoras de cumpleaños', 'general', 'frases', 'motivadoras', 'tono'],
  ['felicitaciones y frases originales de cumpleaños', 'general', 'felicitaciones', 'frases originales', 'tono'],
  ['frases bonitas para dedicar con cariño', 'general', 'frases', 'bonitas con cariño', 'tono'],
  ['tarjetas bonitas para felicitar en un cumpleaños', 'general', 'tarjetas', 'bonitas', 'tono'],
  ['frases de agradecimiento para compartir', 'general', 'frases', 'agradecimiento compartir', 'tono'],
  ['dedicatoria para mi pareja escritos con amor', 'pareja', 'dedicatoria', 'con amor', 'tono'],
  ['dedicatorias de cumpleaños', 'general', 'dedicatorias', 'cumpleaños', 'tono'],
  ['felicitaciones de cumpleaños', 'general', 'felicitaciones', 'cumpleaños', 'tono'],
  ['felicitaciones formales de cumpleaños', 'formal', 'felicitaciones', 'formales', 'tono'],
  ['felicitaciones originales divertidas y motivadoras', 'general', 'felicitaciones', 'originales divertidas', 'tono'],
  ['feliz cumpleaños general', 'general', 'feliz cumpleaños', 'general', 'tono'],
  ['feliz cumpleaños amiga bella', 'amiga', 'feliz cumpleaños', 'bella', 'tono'],
  ['feliz cumpleaños amiga especial', 'amiga', 'feliz cumpleaños', 'especial', 'tono'],
  ['feliz cumpleaños amiga hermana', 'amiga', 'feliz cumpleaños', 'amiga hermana', 'tono'],
  ['feliz cumpleaños amiga hermosa', 'amiga', 'feliz cumpleaños', 'hermosa', 'tono'],
  ['feliz cumpleaños amigo especial', 'amigo', 'feliz cumpleaños', 'especial', 'tono'],
  ['feliz cumpleaños amigo hermano', 'amigo', 'feliz cumpleaños', 'amigo hermano', 'tono'],
  ['feliz cumpleaños atrasado', 'atrasado', 'feliz cumpleaños', 'atrasado', 'tono'],
  ['feliz cumpleaños con flores imágenes y frases', 'mujer', 'feliz cumpleaños', 'con flores', 'tono'],
  ['feliz cumpleaños de hija para mamá', 'mamá', 'feliz cumpleaños', 'de hija para mamá', 'tono'],
  ['feliz cumpleaños de mamá a hija', 'hija', 'feliz cumpleaños', 'de mamá a hija', 'tono'],
  ['feliz cumpleaños de mamá a hijo', 'hijo', 'feliz cumpleaños', 'de mamá a hijo', 'tono'],
  ['feliz cumpleaños de papá a hija', 'hija', 'feliz cumpleaños', 'de papá a hija', 'tono'],
  ['feliz cumpleaños elegante', 'formal', 'feliz cumpleaños', 'elegante', 'tono'],
  ['feliz cumpleaños gracioso', 'divertido', 'feliz cumpleaños', 'gracioso', 'tono'],
  ['feliz cumpleaños mamá texto largo', 'mamá', 'feliz cumpleaños', 'texto largo', 'tono'],
  ['feliz cumpleaños mi amor para el hombre de mi vida', 'novio', 'feliz cumpleaños', 'hombre de mi vida', 'tono'],
  ['feliz cumpleaños mi princesa', 'hija', 'feliz cumpleaños', 'mi princesa', 'tono'],
  ['feliz cumpleaños papá de tu hija', 'papá', 'feliz cumpleaños', 'de tu hija', 'tono'],
  ['feliz cumpleaños para hombres imágenes y tarjetas', 'hombre', 'feliz cumpleaños', 'imágenes y tarjetas', 'tono'],
  ['feliz cumpleaños para hermana querida', 'hermana', 'feliz cumpleaños', 'querida', 'tono'],
  ['feliz cumpleaños hermano mayor', 'hermano', 'feliz cumpleaños', 'mayor', 'tono'],
  ['feliz cumpleaños hermano querido', 'hermano', 'feliz cumpleaños', 'querido', 'tono'],
  ['feliz cumpleaños hijo mío', 'hijo', 'feliz cumpleaños', 'hijo mío', 'tono'],
  ['feliz cumpleaños hijo te amo', 'hijo', 'feliz cumpleaños', 'te amo', 'tono'],
  ['feliz cumpleaños a mi hijo mayor', 'hijo', 'feliz cumpleaños', 'hijo mayor', 'tono'],
  ['frases de cumpleaños', 'general', 'frases', 'cumpleaños', 'tono'],
  ['frases cortas para felicitar a una buena amiga', 'amiga', 'frases', 'cortas buena amiga', 'tono'],
  ['frases cortas las más bonitas', 'corto', 'frases', 'cortas bonitas', 'tono'],
  ['frases para hermano para hacerlo sentir especial', 'hermano', 'frases', 'sentir especial', 'tono'],
  ['frases para mamá', 'mamá', 'frases', 'para mamá', 'tono'],
  ['frases para mi amiga', 'amiga', 'frases', 'para mi amiga', 'tono'],
  ['frases para mi esposa', 'esposa', 'frases', 'para mi esposa', 'tono'],
  ['frases para mi esposo', 'esposo', 'frases', 'para mi esposo', 'tono'],
  ['frases para mi mejor amiga', 'mejor amiga', 'frases', 'para mi mejor amiga', 'tono'],
  ['frases para mi mejor amigo', 'mejor amigo', 'frases', 'para mi mejor amigo', 'tono'],
  ['frases para un amigo cortas', 'amigo', 'frases', 'cortas', 'tono'],
  ['frases para un amigo hombre', 'amigo', 'frases', 'amigo hombre', 'tono'],
  ['frases para un amor', 'amor', 'frases', 'para un amor', 'tono'],
  ['frases para un hijo', 'hijo', 'frases', 'para un hijo', 'tono'],
  ['frases para una hermana', 'hermana', 'frases', 'para una hermana', 'tono'],
  ['frases para una hija', 'hija', 'frases', 'para una hija', 'tono'],
  ['frases para amigo', 'amigo', 'frases', 'para amigo', 'tono'],
  ['frases y cumpleaños para alguien especial', 'alguien especial', 'frases y cumpleaños', 'alguien especial', 'tono'],
  ['imágenes para mujeres de cumpleaños', 'mujer', 'imágenes', 'para mujeres', 'tono'],
  ['las mejores tarjetas para un hermano', 'hermano', 'tarjetas', 'mejores', 'tono'],
  ['lindas imágenes para mi hija', 'hija', 'imágenes', 'lindas', 'tono'],
  ['mensajes largos para mi novio', 'novio', 'mensajes', 'largos', 'tono'],
  ['mensaje para mi novia que le haga llorar', 'novia', 'mensaje', 'que haga llorar', 'tono'],
  ['mensaje para mi novio que le haga llorar', 'novio', 'mensaje', 'que haga llorar', 'tono'],
  ['mensaje largo para mi mejor amiga whatsapp', 'mejor amiga', 'mensaje', 'largo whatsapp', 'tono'],
  ['mensajes bonitos de cumpleaños', 'general', 'mensajes', 'bonitos', 'tono'],
  ['mensajes cortos de cumpleaños', 'corto', 'mensajes', 'cortos', 'tono'],
  ['mensajes cortos para mujer', 'mujer', 'mensajes', 'cortos', 'tono'],
  ['cumpleaños para mi hija mayor', 'hija', 'cumpleaños', 'hija mayor', 'tono'],
  ['cumpleaños para un amigo', 'amigo', 'cumpleaños', 'para un amigo', 'tono'],
  ['cumpleaños para un papá', 'papá', 'cumpleaños', 'para un papá', 'tono'],
  ['feliz cumpleaños cortos y bonitos', 'corto', 'feliz cumpleaños', 'cortos y bonitos', 'tono'],
  ['mensajes largos para un amigo', 'amigo', 'mensajes', 'largos', 'tono'],
  ['imágenes y frases para hombres', 'hombre', 'imágenes y frases', 'para hombres', 'tono'],
  ['palabras de amor para un hijo en su cumpleaños', 'hijo', 'palabras', 'amor', 'tono'],
  ['palabras para un hombre especial', 'hombre', 'palabras', 'hombre especial', 'tono'],
  ['pensamientos de cumpleaños', 'general', 'pensamientos', 'cumpleaños', 'tono'],
  ['poemas de cumpleaños', 'general', 'poemas', 'cumpleaños', 'tono'],
  ['poemas para mi hija', 'hija', 'poemas', 'para mi hija', 'tono'],
  ['poemas para mi mamá', 'mamá', 'poemas', 'para mi mamá', 'tono'],
  ['poemas para mi novia', 'novia', 'poemas', 'para mi novia', 'tono'],
  ['poemas para una amiga', 'amiga', 'poemas', 'para una amiga', 'tono'],
  ['poemas de feliz cumpleaños para enamorar', 'amor', 'poemas', 'para enamorar', 'tono'],
  ['reflexión para un hijo', 'hijo', 'reflexión', 'para un hijo', 'tono'],
  ['reflexiones de cumpleaños', 'general', 'reflexiones', 'cumpleaños', 'tono'],
  ['reflexiones para un hermano en su cumpleaños', 'hermano', 'reflexiones', 'hermano', 'tono'],
  ['saludos las dedicatorias más lindas', 'general', 'saludos', 'dedicatorias lindas', 'tono'],
  ['tarjetas para mujer', 'mujer', 'tarjetas', 'para mujer', 'tono'],
  ['tarjetas para una amiga muy especial', 'amiga', 'tarjetas', 'amiga muy especial', 'tono'],
  ['tarjetas para una hermana', 'hermana', 'tarjetas', 'para una hermana', 'tono'],
  ['tarjetas para una sobrina para dedicar con cariño', 'sobrina', 'tarjetas', 'dedicar con cariño', 'tono'],
  ['frases de cumpleaños cortas', 'corto', 'frases', 'cumpleaños cortas', 'tono'],
  ['felicitaciones de cumpleaños originales', 'general', 'felicitaciones', 'originales', 'tono'],
  ['felicitaciones de cumpleaños divertidas', 'divertido', 'felicitaciones', 'divertidas', 'tono'],
  ['mensajes de cumpleaños emotivos', 'general', 'mensajes', 'emotivos', 'tono'],
  ['feliz cumpleaños para whatsapp', 'whatsapp', 'feliz cumpleaños', 'para whatsapp', 'tono'],
  ['frases de cumpleaños para dedicar', 'general', 'frases', 'para dedicar', 'tono'],
  ['feliz cumpleaños para enamorar', 'amor', 'feliz cumpleaños', 'para enamorar', 'tono'],

  // === GRUPO: distancia (A distancia / que esta lejos) ===
  ['felicitaciones a un amigo que está lejos', 'amigo', 'felicitaciones', 'que está lejos', 'distancia'],
  ['feliz cumpleaños a distancia', 'general', 'feliz cumpleaños', 'a distancia', 'distancia'],
  ['feliz cumpleaños a distancia mi amor', 'amor', 'feliz cumpleaños', 'a distancia', 'distancia'],
  ['feliz cumpleaños a un tío que está lejos', 'tío', 'feliz cumpleaños', 'que está lejos', 'distancia'],
  ['feliz cumpleaños para abuelita que está lejos', 'abuela', 'feliz cumpleaños', 'que está lejos', 'distancia'],
  ['frases para alguien especial que está lejos', 'alguien especial', 'frases', 'que está lejos', 'distancia'],
  ['frases para esposo que está lejos', 'esposo', 'frases', 'que está lejos', 'distancia'],
  ['frases para mamá que está lejos', 'mamá', 'frases', 'que está lejos', 'distancia'],
  ['frases para sobrina que está lejos', 'sobrina', 'frases', 'que está lejos', 'distancia'],
  ['frases para sobrino que está lejos', 'sobrino', 'frases', 'que está lejos', 'distancia'],
  ['frases para un hijo que está lejos', 'hijo', 'frases', 'que está lejos', 'distancia'],
  ['frases para un primo que está lejos', 'primo', 'frases', 'que está lejos', 'distancia'],
  ['frases para una hija que está lejos', 'hija', 'frases', 'que está lejos', 'distancia'],
  ['frases para una tía que está lejos', 'tía', 'frases', 'que está lejos', 'distancia'],
  ['cumpleaños para papá que está lejos', 'papá', 'cumpleaños', 'que está lejos', 'distancia'],
  ['palabras para felicitar a una madre que está lejos', 'mamá', 'palabras', 'que está lejos', 'distancia'],

  // === GRUPO: familia (Familia politica y extendida) ===
  ['felicitaciones para ex-suegra', 'ex-suegra', 'felicitaciones', 'cumpleaños', 'familia'],
  ['feliz cumpleaños abuelita cartas hermosas', 'abuela', 'feliz cumpleaños', 'cartas hermosas', 'familia'],
  ['feliz cumpleaños abuelito', 'abuelo', 'feliz cumpleaños', 'abuelito', 'familia'],
  ['feliz cumpleaños comadre', 'comadre', 'feliz cumpleaños', 'comadre', 'familia'],
  ['feliz cumpleaños compadre', 'compadre', 'feliz cumpleaños', 'compadre', 'familia'],
  ['feliz cumpleaños madrastra', 'madrastra', 'feliz cumpleaños', 'madrastra', 'familia'],
  ['feliz cumpleaños madrina', 'madrina', 'feliz cumpleaños', 'madrina', 'familia'],
  ['feliz cumpleaños padrastro', 'padrastro', 'feliz cumpleaños', 'padrastro', 'familia'],
  ['feliz cumpleaños padrino', 'padrino', 'feliz cumpleaños', 'padrino', 'familia'],
  ['feliz cumpleaños gemelas', 'gemelas', 'feliz cumpleaños', 'gemelas', 'familia'],
  ['feliz cumpleaños para gemelos', 'gemelos', 'feliz cumpleaños', 'gemelos', 'familia'],
  ['feliz cumpleaños para sobrinas gemelas', 'sobrinas gemelas', 'feliz cumpleaños', 'gemelas', 'familia'],
  ['feliz cumpleaños nieta preciosa', 'nieta', 'feliz cumpleaños', 'preciosa', 'familia'],
  ['feliz cumpleaños para mi nieta', 'nieta', 'feliz cumpleaños', 'para mi nieta', 'familia'],
  ['feliz cumpleaños para mi nieto', 'nieto', 'feliz cumpleaños', 'para mi nieto', 'familia'],
  ['feliz cumpleaños para mi nieto precioso', 'nieto', 'feliz cumpleaños', 'precioso', 'familia'],
  ['feliz cumpleaños para hijo adoptivo', 'hijo', 'feliz cumpleaños', 'adoptivo', 'familia'],
  ['feliz cumpleaños para mi hijastra', 'hijastra', 'feliz cumpleaños', 'para mi hijastra', 'familia'],
  ['feliz cumpleaños para mi nuera', 'nuera', 'feliz cumpleaños', 'para mi nuera', 'familia'],
  ['feliz cumpleaños para mi suegro', 'suegro', 'feliz cumpleaños', 'para mi suegro', 'familia'],
  ['feliz cumpleaños para un ahijado', 'ahijado', 'feliz cumpleaños', 'para un ahijado', 'familia'],
  ['feliz cumpleaños para un yerno', 'yerno', 'feliz cumpleaños', 'para un yerno', 'familia'],
  ['feliz cumpleaños para una ahijada', 'ahijada', 'feliz cumpleaños', 'para una ahijada', 'familia'],
  ['feliz cumpleaños prima hermana', 'prima', 'feliz cumpleaños', 'prima hermana', 'familia'],
  ['feliz cumpleaños primo hermano', 'primo', 'feliz cumpleaños', 'primo hermano', 'familia'],
  ['feliz cumpleaños sobrina querida', 'sobrina', 'feliz cumpleaños', 'querida', 'familia'],
  ['feliz cumpleaños sobrino querido', 'sobrino', 'feliz cumpleaños', 'querido', 'familia'],
  ['feliz cumpleaños tía hermosa', 'tía', 'feliz cumpleaños', 'hermosa', 'familia'],
  ['feliz cumpleaños tía querida', 'tía', 'feliz cumpleaños', 'querida', 'familia'],
  ['frases para mi nieta', 'nieta', 'frases', 'para mi nieta', 'familia'],
  ['frases para mi suegra', 'suegra', 'frases', 'para mi suegra', 'familia'],
  ['frases para sobrina pequeña', 'sobrina', 'frases', 'pequeña', 'familia'],
  ['frases para sobrino pequeño', 'sobrino', 'frases', 'pequeño', 'familia'],
  ['frases para un hijastro', 'hijastro', 'frases', 'para un hijastro', 'familia'],
  ['frases para un nieto', 'nieto', 'frases', 'para un nieto', 'familia'],
  ['frases para un primo', 'primo', 'frases', 'para un primo', 'familia'],
  ['frases para un tío', 'tío', 'frases', 'para un tío', 'familia'],
  ['frases para una cuñada', 'cuñada', 'frases', 'para una cuñada', 'familia'],
  ['frases para una tía', 'tía', 'frases', 'para una tía', 'familia'],
  ['cumpleaños de una abuela para su nieto', 'nieto', 'cumpleaños', 'de abuela a nieto', 'familia'],

  // === GRUPO: profesionales (Profesionales, trabajo y escuela) ===
  ['feliz cumpleaños doctor', 'doctor', 'feliz cumpleaños', 'doctor', 'profesionales'],
  ['feliz cumpleaños para doctora', 'doctora', 'feliz cumpleaños', 'doctora', 'profesionales'],
  ['feliz cumpleaños jefe', 'jefe', 'feliz cumpleaños', 'jefe', 'profesionales'],
  ['feliz cumpleaños para mi jefa', 'jefa', 'feliz cumpleaños', 'para mi jefa', 'profesionales'],
  ['feliz cumpleaños maestra', 'maestra', 'feliz cumpleaños', 'maestra', 'profesionales'],
  ['feliz cumpleaños para una profesora muy especial', 'profesora', 'feliz cumpleaños', 'muy especial', 'profesionales'],
  ['feliz cumpleaños profesor', 'profesor', 'feliz cumpleaños', 'profesor', 'profesionales'],
  ['feliz cumpleaños pastor imágenes y palabras', 'pastor', 'feliz cumpleaños', 'pastor', 'profesionales'],
  ['feliz cumpleaños para un compañero de trabajo', 'compañero de trabajo', 'feliz cumpleaños', 'compañero', 'profesionales'],
  ['feliz cumpleaños vecina', 'vecina', 'feliz cumpleaños', 'vecina', 'profesionales'],
  ['frases de feliz cumpleaños para un alumno', 'alumno', 'frases', 'para un alumno', 'profesionales'],

  // === GRUPO: aniversarios (Aniversarios y meses de novios) ===
  ['feliz aniversario mi amor', 'amor', 'feliz aniversario', 'mi amor', 'aniversarios'],
  ['frases de meses de novios con mucho amor', 'novios', 'frases', 'meses de novios', 'aniversarios'],
  ['frases de primer mes de novios', 'novios', 'frases', 'primer mes', 'aniversarios'],
  ['las mejores frases para felicitar a un amigo por aniversario de bodas', 'amigo', 'frases', 'aniversario de bodas', 'aniversarios'],
  ['13 meses de novios', 'novios', 'aniversario', '13 meses', 'aniversarios'],
  ['imágenes y frases de feliz aniversario', 'pareja', 'imágenes y frases', 'feliz aniversario', 'aniversarios'],

  // === GRUPO: especiales (Situaciones especiales, duelo, para mi, mascotas, redes) ===
  ['felicitaciones a madre fallecida', 'mamá en el cielo', 'felicitaciones', 'madre fallecida', 'especiales'],
  ['felicitaciones para una amiga de la infancia', 'amiga', 'felicitaciones', 'infancia', 'especiales'],
  ['feliz cumpleaños bebé', 'bebé', 'feliz cumpleaños', 'bebé', 'especiales'],
  ['feliz cumpleaños hasta el cielo', 'en el cielo', 'feliz cumpleaños', 'hasta el cielo', 'especiales'],
  ['feliz cumpleaños niño', 'niño', 'feliz cumpleaños', 'niño', 'especiales'],
  ['feliz cumpleaños para una niña', 'niña', 'feliz cumpleaños', 'niña', 'especiales'],
  ['feliz cumpleaños para crush', 'crush', 'feliz cumpleaños', 'crush', 'especiales'],
  ['feliz cumpleaños para embarazada', 'embarazada', 'feliz cumpleaños', 'embarazada', 'especiales'],
  ['feliz cumpleaños para facebook', 'facebook', 'feliz cumpleaños', 'para facebook', 'especiales'],
  ['feliz cumpleaños para gatos', 'gatos', 'feliz cumpleaños', 'para gatos', 'especiales'],
  ['cumpleaños para perros', 'perros', 'cumpleaños', 'para perros', 'especiales'],
  ['feliz cumpleaños para mí', 'para mí', 'feliz cumpleaños', 'para mí', 'especiales'],
  ['frases para mi misma', 'para mí', 'frases', 'para mi misma', 'especiales'],
  ['frases por mi cumpleaños', 'para mí', 'frases', 'por mi cumpleaños', 'especiales'],
  ['reflexión para mí', 'para mí', 'reflexión', 'para mí', 'especiales'],
  ['reflexión para mí mismo', 'para mí', 'reflexión', 'para mí mismo', 'especiales'],
  ['frases de agradecimiento', 'general', 'frases', 'agradecimiento', 'especiales'],
  ['frases de agradecimiento para mamá', 'mamá', 'frases', 'agradecimiento', 'especiales'],
  ['frases de agradecimiento por mi graduación', 'graduación', 'frases', 'agradecimiento', 'especiales'],
  ['palabras de agradecimiento', 'general', 'palabras', 'agradecimiento', 'especiales'],
  ['frases para amiga recién conocida', 'amiga', 'frases', 'recién conocida', 'especiales'],
  ['frases para una niña', 'niña', 'frases', 'para una niña', 'especiales'],
  ['frases para una persona fallecida', 'en el cielo', 'frases', 'persona fallecida', 'especiales'],
  ['frases lindas para mi padre fallecido que está en el cielo', 'papá en el cielo', 'frases', 'padre fallecido', 'especiales'],
  ['frases para una hermana fallecida en su cumpleaños', 'hermana en el cielo', 'frases', 'hermana fallecida', 'especiales'],
  ['frases para invitación de cumpleaños', 'invitación', 'frases', 'para invitación', 'especiales'],
  ['frases y cumpleaños para una quinceañera', 'quinceañera', 'frases y cumpleaños', 'quinceañera', 'especiales'],
  ['las 38 mejores frases en inglés traducidas', 'bilingüe', 'frases', 'inglés traducidas', 'especiales']
];

console.log('Hubs existentes:', HUBS_EXISTENTES.length);
console.log('Nuevas categorias definidas:', NUEVAS_CATEGORIAS.length);
console.log('Total:', HUBS_EXISTENTES.length + NUEVAS_CATEGORIAS.length);
if (HUBS_EXISTENTES.length + NUEVAS_CATEGORIAS.length !== 351) {
  throw new Error('Debe haber exactamente 351 categorias! Actual: ' + (HUBS_EXISTENTES.length + NUEVAS_CATEGORIAS.length));
}

// ---------------------------------------------------------------------------
// Ejecucion principal
// ---------------------------------------------------------------------------
const basePath = path.resolve('data/contenido.json');
const catDir = path.resolve('data/categorias');

// Restaurar unicamente los 67 registros originales (5 hubs + 62 mensajes humanos)
const baseRaw = JSON.parse(fs.readFileSync(basePath, 'utf8'));
const baseExistente = baseRaw.slice(0, 67);
if (baseExistente.filter((r) => r.tipo === 'hub').length !== 5 || baseExistente.length !== 67) {
  throw new Error('La base original de data/contenido.json debe tener exactamente 67 registros (5 hubs + 62 mensajes).');
}

const existentesPorArchivo = new Map();
for (const f of fs.readdirSync(catDir).sort()) {
  if (!f.endsWith('.json')) continue;
  if (/^g\d\d-/.test(f)) continue;
  let arr = JSON.parse(fs.readFileSync(path.join(catDir, f), 'utf8'));
  if (f === 'novia.json') {
    arr = arr.map((r) =>
      r.slug === 'hoy-el-festejado-sos-vos-mi-amor'
        ? { ...r, texto: r.texto.replace('Hoy el festejado sos vos', 'Hoy la festejada sos vos') }
        : r
    );
  }
  existentesPorArchivo.set(f, arr);
}

// Trackers globales de unicidad
const usadosSlugs = new Set();
const usadosTitulosNorm = new Set();
const usadosPorDest = new Map();
const usadosKeywords = new Set();
const usadosCabeceras = new Set();
const inicioPorCat = new Map();

function registrarExistente(r) {
  usadosSlugs.add(r.slug);
  if (r.tipo === 'hub') {
    usadosKeywords.add(r.keyword);
    usadosCabeceras.add(`${r.destinatario}\x00${r.cabecera}\x00${r.modificador}`);
    if (!inicioPorCat.has(r.slug)) inicioPorCat.set(r.slug, new Set());
  } else if (r.tipo === 'mensaje') {
    const nt = normalizar(r.titulo);
    const words = nt.split(' ').filter(Boolean);
    usadosTitulosNorm.add(nt);
    if (!usadosPorDest.has(r.destinatario)) usadosPorDest.set(r.destinatario, []);
    usadosPorDest.get(r.destinatario).push({ big: bigramas(nt), wordSet: new Set(words) });
    if (!inicioPorCat.has(r.categoria)) inicioPorCat.set(r.categoria, new Set());
    if (words[0]) inicioPorCat.get(r.categoria).add(words[0]);
  }
}

baseExistente.forEach(registrarExistente);
for (const arr of existentesPorArchivo.values()) arr.forEach(registrarExistente);

// 1) Completar los 4 hubs de contenido.json que tienen 8 mensajes hasta 30 mensajes
const baseActualizado = baseExistente.map((r) => {
  if (r.tipo !== 'hub') return r;
  return { ...r, grupo: 'destinatarios', creado: '2026-11-15', actualizado: '2026-11-15' };
});

let seed = 1;
for (const h of baseActualizado.filter((x) => x.tipo === 'hub')) {
  const actuales = baseActualizado.filter((m) => m.tipo === 'mensaje' && m.categoria === h.slug);
  if (actuales.length < 30) {
    const faltan = 30 - actuales.length;
    h.titulo = h.titulo.replace(/\b8\b/, '30');
    h.meta = h.meta.replace(/\b8\b/, '30');
    h.lead = h.lead.replace(/\b8\b/, '30');
    const nuevos = generarMensajesProfesionales(
      h,
      faltan,
      usadosSlugs,
      usadosTitulosNorm,
      usadosPorDest,
      inicioPorCat.get(h.slug),
      seed++
    );
    baseActualizado.push(...nuevos);
  }
}
fs.writeFileSync(basePath, JSON.stringify(baseActualizado, null, 2));

// Actualizar metadata grupo/fechas en los 5 archivos existentes de data/categorias/
for (const [f, arr] of existentesPorArchivo.entries()) {
  const upd = arr.map((r) => r.tipo === 'hub' ? { ...r, grupo: 'destinatarios', creado: '2026-11-15', actualizado: '2026-11-15' } : r);
  fs.writeFileSync(path.join(catDir, f), JSON.stringify(upd, null, 2));
}

// 2) Construir las 341 nuevas categorias agrupadas en archivos g01..g10
const porGrupo = new Map();
for (let i = 0; i < NUEVAS_CATEGORIAS.length; i++) {
  const [kw, dest, cab, mod, grupo] = NUEVAS_CATEGORIAS[i];
  let slug = slugify(kw);
  if (usadosSlugs.has(slug)) {
    slug = slugify(`${kw}-${grupo}`);
  }
  if (usadosKeywords.has(kw)) {
    throw new Error('Keyword duplicada: ' + kw);
  }
  const cabKey = `${dest}\x00${cab}\x00${mod}`;
  if (usadosCabeceras.has(cabKey)) {
    throw new Error('Cabecera+modificador duplicado: ' + cabKey);
  }
  usadosSlugs.add(slug);
  usadosKeywords.add(kw);
  usadosCabeceras.add(cabKey);

  const hub = construirHubProfesional(kw, dest, cab, mod, grupo, slug, i);
  const pInicio = new Set();
  const msgs = generarMensajesProfesionales(hub, 30, usadosSlugs, usadosTitulosNorm, usadosPorDest, pInicio, 100 + i * 7);

  if (!porGrupo.has(grupo)) porGrupo.set(grupo, []);
  porGrupo.get(grupo).push(hub, ...msgs);
}

const ordenGrupos = ['destinatarios', 'cartas', 'edades', 'cristiano', 'tono', 'distancia', 'familia', 'profesionales', 'aniversarios', 'especiales'];
ordenGrupos.forEach((g, idx) => {
  const lista = porGrupo.get(g) || [];
  const fname = `g${String(idx + 1).padStart(2, '0')}-${g}.json`;
  fs.writeFileSync(path.join(catDir, fname), JSON.stringify(lista));
  console.log(`Escrito ${fname}: ${lista.filter(x => x.tipo === 'hub').length} hubs, ${lista.filter(x => x.tipo === 'mensaje').length} mensajes`);
});

console.log('Generacion profesional completa!');

