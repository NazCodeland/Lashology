<script lang="ts">
	import { slide } from 'svelte/transition';
	import Logo from './Logo.svelte';
	import { cubicOut } from 'svelte/easing';
	import { showNavStore } from '$lib/stores/showNavStore';
	import { viewTransition } from './utilities';

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

	function updateDOMState(event: MouseEvent) {
		showNavStore.set(false);
	}

	let nav: HTMLElement;
	let ul: HTMLElement;
	function handleClickOutside(event: MouseEvent) {
		if (event.target !== nav && event.target !== ul) {
			viewTransition({ updateDOMState: () => updateDOMState(event) });
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div
	on:click={handleClickOutside}
	class="fixed -bottom-20 left-0 top-0 z-20 flex w-full select-none flex-col gap-8 whitespace-nowrap border
	bg-gray-900/50 p-4">
	<nav
		bind:this={nav}
		in:slide={{ axis: 'x', duration: 1, easing: cubicOut }}
		out:slide={{ axis: 'x', duration: 1 }}
		class="fixed -bottom-20 left-0 top-0 flex w-[80vw] max-w-[340px] flex-col gap-8 whitespace-nowrap
		border bg-[white] p-4">
		<Logo />
		<ul bind:this={ul} class="flex flex-col flex-wrap justify-evenly gap-4 text-sm">
			{#each links as link}
				{#if link.name == 'Book Now' && $showNavStore}
					<li
						class="fab-viewAPI cursor-pointer rounded-md border
						bg-gray-900 text-gray-50 hover:outline hover:outline-slate-900">
						<a class="block h-full w-full p-4" href={link.href}>Book Now</a>
					</li>
				{:else if $showNavStore}
					<li class="cursor-pointer rounded-md border hover:outline">
						<a class="block h-full w-full px-4 py-3" href={link.href}>{link.name.toUpperCase()}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</div>
