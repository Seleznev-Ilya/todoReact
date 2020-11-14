import React from 'react'

const InputText = ({ value, handleSubmit, holder, inputClassName, onBlur }) => {
    return (
        <input
            onBlur={onBlur}
            className={inputClassName}
            type="text"
            placeholder={holder}
            value={value}
            onChange={handleSubmit}
        />
    )
}

export default InputText
