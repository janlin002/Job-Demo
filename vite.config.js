import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import eslint from 'vite-plugin-eslint'
import reactRefresh from '@vitejs/plugin-react-refresh'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const { resolve } = require('path')

export default defineConfig({
  plugins: [
    // react(), 
    reactRefresh(),
    eslint(),
    viteTsconfigPaths(), 
    svgrPlugin(),
    // new BundleAnalyzerPlugin(),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    }) 
  ],
  server: {
    host: '0.0.0.0',
    open: '/index.html'
  },
  resolve: {
    alias: {
      'Demo': resolve(__dirname, 'src/Demo'),
    }
  },
})