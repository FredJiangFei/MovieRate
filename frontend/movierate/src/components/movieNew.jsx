import React, { Component } from 'react'
import { rearg } from 'lodash'
import Form from '../common/form'

class MovieNew extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>New Movie</h2>
        <form>
            {this.renderInput('title', 'Title')}
        </form>
      </React.Fragment>
    )
  }
}

export default MovieNew
