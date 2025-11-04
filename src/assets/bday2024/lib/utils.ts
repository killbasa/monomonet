export function randomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min) + min);
}

export function htmlTemplate(html: string): HTMLTemplateElement {
	const template = document.createElement('template');
	template.innerHTML = html;
	return template;
}
