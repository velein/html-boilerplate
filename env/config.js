/**
 * Directory where every transpilled file will be moved to, starting point
 * of BrowserSync.
 *
 * @default public
 * @type {string}
 */
export const publicDirectory = 'public';

/**
 * Directory where you keep every source file that should be transpiled.
 *
 * @default src
 * @type {string}
 */
export const sourceDirectory = 'src';

/**
 * Directory where you keep files that should be moved into public directory
 * without transpilation. For example third-party scripts which are already
 * minified etc. File structure inside `static directory` will be reflected
 * in `public directory`
 *
 * @default static
 * @type {string}
 */
export const staticDirectory = 'static';
