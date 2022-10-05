<script lang="ts">
	import { goto } from '$app/navigation'
	import swrLike from "$lib/utils/swrLike"
	import type { UnsplashCollection } from "$lib/types"
	import Collection from "$lib/components/Collection.svelte"

	const collections = swrLike<UnsplashCollection[]>('https://api.unsplash.com/collections')

	const handleOnClickCollection = (id: number) => {
		console.log('goto ', id)
		goto(`/collections/${id}`)
	}
</script>

<svelte:head>
	<title>Photo Book: Collections</title>
	<meta name="description" content="Svelte Kit Photobook" />
</svelte:head>

<h1 class="text-3xl font-bold w-full my-4 dark:text-white">
  Collections
</h1>

{#if $collections.data}
	<div class="container w-full mt-4 mx-auto gap-2 grid sm:grid-cols-3 grid-cols-1">
		{#each $collections.data as collection}
			<Collection collection={collection} on:click={() => handleOnClickCollection(collection.id)} />
		{/each}
	</div>
{:else if $collections.error}
	<p>
		Unkown Error Occured
	</p>
{:else}
	<p>
		Loading...
	</p>
{/if}