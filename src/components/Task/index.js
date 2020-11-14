import React from 'react'

import InputMain from '../InputMain/index'
import SelectAllButton from '../SelectAllButton/index'
import Store from '../../store/index'

const Task = ({
    className,
    onSubmitInput,
    handleSubmit,
    value,
    handleSwitchImg,
    ishide,
}) => {
    const store = new Store('Storage')
    return (
        <div
            className={
                !store.getStore() ? className : className + '  border_bottom'
            }
        >
            <SelectAllButton
                ishide={ishide}
                handleSwitchImg={handleSwitchImg}
                className={'input__imgWrapper'}
            />

            <InputMain
                className={'input'}
                inputClassName={null}
                onSubmitInput={onSubmitInput}
                handleSubmit={handleSubmit}
                value={value}
                holder={'what need to be done ?'}
            />
        </div>
    )
}

export default Task
