import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        'arial-nova': ['"Arial Nova"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})