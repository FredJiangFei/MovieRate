import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import auth from '../services/authService'

class NavBar extends Component {
  logout = () => {
    auth.logout()
    window.location = '/login'
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex w-100">
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/movies">
                Movies
              </NavLink>
            </React.Fragment>
            <span className="fill-remaining-space" />
            <span
              className="hand"
              onClick={() => this.logout()}
              style={{ marginTop: 8 }}
            >
              Logout
            </span>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
