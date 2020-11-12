import React from 'react'

import InputMain from '../InputMain/index'
import SelectAllButton from '../SelectAllButton/index'
import Store from '../../store/index'

const Task = ({ className, onSubmitInput, handleSubmit, value }) => {
    const store = new Store('Storage')
    return (
        <div
            className={
                !store.getStore() ? className : className + '  border_bottom'
            }
        >
            <SelectAllButton className={'input__imgWrapper'} />

            <InputMain
                className={'input'}
                onSubmitInput={onSubmitInput}
                handleSubmit={handleSubmit}
                value={value}
            />
        </div>
    )
}

export default Task
