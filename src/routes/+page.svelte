<script>
	let images = [
		'/services/eye_brows.png',
		'/services/eye_lash_1.png',
		'/services/eye_lash_2.png',
		'/services/eye_lash.png',
		'/services/tooth_gem_1.jpg',
		'/services/tooth_gem_1.png',
		'/services/tooth_gem_2.jpg',
		'/services/tooth_gem_3.jpg',
		'/services/tooth_gem_4.jpg',
		'/services/tooth_gem_5.jpg'
	];
</script>

<!-- https://source.unsplash.com/OyCl7Y4y0Bk
https://source.unsplash.com/Kl1gC0ve620
https://source.unsplash.com/55btQzyDiO8
https://source.unsplash.com/g0dBbrGmMe0
https://source.unsplash.com/v1OW17UcR-Q
https://source.unsplash.com/Wpg3Qm0zaGk
https://source.unsplash.com/W3FC_bCPw8E
https://source.unsplash.com/rBRZLPVLQg0
https://source.unsplash.com/RRksEVVoU8o -->
<section class="flex flex-col gap-2">
	<!-- {#each images as image} -->

	<img alt="" src="/services/eye_brows.png" />
	<img alt="" src="/services/tooth_gem_4.jpg" />
	<img alt="" src="/services/tooth_gem_5.jpg" />

	<img alt="" src="/services/eye_lash.png" />
	<img alt="" src="/services/tooth_gem_1.jpg" />
	<img alt="" src="/services/tooth_gem_1.png" />

	<img alt="" src="/services/tooth_gem_3.jpg" />
	<img alt="" src="/services/eye_lash_1.png" />
	<img alt="" src="/services/eye_lash_2.png" />

	<!-- {/each} -->
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-template-rows: min-content;
	}

	img {
		border: 2px solid limegreen;
		inline-size: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		/* inline-size: 100%; */
	}
	img:hover {
		/* grid-row: span 3; */
	}
	/* section {
		place-items: center;
		inline-size: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 16px;
	} */
</style>
