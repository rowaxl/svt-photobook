<script lang="ts">
  import type { UnsplashCollection } from '$lib/types'
  import Image from '$lib/components/Image.svelte'

  export let collection: UnsplashCollection
</script>

<div class="relative border rounded-md dark:text-white" on:click>
  <div class="absolute w-full h-full z-10 flex flex-col justify-end transition hover:opacity-0 bg-gray-200 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50">
    <p class="text-xl px-2 py-2">
      {collection.title}
    </p>
    
    {#if (collection.description !== null)}
    <p class="text-sm px-2 py-2">
      {collection.description}
    </p>
    {/if}

    <p class="text-sm text-right pb-2 px-2">
      by 
      <a class="font-bold" href={collection.user.links.self}>
        {collection.user.name}
      </a>
    </p>
  </div>

  <Image detail={collection.cover_photo} />
</div>
