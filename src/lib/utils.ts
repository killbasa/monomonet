import { z } from 'zod';

export const MessageSchema = z.object({
	messages: z.array(
		z.object({
			author: z.string(),
			time: z.coerce.date(),
			message: z.string()
		})
	)
});

export function randomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min) + min);
}

export function htmlTemplate(html: string): HTMLTemplateElement {
	const template = document.createElement('template');
	template.innerHTML = html;
	return template;
}
