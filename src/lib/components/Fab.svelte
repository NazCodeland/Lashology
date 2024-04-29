<script>
	import { page } from '$app/stores';
	import { showNavStore } from '$lib/stores/showNavStore';
	$: route = $page.route.id;
</script>

<!-- TODO: Fab should only be the button and the bar that contains
the Fab and other info should be separated -->
{#if !$showNavStore}
	<div
		class="fixed bottom-0 flex w-full items-center justify-between bg-white p-4 outline outline-gray-200">
		<p class="text-sm text-gray-500">
			24 <a class={route == '/services' ? '' : 'underline'} href="/services">services</a> available
		</p>
		<a
			href="https://www.fresha.com/a/lashology-ottawa-225-metcalfe-street-6th-floor-q9vdcocy/booking"
			class="fab-viewAPI btn btn-tertiary">
			Book now
		</a>
	</div>
{/if}
