import { htmlTemplate, randomInt } from './utils';

const audioCache = new Map<number, HTMLAudioElement>();

export const setupSmooches = async () => {
	const button = document.getElementById('cibo-audio-button');

	const promises: Promise<Response>[] = [];
	for (let i = 1; i <= 7; i++) {
		promises.push(fetch(`/sounds/smooch${i}.mp3`));
	}

	const smooches = await Promise.allSettled(promises);
	for (const [i, response] of smooches.entries()) {
		if (response.status === 'fulfilled') {
			const blob = await response.value.blob();
			const audio = new Audio(URL.createObjectURL(blob));

			audioCache.set(i, audio);
		}
	}

	button?.addEventListener('click', () => {
		const num = randomInt(1, audioCache.size);
		const audio = audioCache.get(num);

		const clone = audio?.cloneNode() as HTMLAudioElement | undefined;
		clone?.play();
		smooch();
	});
};

function smooch() {
	const element = htmlTemplate(`
	<div class="cibo-kiss" style="position: fixed;">
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
