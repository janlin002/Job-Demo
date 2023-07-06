import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const config = {
  input: 'index.js', // 進入點
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    globals(),
    builtins(),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ], // 插件
  external: [], // 外部插件
  onwarn(warning, warn) { // 自定義警告
    // do something...
  },
  treeshake: true, // 刪除沒用到的程式碼
  output: { // 輸出檔案
    name: 'bundle', // 全域名稱
    file: 'dist/bundle.js', // 輸出檔案
    format: 'umd', // 輸出格式
    sourcemap: true // 是否產生 sourcemap
  }
}

export default config