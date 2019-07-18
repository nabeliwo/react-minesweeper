import { Setting } from './settingDomain'
import { Actions, CHANGE_SETTING } from './settingAction'

const initialState: Setting = {
  cols: 10,
  rows: 10,
  numberOfBombs: 10,
}

export const settingReducer = (state: Setting = initialState, action: Actions): Setting => {
  switch (action.type) {
    case CHANGE_SETTING:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      }

    default:
      return state
  }
}
