import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( {title, url} ) => {

    return (

        //En vez de class, se usa className en react
        <div className="card animate__animated animate__backInLeft">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
