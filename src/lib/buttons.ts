import { loadBlobs } from './blobs';

export async function setupButtonImage(id: string, prefix: string) {
	const element = document.getElementById(id) as HTMLImageElement | null;
	if (!element) return;

	let imageIndex = 1;
	let interval = 0;
	const blobs = await loadBlobs([
		`/ui/${prefix}_button1.png`,
		`/ui/${prefix}_button2.png`,
		`/ui/${prefix}_button3.png`
	]);

	element.onmouseover = () => {
		element.src = blobs[imageIndex];

		interval = window.setInterval(() => {
			if (imageIndex < blobs.length - 1) {
				imageIndex += 1;
			} else {
				imageIndex = 1;
			}

			element.src = blobs[imageIndex];
		}, 500);
	};

	element.onmouseout = () => {
		element.src = blobs[0];
		window.clearInterval(interval);
	};
}
