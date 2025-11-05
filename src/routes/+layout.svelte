<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>Mono Monet Fansite</title>

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://monomonet.com" />
	<meta property="og:title" content="Mono Monet Fansite" />
	<meta property="og:image" content="https://monomonet.com/ogimage.png" />

	<meta name="twitter:title" content="Mono Monet Fansite" />
	<meta name="twitter:image" content="https://monomonet.com/ogimage.png" />

	<meta name="theme-color" content="#FFFE72" />
</svelte:head>

{@render children()}
