import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: {
		runes: true
	},
	kit: {
		adapter: adapter({
			precompress: false,
			strict: true
		}),
		alias: {
			$assets: resolve('./src/assets'),
			$components: resolve('./src/components'),
			$lib: resolve('./src/lib'),
			$routes: resolve('./src/routes')
		}
	}
};

export default config;
