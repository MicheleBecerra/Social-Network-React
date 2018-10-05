import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions'



class Home extends Component {
  // Se usa el método de ciclo de vida 
  componentWillMount() {
    this.props.getUsers()
    // console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2> Home </h2>
      </div>
    )
  }
}

// esta función convierte el valor que se solicita a la store en una propiedad para el componente.

function mapStateToProps(state) {
  return{
    users: state.getUsers
}
}

// Se usa la función mapDispatch.. y se le manda como argumento dispatch y se importanbindActionsCreators a esta funcion se le pasa como argumento getUsers y dispatch. Se emite el evento y se llevan a cabo las acciones.

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({
    getUsers
  }, dispatch)
}
// los metodos se pasan al componente y los conectan con Home
export default connect (mapStateToProps, mapDispatchToProps)(Home)
