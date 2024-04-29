<script lang="ts">
	import { slide } from 'svelte/transition';
	import { viewTransition } from './utilities';
	import { cubicOut } from 'svelte/easing';
	import { showNavStore } from '$lib/stores/showNavStore';

	let minimizePromotion: boolean = false;
	let showPromotion: boolean = true;
	// $: console.log(minimizePromotion);
</script>

{#if showPromotion}
	<article
		class="flex items-center justify-between gap-8 rounded-b-2xl
		outline outline-1 outline-gray-900 transition-all
		{minimizePromotion
			? 'rounded-2xl delay-[200ms]'
			: 'flex-col self-end rounded-md p-2 delay-[250ms] '}">
		<header
			class="shrink-0 p-1
		{minimizePromotion ? 'order-2' : 'self-end'}">
			<!-- minimize and close promotion -->

			<button
				on:click={() => {
					viewTransition({ updateDOMState: () => (minimizePromotion = !minimizePromotion) });
				}}>
				<svg
					class="group-active:fill-white"
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink">
					<path
						d="M2.5,12 C2.5,11.1716 3.17157,10.5 4,10.5 L20,10.5 C20.8284,10.5 21.5,11.1716 21.5,12 C21.5,12.8284 20.8284,13.5 20,13.5 L4,13.5 C3.17157,13.5 2.5,12.8284 2.5,12 Z">
					</path>
				</svg>
			</button>

			<button
				on:click={() => (showPromotion = false)}
				class="group self-end rounded-md p-2 text-2xl hover:bg-black"
				aria-label="Close Promotion window">
				<svg
					class=" group-hover:fill-red-600"
					width="24px"
					height="24px"
					viewBox="-3.5 0 19 19"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z">
					</path>
				</svg>
			</button>
		</header>

		{#if !minimizePromotion}
			<div class=" text-center text-lg">
				<!-- attention grabber  -->
				<h2 class="mb-8 rounded-sm border-8 py-4 text-4xl font-extrabold">
					FREE <br />
					LASH <br />
					BOTOX
				</h2>
				<!-- promotion details -->
				<p class="mb-2 px-4">Book your lash lift and get a free lash botox treatment!</p>
				<p class="mb-4 px-4">This offer is valid from May 1st to May 31st.</p>
			</div>
		{/if}

		<footer class="h-full w-full">
			<button
				class="
				{$showNavStore ? '' : 'promotion-viewAPI h-full'}  
				btn btn-primary w-full !rounded-2xl">
				Claim now</button>
		</footer>
	</article>
{/if}
