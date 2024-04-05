<script>
	import '../app.css';
</script>

<main class="custom-grid">
	<slot />
</main>

<style lang="css">
	.custom-grid {
		display: grid;
		inline-size: 1600px;
		margin: auto;
		grid-template-columns:
			[fw-start] 1fr
			[content-start] 1fr 1fr 1fr
			[content-end] 1fr
			[fw-end];

		grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
	}
</style>
