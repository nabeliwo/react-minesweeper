export interface GameSetting {
  rows: number
  cols: number
  bombs: number
}

export interface Game extends GameSetting {
  flags: number
  moves: number
  startTime: Date | null
  elapsedCount: string
  bombArray: boolean[]
}

export function getElapsedCount(startTime: Date) {
  const elapsed = Date.now() - startTime.getTime()
  const s = Math.floor(elapsed / 1000)
  const ms = Math.floor((elapsed % 1000) / 100) / 10
  const count = s + ms
  return Number.isInteger(count) ? `${count}.0` : `${count}`
}

export function getBombArray(bombs: number, cells: number) {
  const array: boolean[] = []

  for (let i = 0; i < bombs; i++) {
    array.push(true)
  }

  for (let n = 0; n < cells - bombs; n++) {
    array.push(false)
  }

  return shuffleArray(array)
}

function shuffleArray<T>(original: T[]): T[] {
  const array = [...original]

  for (let i = array.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1))
    const tmp = array[i]

    array[i] = array[r]
    array[r] = tmp
  }

  return array
}

function getPosToIndexFunc(cols: number) {
  return function(x: number, y: number) {
    if (x >= cols || x < 0) return -1
    if (y >= cols || y < 0) return -1
    return cols * y + x
  }
}

export function isBomb(bombArray: boolean[], cols: number, position: { x: number; y: number }) {
  const { x, y } = position
  const index = getPosToIndexFunc(cols)(x, y)
  return bombArray[index] || false
}

export function getNearbyBombs(bombArray: boolean[], cols: number, position: { x: number; y: number }) {
  const { x, y } = position
  const posToIndex = getPosToIndexFunc(cols)
  const neighbors = [
    [x, y - 1],
    [x, y + 1],
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ]
  return neighbors.map(xy => posToIndex(xy[0], xy[1])).filter(index => bombArray[index] || false).length
}
