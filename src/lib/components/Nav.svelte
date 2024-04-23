<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import Logo from './Logo.svelte';
	import { cubicIn, cubicInOut, cubicOut } from 'svelte/easing';
	import { showNavStore } from '$lib/stores/showNavStore';

	const links = [
		{ name: 'Home', href: '/' },
		{
			name: 'Services',
			href: '/services'
		},
		{
			name: 'Book Now',
			href: 'https://www.fresha.com/a/lashology-ottawa-225-metcalfe-street-6th-floor-q9vdcocy/booking'
		},
		{ name: 'About Us', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];

	let modal: HTMLElement;
	function handleClickOutside(event) {
		if (modal && modal.contains(event?.target)) {
			showNavStore.set(false);
		}
	}
</script>

<svelte:window on:click={handleClickOutside} />

<div
	bind:this={modal}
	class=" select-none flex flex-col gap-8 whitespace-nowrap p-4 pt-8 border fixed -bottom-20 top-0 left-0
w-full bg-gray-900/30 transition-all"
>
	<nav
		in:slide={{ axis: 'x', easing: cubicOut }}
		out:slide={{ axis: 'x', duration: 300 }}
		class="transition-all flex flex-col gap-8 whitespace-nowrap p-4 pt-8 border fixed -bottom-20 top-0 left-0
	w-[80vw] bg-[white] max-w-[340px]"
	>
		<Logo />
		<ul class="text-sm flex flex-col gap-4 justify-evenly flex-wrap">
			{#each links as link}
				<li
					class="hover:outline cursor-pointer border rounded-md {link.name == 'Book Now'
						? 'bg-gray-900 text-gray-50 hover:outline-slate-900'
						: ''}"
				>
					<a class="w-full h-full block p-4" href={link.href}>{link.name.toUpperCase()}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
</style>
