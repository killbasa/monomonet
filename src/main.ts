import messages from './assets/messages.json';

const messageString = messages.messages.map((entry) => {
	return `
	<li>
		<p>${entry.author}</p>
		<p>${entry.message}</p>
	</li>
  	`;
});

document.getElementById('message-list')!.innerHTML = messageString.join('');
