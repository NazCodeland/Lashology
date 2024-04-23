<script lang="ts">
	import ContactInfo from '$lib/components/ContactInfo.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<div class="contact w-full flex flex-wrap items-center justify-evenly gap-16 p-4">
	<ContactInfo />

	<ContactForm />
</div>

<style>
	.contact {
		grid-column: fw;
	}
</style>
