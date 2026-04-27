<script>
	import Link from "$lib/components/Link.svelte";
	import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<header class="safe-area">
	<Link title="W–D" ref="/" />
	<ThemeToggle />

	<nav>
		<Link title="About" ref="/about" />
		<Link
			title="@webdesign_ddc"
			ref="https://www.instagram.com/webdesign_ddc"
		/>
	</nav>
</header>

<style>
	header {
		padding-block: var(--size-6);

		display: flex;
		gap: var(--size-8);
		align-items: center;
	}

	nav {
		display: flex;
		gap: var(--size-6);
		align-items: center;
		margin-left: auto;
	}
</style>
