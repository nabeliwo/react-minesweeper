export interface FieldSetting {
  rows: number
  cols: number
  bombs: number
}

export enum CellStatus {
  None,
  Flag,
  Open,
}

export interface Field extends FieldSetting {
  bombArray: boolean[]
  cellStatusArray: CellStatus[]
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

export function posToIndex(position: { x: number; y: number }, cols: number) {
  const { x, y } = position

  if (x >= cols || x < 0) return -1
  if (y >= cols || y < 0) return -1

  return cols * y + x
}

export function getNearbyBombs(bombArray: boolean[], cols: number, position: { x: number; y: number }) {
  const { x, y } = position
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
  return neighbors.map(xy => posToIndex({ x: xy[0], y: xy[1] }, cols)).filter(index => bombArray[index] || false).length
}
