import messages from '../assets/cibos.json';

export function setupMessages() {
	const messageString = messages.data.map((entry) => {
		return `
		<li>
			<p>${entry.author}</p>
			<img width="300px" src="${entry.path}" alt="a cibo" loading="lazy" />
		</li>
		  `;
	});

	document.getElementById('cibo-list')!.innerHTML = messageString.join('');
}
