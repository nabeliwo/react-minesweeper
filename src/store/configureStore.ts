import { applyMiddleware, compose, createStore, Store } from 'redux'

import { createRootReducer } from './reducer'

const isDevelopment = process.env.NODE_ENV === 'development'

const createEnhancer = () => {
  const composeEnhancers =
    isDevelopment && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
      : compose

  return composeEnhancers(applyMiddleware(...(isDevelopment ? [require('redux-logger').default] : [])))
}

export const configureStore = (preloadedState: object = {}) => {
  const store: Store = createStore(createRootReducer(), preloadedState, createEnhancer())

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const { createRootReducer: createNextRootReducer }: { createRootReducer: typeof createRootReducer } = require('./reducer')
      store.replaceReducer(createNextRootReducer())
    })
  }

  return store
}
