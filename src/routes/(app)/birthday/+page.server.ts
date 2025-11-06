import { getFileEntries } from '$lib/server/utils';
import type { PageServerLoad } from './$types';
import { resolve } from '$app/paths';

export const load: PageServerLoad = async () => {
	const files = await getFileEntries([
		{
			name: '../',
			type: 'directory',
			href: resolve('/'),
		},
		{
			name: 'birthday_2024.html',
			type: 'file',
			path: 'src/routes/(standalone)/bday2024/+page.svelte',
			href: resolve('/(standalone)/bday2024'),
		},
	]);

	return {
		files,
	};
};
