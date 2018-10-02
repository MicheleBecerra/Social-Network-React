import React, { Component } from 'react'
import firebase from 'firebase'
import logo from './logo.png'
import './App.css'
import FileUpload from './FileUpload'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null
    }
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} has iniciado sesión.`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }
  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} has cerrado sesión.`))
      .catch(error => console.log(`Error ${error.code}: 
      ${error.message}`))
  }

  renderLoginButton () {
  // Si esta logeado el usuario
    if (this.state.user) {
      return (
        <div>
          <img width='250' src={this.state.user.photoURL} alt={this.state.user.displayname} />
          <p> Hola {this.state.user.displayName} !</p>
          <FileUpload />
          <button onClick={this.handleLogout}>Salir</button>
        </div>
      )
    } else {
      // Si no esta logeado
      return (
        <button onClick={this.handleAuth}> Login con Google</button>
      )
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>My Social Network for de UX community</h1>
        </div>
        <p className='App-intro'>
          { this.renderLoginButton() }
        </p>

      </div>
    )
  }
}

export default App
