import React from 'react'
import InputText from '../InputText/Index'

const InputMain = ({ className, onSubmitInput, handleSubmit, value }) => {
    return (
        <div className={className}>
            <form onSubmit={onSubmitInput}>
                <InputText value={value} handleSubmit={handleSubmit} />
            </form>
        </div>
    )
}

export default InputMain
