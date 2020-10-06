import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import webpackStream from 'webpack-stream';

import webpackConfig from '../../webpack.config';

const { entry, output } = webpackConfig;

export const scripts = () =>
    src(entry)
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig))
        .pipe(dest(output.path));
