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

export enum GameStatus {
  Progress,
  Clear,
  GameOver,
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

function getNeighbors(position: { x: number; y: number }) {
  const { x, y } = position
  return [[x, y - 1], [x, y + 1], [x - 1, y - 1], [x - 1, y], [x - 1, y + 1], [x + 1, y - 1], [x + 1, y], [x + 1, y + 1]]
}

export function posToIndex(position: { x: number; y: number }, cols: number) {
  const { x, y } = position

  if (x >= cols || x < 0) return -1
  if (y >= cols || y < 0) return -1

  return cols * y + x
}

export function getNearbyBombs(bombArray: boolean[], cols: number, position: { x: number; y: number }) {
  const neighbors = getNeighbors(position)
  return neighbors.map(xy => posToIndex({ x: xy[0], y: xy[1] }, cols)).filter(index => bombArray[index] || false).length
}

export function getGameStatus(bombArray: boolean[], cellStatusArray: CellStatus[]) {
  let gameStatus = GameStatus.Progress

  if (cellStatusArray.every(status => status !== CellStatus.None)) {
    if (bombArray.every((isBomb, index) => !isBomb || (isBomb && cellStatusArray[index] === CellStatus.Flag))) {
      gameStatus = GameStatus.Clear
    } else {
      gameStatus = GameStatus.GameOver
    }
  }

  return gameStatus
}

// Destructive function
export function openNeighborCellsRecursive(
  position: { x: number; y: number },
  cellStatusArray: CellStatus[],
  bombArray: boolean[],
  cols: number,
) {
  const neighbors = getNeighbors(position)

  for (let i = 0; i < neighbors.length; i++) {
    const index = posToIndex({ x: neighbors[i][0], y: neighbors[i][1] }, cols)

    if (cellStatusArray[index] === CellStatus.None && !bombArray[index]) {
      const currentPosition = {
        x: neighbors[i][0],
        y: neighbors[i][1],
      }

      cellStatusArray[index] = CellStatus.Open

      if (getNearbyBombs(bombArray, cols, currentPosition) === 0) {
        openNeighborCellsRecursive(currentPosition, cellStatusArray, bombArray, cols)
      }
    }
  }
}
