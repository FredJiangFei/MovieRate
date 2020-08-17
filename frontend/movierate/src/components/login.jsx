import React, { Component } from 'react'
import auth from '../services/authService'

class Login extends Component {
  login = () => {
    auth.login()
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <button className="btn btn-primary" onClick={() => this.login()}>
          Login
        </button>
      </React.Fragment>
    )
  }
}

export default Login
