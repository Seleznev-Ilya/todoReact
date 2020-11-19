import React, { useState } from 'react'
import InputText from '../InputText/Index'

const InputItem = ({ className, onSubmitInput }) => {
    const [value, setValue] = useState('')

    const onChangeInput = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const itemSubmit = (event) => {
        event.preventDefault()
        onSubmitInput(value)
    }

    return (
        <div className={className}>
            <form onSubmit={itemSubmit}>
                <InputText
                    onChangeInput={onChangeInput}
                    onBlur={itemSubmit}
                    value={value}
                />
            </form>
        </div>
    )
}

export default InputItem
