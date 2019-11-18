const requireDir = require("require-dir");
const { task, series, parallel } = require("gulp");

const { styles, scripts, static, markup, serve } = requireDir("./env/tasks/");

task("default", series(static, parallel(markup, styles, scripts), serve));
task("build", series(static, parallel(markup, styles, scripts)));
