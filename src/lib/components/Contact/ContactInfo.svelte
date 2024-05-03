<script lang="ts">
	import locationIcon from '$lib/icons/location.svg';
	import phoneIcon from '$lib/icons/phone.svg';
	import emailIcon from '$lib/icons/email.svg';
	import instagramIcon from '$lib/icons/instagram.svg';
</script>

<address>
	<ul class="flex flex-col gap-8">
		<li>
			<a
				class="flex w-full items-center gap-8"
				href="https://maps.google.com/?q=85+Clarence+St,+Ottawa+ON+K1N+5P5"
				target="_blank">
				<img src={locationIcon} alt="" aria-label="location icon" />
				225 METCALFE STREET 6TH FLOOR, UNIT#103 <br />
				OTTAWA, ONTARIO  K2P 1P9
			</a>
		</li>
		<li>
			<a class="flex items-center gap-8" href="tel:6136958887">
				<img src={phoneIcon} alt="" aria-label="phone icon" /> 778-238-9401
			</a>
		</li>
		<li>
			<a class="flex items-center gap-8" href="mailto:info@saigonottawa.com">
				<img src={emailIcon} alt="" aria-label="email icon" /> renaylashology@gmail.com
			</a>
		</li>
		<li>
			<a
				class="flex items-center gap-8"
				href="https://www.instagram.com/saigonottawa/"
				target="_blank"
				rel="noopener">
				<img src={instagramIcon} alt="" aria-label="instagram icon" /> @renaylashlab
			</a>
		</li>
	</ul>
</address>
