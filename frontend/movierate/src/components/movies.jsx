import React, { Component } from 'react'
import { getMovies } from '../services/movieService'

class Movies extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    const { data: movies } = await getMovies()
    this.setState({
      movies,
    })
  }

  render() {
    let { movies } = this.state;  
    return (
      <React.Fragment>
        <div className="row">
          <h2>Movive Components</h2>
        </div>

        <div className="row">
          <table>
            <tbody>
              {movies.map((m) => (
                <tr key={m.id}>
                  <td> { m.title } </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
}

export default Movies
