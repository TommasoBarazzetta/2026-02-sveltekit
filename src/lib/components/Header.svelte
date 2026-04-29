<script>
	import Link from "$lib/components/Link.svelte";
	import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<header class="safe-area">
	<Link title="T-B" ref="/" />
	<ThemeToggle class="theme-toggle" />

	<nav>
		<Link class="nav-link" title="About" ref="https://pudding.cool" />
		<Link
			class="nav-link"
			title="@tommasobarazzettaa"
			ref="https://www.instagram.com/tommasobarazzettaa"
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

	@media (max-width: 480px) {
		header {
			padding-block: var(--size-4);
			gap: var(--size-4);
		}

		.theme-toggle {
			display: none;
		}

		nav {
			margin-left: 0;
			gap: var(--size-3);
		}

		.nav-link {
			font-size: var(--size-3);
		}
	}
</style>
