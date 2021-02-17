let mix = require('laravel-mix');

mix
  .sass('src/app.scss', 'dist/')
  .options({ processCssUrls: false });

// mix
//   .sass('src/app.scss', 'dist/')
//   .sass('src/altrofile.scss', 'dist/');
