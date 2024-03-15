import './styles.scss';

import messages from './assets/messages.json';

const messageString = messages.messages.map((entry) => {
	return `
  <li>
    <p>${entry.author}</p>
    <p>${entry.message}</p>
  </li>
  `;
});

document.getElementsByTagName('main')[0].innerHTML = `
<div>
  <h1>Happy Birthday Mono!</h1>
  <ul>
    ${messageString.join('')}
  </ul>
</div>
`;
