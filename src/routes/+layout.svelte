<script>
	import Fab from '$lib/components/Fab.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<main class="relative flex flex-wrap gap-24 p-4 pb-52 pt-8">
	<Header />
	<slot />
	<Fab />
</main>

<style>
</style>
