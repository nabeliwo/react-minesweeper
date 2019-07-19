import { SettingForm } from './settingFormDomain'
import { Actions, CHANGE_SETTING_FORM_VALUE, SET_SETTING_FORM_ERROR, RESET_SETTING_FORM_ERROR } from './settingFormAction'
import { initialState as gameInitialState } from '../game/gameReducer'

const initialState: SettingForm = {
  value: {
    rows: String(gameInitialState.rows),
    cols: String(gameInitialState.cols),
    bombs: String(gameInitialState.bombs),
  },
  errors: [],
}

export const settingFormReducer = (state: SettingForm = initialState, action: Actions): SettingForm => {
  switch (action.type) {
    case CHANGE_SETTING_FORM_VALUE:
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload.key]: action.payload.value,
        },
      }

    case SET_SETTING_FORM_ERROR:
      return {
        ...state,
        errors: action.payload.errors,
      }

    case RESET_SETTING_FORM_ERROR:
      return {
        ...state,
        errors: [],
      }

    default:
      return state
  }
}
