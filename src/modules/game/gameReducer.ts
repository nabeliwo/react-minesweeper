import { Game } from './gameDomain'
import { Actions, START_GAME, UPDATE_GAME_SETTING, SET_COUNT } from './gameAction'

export const initialState: Game = {
  rows: 10,
  cols: 10,
  bombs: 10,
  flags: 0,
  moves: 0,
  startTime: null,
  elapsedCount: '0',
}

export const gameReducer = (state: Game = initialState, action: Actions): Game => {
  switch (action.type) {
    case UPDATE_GAME_SETTING:
      return {
        ...state,
        ...action.payload.setting,
      }

    case START_GAME:
      return {
        ...state,
        startTime: action.payload.startTime,
      }

    case SET_COUNT:
      return {
        ...state,
        elapsedCount: action.payload.elapsedCount,
      }

    default:
      return state
  }
}
