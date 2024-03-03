import type { Message } from '$lib/types';
import type { PageLoad } from './$types';
import messages from './data/messages.json' with { type: 'json' };

export const load: PageLoad = async () => {
	const data = messages as unknown as { messages: Message[] };

	return {
		messages: data.messages.sort((a, b) => {
			return new Date(a.time).getTime() - new Date(b.time).getTime();
		})
	};
};
