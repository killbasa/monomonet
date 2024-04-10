import messages from '../assets/cibos.json';

export function setupMessages() {
	const messageString = messages.data.map((entry) => {
		return `
		<li class="cibo-message">
			<img loading="lazy" width="300px" src="${entry.path}" alt="a cibo"/>
			<h2>${entry.author}</h2>
		</li>
		  `;
	});

	document.getElementById('cibo-list')!.innerHTML = messageString.join('');
}
