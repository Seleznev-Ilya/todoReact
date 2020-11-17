import React, { useState, useCallback } from 'react'

import InputMain from '../InputMain/index'
import DeleteCrossButton from '../DeleteCrossButton/index'
import checkImg from '../../images/check.svg'
import uncheckImg from '../../images/uncheck.svg'
import crossImg from '../../images/cross.svg'
import Store from '../../store/index'

const Item = ({
    className,
    itemObj,
    changeItemCheckbox,
    deleteItemCheckbox,
}) => {
    const [isHideForm, setIsHideForm] = useState(true)

    const [todoItemId, setTodoItemId] = useState(0)
    const [todoItem, setTodoItem] = useState('')
    const [todoItemValue, setTodoItemValue] = useState(itemObj.value)
    const store = new Store('Storage')

    const onSubmitInput = (event) => {
        event.preventDefault()

        if (!todoItem.trim()) {
            handleDeleteTask(todoItemId)()

            return
        }

        store.setItemData(todoItem, todoItemId)

        setTodoItemValue(todoItem)
        setIsHideForm(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setTodoItemId(+event.target.className)
        setTodoItem(event.target.value)
    }

    const handleSwitchItemtoForm = (event) => {
        setTodoItem(store.getItemObj(+event.target.id).value)
        setIsHideForm(!isHideForm)
        setIsHideForm(false)
    }

    const handleDeleteTask = (id) => () => {
        deleteItemCheckbox(id)
    }

    return (
        <div className={'item__style item__' + className + ' border_bottom'}>
            <InputMain
                className={isHideForm ? 'item__input hide ' : 'item__input '}
                inputClassName={itemObj.id}
                onSubmitInput={onSubmitInput}
                handleSubmit={handleSubmit}
                value={todoItem}
                holder={null}
                onBlur={onSubmitInput}
            />
            <div className={isHideForm ? 'item' : 'item hide'}>
                <div
                    className="item__checkbox-wrapper "
                    id={'check' + itemObj.id}
                >
                    <img
                        src={checkImg}
                        alt="check"
                        className={
                            !itemObj.checkbox
                                ? 'check_' + className + ' checkbox'
                                : 'check_' + className + ' checkbox hide'
                        }
                        onClick={changeItemCheckbox}
                    />
                    <img
                        src={uncheckImg}
                        alt="uncheck"
                        className={
                            !itemObj.checkbox
                                ? 'uncheck_' + className + ' checkbox hide'
                                : 'uncheck_' + className + ' checkbox'
                        }
                        onClick={changeItemCheckbox}
                    />
                </div>
                <div
                    className="item__value"
                    id={itemObj.id}
                    onDoubleClick={handleSwitchItemtoForm}
                >
                    {todoItemValue}
                </div>

                <DeleteCrossButton
                    src={crossImg}
                    className={'cross'}
                    id={'cross' + itemObj.id}
                    deleteItemCheckbox={handleDeleteTask(itemObj)}
                />
            </div>
        </div>
    )
}
export default Item
