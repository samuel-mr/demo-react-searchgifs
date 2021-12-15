import React, { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategorie] = useState(['Do', 'Re', 'Mi'])

    const OkAddCategoriClick = () => {
        // add 1: create new array, copying values
        //setCategorie(['nuevo', ...categories])
        // add 2: with callback, add new item
        setCategorie(currentValue => ['hoa', ...currentValue])
    }
    return (
        <>
            <h4>GifExpertApp</h4>
            <hr />
            <button onClick={OkAddCategoriClick}>Agregar ss</button>
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
