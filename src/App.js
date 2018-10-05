import React, { Component } from 'react'
import {Route, Router} from 'react-router'
import PropTypes from 'prop-types'
import './App.css'



import Home from './views/Home'
import LoginFB from './views/LoginFB'

class App extends Component {
  render () {
    return (
      <Router history={this.props.history}>
        <div className='App'>
          <Route exact path='/' component={LoginFB} />
          <Route exact path='/Home' component={Home} />
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  history: PropTypes.any.isRequired
}

export default App
