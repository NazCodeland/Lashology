<script>
	import Fab from '$lib/components/Fab.svelte';
	import Header from '$lib/components/Header.svelte';
	import Promotion from '$lib/components/Promotion.svelte';
	import '../app.css';
</script>

<main class="m-auto flex max-w-fw select-none flex-wrap justify-center gap-24 p-4 pb-40 pt-8">
	<Header />
	<Promotion />
	<slot />
	<!-- "Fab" component is in a fixed position -->
	<Fab />
</main>

<style>
</style>
