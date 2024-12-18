const sharp = require('sharp');

// Ruta de la imagen base
const inputImage = 'img/mapa.jpg';

// Generar imágenes para diferentes resoluciones
sharp(inputImage)
  .resize({ width: 500 }) // 1x DPI
  .toFile('img/mapa-1x.jpg')
  .then(() => console.log('Imagen 1x creada'))
  .catch(err => console.error('Error al crear 1x:', err));

sharp(inputImage)
  .resize({ width: 750 }) // 2x DPI
  .toFile('img/mapa-1-5x.jpg')
  .then(() => console.log('Imagen 1.5x creada'))
  .catch(err => console.error('Error al crear 2x:', err));

sharp(inputImage)
  .resize({ width: 1000 }) // 3x DPI
  .toFile('img/mapa-2x.jpg')
  .then(() => console.log('Imagen 1x creada'))
  .catch(err => console.error('Error al crear 3x:', err));