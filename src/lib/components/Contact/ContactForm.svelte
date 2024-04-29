<script lang="ts">
	let formStatus = {
		isSending: false,
		message: '',
		colors: ''
	};

	async function handleSubmit(event: SubmitEvent) {
		formStatus.isSending = true;
		formStatus.message = 'Sending...';

		if (event.target) {
			const formData = new FormData(event.target as HTMLFormElement);
			let emailResponseBody;
			try {
				const emailResponse = await fetch(
					'https://sendgrid-email{EMAIL}-worker.jason-f38.workers.dev',
					{
						method: 'POST',
						body: formData
					}
				);
				emailResponseBody = await emailResponse.json();
				formStatus.isSending = false;
				formStatus.message = emailResponseBody.message;
				formStatus.colors = 'bg-green-700';
				//
			} catch (error) {
				console.error('Error occurred within handleSubmit:', error);
				formStatus.isSending = false;
				formStatus.message =
					emailResponseBody?.message || 'An unexpected error occurred, please try again.';
				formStatus.colors = 'bg-tertiary text-gray-50';
			}
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="flex w-full max-w-[400px] flex-col gap-4">
	<p>
		Feel free to use the form below to reach out to us. Please provide your <i>name</i>,
		<i>email</i>, and your
		<i>message</i>. We will get back to you as soon as possible.
	</p>
	<hr />
	<label for="name" class="flex flex-col gap-0.5">
		Name
		<input
			id="name"
			type="text"
			name="name"
			required
			class="focus:shadow-glow rounded-md px-3 py-2 font-semibold text-slate-950 outline-none" />
	</label>

	<label for="email" class="flex flex-col gap-0.5">
		Email
		<input
			id="email"
			type="email"
			name="email"
			required
			class=" focus:shadow-glow rounded-md px-3 py-2 font-semibold text-slate-950 outline-none" />
	</label>

	<label for="message" class="flex flex-col gap-0.5">
		Message
		<textarea
			id="message"
			name="message"
			required
			rows="5"
			class="focus:shadow-glow rounded-md border px-3 py-2 font-semibold text-slate-950 outline-none"
		></textarea>
	</label>

	{#if formStatus.isSending}
		<p>Sending...</p>
	{:else}
		<p class="rounded-md {formStatus.colors} px-4 py-1">
			{formStatus.message}
		</p>
	{/if}

	<button
		type="submit"
		class="inline-flex w-full justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm">
		Send Message
	</button>
</form>
