const browserSync = require("browser-sync");
const requireDir = require("require-dir");
const { watch } = require("gulp");

const { styles, scripts, static, markup } = requireDir("./");
const browserSyncConfig = require("../config/browserSync.config");

module.exports = serve = () => {
    browserSync.init(browserSyncConfig);

    watch("src/scss/**/*.scss", styles);
    watch("src/**/*", markup);
    watch("src/js/**/*.js", scripts);
    watch("static/**/*", static);
};
