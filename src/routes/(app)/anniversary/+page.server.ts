import { getFileEntries } from '$lib/server/utils';
import type { PageServerLoad } from './$types';
import { resolve } from '$app/paths';

export const load: PageServerLoad = async () => {
	const files = await getFileEntries([
		{
			name: '..',
			type: 'parent',
			href: resolve('/'),
		},
		{
			name: 'anniversary_2025.html',
			type: 'file',
			path: 'src/routes/(standalone)/anni2025/index.html/+page.svelte',
			href: resolve('/(standalone)/anni2025/index.html'),
		},
	]);

	return {
		files,
	};
};
