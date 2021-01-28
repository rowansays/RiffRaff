// For the scripts
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// For live reload
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

// For the styles
import path from 'path'
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: 'index.js',
    output: {
      file: 'make/script.js',
      format: 'es',
    },
    plugins: [
      nodeResolve(),
      babel({ babelHelpers: 'bundled' }),
      commonjs(),
      serve({
        open: true,
        openPage: '/',
        host: 'localhost',
        port: 3003,
        contentBase: ['./make'],
      }),
      livereload({
        watch: ['./make']
      }),
      postcss({
        extract: path.resolve('make/style.css')
      })
    ]
  }
]
