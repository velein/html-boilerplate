const fs = require("fs");

const asset = (filePath, fileContents = false) => 
    fileContents
        ? fs.readFileSync(`web/assets/${filePath}`)
        : `assets/${filePath}`

module.exports = {
    path: "src/template",
    data: {
        asset
    },
};
