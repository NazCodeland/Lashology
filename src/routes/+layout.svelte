<script>
	import Fab from '$lib/components/Fab.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<main class="select-none gap-24 p-4 pb-52 pt-8">
	<Header />
	<slot />
	<!-- "Fab" component is in a fixed position -->
	<Fab />
</main>

<style>
	main {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
