# colorboy
Easily add color to your `console.log`s in Node.js.

## Installation
`npm install colorboy`

## Usage:
```js
require("colorboy")();
console.log("this is colored".bright.underline.cyan);
```
Result:
*TBA*


require("colorboy")(ignoreDefaults, customColors);`
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
*TBA*


### require("colorboy")(ignoreDefaults, customColors)
When you initiate colorboy, you can pass two optional arguments to it:
- ignoreDefaults:
- customColors:

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
