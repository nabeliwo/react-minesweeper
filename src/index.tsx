import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const { App: NewApp } = require('./components/App')
    ReactDOM.render(<NewApp />, document.getElementById('root'))
  })
}
