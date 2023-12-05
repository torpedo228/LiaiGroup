export function getImageUrl(name: string) {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

export function getAudioUrl(name: string) {
  return new URL(`../assets/audio/${name}`, import.meta.url).href
}