<script lang="ts">
	import '$lib/styles/reset.scss';
	import '$lib/styles/typography.scss';
	import '$lib/styles/global.scss';

	import MetaTags from '$components/MetaTags.svelte';
	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<MetaTags
		data={{
			url: 'https://monomonet.com',
			title: 'Mono Monet Fansite',
			description: "Tabemonos celebrate Mono Monet's birthday in 2024!",
			image: 'https://monomonet.com/ogimage.png'
		}}
	/>
</svelte:head>

<main>
	<Navbar />
	<div>
		<div>
			<slot />
		</div>
	</div>
	<Footer />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;

		> div {
			display: flex;
			flex-direction: column;
			min-height: 100vh;
			justify-content: space-between;
			padding: 2rem;

			> div {
				margin-left: auto;
				margin-right: auto;
			}
		}
	}
</style>
