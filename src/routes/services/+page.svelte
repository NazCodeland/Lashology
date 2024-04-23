<script>
	const services = [
		{
			image: '/services/eyeLashes.jpg',
			// image: '/services/eyelash.png',
			name: 'EYELASH EXTENSIONS',
			serviceList: [
				{ name: 'LASH REMOVAL', price: 30, discount: '' },
				{ name: 'MINI CLASSIC TOUCH UP', price: 45, discount: '' },
				{ name: 'CLASSIC FILL', price: 60, discount: '' },
				{ name: 'CLASSIC FULL SET', price: 85, discount: '' },
				{ name: 'MINI VOLUME TOUCH UP', price: 85, discount: '' },
				{ name: '3D VOLUME FILL', price: 100, discount: '' },
				{ name: '3D VOLUME FULL SET', price: 100, discount: '' },
				{ name: '5D VOLUME FILL', price: 120, discount: '' },
				{ name: '5D VOLUME FULL SET', price: 160, discount: '' },
				{ name: 'MEGA RUSSIAN VOLUME FILL', price: 150, discount: '' },
				{ name: 'MEGA RUSSIAN VOLUME FULL SET', price: 220, discount: '' }
			]
		},
		{
			image: '/services/whitening.png',
			name: 'TEETH WHITENING & TOOTH GEMS',
			serviceList: [
				{ name: 'SINGLE TOOTH GEM', price: 60, discount: '' },
				{ name: 'TOOTH GEM DESIGNS', price: 85, condition: '+', discount: '' },
				{ name: 'ADDITIONAL GEMS', price: 40, condition: 'EACH', discount: '' },
				{ name: '20 MIN. EXPRESS WHITENING', price: 65, discount: '' },
				{ name: '40 MIN. WHITENING', price: 85, discount: '' },
				{ name: '60 MIN. WHITENING', price: 115, discount: '' },
				{ name: '80 MIN. WHITENING', price: 140, discount: '' }
			]
		},
		{
			image: '/services/eyelash.png',
			name: 'LASH LIFT & BROW LAMINATION',
			serviceList: [
				{ name: 'BROW WAX - CLEAN UP ONLY', price: 25, discount: '' },
				{ name: 'BROW TINT ONLY', price: 20, discount: '' },
				{ name: 'LASH TINT ONLY', price: 20, discount: '' },
				{ name: 'BROW LAMINATION', price: 95, discount: '' },
				{ name: 'LASH LIFT & TINT', price: 85, discount: '' },
				{ name: 'LASH LIFT + BROW LAMINATION COMBO', price: 160, discount: 'Save 11%' }
			]
		}
	];
</script>

<section class="flex flex-col gap-24">
	<h1 class="w-full bg-slate-50 py-4 text-center text-2xl">SERVICES</h1>
	<div class="flex flex-col gap-20">
		{#each services as category (category.name)}
			<div class="flex flex-col gap-6">
				<img
					class="m-auto mb-4 inline-block h-[300px] w-[300px] rounded-full object-cover outline hover:scale-150"
					src={category.image}
					alt=""
				/>
				<section class="flex flex-col gap-1">
					<h2 class="mb-2 text-center text-2xl">{category.name}</h2>
					<hr class=" mb-2 border border-gray-400" />

					<nav>
						<ul class="flex flex-col gap-2">
							{#each category.serviceList as service}
								<li class="flex justify-between gap-2 border-b border-slate-50 font-semibold">
									<span>{service.name}</span>
									{#if service.discount}
										<span class="text-[#1f8900]">{service.discount}</span>
									{/if}
									<span>${service.price}</span>
								</li>
							{/each}
						</ul>
					</nav>
				</section>
			</div>
		{/each}
	</div>
</section>

<style lang="css">
</style>
