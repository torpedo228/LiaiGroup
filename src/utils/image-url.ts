export function getImageUrl(name: string) {
  console.log(import.meta.url)
  return new URL(`../assets/images/${name}`, import.meta.url).href
}