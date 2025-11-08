<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const tags = {
		title: 'Radio 124 FM',
		description: "24/7 radio for Mono Monet's DJ sets",
		image: 'https://monomonet.com/radio/ogimage.webp',
		url: 'https://monomonet.com/radio',
	};
</script>

<svelte:head>
	<title>{tags.title}</title>
	<meta name="description" content={tags.description} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={tags.url} />
	<meta property="og:title" content={tags.title} />
	<meta property="og:description" content={tags.description} />
	<meta property="og:image" content={tags.image} />

	<meta name="twitter:title" content={tags.title} />
	<meta name="twitter:description" content={tags.description} />
	<meta name="twitter:image" content={tags.image} />

	<link type="text/css" rel="stylesheet" href="/radio/styles.css" />
</svelte:head>

{@render children()}
