import React, { useState } from 'react'
import { AddCategoryComponent } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategory] = useState(['Do', 'Re', 'Mi'])

    const OkAddCategoriClick = (newValue) => {
        // add 1: create new array, copying values
        //setCategorie(['nuevo', ...categories])
    }

    return (
        <>
            <h4>GifExpertApp</h4>
            <hr />
            <AddCategoryComponent  setCategory={setCategory} />
            <ol>
                {
                    categories.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ol>
        </>
    )
}
