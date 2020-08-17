import React, { Component } from 'react';
import Table from '../common/table';
import { Link } from 'react-router-dom';
import Like from '../common/like';

class MoviesTable extends Component
{
    columns = [
        {
          key: 'title',
          label: 'Title',
          content: m => <Link to={`/movies/${m.id}`}>{m.title}</Link>
        },
        {
          key: 'liked',
          label: 'Liked',
          content: m => (
            <Like liked={m.liked} />
          )
        }
      ];


      render() {
        let { movies } = this.props;
    
        return (
          <Table
            columns={this.columns}
            data={movies}
          />
        );
      }
}

export default MoviesTable;