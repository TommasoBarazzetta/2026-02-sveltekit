<script>
	import Icon from "$lib/components/Icon.svelte";

	const {
		ref,
		title = null,
		children = null,
		leadingIcon = null,
		trailingIcon = null,
		class: additionalClass = "",
	} = $props();

	let target = $derived.by(()=>{
		if (ref.startsWith("http")) {
			return "_blank";
		} else {
			return "_self";
		}
	})
</script>

<a href={ref} target={target} class={additionalClass}>
	{#if children}
		{@render children()}
	{:else}
		{#if leadingIcon}
			<Icon name={leadingIcon} />
		{/if}

		{title}

		{#if trailingIcon}
			<Icon name={trailingIcon} />
		{/if}
	{/if}
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		gap: var(--size-1);

		transition: color 0.75s var(--ease-out-quart);

		&:hover {
			color: var(--color-link);
		}
	}
</style>
