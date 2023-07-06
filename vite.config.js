import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/neo/",
  plugins: [react()],
  define: {
    'process.env': {
      BASE_URL: "https://api.nasa.gov/neo/rest/v1/feed",
      API_KEY: "PXjG2k4gTiQT1uLnemaLCDAX3RDa7jRbL69WIROx"
    }
  }
})
