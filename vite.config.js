import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // @路径配置
  alias: {
    '@': path.resolve(__dirname, 'src'), //'./src',
  },
})
