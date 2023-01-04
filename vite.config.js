import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    // react(), 
    eslint(),
    viteTsconfigPaths(), 
    svgrPlugin(),
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
  }
})