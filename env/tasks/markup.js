const nunjucksRender = require("gulp-nunjucks-render");
const { src, dest } = require("gulp");
const nunjucksConfig = require("../config/markup.config");
const beautify = require("gulp-beautify");

module.exports = nunjucks = () => {
    return src("src/*.+(nj|njk|nunjucks|html)")
        .pipe(nunjucksRender(nunjucksConfig))
        .pipe(beautify.html({ indent_size: 4 }))
        .pipe(dest("web"));
};
