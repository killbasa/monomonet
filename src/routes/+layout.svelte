<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/global.css';

	import MetaTags from '$components/MetaTags.svelte';
</script>

<svelte:head>
	<MetaTags
		data={{
			url: 'https://monomonet.com',
			title: 'Mono Monet Fan Website',
			description: "Tabemonos celebrate Mono Monet's birthday in 2024!",
			image: 'https://monomonet.com/ogimage.png'
		}}
	/>
</svelte:head>

<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
</style>
