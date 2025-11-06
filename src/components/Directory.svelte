<script lang="ts">
	import { formatTimestamp } from '$lib/client/utils';
	import type { ResolvedFileItem } from './types';
	import { page } from '$app/state';

	let { files }: { files: ResolvedFileItem[] } = $props();
</script>

<div class="directory-listing">
	<h1>Index of {page.url.pathname}</h1>
	<hr />

	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Last modified</th>
				<th>Size</th>
			</tr>
		</thead>
		<tbody>
			{#each files.filter((f) => !f.hidden) as file}
				<tr>
					<td class="name">
						{#if file.type === 'directory'}
							<span class="icon">📁</span>
						{:else}
							<span class="icon">📄</span>
						{/if}
						<a href={file.href}>
							{file.name}
						</a>
					</td>
					{#if file.type === 'directory'}
						<td class="modified">-</td>
					{:else}
						<td class="modified">{formatTimestamp(file.modified)}</td>
					{/if}
					{#if file.type === 'directory'}
						<td class="size">-</td>
					{:else}
						<td class="size">{file.size}</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
	<hr />
	<div style="display:flex; gap: 0.5rem;">
		this is a fansite -
		<a href="https://github.com/killbasa/monomonet" target="_blank">source code</a>
	</div>
</div>
