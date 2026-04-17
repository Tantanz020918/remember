import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages 部署在 https://<user>.github.io/remember/
// base 必须匹配仓库名，否则资源 404
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/remember/' : '/',
  plugins: [react(), tailwindcss()],
})
