import React, { useState } from 'react'
import { AddCategoryComponent } from './components/AddCategory'
import { ListItems_versionB } from './components/ListItems_versionB'

export const GifExpertApp_versionB = () => {

    const [categories, setCategory] = useState(['Do', 'Re', 'Mi'])
 
    return (
        <>
            <h4>GifExpertApp</h4>
            <hr />
            <AddCategoryComponent setCategory={setCategory} />
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
