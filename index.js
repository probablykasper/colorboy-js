const chalk = require("chalk");
// console.log(chalk.rgb(255, 136, 0).bold('Orange!'));
// console.log(chalk["bold"]('Orange!'));
// console.log(chalk.rgb(255, 136, 0)("Orange!"));
// console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
// function addColor(name, color1, color2, color3, colorType = "rgb") {
function getColorType(color) {
    if (Array.isArray(color) && color.length == 1) color = color[0];
    if (typeof color == "string") {
        if (color.startsWith("#")) return "hex";
        return "keyword";
    } else if (Array.isArray(color)) {
        if (color.length == 3) return "rgb";
        if (color.length != 4) throw new Error("colorboy: invalid color. Array needs to have 3 or 4 arguments.");
        if (color[3] == "rgb") return "rgb";
        if (color[3] == "hsl") return "hsl";
        if (color[3] == "hsv") return "hsv";
        if (color[3] == "hwb") return "hwb";
        if (color.length != 4) throw new Error("colorboy: invalid color. Color type specified has to be rgb, hsl, hsv or hwb.");
    }
}
function getStyleType(style) {
    switch(style) {
        case "reset":
        case "bold":
        case "dim":
        case "italic":
        case "underline":
        case "inverse":
        case "hidden":
        case "strikethrough":
        case "visible":
            return style;
        default:
            throw new Error("colorboy: invalid style. Must be reset, bold, dim, italic, underline, inverse, hidden, strikethrough or visible.")
    }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function coloration(str, options = {}) {
    let result = chalk;
    const color = options.color;
    const bgColor = options.bgColor;
    const styles = options.styles;
    if (color) {
        const colorType = getColorType(color);
        result = result[colorType](color);
    }
    if (bgColor) {
        const colorType = "bg"+capitalizeFirstLetter(getColorType(bgColor));
        result = result[colorType](bgColor);
        result = result[colorType](bgColor);
    }
    if (styles) {
        if (typeof styles == "string") {
            result = result[getStyleType(styles)];
        } else if (Array.isArray(styles)) {
            for (let i = 0; i < styles.length; i++) {
                result = result[getStyleType(styles[i])];
            }
        } else {
            throw new Error("invalid styles.");
        }
    }
    return result(str);
}
const colorboy = {
    addColorFunction: function(name, getOptionsCallback) {
        Object.defineProperty(global.String.prototype, name, {
            value: function(...args) {
                return coloration(this, getOptionsCallback(...args));
            }
        });
        return colorboy;
    },
    addColor: function(name, options) {
        Object.defineProperty(global.String.prototype, name, {
            get: function() {
                if (typeof options == "function") options = options(this);
                return coloration(this, options);
            }
        });
        return colorboy;
    },
    addDefaults: function() {
        colorboy.addColorFunction("color", function(color, bgColor, ...styles) {
            return {
                color: color,
                bgColor: bgColor,
                styles: styles,
            }
        });
        colorboy.addColorFunction("bgColor", function(color) {
            return {
                bgColor: color,
            };
        });
        colorboy.addColorFunction("style", function(color) {
            return {
                styles: color,
            };
        });
        return colorboy;
    }
}

// console.log(
//     "hey".color("#04FFE8"),
//     "hey".color("black", "white", "bold", "italic", "underline"),
//     "hey".cyan
// );

module.exports = colorboy;
