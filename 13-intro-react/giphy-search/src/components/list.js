import React from 'react'
import Gif from './gif.js'

const GifList = props => {
    return (
        <div className="page">
            <div className="gif-list">
                {props.gifs.map(gif => {
                    return (
                        <Gif key={gif.id} gif={gif} />
                    )
                })}
            </div>
        </div>
    )
}

export default GifList