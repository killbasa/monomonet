export const setupSounds = () => {
	const button = document.getElementById('cibo-audio-button');
	const sound = document.getElementById('cibo-audio');

	button?.addEventListener('click', () => {
		const newSound = sound?.cloneNode() as HTMLAudioElement;
		newSound.play();
	});
};
