<script lang="ts">
  import type { PageData } from './$types'
  import Image from '$lib/components/Image.svelte'

  export let data: PageData

  // from +page.server.ts
  const { detail, photos } = data
</script>

<h1 class="text-3xl font-bold w-full my-4 dark:text-white">
  {detail.title} by 
  <a class="text-xl no-underline" href={detail.user.links.html} target="_blank" rel="noopener noreferrer">
    {detail.user.name}
  </a>
</h1>

<a class="w-full my-4 block text-right text-xl no-underline dark:text-gray-400" href="/collections">
	Back to collections
</a>

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