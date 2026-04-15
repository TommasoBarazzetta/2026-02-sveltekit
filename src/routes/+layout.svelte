<script>
	import favicon from '$lib/assets/favicon.svg';
	import "$lib/styles/normalize.css";
	import "$lib/styles/tokens.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!--Satoshi font-->
	<link rel="preconnect" href="https://api.fontshare.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://api.fontshare.com" crossorigin="anonymous" />
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />
	<!--Inter font-->
	<link rel="preconnect" href="https://fonts.bunny.net" crossorigin="anonymous" />
	<link rel="preconnect" href="https://fonts.bunny.net" crossorigin="anonymous" />
	<link href="https://fonts.bunny.net/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
</svelte:head>

{@render children()}
