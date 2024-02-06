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
      rootDir: resolve(__dirname, 'src/'),
      declaration: true,
      declarationDir: resolve(__dirname, 'lib'),
      exclude: resolve(__dirname, 'node_modules/**'),
      allowSyntheticDefaultImports: true,
    })
  ],
  build: {
    outDir: 'lib',
    cssTarget: 'chrome61',
    lib: {
      entry: resolve(__dirname, 'index.tsx'),
      name: 'LandDesign',
      formats: ['es'],
      fileName: 'land-design',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, ".")
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }
})
