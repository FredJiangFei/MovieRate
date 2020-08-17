import React, { Component } from 'react';

class MovieDetail extends Component{
    render(){
        return(
            <h1>{this.props.match.params.id}</h1>
        )
    }
}

export default MovieDetail;