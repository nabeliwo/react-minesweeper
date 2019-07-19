export interface GameSetting {
  rows: number
  cols: number
  bombs: number
}

export interface Game extends GameSetting {
  flags: number
  moves: number
  startTime: Date | null
}
