<script lang="ts">
	let images = [
		// // eye lashes
		{ src: 'eye_lash_1', name: 'item1' },
		{ src: 'eye_lash_2', name: 'item2' },
		{ src: 'eye_lash_3', name: 'item3' },
		{ src: 'eye_lash_4', name: 'item4' },

		// // tooth gems
		{ src: 'tooth_gem_1', name: 'item5' },
		{ src: 'tooth_gem_2', name: 'item6' },
		{ src: 'tooth_gem_3', name: 'item7' },
		{ src: 'tooth_gem_4', name: 'item8' },
		{ src: 'tooth_gem_5', name: 'item9' }
	];

	// https://source.unsplash.com/OyCl7Y4y0Bk
	// https://source.unsplash.com/Kl1gC0ve620
	// https://source.unsplash.com/55btQzyDiO8
	// https://source.unsplash.com/g0dBbrGmMe0
	// https://source.unsplash.com/v1OW17UcR-Q
	// https://source.unsplash.com/Wpg3Qm0zaGk
	// https://source.unsplash.com/W3FC_bCPw8E
	// https://source.unsplash.com/rBRZLPVLQg0
	// https://source.unsplash.com/RRksEVVoU8o

	let x: number;
	let y: number;
	let style = '';

	function handleMouseMove(event: MouseEvent) {
		x = event.offsetX;
		y = event.offsetY;
		style = `transform-origin: ${x}px ${y}px;`;
	}
</script>

<section class="flex flex-col gap-20">
	<h1>GALLERY</h1>
	<article
		class="grid grid-cols-[repeat(auto-fit,minmax(248px,1fr))] place-content-center gap-4 rounded-md
		bg-[#f5f5dc] p-4">
		{#each images as image}
			<div class="relative overflow-hidden">
				<img
					{style}
					class="aspect-square rounded-sm {image.src === 'eye_lash_4' ? '' : 'object-cover'}
						hover:scale-[1.75]"
					on:mousemove={handleMouseMove}
					alt=""
					src="/services/{image.src}.jpg" />
				<span class="bottom absolute bottom-2 right-2 rounded-md bg-slate-100 p-2">
					<a class="underline" href="/servoces#{image.name}">{image.name}</a>
				</span>
			</div>
		{/each}
	</article>
</section>

<style>
	img {
		transition: transform 300ms ease 0s;
	}
</style>
