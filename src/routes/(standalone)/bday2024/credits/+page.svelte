<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div id="container">
	<div class="title_hydrangea">
		<!-- svelte-ignore a11y_distracting_elements -->
		<marquee behavior="scroll" direction="left" scrolldelay="0" scrollamount="10">
			<img src="/bday2024/ui/title_credits.png" width="400px" alt="Credits" />
		</marquee>
	</div>
	<div style="display: flex; gap: 8rem">
		<img
			src="/bday2024/images/cibo_sleeping.webp"
			style="margin-bottom: -40px; z-index: 10"
			alt="Sleeping Cibo"
		/>
	</div>
	<div class="text-content">
		<ul style="list-style: none; padding-left: 0">
			<li><b>Website by:</b></li>
			<li>Killbasa</li>
			<li>Kairo</li>
		</ul>
		<ul style="list-style: none; padding-left: 0">
			<li><b>Cibo templates by:</b></li>
			<li>Rubixn00b</li>
			<li>CommandThrow</li>
		</ul>
		<ul id="cibo-credits" style="list-style: none; padding-left: 0">
			<li><b>Submissions by:</b></li>
			{#each data.cibos.data as entry}
				<li>{entry.author}</li>
			{/each}
		</ul>
		<ul style="list-style: none; padding-left: 0">
			<li><b>Source code:</b></li>
			<li>
				<a href="https://github.com/killbasa/monomonet" target="_blank"
					>https://github.com/killbasa/monomonet</a
				>
			</li>
		</ul>
	</div>
</div>
