import React from 'react';

const Like = props => {
    const className = props.movie.liked ? 'fa fa-heart hand red' : 'fa fa-heart-o hand';
    return <i onClick={() => props.onClick(props.movie)} className={className} />;
}

export default Like;