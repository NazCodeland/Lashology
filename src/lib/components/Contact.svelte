<script lang="ts">
	import ContactInfo from '$lib/components/Contact/ContactInfo.svelte';
	import ContactForm from '$lib/components/Contact/ContactForm.svelte';
</script>

<div class="contact flex w-full flex-wrap items-center justify-evenly gap-16 p-4">
	<ContactInfo />

	<ContactForm />
</div>

<style>
	.contact {
		grid-column: fw;
	}
</style>
