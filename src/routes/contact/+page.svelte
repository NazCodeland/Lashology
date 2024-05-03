<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import Hours from '$lib/components/Hours.svelte';
	import GoogleMap from '$lib/components/GoogleMap.svelte';
</script>

<section>
	<h2 class="pb-16 text-center">Hours & Location</h2>
	<div class="flex flex-wrap justify-center gap-8">
		<Hours />
		<GoogleMap />
	</div>
</section>

<section>
	<h2 class="pb-16 text-center">Contact</h2>
	<Contact />
</section>

<style>
</style>
