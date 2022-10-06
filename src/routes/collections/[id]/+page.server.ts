import type { UnsplashCollection, UnsplashImage } from '$lib/types'
import fetcher from '$lib/utils/fetcher'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  if (params.id) {
    try {
      const collectionDetail = await fetcher<UnsplashCollection>(`https://api.unsplash.com/collections/${params.id}`)
      const collectionPhotos = await fetcher<UnsplashImage[]>(`https://api.unsplash.com/collections/${params.id}/photos`)

      return {
        id: params.id,
        detail: collectionDetail,
        photos: collectionPhotos
      }
    } catch {
      throw error(500, 'Internal Error')
    }
  }

  throw error(404, 'Not found')
}