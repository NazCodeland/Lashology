<script lang="ts">
	import Nav from './Nav.svelte';
	import { showNavStore } from '$lib/stores/showNavStore';
	import Hamburger from '../icons/hamburger.svg';
</script>

<button
	class="select-none indent-10"
	on:click={() =>
		showNavStore.update((val) => {
			val = !val;
			console.log('val', val);
			return val;
		})}
>
	<img class="w-10" src={Hamburger} alt="" />
</button>

{#if $showNavStore}
	<Nav />
{/if}
