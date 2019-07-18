import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    const { App: NewApp } = require('./App')
    ReactDOM.render(<NewApp />, document.getElementById('root'))
  })
}
