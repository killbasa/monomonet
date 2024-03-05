import { MessageSchema } from '$lib/utils';
import type { PageLoad } from './$types';
import messages from '$assets/bday2024/messages.json' with { type: 'json' };

export const load: PageLoad = async () => {
	const data = MessageSchema.parse(messages);

	return {
		messages: data.messages.sort((a, b) => {
			return a.time.getTime() - b.time.getTime();
		})
	};
};
