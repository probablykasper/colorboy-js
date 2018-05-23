// require("./index.js")();

require("./index.js")
    .addDefaults()
    .addColor("sexy", {
        color: "#000000",
        bgColor: "#00FE7C",
        styles: ["bold", "underline"],
    })
    .addColorFunction("shit", (color, bgColor) => {
        return {
            color: color,
            bgColor: bgColor,
        }
    })

console.log(`line1
line2
line3`.color("#0066FF", null));

console.log("Globgogabgalab".red);
console.log("Potato chips".cyan.underline.italic);
console.log("The Eden Project".color("#067CB6").bgColor([25, 25, 150]).bold);
