// require("./index.js")();

// screenshot1
// require("./index.js").addDefaults();
// console.log("Globgogabgalab".red);
// console.log("Potato chips".cyan.underline.italic);
// console.log("The Eden Project".color("#067CB6").bgColor([25, 25, 150]).bold);

// screenshot2
let currentColor = "red";
require("./index.js")
    .addColor("greenish", {
        color: "#000000",
        bgColor: "#00FE7C",
        style: ["bold", "italic"],
    })
    .addColorFunction("error", (color) => {
        return {
            color: color,
            bgColor: currentColor,
        }
    })
console.log("Unlike Pluto".greenish);
console.log("Unlike Pluto".error("white"));
