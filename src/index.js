import React from 'react'
import ReactDOM from 'react-dom'

import express from 'express'
import morgan from 'morgan'
import path from 'path'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const app = express()

// Settings: se establece la configuracion del puerto, ya que puede tomar el puerto que nos indiquen al hacer el deployd o tomar el puerto local
app.set('port', process.env.PORT || 3000)
// Los Middelware: son funciones que se ejecutan cada vez que hay una peticion al servidor. Pero se ejecutan antes de que lleguen las rutas.
app.use(morgan('dev'))
app.use(express.json()) // Para entender un formato de intercambio de datos, va a funcionar cada vez que llegue una peticion al servidor, se tiene que asegurar que esta solicitud en formato .json

// Routes: se define  un rest API, para manejar las peticiones y obtener datos, actuualizarlo y eliminarlos
app.use('/api/tasks', require('./routes/task-routes'))

// Static files
app.use(express.static(path.join(__dirname, '/public')))
// console.log(path.join(__dirname, '/public'))

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})

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
