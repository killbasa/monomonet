<script lang="ts">
	import { setupSmooches } from '$assets/bday2024/lib/sounds';
	import { setupButtonImage } from '$assets/bday2024/lib/buttons';
	import { onMount } from 'svelte';
	import type { LayoutProps } from './$types';
	import { resolve } from '$app/paths';

	let { children }: LayoutProps = $props();

	onMount(async () => {
		await Promise.all([
			setupSmooches(),
			setupButtonImage('credits-anchor', 'credits'),
			setupButtonImage('cibos-anchor', 'cibos'),
			setupButtonImage('home-anchor', 'home'),
		]);
	});
</script>

<svelte:head>
	<title>Mono Monet Fansite</title>
	<meta name="description" content="Tabemonos celebrate Mono Monet's birthday!" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://monomonet.com" />
	<meta property="og:title" content="Happy birthday Mono!" />
	<meta property="og:description" content="Tabemonos celebrate Mono Monet's birthday!" />
	<meta property="og:image" content="https://monomonet.com/ogimage.png" />

	<meta name="twitter:title" content="Happy birthday Mono!" />
	<meta name="twitter:description" content="Tabemonos celebrate Mono Monet's birthday!" />
	<meta name="twitter:image" content="https://monomonet.com/ogimage.png" />

	<meta name="theme-color" content="#FFFE72" />
	<link type="text/css" rel="stylesheet" href="/bday2024/styles.css" />
</svelte:head>

<main>
	<div id="sidebar">
		<div style="display: flex; align-items: center">
			<img
				class="spinning-flower-image"
				src="/bday2024/images/spinning_flower.gif"
				width="50px"
				height="50px"
				alt="Spinning flower"
			/>
			<img src="/bday2024/images/monolove.webp" width="150px" alt="Mono love" />
			<img
				class="spinning-flower-image"
				src="/bday2024/images/spinning_flower.gif"
				width="50px"
				height="50px"
				alt="Spinning flower"
			/>
		</div>
		<a href={resolve('/(standalone)/bday2024/index.html.html')}>
			<img id="home-anchor" alt="Home" />
		</a>
		<a href={resolve('/(standalone)/bday2024/cibos.html.html')}>
			<img id="cibos-anchor" alt="Cibo Hall of Fame" />
		</a>
		<a href={resolve('/(standalone)/bday2024/credits.html.html')}>
			<img id="credits-anchor" alt="Credits" />
		</a>
	</div>

	{@render children()}

	<div style="position: fixed; bottom: -10px; right: 0">
		<button
			id="cibo-audio-button"
			style="background: transparent; border: none; cursor: pointer"
		>
			<img src="/bday2024/ui/cibo_peek.png" width="150px" alt="Cibo Peek" />
		</button>
	</div>

	<div id="container">
		<img src="/bday2024/images/parappa.gif" width="100px" alt="Parappa" />
		<div>
			<img src="/bday2024/images/netscape.gif" alt="Netscape" />
			<img src="/bday2024/images/geocities.gif" alt="Geocities" />
		</div>
	</div>
</main>
