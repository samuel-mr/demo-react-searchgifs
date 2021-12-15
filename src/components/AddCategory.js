import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategoryComponent = ({ setCategory }) => {
    const [value, setValue] = useState('')

    const onInputChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setCategory(currentValue => [value, ...currentValue])
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={onInputChange}></input>

        </ form >
    )
}

AddCategoryComponent.propTypes = {
    setCategory: PropTypes.func.isRequired
}