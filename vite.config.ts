import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescript({
      target: 'es5',
      rootDir: resolve(__dirname, "packages/"),
      declaration: true,
      declarationDir: resolve(__dirname, "dist"),
      exclude: resolve(__dirname, "node_modules/**"),
      allowSyntheticDefaultImports: true,
    })
  ],
  build: {
    outDir: 'dist',
    cssTarget: 'chrome56',
    lib: {
      entry: resolve(__dirname, 'packages/index.tsx'),
      name: 'land-design',
      fileName: (format) => `land-design.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        }
      }
    },
  },
})
