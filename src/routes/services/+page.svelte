<script>
	const services = [
		{
			name: 'EYELASH EXTENSIONS',
			serviceList: [
				{ name: 'LASH REMOVAL', price: 30 },
				{ name: 'MINI CLASSIC TOUCH UP', price: 45 },
				{ name: 'CLASSIC FILL', price: 60 },
				{ name: 'CLASSIC FULL SET', price: 85 },
				{ name: 'MINI VOLUME TOUCH UP', price: 85 },
				{ name: '3D VOLUME FILL', price: 100 },
				{ name: '3D VOLUME FULL SET', price: 100 },
				{ name: '5D VOLUME FILL', price: 120 },
				{ name: '5D VOLUME FULL SET', price: 160 },
				{ name: 'MEGA RUSSIAN VOLUME FILL', price: 150 },
				{ name: 'MEGA RUSSIAN VOLUME FULL SET', price: 220 }
			]
		},
		{
			name: 'TEETH WHITENING & TOOTH GEMS',
			serviceList: [
				{ name: 'SINGLE TOOTH GEM', price: 60 },
				{ name: 'TOOTH GEM DESIGNS', price: 85, condition: '+' },
				{ name: 'ADDITIONAL GEMS', price: 40, condition: 'EACH' },
				{ name: '20 MIN. EXPRESS WHITENING', price: 65 },
				{ name: '40 MIN. WHITENING', price: 85 },
				{ name: '60 MIN. WHITENING', price: 115 },
				{ name: '80 MIN. WHITENING', price: 140 }
			]
		},
		{
			name: 'LASH LIFT & BROW LAMINATION',
			serviceList: [
				{ name: 'BROW WAX - CLEAN UP ONLY', price: 25 },
				{ name: 'BROW TINT ONLY', price: 20 },
				{ name: 'LASH TINT ONLY', price: 20 },
				{ name: 'BROW LAMINATION', price: 95 },
				{ name: 'LASH LIFT & TINT', price: 85 },
				{ name: 'LASH LIFT & TINT + BROW LAMINATION COMBO', price: 160 }
			]
		}
	];
</script>

<h1 class="bg-slate-100 m-auto w-full p-4 text-center text-3xl">SERVICES</h1>
<section class="m-auto">
	<img
		class="h-[300px] w-[300px] m-auto outline mb-4 object-cover rounded-full hover:scale-150"
		src="/services/eyelashes.png"
		alt=""
	/>

	{#each services as category (category.name)}
		<p class="underline whitespace-nowrap">{category.name}</p>
		<ul class="list-disc list-inside">
			{#each category.serviceList as service}
				<li class="">{service.name}: ${service.price}</li>
			{/each}
		</ul>
	{/each}
</section>

<style lang="css">
</style>
