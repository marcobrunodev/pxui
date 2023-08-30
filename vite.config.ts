import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PXUI',
      fileName: 'pxui'
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    }
  }
})
