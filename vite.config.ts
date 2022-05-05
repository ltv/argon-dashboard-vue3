import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
const { visualizer } = require('rollup-plugin-visualizer')
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const resolvePath = (dir: string) => {
  return path.resolve(__dirname, 'src', dir)
}

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
  ],
  resolve: {
    alias: {
      assets: resolvePath('assets'),
      core: resolvePath('core'),
      store: resolvePath('store'),
      modules: resolvePath('modules'),
      layouts: resolvePath('layouts'),
      router: resolvePath('router'),
      components: resolvePath('components'),
      utils: resolvePath('utils'),
      mixins: resolvePath('mixins'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "assets/css/element/index.scss" as *;`,
      },
    },
  },
  build: {
    rollupOptions: {
      plugins: [visualizer()],
      output: {
        manualChunks(id) {
          if (id.includes('element-plus')) {
            return 'elm'
          }
          if (id.includes('lodash')) {
            return 'lodash'
          }
          if (id.includes('element-plus')) {
            return 'elm'
          }
          if (id.includes('@sentry')) {
            return 'sentry'
          }
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
    sourcemap: true,
  },
  optimizeDeps: {},
})
