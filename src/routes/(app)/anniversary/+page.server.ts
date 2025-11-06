import { getFileEntries } from '$lib/server/utils';
import type { PageServerLoad } from './$types';
import { resolve } from '$app/paths';

export const load: PageServerLoad = async () => {
	const files = await getFileEntries([
		{
			name: '..',
			type: 'directory',
			href: resolve('/'),
		},
		{
			name: 'radio.html',
			type: 'file',
			path: 'src/routes/(standalone)/radio.html/+page.svelte',
			href: resolve('/(standalone)/radio.html'),
		},
	]);

	return {
		files,
	};
};
