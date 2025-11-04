import cibos from '$assets/bday2024/cibos.json' with { type: 'json' };
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		cibos,
	};
};
