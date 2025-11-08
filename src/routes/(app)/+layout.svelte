<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const tags = {
		title: 'Mono Monet Fansite',
		description: 'A fansite dedicated to Mono Monet',
		image: 'https://monomonet.com/ogimage.png',
		url: 'https://monomonet.com',
	};
</script>

<svelte:head>
	<title>{tags.title}</title>

	<meta property="og:type" content="website" />
	<meta property="og:url" content={tags.url} />
	<meta property="og:title" content={tags.title} />
	<meta property="og:image" content={tags.image} />

	<meta name="twitter:title" content={tags.title} />
	<meta name="twitter:image" content={tags.image} />

	<link type="text/css" rel="stylesheet" href="/base/styles.css" />
</svelte:head>

<main>
	{@render children()}
</main>
