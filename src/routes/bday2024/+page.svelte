<script lang="ts">
	import MessageCard from '$components/MessageCard.svelte';
	import MetaTags from '$components/MetaTags.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<MetaTags
		data={{
			url: 'https://monomonet.com/bday2024',
			title: 'Mono Monet Birthday 2024',
			description: "Tabemonos celebrate Mono Monet's birthday in 2024!",
			image: 'https://monomonet.com/ogimage.png'
		}}
	/>
</svelte:head>

<section>
	<header>
		<h1>Mono Monet Birthday 2024</h1>
	</header>
	<div class="card-container">
		{#each data.messages as message, i (i)}
			<MessageCard data={message} />
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: center;
		padding: 2rem 1rem;
		gap: 2rem;
	}

	@media only screen and (max-width: 640px) {
		.card-container {
			display: flex;
			flex-direction: column;
		}
	}

	@media only screen and (max-width: 1280px) {
		.card-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
