import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import includePaths from 'rollup-plugin-includepaths';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import stylelint from 'rollup-plugin-stylelint';
import postcssPresetEnv from 'postcss-preset-env';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

const outputs = [
  {
    file: process.env.REACT_APP_PKG_MAIN || pkg.main,
    format: 'iife',
  },
  {
    file: process.env.REACT_APP_PKG_MODULE || pkg.module,
    format: 'es',
  },
];

const postcssPlugins = [
  postcssPresetEnv({
    browsers: pkg.browserslist.production,
    stage: 3,
  }),
  autoprefixer(),
];

const config = [
  // browser-friendly UMD build
  {
    input: 'src/lib/index.js',
    output: {
      name: 'howLongUntilLunch',
      file: pkg.browser,
      format: 'iife',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    plugins: [
      // peerDepsExternal(),
      includePaths({
        include: {},
        paths: ['src'],
        external: Object.keys(pkg.dependencies),
        extensions: ['.js', '.json', '.html'],
      }),
      postcss({
        extract: process.env.REACT_APP_PKG_STYLE || pkg.style,
        inline: false,
        plugins: postcssPlugins,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        configFile: './babel.config.rollup.js',
      }),
      resolve({browser: true}), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        configFile: './babel.config.rollup.js',
      }),
      terser(),
      filesize(),
    ],
  },
];
// const config = outputs.map(({file, format}) => ({
//   input: 'src/lib/index.js',
//   output: {
//     file,
//     format,
//     name: 'ReactCalendarToolkit',
//     globals: {
//       react: 'React',
//       'react-dom': 'ReactDOM',
//       'react-modal': 'ReactModal',
//     },
//     exports: 'named',
//   },
//   plugins: [
//     peerDepsExternal(),
//     includePaths({
//       include: {},
//       paths: ['src'],
//       external: Object.keys(pkg.dependencies),
//       extensions: ['.js', '.json', '.html'],
//     }),
//     // stylelint({
//     //   throwOnError: false,
//     // }),
//     postcss({
//       extract: process.env.REACT_APP_PKG_STYLE || pkg.style,
//       inline: false,
//       plugins: postcssPlugins,
//     }),
//     babel({
//       babelHelpers: 'bundled',
//       // exclude: 'node_modules/**',
//       configFile: './babel.config.rollup.js',
//     }),
//     commonjs({esmExternals: true}),
//     resolve({
//       browser: true,
//     }),
//     terser(),
//     filesize(),
//   ],
// }));

export default config;
