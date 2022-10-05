<script lang="ts">
  import type { PageData } from './$types'
  import Image from '$lib/components/Image.svelte'

  export let data: PageData

  const { detail, photos } = data
</script>

<h1 class="text-3xl font-bold w-full my-4 dark:text-white">
  Collection: {detail.title}  
</h1>

{#if photos}
	<div class="container w-full mx-auto gap-2 grid sm:grid-cols-3 grid-cols-1">
		{#each photos as photo}
			<div class="transition brightness-50 hover:shadow-xl hover:brightness-100">
				<Image detail={photo} />
			</div>
		{/each}
	</div>
{:else}
	<p>
		Loading...
	</p>
{/if}