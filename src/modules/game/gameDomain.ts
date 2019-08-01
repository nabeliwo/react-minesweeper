export interface Game {
  flags: number
  moves: number
  startTime: Date | null
  elapsedCount: string
}

export function getElapsedCount(startTime: Date) {
  const elapsed = Date.now() - startTime.getTime()
  const s = Math.floor(elapsed / 1000)
  const ms = Math.floor((elapsed % 1000) / 100) / 10
  const count = s + ms
  return Number.isInteger(count) ? `${count}.0` : `${count}`
}
