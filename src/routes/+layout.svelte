<script>
	import Fab from '$lib/components/Fab.svelte';
	import Header from '$lib/components/Header.svelte';
	import Promotion from '$lib/components/Promotion.svelte';
	import '../app.css';
</script>

<Header />
<main class="select-none gap-24 p-4 pb-52 pt-8">
	<Promotion />
	<slot />
	<!-- "Fab" component is in a fixed position -->
</main>
<Fab />

<style>
	main {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
