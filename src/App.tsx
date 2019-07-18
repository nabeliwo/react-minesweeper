import * as React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from './store/configureStore'
import { Board } from './components/Board'

const store = configureStore({})

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Board />
  </Provider>
)
