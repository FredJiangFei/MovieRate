import React, { Component } from 'react'
import auth from '../services/authService'
import { NavLink } from 'react-router-dom';

class Login extends Component {
  login = () => {
    auth.login();
    window.location = '/';
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <button className="btn btn-primary" onClick={() => this.login()}>
          Login
        </button>
        <NavLink className="nav-item nav-link" to="/register">
          Register
        </NavLink>
      </React.Fragment>
    )
  }
}

export default Login
