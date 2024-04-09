import { defineConfig } from 'vite';

export default defineConfig({
	base: '/',
	root: 'src',
	publicDir: '../public',
	build: {
		outDir: '../dist',
		rollupOptions: {
			input: {
				main: 'src/index.html',
				cibos: 'src/cibos.html',
				credits: 'src/credits.html'
			}
		}
	}
});
