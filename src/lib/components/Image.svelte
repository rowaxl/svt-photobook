<script lang="ts">
  import type { Action } from 'svelte/types/runtime/action'
  import { fade } from 'svelte/transition'
	import type { UnsplashImage } from "$lib/types";
  import placeholder from '$lib/images/placeholder.png'

  export let detail: UnsplashImage
  export const isThumbnail: boolean = false

  const lazyload: Action<HTMLElement, { src: string }> = (node, data) => {
    if (!data) return

    const img = new Image()
    img.src = data.src

    img.onload = () => {
      setTimeout(() =>  {
        node.setAttribute('src', data.src)
        node.classList.remove('animate-pulse')
      }, 1000)
    }
  }
</script>

<div class="w-full h-48 rounded">
  <img
    class="object-cover rounded w-full h-full animate-pulse"
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
