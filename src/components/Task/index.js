import React, { useState } from 'react'

import InputMain from '../InputMain/index'
import SelectAllButton from '../SelectAllButton/index'
import Store from '../../store/index'

const Task = ({ className, onSubmitInput, handleSubmit, value }) => {
    // const [style, setStyle] = useState(true)
    const store = new Store('Storage')
    // border_bottom
    return (
        <div
            className={
                !store.getStore() ? className : className + '  border_bottom'
            }
        >
            <SelectAllButton className={'input_imgWrapper'} />

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
