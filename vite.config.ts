import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ser-unidad', // Cambia 'nombre-repo' por el nombre de tu repositorio
  plugins: [react()],
})
