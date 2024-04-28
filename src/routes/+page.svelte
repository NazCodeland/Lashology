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

<!-- 
	https://source.unsplash.com/OyCl7Y4y0Bk
	https://source.unsplash.com/Kl1gC0ve620
	https://source.unsplash.com/55btQzyDiO8
	https://source.unsplash.com/g0dBbrGmMe0
	https://source.unsplash.com/v1OW17UcR-Q
	https://source.unsplash.com/Wpg3Qm0zaGk
	https://source.unsplash.com/W3FC_bCPw8E
	https://source.unsplash.com/rBRZLPVLQg0
	https://source.unsplash.com/RRksEVVoU8o 
-->

<section class="grid grid-cols-[repeat(auto-fit,200px)] place-content-center gap-4 border-2">
	<!-- {#each images as image} -->

	<img class="aspect-square" alt="" src="/services/eye_brows.png" />
	<img class="aspect-square" alt="" src="/services/tooth_gem_4.jpg" />
	<img class="aspect-square" alt="" src="/services/tooth_gem_5.jpg" />

	<img class="aspect-square" alt="" src="/services/eye_lash.png" />
	<img class="aspect-square" alt="" src="/services/tooth_gem_1.jpg" />
	<img class="aspect-square" alt="" src="/services/tooth_gem_1.png" />

	<img class="aspect-square" alt="" src="/services/tooth_gem_3.jpg" />
	<img class="aspect-square" alt="" src="/services/eye_lash_1.png" />
	<img class="aspect-square" alt="" src="/services/eye_lash_2.png" />

	<!-- {/each} -->
</section>

<style>
	img {
		object-fit: cover;
	}
	img:hover {
		/* grid-row: span 3; */
	}
</style>
