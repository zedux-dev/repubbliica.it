import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const oneYearInSeconds = 60 * 60 * 24 * 365;

export default defineConfig({
    plugins: [
        vue()
    ],
    server: {
        // https: true,
        // headers: {
        //     'Strict-Transport-Security': `max-age=${oneYearInSeconds}`
        // },
    },
    build: {
        outDir: '/Applications/XAMPP/xamppfiles/htdocs'
    }
})