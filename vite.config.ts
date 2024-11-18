import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://medium.com/@vitor.vicen.te/setting-up-path-aliases-in-a-vite-typescript-react-project-the-ultimate-way-d2a9a8ff7c63
import tsconfigPaths from "vite-tsconfig-paths";

// https://dev.to/bhendi/turn-your-react-vite-app-into-a-pwa-3lpg

// https://vite.dev/config/
export default defineConfig({
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
  },
  base: '/',
  plugins: [
    react(),
    tsconfigPaths()
  ],
})
