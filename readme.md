# HTML Boilerplate

Simple bolerplate for markup (HTML, JS & CSS) projects.

### 🚀 Quick start

1. Open project's folder in your terminal
2. Install necessary dependencies, you can do that with following command

```ssh
yarn
```

3. Now you can run the project via

```ssh
yarn start
```

4. Your site is now running at `http://localhost:3000`!

    Note: The BrowserSync's UI is disabled by default. If you would like to use it just go to `env/config/browserSync.config.js` and set ui key to `true`.

### 🔷 Templating HTML files

You can leverage the power of templating system with built-in nunjucks support. Nunjucks allows you to write modular and reusable code and use some cool features such as variables, loops, includes, if expressions and more. The documentation can be found [here](https://mozilla.github.io/nunjucks/templating.nj). The example is located in `src/index.nj`.

#### Built-in custom functions

### asset

Helper which returns full path to pointed asset. Optionally accepts a second parameter
(boolean) which allows to return a file contents instead of file path.

Examples

```
<img src="{{ asset('images/forest.jpeg') }}" alt="Example forests image">
<script src="{{ asset('css/vendors/normalize.css') }}">
{{ asset('icons/lock.svg') | safe }}
```

### 🔧 Browser support

The default brower support is set to `last 2 versions` and can be found in `package.json`. Other available settings can be found [https://github.com/browserslist/browserslist](https://github.com/browserslist/browserslist)

### 🏗 Folder structure

#### Images, SVGs & other static files

These files should be placed in `static` directory.

The static directory will be copied automatically to public directory.

If you want an image to be in `public/assets/images/example-image.jpg` then simply place it in `static/assets/images/example-image.jpg`

#### SCSS

Source files are located in `src/scss/` and will be transpiled and compiled to `public/assets/css/style.css`.

Vendor/third-party files should be placed in static directory, e.g `static/assets/css/vendor/normalize.css`

#### JS

Source files are located in `src/js/` and will be transipled and compiled to `public/assets/js/bundle.js`.

Vendor/third-party files should be placed in `static` directory, e.g `static/assets/js/vendor/slick.min.js`

#### Markup files (HTML)

Source files are located in `src`. Files from `src/*.nj` will be compiled to `public` directory.
