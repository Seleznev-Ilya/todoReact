import React, { useEffect } from 'react'

const InputText = ({ value, handleSubmit, holder, inputClassName, onBlur }) => {
    const textInput = React.createRef()

    useEffect(() => {
        textInput.current.focus()
    })

    return (
        <input
            ref={textInput}
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
