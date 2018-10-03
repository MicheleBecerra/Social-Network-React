import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const history = createHistory()
// se conecta el router con redux con  dos middelware history y thunk
const middleware = [ routerMiddleware(history), thunk ]
// La store tiene todos los valores de la aplicación allí se pide la info
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)
// Provider es la conección con redux y react
ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>
  ,
  document.getElementById('root'))

serviceWorker.unregister()
