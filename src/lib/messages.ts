import messages from '../assets/cibos.json';

export function setupMessages() {
	const messageString = messages.data.map((entry) => {
		return `
		<li style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
			<img loading="lazy" width="300px" src="${entry.path}" alt="a cibo"/>
			<h2 style="margin-top: 0;">${entry.author}</h2>
		</li>
		  `;
	});

	document.getElementById('cibo-list')!.innerHTML = messageString.join('');
}
