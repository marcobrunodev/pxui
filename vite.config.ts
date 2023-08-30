import { resolve } from 'path'
import { defineConfig, mergeConfig } from 'vite'
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
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          '@storybook/addon-a11y/preview.js',
          '@storybook/addon-actions/preview.js',
          '@storybook/addon-backgrounds/preview.js',
          'babel-plugin-open-source/script.js',
          'chromatic/isChromatic',
          'storybook-dark-mode',
        ],
      },
    });
  },
})
