import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath} from "url";
import {URL} from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ["*", ".js", ".ts", ".jsx", '.tsx', ".json"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  base: '/'
})
