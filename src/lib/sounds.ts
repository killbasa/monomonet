import { htmlTemplate, randomInt } from './utils';

export const setupSounds = () => {
	const button = document.getElementById('cibo-audio-button');
	const sound = document.getElementById('cibo-audio') as HTMLAudioElement;

	const soundURL = new URL('/sounds/yippee.mp3', import.meta.url);
	sound.src = soundURL.href;

	button?.addEventListener('click', () => {
		smooch();

		const newSound = sound?.cloneNode() as HTMLAudioElement;
		newSound.play();
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
