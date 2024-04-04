export const setupSounds = () => {
	const button = document.getElementById('cibo-audio-button');
	const sound = document.getElementById('cibo-audio') as HTMLAudioElement;

	const soundURL = new URL('/sounds/yippee.mp3', import.meta.url);
	sound.src = soundURL.href;

	button?.addEventListener('click', () => {
		const newSound = sound?.cloneNode() as HTMLAudioElement;
		newSound.play();
	});
};
