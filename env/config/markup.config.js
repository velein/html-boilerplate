const fs = require("fs");

const imageSrc = name => `assets/images/${name}`;
const svg = name => fs.readFileSync(`web/assets/icons/${name}.svg`);
const svgSrc = name => `assets/icons/${name}.svg`;
const slugify = string =>
    string
        .toLowerCase()
        .split(" ")
        .join("-");

module.exports = {
    path: "src/partials",
    data: {
        imageSrc,
        svg,
        svgSrc,
        slugify,
    },
};
