import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      screens: {
        'sm': '480px',  // Custom small breakpoint
        'md': '800px',  // Custom medium breakpoint
        'lg': '1024px', // Default large breakpoint
      },
    },
  },
  plugins: [
    react(),
    tailwindcss()],
})
