<script>
	import polimi from "$lib/assets/polimi.png";
</script>

<footer class="safe-area">
	<img src={polimi} alt="Politecnico di Milano" />
</footer>

<style>
	footer {
		padding-block: var(--size-4);

		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color-surface);
	}

	img {
		height: var(--size-9);
	}

	@media (max-width: 768px) and (min-width: 481px) {
		footer {
			padding-block: var(--size-6);
		}

		img {
			height: var(--size-11);
		}
	}
</style>
