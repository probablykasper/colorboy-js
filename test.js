let currentBgColor = 'red';

require('./index.js')
  .addDefaults()
  .addColor('greenish', {
    color: '#000000',
    bgColor: '#00FE7C',
    style: ['bold', 'italic'],
  })
  .addColorFunction('error', (color) => {
    return {
      color: color,
      bgColor: currentBgColor,
    }
  })

console.log('Custom:\n');
console.log('Unlike Pluto'.greenish);
console.log('Unlike Pluto'.error('white'));
currentBgColor = 'cyan'
console.log('Unlike Pluto'.error('black'));

console.log('\nDefaults:\n');
console.log('cyan underline italic'.cyan.underline.italic);
console.log('color() keyword'.color('pink'));
console.log('color() hex'.color('#bc5bd2'));
console.log('color() rgb default'.color(188, 91, 210));
console.log('color() rgb'.color(188, 91, 210, 'rgb'));
console.log('color() hsl'.color(289, 57, 59, 'hsl'));
console.log('color() hwb'.color(289, 36, 18, 'hwb'));
console.log('bgColor() hex'.bgColor('#bc5bd2'));
console.log('bgColor() hsl'.bgColor(289, 57, 59, 'hsl'));
