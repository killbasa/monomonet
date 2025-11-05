<script lang="ts">
	import type { LayoutProps } from '../anni2025/$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link type="text/css" rel="stylesheet" href="/anni2025/styles.css" />
</svelte:head>

{@render children()}
