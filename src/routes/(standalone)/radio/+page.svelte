<script lang="ts">
	import Player from './Player.svelte';
	import { onMount } from 'svelte';

	function createFlyingMono() {
		const img = document.createElement('img');
		img.src = '/radio/flopmono.png';
		img.className = 'flying-mono';

		const side = Math.floor(Math.random() * 4);
		let startX, startY, endX, endY;

		switch (side) {
			case 0: // top
				startX = Math.random() * window.innerWidth;
				startY = -100;
				endX = Math.random() * window.innerWidth;
				endY = window.innerHeight + 100;
				break;
			case 1: // right
				startX = window.innerWidth + 100;
				startY = Math.random() * window.innerHeight;
				endX = -100;
				endY = Math.random() * window.innerHeight;
				break;
			case 2: // bottom
				startX = Math.random() * window.innerWidth;
				startY = window.innerHeight + 100;
				endX = Math.random() * window.innerWidth;
				endY = -100;
				break;
			case 3: // left
				startX = -100;
				startY = Math.random() * window.innerHeight;
				endX = window.innerWidth + 100;
				endY = Math.random() * window.innerHeight;
				break;
		}

		img.style.left = '0px';
		img.style.top = '0px';
		img.style.setProperty('--start-x', `${startX}px`);
		img.style.setProperty('--start-y', `${startY}px`);
		img.style.setProperty('--end-x', `${endX}px`);
		img.style.setProperty('--end-y', `${endY}px`);

		const duration = 3 + Math.random() * 4; // 3-7 seconds
		img.style.animationDuration = `${duration}s`;

		document.body.appendChild(img);

		setTimeout(() => img.remove(), duration * 1000);
	}

	function createJumpingMono() {
		const img = document.createElement('img');
		img.src = '/radio/flopmono.png';
		img.className = 'jumping-mono';

		img.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
		img.style.setProperty('--start-rotation', `${Math.random() * 360}deg`);
		img.style.setProperty('--jump-height', `-${10 + Math.random() * 20}vh`);

		document.body.appendChild(img);

		setTimeout(() => img.remove(), 1000);
	}

	function onBeat() {
		for (let i = 0; i < 3; i++) createJumpingMono();

		console.log('Beat detected');
	}

	onMount(() => {
		const interval = setInterval(
			() => {
				createFlyingMono();
			},
			2000 + Math.random() * 3000,
		); // every 2-5 seconds

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="container">
	<div class="card">
		<!--
		<iframe
			title="Mono Monet Radio"
			src="https://azura.killbasa.com/public/monomonet/embed?theme=dark"
			frameborder="0"
			allowtransparency={true}
			style="width: 100%; min-height: 150px; border: 0;"
		></iframe>
		-->

		<Player src="https://azura.killbasa.com" station="monomonet" onbeat={onBeat} />

		<div style="display: flex; gap: 0.5rem;">
			<a href="/">home</a>
			<a href="https://www.youtube.com/@monomonet" target="_blank">mono's channel</a>
			<a href="https://github.com/killbasa/monomonet" target="_blank">source code</a>
		</div>
		<button style="margin-top: 0.5rem;" onclick={createFlyingMono}>flop</button>
	</div>
</div>
