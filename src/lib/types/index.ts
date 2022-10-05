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
export type UnsplashCollection = {
  id: number
  title: string
  description: string
  published_at: Date
  cover_photo: UnsplashImage
  links: {
    self: string
    photos: string
  }
  user: {
    name: string
    links: {
      self: string
    }
  }
}

