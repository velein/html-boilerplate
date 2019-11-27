const fs = require("fs");

const imageSrc = name => `assets/images/${name}`;
const svg = name => fs.readFileSync(`web/assets/icons/${name}.svg`);
const svgSrc = name => `assets/icons/${name}.svg`;

module.exports = {
    path: "src/template",
    data: {
        imageSrc,
        svg,
        svgSrc,
    },
};
