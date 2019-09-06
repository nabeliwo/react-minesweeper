import { Config } from './configDomain'
import { ConfigActionTypes, CHANGE_CONFIG, SET_CONFIG_ERROR, RESET_CONFIG_ERROR } from './configAction'
import { initialState as fieldInitialState } from '../field/fieldReducer'

const initialState: Config = {
  value: {
    rows: String(fieldInitialState.rows),
    cols: String(fieldInitialState.cols),
    bombs: String(fieldInitialState.bombs),
    bombEmoji: String(fieldInitialState.bombEmoji),
    nonbombEmoji: String(fieldInitialState.nonbombEmoji),
  },
  errors: [],
}

export const configReducer = (state: Config = initialState, action: ConfigActionTypes): Config => {
  switch (action.type) {
    case CHANGE_CONFIG:
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload.key]: action.payload.value,
        },
      }

    case SET_CONFIG_ERROR:
      return {
        ...state,
        errors: action.payload.errors,
      }

    case RESET_CONFIG_ERROR:
      return {
        ...state,
        errors: [],
      }

    default:
      return state
  }
}
