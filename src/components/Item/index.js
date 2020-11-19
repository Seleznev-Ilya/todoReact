import React, { useState, useCallback } from 'react'
import InputItem from '../InputItem/index'
import DeleteCrossButton from '../DeleteCrossButton/index'
import checkImg from '../../asset/images/check.svg'
import uncheckImg from '../../asset/images/uncheck.svg'
import crossImg from '../../asset/images/cross.svg'
import Store from '../../store/index'

const Item = ({
    className,
    itemObj,
    changeItemCheckbox,
    deleteItemCheckbox,
    onSubmitItemsInput,
}) => {
    const [isHideForm, setIsHideForm] = useState(true)
    const store = new Store('Storage')
    const onClickItemCheckbox = useCallback(() => {
        changeItemCheckbox(itemObj)
    }, [itemObj])

    const onSubmitInputValue = (submitValue) => {
        store.setItemData(submitValue, itemObj.id)
        setIsHideForm(true)
        onSubmitItemsInput()
    }

    const handleSwitchItemtoForm = () => {
        setIsHideForm(false)
    }

    const handleDeleteTask = (id) => () => {
        deleteItemCheckbox(id)
    }

    return (
        <div className={`item__style item__${className} border_bottom`}>
            <InputItem
                className={`item__input
                ${isHideForm ? ' hide ' : ''}`}
                inputClassName={itemObj.id}
                onSubmitInput={onSubmitInputValue}
                value={itemObj.value}
                holder={null}
            />
            <div
                className={`item
            ${isHideForm ? '' : ' hide'}`}
            >
                <div
                    className="item__checkbox-wrapper "
                    onClick={onClickItemCheckbox}
                >
                    <img
                        src={checkImg}
                        alt="check"
                        className={`checkbox 
                        ${!itemObj.checkbox ? '' : ' hide'}`}
                    />
                    <img
                        src={uncheckImg}
                        alt="uncheck"
                        className={`checkbox 
                        ${!itemObj.checkbox ? 'hide' : ''}`}
                    />
                </div>
                <div
                    className="item__value"
                    onDoubleClick={handleSwitchItemtoForm}
                >
                    {itemObj.value}
                </div>

                <DeleteCrossButton
                    src={crossImg}
                    className={'cross'}
                    deleteItemCheckbox={handleDeleteTask(itemObj)}
                />
            </div>
        </div>
    )
}
export default Item
