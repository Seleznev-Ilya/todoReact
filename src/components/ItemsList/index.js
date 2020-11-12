import React from 'react'
import Item from '../Item/index'

const ItemsList = ({ className, items }) => {
    return (
        <div className={className}>
            {items.map((item) => (
                <Item className={item.id} key={item.id} itemObj={item} />
            ))}
        </div>
    )
}

export default ItemsList
