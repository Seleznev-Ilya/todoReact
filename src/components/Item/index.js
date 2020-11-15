import React, { useState } from 'react'

import InputMain from '../InputMain/index'
import DeleteCrossButton from '../DeleteCrossButton/index'
import check from '../../images/check.svg'
import uncheck from '../../images/uncheck.svg'
import cross from '../../images/cross.svg'
import Store from '../../store/index'

const Item = ({
    className,
    itemObj,
    changeItemCheckbox,
    deleteItemCheckbox,
}) => {
    /* console.log('itemObj', itemObj) */
    // const [isHideCheckbox, setIsHideCheckbox] = useState(itemObj.checkbox)
    /* console.log('isHideCheckbox', isHideCheckbox) */
    const [isHideForm, setIsHideForm] = useState(true)
    // const [isHideForm, setIsHideForm] = useState(itemObj.checkbox)
    const [todoItemId, setTodoItemId] = useState(0)
    const [todoItem, setTodoItem] = useState('')
    const [todoItemValue, setTodoItemValue] = useState(itemObj.value)
    const store = new Store('Storage')

    const onSubmitInput = (event) => {
        event.preventDefault()
        if (todoItem.trim() !== '') {
            store.setItemData(todoItem, todoItemId)
            setTodoItemValue(todoItem)
        }
        setIsHideForm(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setTodoItemId(+event.target.className)
        setTodoItem(event.target.value)
    }

    // const handleSwitchImg = () => {
    //     setIsHideCheckbox(!isHideCheckbox)
    // }
    const handleSwitchItemtoForm = (event) => {
        setTodoItem(store.getItemObj(+event.target.id).value)
        setIsHideForm(!isHideForm)
        setIsHideForm(false)
    }

    // useEffect(() => {
    //     console.log('i323233232323sHideCheckbox', isHideCheckbox)
    //     handleSwitchImg()
    // }, [itemObj.checkbox])
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
                        src={check}
                        alt="check"
                        className={
                            !itemObj.checkbox
                                ? // isHideCheckbox
                                  'check_' + className + ' checkbox'
                                : 'check_' + className + ' checkbox hide'
                        }
                        onClick={changeItemCheckbox}
                    />
                    <img
                        src={uncheck}
                        alt="uncheck"
                        className={
                            !itemObj.checkbox
                                ? // isHideCheckbox
                                  'uncheck_' + className + ' checkbox hide'
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
                    src={cross}
                    className={'cross'}
                    id={'cross' + itemObj.id}
                    deleteItemCheckbox={deleteItemCheckbox}
                />
            </div>
        </div>
    )
}
export default Item
