const ACCESS_KEY = import.meta.env.VITE_API_ACCESS_KEY

export default async (url: string) => {
  const res = await fetch(url + `?client_id=${ACCESS_KEY}`, {
      headers: { "Accept": "application/json" }
  })
  return await res.json()
}