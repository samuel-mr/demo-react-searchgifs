import React from 'react'
import { ListItemImage } from './ListItemImage'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const ListItems_versionB = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category)


    return (
        <>
            <h1 className='animate__animated animate__slideInDown'>{category}</h1>
            {loading && <div className='animate__animated animate__flash'>Cargando... </div>}
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