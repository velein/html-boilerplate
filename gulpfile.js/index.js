const { parallel, series, task } = require('gulp');

const { copy, scripts, serve, styles, templating } = require('./gulpTasks')


/** Run by `gulp dev` */
task('dev', series(copy, parallel(templating, styles, scripts), serve));

/** Run by `gulp build` */
task('build', series(copy, parallel(templating, styles, scripts)));
