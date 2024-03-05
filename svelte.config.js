import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			precompress: false,
			strict: true
		}),
		alias: {
			$components: resolve('./src/lib/components'),
			$assets: resolve('./src/assets'),
			$lib: resolve('./src/lib'),
			$routes: resolve('./src/routes')
		}
	}
};

export default config;
