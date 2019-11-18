const { src, dest } = require("gulp");

module.exports = static = () => {
    return src("static/**/*").pipe(dest("web/"));
};
