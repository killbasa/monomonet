import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export const alias = {
	$assets: resolve('./src/assets'),
	$components: resolve('./src/components'),
	$lib: resolve('./src/lib'),
	$routes: resolve('./src/routes'),
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: {
		runes: true,
	},
	kit: {
		adapter: adapter({
			precompress: false,
			strict: true,
		}),
		output: {
			preloadStrategy: 'modulepreload',
			bundleStrategy: 'single',
		},
		alias,
	},
};

export default config;
