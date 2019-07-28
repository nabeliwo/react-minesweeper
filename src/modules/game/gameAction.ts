import { GameSetting } from './gameDomain'

export type Actions = SetMap | UpdateGameSetting | StartTimer | SetCount | ResetGame

export interface SetMap {
  type: 'SET_MAP'
  payload: {
    setting: GameSetting
  }
}
export interface UpdateGameSetting {
  type: 'UPDATE_GAME_SETTING'
  payload: {
    setting: GameSetting
  }
}
export interface StartTimer {
  type: 'START_TIMER'
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

export const SET_MAP = 'SET_MAP'
export const UPDATE_GAME_SETTING = 'UPDATE_GAME_SETTING'
export const START_TIMER = 'START_TIMER'
export const SET_COUNT = 'SET_COUNT'
export const RESET_GAME = 'RESET_GAME'

export function setMap(setting: SetMap['payload']['setting']): SetMap {
  return {
    type: SET_MAP,
    payload: { setting },
  }
}
export function updateGameSetting(setting: UpdateGameSetting['payload']['setting']): UpdateGameSetting {
  return {
    type: UPDATE_GAME_SETTING,
    payload: { setting },
  }
}
export function startTimer(startTime: StartTimer['payload']['startTime']): StartTimer {
  return {
    type: START_TIMER,
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
