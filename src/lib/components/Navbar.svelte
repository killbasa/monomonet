<script lang="ts">
	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'Birthday 2024', path: '/bday2024' }
	];
</script>

<nav>
	<ul>
		{#each links as link, i (i)}
			<a href={link.path}>
				<li>{link.name}</li>
			</a>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: center;
		width: 100%;
		align-items: center;
		padding-left: 2rem;
		padding-right: 2rem;
		overflow: hidden;
		background: linear-gradient(to right, var(--brand-pink), var(--brand-blue));
	}

	ul {
		display: flex;
		flex-direction: row;
		list-style: none;
		margin: 0;
	}

	a {
		display: flex;
		height: 100%;
	}

	a:hover {
		background-color: var(--brand-yellow);
		opacity: 0.85;
	}

	li {
		margin: 1rem 2rem;
		font-size: 12pt;
		font-weight: 500;
	}
</style>
