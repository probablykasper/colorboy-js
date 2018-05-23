# colorboy
Easily add color to your `console.log`s in Node.js.

## Installation
```console
$ npm install colorboy
```

## Usage
```js
require("colorboy").addDefaults();
console.log("Globgogabgalab".red);
console.log("Potato chips".cyan.underline.italic);
console.log("The Eden Project".color("#067CB6").bgColor([25, 25, 150]).bold);
```
Result:
![screenshot1](https://raw.githubusercontent.com/SpectralKH/colorboy/master/screenshot1.png)


### colorboy.addDefaults()
