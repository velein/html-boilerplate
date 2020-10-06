import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';

import { publicDirectory, staticDirectory } from '../config';

export const copy = () =>
    src(`${staticDirectory}/**/*`).pipe(plumber()).pipe(dest(publicDirectory));
