const { src, dest } = require("gulp");
const sass = require("gulp-sass");

module.exports = styles = () => {
    return src("src/scss/style.scss")
        .pipe(
            sass({
                outputStyle: "compact",
                includePaths: ["node_modules"],
            })
        )
        .pipe(dest("web/assets/css/"));
};
