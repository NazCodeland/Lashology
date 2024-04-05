<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<Header />

<section class="border-2 w-full border-red-800">
	<p class="test">
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem minima mollitia nobis explicabo
		eos fugit aut excepturi ad consequatur nulla suscipit officia sunt, ducimus asperiores eum,
		animi veritatis quod officiis!
	</p>
	<div class="cardsDiv">
		<Card />
		<Card />
		<Card />
		<Card />
	</div>
	<p class="breakout">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum nisi debitis. Vero
		libero soluta quam voluptatem hic blanditiis assumenda impedit labore quasi, culpa illo, sit
		consequatasdasdasdsadasdsaur ipsa perferendis architecto!
	</p>
	<p class="breakout-right">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum nisi debitis. Vero
		libero soluta quam voluptatem hic blanditiis assumenda impedit labore quasi, culpa illo, sit
		consequatasdasdasdsadasdsaur ipsa perferendis architecto!
	</p>
	<p class="breakout-left">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum nisi debitis. Vero
		libero soluta quam voluptatem hic blanditiis assumenda impedit labore quasi, culpa illo, sit
		consequatasdasdasdsadasdsaur ipsa perferendis architecto!
	</p>
</section>

<style lang="css">
	.test {
		grid-column-start: SPAN 5;
		/* grid-column-end: -1; */
		background-color: orange;
	}

	.breakout {
		grid-column: fw;
		background-color: orange;
	}
	.breakout-left {
		grid-column: fw/content-end;
		background-color: green;
	}
	.breakout-right {
		grid-column: content-start/1fr;
		background-color: rebeccapurple;
	}

	section {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: fw;
	}

	.cardsDiv {
		grid-template-columns: subgrid;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 16px;
		border: 2px solid red;
		grid-column: content;
	}
</style>
