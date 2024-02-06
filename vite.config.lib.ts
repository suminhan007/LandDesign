import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'index.tsx'),
            name: 'land-design',
            fileName: (format) => `index.${format}.js`,
        },
        outDir: 'lib',
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'react',
                    'react-dom': 'ReactDom',
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [
        react(),
        dts({
            root: '../../',
            tsConfigFilePath: resolve(__dirname, './tsconfig.json'),
            compilerOptions: {
                rootDir: resolve(__dirname, '../../'),
            },
            outputDir: resolve(__dirname, './lib'),
            "include": [
                resolve(__dirname, './src'),
                resolve(__dirname, "./index.tsx"),
            ],
            exclude: ['**/node_modules']
        })
    ],
})
