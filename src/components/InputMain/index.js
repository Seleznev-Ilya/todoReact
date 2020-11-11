import React from 'react'

import InputText from '../InputText/Index'

const InputMain = ({ className, onSubmitInput, handleSubmit, value }) => {
    return (
        <div className={className}>
            <form onSubmit={onSubmitInput}>
                <InputText
                    value={value}
                    holder="what need to be done"
                    handleSubmit={handleSubmit}
                />
            </form>
        </div>
    )
}

export default InputMain
