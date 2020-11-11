import React from 'react'
import InputMain from '../InputMain/index'

const Task = ({ className, onSubmitInput, handleSubmit, value }) => {
    return (
        <div className={className}>
            <InputMain
                className={'InputMain'}
                onSubmitInput={onSubmitInput}
                handleSubmit={handleSubmit}
                value={value}
            />
        </div>
    )
}

export default Task
