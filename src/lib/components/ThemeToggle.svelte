<script>
	import { theme } from '$lib/stores.js';
	import Icon from '$lib/components/Icon.svelte';

	let { class: className } = $props();

	function toggleTheme() {
		theme.set($theme === 'light' ? 'dark' : 'light');
	}
</script>

<button class={className} onclick={toggleTheme} aria-label="Toggle theme">
	<Icon name={$theme === 'light' ? 'moon' : 'sun'} />
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		gap: var(--size-1);

		color: var(--color-ink);
		background: none;
		border: none;
		cursor: pointer;

		transition: color 0.75s var(--ease-out-quart);

		&:hover {
			color: var(--color-link);
		}

		&:focus {
			outline: 2px solid var(--color-link);
			outline-offset: 2px;
		}
	}
</style>