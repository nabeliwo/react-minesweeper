export const START_TIMER = 'START_TIMER'
export const SET_COUNT = 'SET_COUNT'
export const RESET_GAME = 'RESET_GAME'
export const INCREASE_MOVE = 'INCREASE_MOVE'

export interface StartTimerAction {
  type: typeof START_TIMER
  payload: {
    startTime: Date
  }
}
export interface SetCountAction {
  type: typeof SET_COUNT
  payload: {
    elapsedCount: string
  }
}
export interface ResetGameAction {
  type: typeof RESET_GAME
}
export interface IncreaseMoveAction {
  type: typeof INCREASE_MOVE
}

export function startTimer(startTime: StartTimerAction['payload']['startTime']): StartTimerAction {
  return {
    type: START_TIMER,
    payload: { startTime },
  }
}
export function setCount(elapsedCount: SetCountAction['payload']['elapsedCount']): SetCountAction {
  return {
    type: SET_COUNT,
    payload: { elapsedCount },
  }
}
export function resetGame(): ResetGameAction {
  return {
    type: RESET_GAME,
  }
}
export function increaseMove(): IncreaseMoveAction {
  return {
    type: INCREASE_MOVE,
  }
}

export type GameActionTypes = StartTimerAction | SetCountAction | ResetGameAction | IncreaseMoveAction
