<script lang="ts">
	import Player from './Player.svelte';
	import { onMount } from 'svelte';

	let id = 0;
	let showCredits = $state(false);
	const flopmonos = new Map<number, HTMLImageElement>();

	function toggleCredits() {
		showCredits = !showCredits;
	}

	function createFlyingMono() {
		const img = document.createElement('img');
		img.src = '/radio/flopmono.png';
		img.className = 'flying-mono';

		const side = Math.floor(Math.random() * 4);
		const clockwise = Math.random() < 0.5;

		const duration = 3 + Math.random() * 4; // 3-7 seconds
		const delay = duration * 1000;

		let startX: number;
		let startY: number;
		let endX: number;
		let endY: number;

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
			default: // left
				startX = -100;
				startY = Math.random() * window.innerHeight;
				endX = window.innerWidth + 100;
				endY = Math.random() * window.innerHeight;
				break;
		}

		img.style.setProperty('--start-x', `${startX}px`);
		img.style.setProperty('--start-y', `${startY}px`);
		img.style.setProperty('--end-x', `${endX}px`);
		img.style.setProperty('--end-y', `${endY}px`);
		img.style.setProperty('--spin-dir', clockwise ? 'fly-cw' : 'fly-ccw');
		img.style.animationDuration = `${duration}s`;

		const index = id++;
		flopmonos.set(index, img);
		document.body.appendChild(img);

		// Sometimes it flashes in the corner, so fade it before
		setTimeout(() => {
			img.style.opacity = '0';
		}, delay - 50);

		setTimeout(() => {
			flopmonos.delete(index);
			img.remove();
		}, delay);
	}

	function createJumpingMono() {
		const img = document.createElement('img');
		img.src = '/radio/flopmono.png';
		img.className = 'jumping-mono';

		const clockwise = Math.random() < 0.5;

		img.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
		img.style.setProperty('--start-rotation', `${Math.random() * 360}deg`);
		img.style.setProperty('--direction', clockwise ? '90deg' : '-90deg');
		img.style.setProperty('--jump-height', `-${10 + Math.random() * 20}vh`);

		const index = id++;
		flopmonos.set(index, img);
		document.body.appendChild(img);

		setTimeout(() => {
			flopmonos.delete(index);
			img.remove();
		}, 1000);
	}

	function explode() {
		for (let i = 0; i < 10; i++) createFlyingMono();
	}

	function onBeat() {
		for (let i = 0; i < 3; i++) createJumpingMono();

		// console.log('Beat detected');
	}

	onMount(() => {
		const interval = setInterval(
			() => createFlyingMono(),
			2000 + Math.random() * 3000, // every 2-5 seconds
		);

		return () => {
			clearInterval(interval);
			for (const flopper of flopmonos.values()) {
				flopper.remove();
			}
		};
	});
</script>

<div class="container" style="position: relative;">
	<div class="card" style="position: absolute; top: 1rem; left: 1rem;">
		<div style="display: flex; gap: 0.5rem;">
			<a href="/">home</a>
			<a href="https://www.youtube.com/@monomonet" target="_blank">mono's channel</a>
		</div>
	</div>

	<div class="card">
		<Player src="https://azura.killbasa.com" station="monomonet" onbeat={onBeat} />

		<div style="display: flex; gap: 0.5rem; padding-top: 1rem;">
			<button class="btn" onclick={createFlyingMono}>flop</button>
			<button class="btn" onclick={explode}>explode</button>
			<button class="btn" onclick={toggleCredits}>credits</button>
		</div>
	</div>

	{#if showCredits}
		<div class="card" style="position: absolute; top: 1rem; right: 1rem; width: 300px;">
			<h2 style="margin: 0;">credits</h2>

			<p>happy 2 year anniversary mono :&rpar;</p>

			<div>
				<p style="margin-bottom: 0;">made by:</p>
				<ul style="padding-left: 1rem; margin-top: 0;">
					<li>killbasa</li>
					<li>sakanaa</li>
				</ul>
			</div>

			<a href="https://github.com/killbasa/monomonet" target="_blank">source code</a>
		</div>
	{/if}
</div>
