import messages from '../assets/cibos.json';

export function setupCibos(id: string) {
	const element = document.getElementById(id);
	if (element === null) return;

	const messageString = messages.data.map((entry) => {
		return `
		<li class="cibo-message">
      		<img loading="lazy" width="400px" src="${entry.path}" alt="${entry.author}'s cibo"/>
			<h2>${entry.author}</h2>
		</li>
		  `;
	});

	element.innerHTML = messageString.join('');
}

export function setupCredits(id: string) {
	const element = document.getElementById(id);
	if (element === null) return;

	const creditsArr = ['<li><b>Submissions by:</b></li>'];
	for (const credit of messages.data) {
		creditsArr.push(`<li>${credit.author}</li>`);
	}

	element.innerHTML = creditsArr.join('');
}

setupCibos('cibo-list');
setupCredits('cibo-credits');
