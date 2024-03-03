<script lang="ts">
	export let data: { title: string; description: string; url: string; image: string };
</script>

<title>{data.title}</title>
<meta name="description" content={data.description} />

<meta property="og:type" content="website" />
<meta property="og:url" content={data.url} />
<meta property="og:title" content={data.title} />
<meta property="og:description" content={data.description} />
<meta property="og:image" content={data.image} />

<meta name="twitter:title" content={data.title} />
<meta name="twitter:description" content={data.description} />
<meta name="twitter:image" content={data.image} />
