import React from 'react'
import Item from '../Item/index'

const ItemsList = ({ className, items }) => {
    return (
        <div className={className}>
            {items.map((item) => (
                // <div key={item.id}>{item.value}</div>
                <Item className={item.id} itemObj={item} />
            ))}
        </div>
    )
}

export default ItemsList
