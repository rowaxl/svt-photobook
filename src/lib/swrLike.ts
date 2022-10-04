import { writable } from 'svelte/store'
import fetcher from './fetcher'

export type UnsplashImage = {
  id: string
  alt_description: string | null
  likes: number
  links: {
    download: string
    html: string
  }
  urls: {
    full: string
    small: string
  }
}

const cache: { [key: string]: UnsplashImage[] } = {}

const swrLike = (url: string) => {
  const store = writable<{ data?: UnsplashImage[], error?: unknown }>({})

  if (Object.hasOwn(cache, url)) {
    store.set({ data: cache[url], error: undefined })

    return store
  }

  const doFetch = async () => {
    try {
      const data = await fetcher(url)

      store.update(state => ({ ...state, data, errors: undefined }))
      Object.assign(cache, { [url]: data })
    } catch(error) {
      store.update(state => ({ ...state, error, data: undefined }))
    }
  }

  doFetch()

  return store
}

export default swrLike
