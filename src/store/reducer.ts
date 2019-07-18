import { combineReducers } from 'redux'

import { Setting } from '../modules/setting/settingDomain'
import { settingReducer } from '../modules/setting/settingReducer'

export interface State {
  setting: Setting
}

export function createRootReducer() {
  return combineReducers({
    setting: settingReducer,
  })
}
