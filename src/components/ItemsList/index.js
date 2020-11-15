import React from 'react'
import Item from '../Item/index'

const ItemsList = ({ className, items, changeItemCheckbox }) => {
    return (
        <div className={className}>
            {items.map((item) => (
                <Item
                    className={item.id}
                    key={item.id}
                    itemObj={item}
                    changeItemCheckbox={changeItemCheckbox}
                />
            ))}
        </div>
    )
}

export default ItemsList
