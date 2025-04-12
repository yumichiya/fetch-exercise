import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/fetch-exercise/",
  server: {
    cors: {
      // the origin you will be accessing via browser
      origin: 'https://yumichiya.github.io/fetch-exercise/',
    },
  },
})
