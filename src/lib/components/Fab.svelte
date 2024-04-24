<script>
	import { showNavStore } from '$lib/stores/showNavStore';
</script>

{#if !$showNavStore}
	<div class="fixed bottom-14 right-14 flex select-none flex-col gap-2">
		<button class="booking rounded-lg bg-gray-900 px-4 py-3 text-center text-gray-50">
			<a
				href="https://www.fresha.com/a/lashology-ottawa-225-metcalfe-street-6th-floor-q9vdcocy/booking"
			>
				Book now
			</a>
		</button>

		<button class="phone rounded-lg bg-gray-900 px-4 py-3 text-center text-gray-50">
			<a href="tel:7782389401">778-238-9401</a>
		</button>
	</div>
{/if}

<style>
	.phone {
		view-transition-name: nav-fab-animation-phone;
	}
	.booking {
		view-transition-name: nav-fab-animation-booking;
	}
</style>
