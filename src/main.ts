import { setupButtonImage } from './lib/buttons';
import { setupSmooches } from './lib/sounds';

async function main() {
	await Promise.all([
		setupSmooches(),
		setupButtonImage('credits-anchor', 'credits'),
		setupButtonImage('cibos-anchor', 'cibos'),
		setupButtonImage('home-anchor', 'home')
	]);
}

void main();
