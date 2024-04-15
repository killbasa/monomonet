import { loadBlobs } from './blobs';
import { htmlTemplate, randomInt } from './utils';

const audioCache: HTMLAudioElement[] = [];
let lastSmooch = 0;

export const setupSmooches = async () => {
	const button = document.getElementById('cibo-audio-button');

	const urls: string[] = [];
	for (let i = 1; i <= 25; i++) {
		urls.push(`/sounds/smooch${i}.mp3`);
	}

	const blobs = await loadBlobs(urls);
	for (const blob of blobs) {
		const audio = new Audio(blob);
		audioCache.push(audio);
	}

	button?.addEventListener('click', () => {
		let num = randomInt(1, audioCache.length - 1);
		if (num === lastSmooch) {
			num = (num + 1) % audioCache.length;
		}

		lastSmooch = num;
		const audio = audioCache.at(num);

		const clone = audio?.cloneNode() as HTMLAudioElement | undefined;
		clone?.play();
		smooch();
	});
};

function smooch() {
	const element = htmlTemplate(`
	<div class="cibo-kiss" style="position: fixed; z-index: 99;">
		<img src="/images/kiss.svg" height="200" width="200"/>
	</div>`);

	const kiss = element.content.firstElementChild as HTMLDivElement;
	const kissImg = kiss.firstElementChild as HTMLImageElement;

	const scale = randomInt(6, 10) / 10;
	const deg = randomInt(0, 5) * 15;
	const height = Math.floor(parseInt(kissImg.height.toString()) * scale);
	const width = Math.floor(parseInt(kissImg.width.toString()) * scale);

	kiss.style.scale = `${scale}`;
	kiss.style.rotate = `${deg}deg`;
	kiss.style.top = `calc(${randomInt(10, 90)}vh - ${height}px)`;
	kiss.style.left = `calc(${randomInt(10, 90)}vw - ${width}px)`;
	document.body.insertAdjacentElement('beforeend', kiss);

	setTimeout(() => {
		kiss.remove();
	}, 1000);
}
