const sharp = require('sharp');
const fs = require('fs');
const directory = './assets';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(200, 100, {
      fit: 'contain',
      background: 'transparent'
    }) // width, height, object fit
    .toFile(`${directory}/${file.replace('.png', '')}-small.png`);
  });