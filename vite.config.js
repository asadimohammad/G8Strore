import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { lazy } from 'react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
