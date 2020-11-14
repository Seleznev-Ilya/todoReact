import React from 'react'

import InputText from '../InputText/Index'

const InputMain = ({
    className,
    onSubmitInput,
    handleSubmit,
    value,
    inputClassName,
    holder,
    onBlur,
}) => {
    return (
        <div className={className}>
            <form onSubmit={onSubmitInput}>
                <InputText
                    onBlur={onBlur}
                    inputClassName={inputClassName}
                    value={value}
                    holder={holder}
                    handleSubmit={handleSubmit}
                />
            </form>
        </div>
    )
}

export default InputMain
