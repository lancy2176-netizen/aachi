import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project URLs are case-sensitive: this site is served at /aachi/.
  base: '/aachi/',
})
