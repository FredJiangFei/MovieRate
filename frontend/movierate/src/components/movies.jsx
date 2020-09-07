import React, { Component } from 'react';
import { getMovies } from '../services/movieService';
import { Link } from 'react-router-dom';
import MoviesTable from './moviesTable';
import Pagination from '../common/pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
  state = {
    movies: [],
    pageSize : 3,
    currentPage: 1
  }

  getPagedData = () => {}

  async componentDidMount() {
    const { data: movies } = await getMovies()
    this.setState({
      movies,
    })
  }

  handleDelete = (m) => {
    let movies = this.state.movies.filter((x) => x.id !== m.id)
    this.setState({ movies })
  }

  handleLike = (m) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(m)
    movies[index] = { ...movies[index] }
    movies[index].liked = !movies[index].liked
    this.setState({
      movies,
    })
  }

  handlePageChange = (n) => {
    this.setState({
      currentPage: n
    });
  }

  render() {
    let { movies: allMovies, pageSize, currentPage } = this.state
    const movies = paginate(allMovies, currentPage, pageSize);
    const totalCount = movies.length

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

            {totalCount > 0 && <p>Showing {totalCount} movies.</p>}
            {totalCount === 0 && <p>No movies.</p>}

            <MoviesTable
              movies={movies}
              onDelete={this.handleDelete}
              handleLike={this.handleLike}
            />

            <Pagination
              itemsCount={allMovies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            ></Pagination>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Movies
