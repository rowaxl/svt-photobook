<script>
	import swrLike from "$lib/swrLike"
	import Collection from "../components/Collection.svelte";

	const photoOfTheDay = swrLike('https://api.unsplash.com/photos')
</script>

<svelte:head>
	<title>Photo Book</title>
	<meta name="description" content="Svelte Kit Photobook" />
</svelte:head>

<section class="w-full flex flex-col justify-start">
	<h1 class="text-3xl font-bold">
		Photobook
	</h1>

	<h2 class="text-xl my-2">
		Here's your photos of the day!
	</h2>

	{#if $photoOfTheDay.data}
		<div class="container w-full mx-auto gap-2 grid sm:grid-cols-3 grid-cols-1">
			{#each $photoOfTheDay.data as photo}
				<Collection detail={photo} />
			{/each}
		</div>
	{:else if $photoOfTheDay.error}
		<p>
			Unkown Error Occured
		</p>
	{:else}
		<p>
			Loading...
		</p>
	{/if}
</section>
