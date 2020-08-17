import React, { Component } from 'react'
import { getMovies } from '../services/movieService'
import { Link } from 'react-router-dom'
import MoviesTable from './moviesTable'

class Movies extends Component {
  state = {
    movies: [],
  }

  getPagedData = () => {

  }

  async componentDidMount() {
    const { data: movies } = await getMovies()
    this.setState({
      movies,
    })
  }

  render() {
    let { movies } = this.state;  
    const totalCount = movies.length;

    return (
      <React.Fragment>
        <div className="row">
          <h2>Movive Components</h2>
        </div>
        <div className="row">
          <div className="col">
            <Link
                to="/movies/new"
                className="btn btn-primary"
                style={{ marginBottom: 20 }}
              >
              New Movie
            </Link>
            <p>Showing {totalCount} movies.</p>

            <MoviesTable
              movies={movies}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Movies
