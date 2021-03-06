import React from 'react'
import ReactDOM from 'react-dom'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import App from './components/App'
import { Detector } from 'react-detect-offline'

import reducers from './redux/reducers'

import './assets/styles/App.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(
  <Provider store={store}>
    <Detector render={({ online }) => <App isOffline={!online} />} />
  </Provider>,
  document.querySelector('#root'),
)
