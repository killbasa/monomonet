export function setupButtonImage(
	id: string,
	images: {
		static: string;
		dynamic: string[];
	}
) {
	let imageIndex = 0;
	let interval = 0;

	const element = document.getElementById(id) as HTMLImageElement | null;
	if (!element) return;

	element.onmouseover = () => {
		element.src = images.dynamic[imageIndex];

		interval = window.setInterval(() => {
			element.src = images.dynamic[imageIndex];

			if (imageIndex < images.dynamic.length - 1) {
				imageIndex += 1;
			} else {
				imageIndex = 0;
			}
		}, 500);
	};

	element.onmouseout = () => {
		element.src = images.static;
		window.clearInterval(interval);
	};
}
