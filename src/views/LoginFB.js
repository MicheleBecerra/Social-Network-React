import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

import './index.css'
import 'materialize-css/dist/css/materialize.min.css'

class LoginFB extends Component {
// Se declaran los metodos que se usaran para la auteticaciñon de facebook.
  constructor() {
    super()
    this.responseFacebook = this.responseFacebook.bind(this)
    this.onFailure = this.onFailure.bind(this)
  }
  responseFacebook(response) {
    console.log(response)
    //TODO

  }
  onFailure(error) {
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
              <button className='waves-effect waves-light btn red accent-4' id='Google'>
              Google
                <i className='fa fa-google' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginFB
