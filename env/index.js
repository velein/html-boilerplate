import { parallel, series } from 'gulp';

import { copy } from './tasks/misc';
import { scripts } from './tasks/scripts';
import { serve } from './tasks/serve';
import { styles } from './tasks/styles';
import { templating } from './tasks/templating';

/**
 * Since we are using non-module implementation of gulp every command must
 * be run with `--require @babel/register --gulpfile env` where `--gulpfile X`
 * indicates the path where our commands can be found.
 */

/** Run by `gulp dev` */
export const dev = series(copy, parallel(templating, styles, scripts), serve);

/** Run by `gulp build` */
export const build = series(copy, parallel(templating, styles, scripts));
