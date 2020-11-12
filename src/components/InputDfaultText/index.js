import React from 'react'

const InputDefaultText = ({ value, handleSubmit, holder }) => {
    return (
        <input
            type="text"
            placeholder={holder}
            defaultValue={value}
            onChange={handleSubmit}
        />
    )
}

export default InputDefaultText
