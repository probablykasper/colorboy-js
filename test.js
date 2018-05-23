// require("./index.js")();


require("./index.js")
    .addDefaults()
    .addColor("sexy", {
        color: "#2EDFD4",
        bgColor: "red",
        styles: ["bold", "underline"],
    })
    .addColorFunction("shit", (color, bgColor) => {
        return {
            color: color,
            bgColor: bgColor,
        }
    })
console.log("mhmmmm".sexy);
console.log("mhmmmm".shit("#000000", [255,255,0]));

// console.log("color".color());

// console.log(`line1
// line2
// line3`.blue);

// console.log("this is colored".bold.underline.cyan);

// console.log("color".crazy,"boy".lightblue);
