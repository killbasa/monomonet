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

export function randomInt(min: number, max: number): number {
	return Math.floor(Math.random() * max + min);
}
