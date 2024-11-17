/// <reference types="vitest" />
// import { readFileSync } from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';


// const packageJson = JSON.parse(
//   readFileSync('./package.json', { encoding: 'utf-8' }),
// )
// const globals = {
//   ...(packageJson?.dependencies || {}),
// }

// function resolve(str: string) {
//   return path.resolve(__dirname, str)
// }
const branch = process.env.branch_name;

export default defineConfig({
  plugins: [
    react(),
    // typescript({
    //   target: 'es5',
    //   rootDir: resolve('packages/'),
    //   declaration: true,
    //   declarationDir: resolve('lib'),
    //   exclude: resolve('node_modules/**'),
    //   allowSyntheticDefaultImports: true,
    // }),
  ],
  build: {
    // 输出文件夹
    // outDir: 'dist',
    outDir: `dist/${branch}`, 
    // lib: {
    //   // 组件库源码的入口文件
    //   entry: resolve('packages/index.tsx'),
    //   // 组件库名称
    //   name: 'land-design',
    //   fileName: (format) => `index.${format}.js`,
    // },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './packages'),
      '@suminhan/land-design': resolve(__dirname, './packages/index'),
    },
  },
  base: 'https://suminhan.cn/land-design/',
})
