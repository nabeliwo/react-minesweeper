import { combineReducers } from 'redux'

import { SettingForm } from '../modules/settingForm/settingFormDomain'
import { settingFormReducer } from '../modules/settingForm/settingFormReducer'
import { Game } from '../modules/game/gameDomain'
import { gameReducer } from '../modules/game/gameReducer'

export interface State {
  settingForm: SettingForm
  game: Game
}

export function createRootReducer() {
  return combineReducers({
    settingForm: settingFormReducer,
    game: gameReducer,
  })
}
