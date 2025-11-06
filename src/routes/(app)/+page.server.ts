import { getFileEntries } from '$lib/server/utils';
import type { PageServerLoad } from './$types';
import { resolve } from '$app/paths';

export const load: PageServerLoad = async () => {
	const files = await getFileEntries([
		{
			name: 'birthday',
			type: 'directory',
			href: resolve('/(app)/birthday'),
		},
		{
			name: 'anniversary',
			type: 'directory',
			href: resolve('/(app)/anniversary'),
		},
	]);

	return {
		files,
	};
};
