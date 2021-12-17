import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategory }) => {
    const [value, setValue] = useState('')

    const onInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim().length > 2) {
            setCategory(currentValue => [value, ...currentValue])
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{value}</p>
            <input type='text' value={value} onChange={onInputChange}></input>

        </ form >
    )

}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}