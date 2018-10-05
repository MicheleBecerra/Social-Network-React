import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

import './index.css'
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
  responseFacebook (response) {
    console.log(response)
    // TODO
    this.setState({ isLogged: true })
  }

  responseGoogle (response) {
    console.log(response)
}

  onFailure (error) {
    console.log(error)
  }

  render () {
    return (
      <div className='LoginFB' >
        <div className='Login-box'>
          <div className='card'>
            <div className='card-content'>
              <FacebookLogin
                appId='2382997538383978'
                autoload={false}
                fields='name, email, picture.width(120)'
                callback={this.responseFacebook}
                onFailure={this.onFailure}
                textButton='Facebook'
                cssClass='waves-effect waves-light btn blue darken-3'
                icon='fa fa-facebook'
              />          
              <br />
              <br />
              <GoogleLogin 
                // clientId='393097308835-cps1kqn0dmbpq4m3j9p9306v37dg7tgg.apps.googleusercontent.com'
                clientId='393097308835-9jlrq6eqtt4opj0cquuc8i8uq8qfr68u.apps.googleusercontent.com'
                autoLoad={ false }
                onSuccess= {this.responseGoogle}
                onFailure={this.onFailure}
                className='waves-effect waves-light btn red accent-4'>
                <i className='fa fa-google' />
                <span> Iniciar Sesión </span>
              >
              </GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginFB
