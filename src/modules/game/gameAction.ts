import { GameSetting } from './gameDomain'

export type Actions = UpdateGameSetting | StartGame | SetCount | ResetGame

export interface UpdateGameSetting {
  type: 'UPDATE_GAME_SETTING'
  payload: {
    setting: GameSetting
  }
}
export interface StartGame {
  type: 'START_GAME'
  payload: {
    startTime: Date
  }
}
export interface SetCount {
  type: 'SET_COUNT'
  payload: {
    elapsedCount: string
  }
}
export interface ResetGame {
  type: 'RESET_GAME'
}

export const UPDATE_GAME_SETTING = 'UPDATE_GAME_SETTING'
export const START_GAME = 'START_GAME'
export const SET_COUNT = 'SET_COUNT'
export const RESET_GAME = 'RESET_GAME'

export function updateGameSetting(setting: UpdateGameSetting['payload']['setting']): UpdateGameSetting {
  return {
    type: UPDATE_GAME_SETTING,
    payload: { setting },
  }
}
export function startGame(startTime: StartGame['payload']['startTime']): StartGame {
  return {
    type: START_GAME,
    payload: { startTime },
  }
}
export function setCount(elapsedCount: SetCount['payload']['elapsedCount']): SetCount {
  return {
    type: SET_COUNT,
    payload: { elapsedCount },
  }
}
export function resetGame(): ResetGame {
  return {
    type: RESET_GAME,
  }
}
