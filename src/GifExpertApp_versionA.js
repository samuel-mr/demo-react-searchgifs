import React, { useState } from 'react'
import { AddCategoryComponent } from './components/AddCategory'
import { Listitem } from './components/ListItems_versionA'

export const GifExpertApp_versionA = () => {

    const [categories, setCategory] = useState(['Do', 'Re', 'Mi'])
 
    return (
        <>
            <h4>GifExpertApp</h4>
            <hr />
            <AddCategoryComponent setCategory={setCategory} />
            <ol>
                {
                    categories.map(item => {
                        return <Listitem key={item} category={item} />
                    })
                }
            </ol>
        </>
    )
}
