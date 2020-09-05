function getColorType(color) {
    if (Array.isArray(color) && color.length === 1) color = color[0];
    if (typeof color === "string") {
        if (color.startsWith("#")) return "hex";
        return "keyword";
    } else if (Array.isArray(color)) {
        if (color.length === 3) return "rgb";
        if (color.length !== 4) throw new Error("colorboy: invalid color. Array needs to have 3 or 4 arguments.");
        if (color[3] === "rgb") return "rgb";
        if (color[3] === "hsl") return "hsl";
        if (color[3] === "hsv") return "hsv";
        if (color[3] === "hwb") return "hwb";
        throw new Error("colorboy: invalid color. Color type specified has to be rgb, hsl, hsv or hwb.");
    }
    throw new Error('colorboy: Unknown color: '+color)
}
function getStyleType(style) {
    switch(style) {
        case "bold":
        case "dim":
        case "italic":
        case "underline":
        case "inverse":
        case "strikethrough":
        case "reset":
        case "hidden":
        case "visible":
            return style;
        default:
            throw new Error("colorboy: invalid style. Must be reset, bold, dim, italic, underline, inverse, hidden, strikethrough or visible.")
    }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const chalk = require("chalk");
function coloration(str, options = {}) {
    let result = chalk;
    let color = options.color;
    const bgColor = options.bgColor;
    const style = options.style;
    if (color) {
        const colorType = getColorType(color);
        if (Array.isArray(color)) {
          result = result[colorType](...color);
        } else {
          result = result[colorType](color);
        }
    }
    if (bgColor) {
        const colorType = "bg"+capitalizeFirstLetter(getColorType(bgColor));
        if (Array.isArray(color)) {
          result = result[colorType](...bgColor);
        } else {
          result = result[colorType](bgColor);
        }
    }
    if (style) {
        if (typeof style === "string") {
            result = result[getStyleType(style)];
        } else if (Array.isArray(style)) {
            for (let i = 0; i < style.length; i++) {
                result = result[getStyleType(style[i])];
            }
        } else {
            throw new Error("invalid style.");
        }
    }
    return result(str);
}
const colorboy = {
    addColorFunction: (name, optionsCallback) => {
        Object.defineProperty(global.String.prototype, name, {
            value: function(...args) {
                return coloration(this, optionsCallback(...args));
            }
        });
        return colorboy;
    },
    addColor: (name, options) => {
        Object.defineProperty(global.String.prototype, name, {
            get: function() {
                if (typeof options === "function") options = options(this);
                return coloration(this, options);
            }
        });
        return colorboy;
    },
    addDefaults: (functions = true, colors = true, styles = true) => {
        if (functions) {
            colorboy.addColorFunction("color", (color, bgColor, ...styles) => {
              if ( typeof  color  === 'number'&& typeof bgColor === 'number'&& typeof styles[0] === 'number') {
                if (styles[1]) {
                  return { color: [color, bgColor, styles[0], styles[1]] }
                } else {
                  return { color: [color, bgColor, styles[0]] }
                }
              } else return {
                color: color,
                bgColor: bgColor,
                style: styles,
              }
            });
            colorboy.addColorFunction("bgColor", (...args) => {
              if (args.length === 1) {
                return { bgColor: args[0] }
              } else {
                return { bgColor: args }
              }
            });
            colorboy.addColorFunction("style", (color) => ({style:color}));
        }
        if (colors) {
            colorboy.addColor("red", {color:"red"});
            colorboy.addColor("black", {color:"black"});
            colorboy.addColor("green", {color:"green"});
            colorboy.addColor("yellow", {color:"yellow"});
            colorboy.addColor("blue", {color:"blue"});
            colorboy.addColor("pink", {color:"magenta"});
            colorboy.addColor("cyan", {color:"cyan"});
            colorboy.addColor("white", {color:"white"});
            colorboy.addColor("gray", {color:"gray"});
        }
        if (styles) {
            colorboy.addColor("bold", {style:"bold"});
            colorboy.addColor("dim", {style:"dim"});
            colorboy.addColor("italic", {style:"italic"});
            colorboy.addColor("underline", {style:"underline"});
            colorboy.addColor("inverse", {style:"inverse"});
            colorboy.addColor("strikethrough", {style:"strikethrough"});
        }
        return colorboy;
    }
}

module.exports = colorboy;
