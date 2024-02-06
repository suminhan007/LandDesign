import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import typescript from '@rollup/plugin-typescript'

function resolve(str: string) {
  return path.resolve(__dirname, str);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescript({
      target: 'es6',
      rootDir: resolve('packages/'),
      declaration: true,
      declarationDir: resolve('dist'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
    })
  ],
  build: {
    outDir: 'dist',
    cssTarget: 'chrome61',
    lib: {
      entry: resolve('packages/index.tsx'),
      name: 'LandDesign',
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
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }
})
