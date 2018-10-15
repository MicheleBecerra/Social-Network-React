import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './index.css'
import 'materialize-css/dist/css/materialize.min.css'

// El componente solo recibe propiedades, no maneja los estados.
class Home extends Component {
  // Se crea el constructor
  constructor () {
    super()
    this.state = {
      profileImage: '',
      fullName: '',
      isLogout: false
    }
    this.onLogout = this.onLogout.bind(this)
  }

  // Se usa el método de ciclo de vida
  componentWillMount () {
    let fbData = JSON.parse(localStorage.getItem('fbData'))
    let googleData = JSON.parse(localStorage.getItem('googleData'))
    if (!fbData && !googleData) {
      this.setState({ isLogout: true })
    }
    if (fbData) {
      this.setState({ profileImage: fbData.picture, fullName: fbData.name })
    } else if (googleData) {
      this.setState({ profileImage: googleData.picture, fullName: googleData.name })
    }
  }

  onLogout (evento) {
    // Resetear los valores del local storage y redireccionar al inicio de la aplicacion.
    localStorage.clear()
    this.setState({ isLogout: true })
  }

  render () {
    if (this.state.isLogout) {
      return (<Redirect to='/' />)
    }

    return (
      <div className='Home'>
        <nav className='nav-extended'>
          <div className='nav-wrapper'>
            <img className='circle Home-avatar right' src={this.state.profileImage} alt='' />
            <a className='brand-logo right'>{this.state.fullName}</a>
            <ul id='nav-mobile' className='left hide-on-and-down'>
              <li>
                <i onClick={this.onLogout} className='Home-logout fa fa-power-off' />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

// los metodos se pasan al componente y los conectan con Home
export default Home
