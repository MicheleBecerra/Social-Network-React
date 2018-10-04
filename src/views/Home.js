import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions'



class Home extends Component {
  // Se usa el método de ciclo de vida 
  componentWillMount() {
    this.props.getUsers()
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({
    getUsers
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(Home)
