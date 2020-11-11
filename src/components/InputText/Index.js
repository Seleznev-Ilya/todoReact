import React from 'react'

const InputText = ({ value, handleSubmit, holder }) => {
    return (
        <input
            type="text"
            placeholder={holder}
            value={value}
            onChange={handleSubmit}
        />
    )
}

export default InputText
