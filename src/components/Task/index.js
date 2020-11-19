import React from 'react'
import InputMain from '../InputMain/index'
import SelectAllButton from '../SelectAllButton/index'
import Store from '../../store/index'

const Task = ({
    className,
    onSubmitInput,
    onChangeInputValue,
    handleSwitchImg,
    ishide,
    onBlurTodo,
}) => {
    const store = new Store('Storage')
    return (
        <div
            className={`${className}
                ${!store.getStore() ? '' : ' border_bottom'}`}
        >
            <SelectAllButton
                ishide={ishide}
                handleSwitchImg={handleSwitchImg}
                className={'input__imgWrapper'}
            />

            <InputMain
                className={'input'}
                onSubmitInput={onSubmitInput}
                onChangeInputValue={onChangeInputValue}
                holder={'what need to be done ?'}
                onBlur={onBlurTodo}
            />
        </div>
    )
}

export default Task
