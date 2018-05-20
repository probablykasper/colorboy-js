# colorboy
Easily add color to your `console.log`s in Node.js.

## Installation
`npm install colorboy`

## Usage
#### Usage example
```js
require("colorboy")();
console.log("this is colored".bright.underline.cyan);
```
Result:

![screenshot1](https://raw.githubusercontent.com/SpectralKH/colorboy/master/screenshot1.png)


#### require("colorboy")(ignoreDefaults, customColors)
When you initiate colorboy, you can pass two arguments to it:
- ignoreDefaults: Optional. Defaults to `false`. Set it to true to disable all the default colors.
- customColors: Optional. Lets you add custom colors. See the example below.


```js
require("colorboy")(true, [
    ["crazy", "\x1b[4m\x1b[35m\x1b[1m"],
    ["lightblue", "\x1b[1m\x1b[34m"],
]);
console.log("color".crazy,"boy".crazy);
```
Result:

![screenshot2](https://raw.githubusercontent.com/SpectralKH/colorboy/master/screenshot2.png)

## Colors & styles

#### Text colors
- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white

#### Background colors
- blackBG
- redBG
- greenBG
- yellowBG
- blueBG
- magentaBG
- cyanBG
- whiteBG

#### Styles
- bright
- dim
- underscore
- blink
- reverse
- hidden
