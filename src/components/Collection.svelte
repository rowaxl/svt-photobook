<script lang="ts">
  import type { Action } from 'svelte/types/runtime/action'
  import { fade } from 'svelte/transition'
	import type { UnsplashImage } from "$lib/swrLike";
  import placeholder from '$lib/images/placeholder.png'

  export let detail: UnsplashImage
  export const isThumbnail: boolean = false

  const lazyload: Action<HTMLElement, { src: string }> = (node, data) => {
    if (!data) return

    const img = new Image()
    img.src = data.src

    img.onload = () => {
      node.setAttribute('src', data.src)
    }
  }
</script>

<div class="w-full h-48 rounded hover:shadow-xl bg-gray-400 bg-opacity-50">
  <img
    class="object-cover w-full h-full"
    transition:fade
    src={placeholder}
    alt={detail.alt_description}
    use:lazyload="{{
      src: isThumbnail ? 
        detail.urls.small :
        detail.urls.full
      }}"
  />
</div>
