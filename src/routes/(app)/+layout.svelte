<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link type="text/css" rel="stylesheet" href="/base/styles.css" />
</svelte:head>

<main>
	{@render children()}
</main>
