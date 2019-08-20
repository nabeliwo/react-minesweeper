import { Game } from './gameDomain'
import { GameActionTypes, START_TIMER, SET_COUNT, RESET_GAME, INCREASE_MOVE } from './gameAction'

export const initialState: Game = {
  flags: 0,
  moves: 0,
  startTime: null,
  elapsedCount: '0',
}

export const gameReducer = (state: Game = initialState, action: GameActionTypes): Game => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        startTime: action.payload.startTime,
      }

    case SET_COUNT:
      return {
        ...state,
        elapsedCount: action.payload.elapsedCount,
      }

    case RESET_GAME:
      return initialState

    case INCREASE_MOVE:
      return {
        ...state,
        moves: state.moves + 1,
      }

    default:
      return state
  }
}
