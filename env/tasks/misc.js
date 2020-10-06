import { src, dest } from 'gulp';

import { publicDirectory, staticDirectory } from '../config';

export const copy = () =>
    src(`${staticDirectory}/**/*`).pipe(dest(publicDirectory));
