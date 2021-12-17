import React, { useState, useEffect } from 'react'
import { ListItemImage } from './ListItemImage'
import { getGifs } from '../helpers/getGifs'

export const Listitem = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category)
            .then(imgs => setImages(imgs))
    }, [category])


    return (
        <>
            <h1>{category}</h1>
            <div className='card-grid'>
                {
                    images.map(item => (
                        <ListItemImage
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </div>
        </>
    )
}