import { combineReducers } from 'redux'

import { Field } from '../modules/field/fieldDomain'
import { fieldReducer } from '../modules/field/fieldReducer'
import { Config } from '../modules/config/configDomain'
import { configReducer } from '../modules/config/configReducer'
import { Game } from '../modules/game/gameDomain'
import { gameReducer } from '../modules/game/gameReducer'

export interface State {
  field: Field
  config: Config
  game: Game
}

export function createRootReducer() {
  return combineReducers({
    field: fieldReducer,
    config: configReducer,
    game: gameReducer,
  })
}
