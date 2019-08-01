import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { configureStore } from './store/configureStore'
import { Game } from './modules/game/gameAdapter'

const store = configureStore({})

const render = (GameComponent: typeof Game) => {
  ReactDOM.render(
    <Provider store={store}>
      <GameComponent />
    </Provider>,
    document.getElementById('root'),
  )
}

render(Game)

if (module.hot) {
  module.hot.accept('./modules/game/gameAdapter', () => {
    const { Game: GameComponent }: { Game: typeof Game } = require('./modules/game/gameAdapter')
    render(GameComponent)
  })
}
