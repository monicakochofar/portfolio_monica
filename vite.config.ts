// import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio_monica/",
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
    ]
  },
})
