<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>Radio 114 FM</title>

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://monomonet.com/radio.html" />
	<meta property="og:title" content="Radio 114 FM" />
	<meta property="og:description" content="Mono Monet's DJ sets" />
	<meta property="og:image" content="https://monomonet.com/radio/ogimage.webp" />

	<meta name="twitter:title" content="Radio 114 FM" />
	<meta name="twitter:description" content="Mono Monet's DJ sets" />
	<meta name="twitter:image" content="https://monomonet.com/radio/ogimage.webp" />

	<meta name="theme-color" content="#FFFE72" />

	<link type="text/css" rel="stylesheet" href="/radio/styles.css" />
</svelte:head>

{@render children()}
