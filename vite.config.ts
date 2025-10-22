import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  //SHTUAR PER TE TESTUAR APP NE RRJET
  server: {
    host: '0.0.0.0', // gjithe ndërfaqet e rrjetit
    port: 5173, // porta,    
    open: true, // hapet automatikisht në shfletues
  }
})
