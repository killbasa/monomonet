import { loadBlobs } from './blobs';

export async function setupButtonImage(id: string, prefix: string): Promise<void> {
	const element = document.getElementById(id) as HTMLImageElement | null;
	if (!element) return;

	let imageIndex = 1;
	let interval = 0;

	const blobs = await loadBlobs([
		`/bday2024/ui/${prefix}_button1.png`,
		`/bday2024/ui/${prefix}_button2.png`,
		`/bday2024/ui/${prefix}_button3.png`
	]);

	element.src = blobs[0];

	element.onmouseover = () => {
		element.src = blobs[imageIndex];

		interval = window.setInterval(() => {
			imageIndex += 1;
			if (imageIndex > blobs.length - 1) {
				imageIndex = 1;
			}

			element.src = blobs[imageIndex];
		}, 500);
	};

	element.onmouseout = () => {
		element.src = blobs[0];
		imageIndex = 1;
		window.clearInterval(interval);
	};
}
