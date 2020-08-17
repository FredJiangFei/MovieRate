import React from 'react';

const Like = props => {
    const className = props.liked ? 'fa fa-heart hand red' : 'fa fa-heart-o hand';
    return <i className={className} />;
}

export default Like;