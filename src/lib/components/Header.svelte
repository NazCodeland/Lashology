<script>
	import Logo from '$lib/components/Logo.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<header class="bg-blue-300 flex justify-between p-4 items-center">
	<Logo />
	<Nav />
</header>

<style>
	header {
		grid-column: fw;
	}
</style>
