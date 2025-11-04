<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div id="container">
	<div style="display: flex">
		<img src="/bday2024/images/cibo_hello.webp" id="cibo-hello" alt="Cibo Hello" />
		<div class="title_hydrangea">
			<!-- svelte-ignore a11y_distracting_elements -->
			<marquee behavior="scroll" direction="left" scrolldelay="0" scrollamount="10">
				<img src="/bday2024/ui/title_cibos.png" width="400px" alt="Cibo hall of fame" />
			</marquee>
		</div>
		<img
			src="/bday2024/images/cibo_hello.webp"
			id="cibo-hello"
			style="transform: scaleX(-1)"
			alt="Cibo Hello"
		/>
	</div>
	<ul style="list-style: none; padding-left: 0">
		{#each data.cibos.data as entry}
			<li class="cibo-message">
				<img loading="lazy" width="400px" src={entry.path} alt="{entry.author}'s cibo" />
				<h2>{entry.author}</h2>
			</li>
		{/each}
	</ul>
</div>
