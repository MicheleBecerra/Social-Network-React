import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions'

import './index.css'
import 'materialize-css/dist/css/materialize.min.css'

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
  // this.props.getUsers()
  // console.log(this.props)
  }
  onLogout(evento) {
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
            <img className='circle Home-avatar right' src={this.state.profileImage} />
            <a className='brand-logo right'>{this.state.fullName}</a>
            <ul id='nav-mobile' className='left hide-on-and-down'>
              <li>
                <i  onClick={ this.onLogout }   className='Home-logout fa fa-power-off' />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

// esta función convierte el valor que se solicita a la store en una propiedad para el componente.

function mapStateToProps (state) {
  return {
    users: state.getUsers
  }
}

// Se usa la función mapDispatch.. y se le manda como argumento dispatch y se importanbindActionsCreators a esta funcion se le pasa como argumento getUsers y dispatch. Se emite el evento y se llevan a cabo las acciones.

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    getUsers
  }, dispatch)
}
// los metodos se pasan al componente y los conectan con Home
export default connect(mapStateToProps, mapDispatchToProps)(Home)
