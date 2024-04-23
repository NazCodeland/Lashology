<script>
	import Fab from '$lib/components/Fab.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<main class="p-4 pt-8 flex flex-wrap gap-20 relative">
	<Header />
	<slot />
	<Fab />
</main>

<style>
</style>
