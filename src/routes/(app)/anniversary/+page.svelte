<script lang="ts">
	import Directory from '$components/Directory.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Directory files={data.files} />
