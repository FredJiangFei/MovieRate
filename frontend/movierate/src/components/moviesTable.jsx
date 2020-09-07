import React, { Component } from 'react'
import Table from '../common/table'
import { Link } from 'react-router-dom'
import Like from '../common/like'

class MoviesTable extends Component {
  state = {
    pageIndex: 1,
    perPage: 3
  }

  columns = [
    {
      key: 'title',
      label: 'Title',
      content: (m) => <Link to={`/movies/${m.id}`}>{m.title}</Link>,
    },
    {
      key: 'liked',
      label: 'Liked',
      content: (m) => <Like movie={m} onClick={this.props.handleLike}/>,
    },
    {
      key: 'delete',
      label: 'Delete',
      content: (m) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(m)}
        >
          Delete
        </button>
      ),
    },
  ]

  render() {
    let movies = this.props.movies;
    // const pages = Math.ceil(this.props.data.length / this.props.perPage);

    return <Table columns={this.columns} data={movies}/>
  }
}

export default MoviesTable
