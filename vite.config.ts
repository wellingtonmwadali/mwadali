import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
    // Specify the output directory for the build artifacts
    outDir: 'dist',
  },
  plugins: [react()],
})
