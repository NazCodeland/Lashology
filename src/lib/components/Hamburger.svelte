<script lang="ts">
	import { showNavStore } from '$lib/stores/showNavStore';
	import Hamburger from '../icons/hamburger.svg';
	import Nav from './Nav.svelte';
	import { viewTransition } from './utilities';

	function updateDOMState() {
		showNavStore.update((val) => (val = !val));
	}
</script>

<button
	class="select-none indent-10"
	on:click={() => {
		viewTransition({ updateDOMState });
	}}>
	<img src={Hamburger} alt="" />
</button>

{#if $showNavStore}
	<Nav />
{/if}
