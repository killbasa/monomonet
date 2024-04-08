import { setupButtonImage } from './lib/buttons';
import { setupSmooches } from './lib/sounds';

async function main() {
	await setupSmooches();

	setupButtonImage('credits-anchor', {
		static: '/ui/credits_button.png',
		dynamic: ['/ui/credits_button1.png', '/ui/credits_button2.png']
	});

	setupButtonImage('home-anchor', {
		static: '/ui/home_button.png',
		dynamic: ['/ui/home_button1.png', '/ui/home_button2.png']
	});
}

void main();
