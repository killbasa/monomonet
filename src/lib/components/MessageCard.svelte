<script lang="ts">
	import type { Message } from '$lib/types';
	import { randomInt } from '$lib/utils';

	export let data: Message;

	const rand = randomInt(1, 3);
</script>

<div class="card card-variant-{rand}">
	<header class="card-author">
		{data.author}
	</header>
	<p class="card-text">
		{data.message}
	</p>
	<div class="card-tabemono"></div>
</div>

<style lang="scss">
	.card {
		background: var(--brand-purple);
		position: relative;
		padding: 0px 10px 0 10px;
		min-height: 100px;
		width: 100%;
		max-width: 512px;
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.25);
		background-repeat: repeat-y;
		background-size: contain;

		.card-author {
			color: var(--color-text);
			font-weight: bold;
			margin: 8px 0;
			font-size: large;
		}

		.card-text {
			white-space: pre-line;
			font-weight: bold;
			padding: 5px 10px;
			background-color: rgba(255, 255, 255, 0.75);
			border-radius: 4px;
			position: relative;
			color: var(--color-text);
		}

		.card-tabemono {
			width: 100px;
			height: 67px;
			position: absolute;
			top: -30px;
			right: 15px;
			background-size: contain;
		}
		&.card-variant-1 {
			.card-tabemono {
				background-image: url('$assets/bday2024/images/CiboPeek.png');
			}
		}
		&.card-variant-2 {
			.card-tabemono {
				background-image: url('$assets/bday2024/images/CiboPeek.png');
			}
		}
		&.card-variant-3 {
			.card-tabemono {
				background-image: url('$assets/bday2024/images/CiboPeek.png');
			}
		}
	}
</style>
