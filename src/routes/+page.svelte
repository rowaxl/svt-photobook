<script lang="ts">
	import swrLike from "$lib/utils/swrLike"
	import type { UnsplashImage } from "$lib/types"
	import Image from "../lib/components/Image.svelte"

	const photoOfTheDay = swrLike<UnsplashImage[]>('https://api.unsplash.com/photos')
</script>

<svelte:head>
	<title>Photo Book</title>
	<meta name="description" content="Svelte Kit Photobook" />
</svelte:head>

<h1 class="text-3xl font-bold w-full mb-4 dark:text-white">
	Photobook: Photos of the day
</h1>

{#if $photoOfTheDay.data}
	<div class="container w-full mx-auto gap-2 grid sm:grid-cols-3 grid-cols-1">
		{#each $photoOfTheDay.data as photo}
			<div class="transition brightness-50 hover:shadow-xl hover:brightness-100">
				<Image detail={photo} />
			</div>
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
