import { defineConfig } from 'vite';
import {fileURLToPath, URL} from 'url';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template:{
      compilerOptions:{
        isCustomElement: (tag) => tag.startsWith("ArticlePreview"),
      },
    },
  })],
  resolve:{
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
