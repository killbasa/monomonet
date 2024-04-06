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
				credits: 'src/credits.html'
			}
		}
	}
});
