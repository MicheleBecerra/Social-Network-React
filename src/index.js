import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

firebase.initializeApp({
  apiKey: 'AIzaSyBilTmXp2Lmrv2IS07xFDaM37kJRMOY8J8',
  authDomain: 'social-network-react-2546b.firebaseapp.com',
  databaseURL: 'https://social-network-react-2546b.firebaseio.com',
  projectId: 'social-network-react-2546b',
  storageBucket: 'social-network-react-2546b.appspot.com',
  messagingSenderId: '378512322482'
})

ReactDOM.render(
  <App />,
  document.getElementById('root'))

registerServiceWorker()
