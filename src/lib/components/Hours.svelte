<script lang="ts">
	import { browser } from '$app/environment';

	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let currentDay: string;

	if (browser) {
		let date = new Date();
		currentDay = days[date.getDay()].toLowerCase();
	}
</script>

<section
	class="flex w-full max-w-[360px] flex-col gap-4 rounded-md p-4 outline outline-1 outline-[var(--theme-color-primary)]"
>
	<h1 class=" text-center font-bold">BUSINESS HOURS</h1>
	<hr class="border border-[var(--theme-color-primary)]" />
	<div class="flex justify-between">
		<ul class="">
			<li class:highlight={'monday' === currentDay} class="pb-1">Monday</li>
			<li class:highlight={'tuesday' === currentDay} class="pb-1">Tuesday</li>
			<li class:highlight={'wednesday' === currentDay} class="pb-1">Wednesday</li>
			<li class:highlight={'thursday' === currentDay} class="pb-1">Thursday</li>
			<li class:highlight={'friday' === currentDay} class="pb-1">Friday</li>
			<li class:highlight={'saturday' === currentDay} class="pb-1">Saturday</li>
			<li class:highlight={'sunday' === currentDay} class="pb-1">Sunday</li>
		</ul>
		<ul>
			<li class:highlight={'monday' === currentDay} class="pb-1">4:00 pm - 9:00 pm</li>
			<li class:highlight={'tuesday' === currentDay} class="pb-1">4:00 pm - 9:00 pm</li>
			<li class:highlight={'wednesday' === currentDay} class="pb-1">4:00 pm - 9:00 pm</li>
			<li class:highlight={'thursday' === currentDay} class="pb-1">4:00 pm - 9:00 pm</li>
			<li class:highlight={'friday' === currentDay} class="pb-1">12:00 pm - 11:00 pm</li>
			<li class:highlight={'saturday' === currentDay} class="pb-1">12:00 pm - 11:00 pm</li>
			<li class:highlight={'sunday' === currentDay} class="pb-1">12:00 pm - 8:00 pm</li>
		</ul>
	</div>
	<p class="text-center">Walk-ins Are Welcome</p>
</section>

<style lang="css">
	.highlight {
		color: theme(colors.theme-secondary);
	}
</style>
