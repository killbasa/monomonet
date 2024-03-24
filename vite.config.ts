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
				cibo: 'src/cibo.html',
				messages: 'src/messages.html'
			}
		}
	}
});
