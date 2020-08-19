import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieDetail extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.match.params.id}</h1>
                <Link to="/movies">Back</Link>
            </React.Fragment>
        )
    }
}

export default MovieDetail;