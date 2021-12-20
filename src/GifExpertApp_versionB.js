import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { ListItems_versionB } from './components/ListItems_versionB'

export const GifExpertApp_versionB = ({ defaultArray = ['Do', 'Re', 'Mi'] }) => {

    const [categories, setCategory] = useState(defaultArray)

    return (
        <>
            <h4>GifExpertApp</h4>
            <hr />
            <AddCategory setCategory={setCategory} />
            <ol>
                {
                    categories.map(item => {
                        return <ListItems_versionB key={item} category={item} />
                    })
                }
            </ol>
        </>
    )
}
