require("./index.js")(false, [
    ["crazy", "\x1b[4m\x1b[35m\x1b[1m"],
    ["lightblue", "\x1b[1m\x1b[34m"],
]);
console.log(`line1
line2
line3`.blue);

console.log("this is colored".bold.underline.cyan);

console.log("color".crazy,"boy".lightblue);
