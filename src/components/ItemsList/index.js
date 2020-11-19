import React from 'react'
import Item from '../Item/index'
import Store from '../../store/index'

const ItemsList = ({
    className,
    items,
    deleteItemCheckbox,
    onSubmitItemsInput,
}) => {
    const store = new Store('Storage')

    const changeItemCheckbox = (itemObj) => {
        const itemId = itemObj
        store.selectItemCheckbox(itemId.id)
        onSubmitItemsInput()
    }

    return (
        <div className={className}>
            {items.map((item) => (
                <Item
                    key={item.id}
                    itemObj={item}
                    changeItemCheckbox={changeItemCheckbox}
                    deleteItemCheckbox={deleteItemCheckbox}
                    onSubmitItemsInput={onSubmitItemsInput}
                />
            ))}
        </div>
    )
}

export default ItemsList
