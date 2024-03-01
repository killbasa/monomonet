<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/global.css';
</script>

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
