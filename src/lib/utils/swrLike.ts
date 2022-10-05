import { writable } from 'svelte/store'
import fetcher from './fetcher'

const cache: { [key: string]: string } = {}

const swrLike = <T>(url: string) => {
  const store = writable<{ data?: T, error?: unknown }>({})

  if (Object.hasOwn(cache, url)) {
    store.set({ data: JSON.parse(cache[url]), error: undefined })

    return store
  }

  const doFetch = async () => {
    try {
      const data = await fetcher<T>(url)

      if (!data) throw new Error()

      store.update(state => ({ ...state, data, errors: undefined }))
      Object.assign(cache, { [url]: JSON.stringify(data) })
    } catch(error) {
      store.update(state => ({ ...state, error, data: undefined }))
    }
  }

  doFetch()

  return store
}

export default swrLike
