import { GameSetting } from './gameDomain'

export type Actions = StartGame | UpdateGameSetting

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

export const UPDATE_GAME_SETTING = 'UPDATE_GAME_SETTING'
export const START_GAME = 'START_GAME'

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
