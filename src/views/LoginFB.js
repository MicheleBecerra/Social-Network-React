import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { Redirect } from 'react-router-dom'
// import logo from '../views/logo.png'

import './index.css'
import logo from '../logo.png'
import 'materialize-css/dist/css/materialize.min.css'

class LoginFB extends Component {
// Se declaran los metodos que se usaran para la auteticaciñon de facebook.
  constructor () {
    super()
    this.state = {
      isLogged: false
    }
    this.responseFacebook = this.responseFacebook.bind(this)
    this.responseGoogle = this.responseGoogle.bind(this)
    this.onFailure = this.onFailure.bind(this)
  }
  // componentWillMount() {
  //   if (localStorage.getItem("fbData") || localStorage.getItem ("googleData")) {
  //     this.setState({ isLogged: true })
  //   }
  // }
  responseFacebook (response) {
    localStorage.setItem('fbData', JSON.stringify({
      token: response.token,
      email: response.email,
      name: response.name,
      picture: response.picture.data.url,
      social: 'fb'
    }))

    this.setState({ isLogged: true })
  }

  responseGoogle (response) {   
    localStorage.setItem('googleData', JSON.stringify({
      token: response.token,
      email: response.profileObj.email,
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl,
      social: 'google'      
    }))

    this.setState({ isLogged: true })
  }

  onFailure (error) {
    console.log(error)
  }

  render () {
    if (this.state.isLogged) {
      return (<Redirect to='/Home/' />)
    }
    return (
      <div className='LoginFB' >
        <div className='Login-box'>
          <img src={logo} className='App-logo' alt='logo' />
          <h3>My Social Network </h3>
          <div className='card'>
            <h4> Iniciar Sesión </h4>
            <div className='card-content' >           
              <FacebookLogin
                appId='2382997538383978'
                autoload={false}
                fields='name, email, picture.width(120)'
                callback={this.responseFacebook}
                onFailure={this.onFailure}
                textButton='Facebook'
                cssClass='waves-effect waves-light btn blue darken-3'
                icon='fa fa-facebook'/>
              <br />
              <GoogleLogin
                clientId='393097308835-dj9p8q455kig817cdqtcpf2l6beshpn2.apps.googleusercontent.com'
                autoLoad={false}
                onSuccess={this.responseGoogle}
                onFailure={this.onFailure}
                className='waves-effect waves-light btn red accent-4'>
                <i className='fa fa-google' />
                <span> google </span>
              </GoogleLogin>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default LoginFB
