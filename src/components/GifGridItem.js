import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    return (

        //En vez de class, se usa className en react
        <div className="card animate__animated animate__backInLeft">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
