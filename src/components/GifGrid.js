import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category); 

    return (
        <> 
        <h3 className="animate__animated animate__pulse">{category}</h3>
        { loading && <p className="animate__animated animate__fadeOut">Loading...</p>}
        <div className="card-grid">
                {
                    data.map( img => 
                        (
                            <GifGridItem 
                                {...img}
                                key={img.id}/>
                        )
                    )
                }
           
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
