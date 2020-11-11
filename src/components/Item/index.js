import React from 'react'

const Item = ({ className, itemObj }) => {
    return (
        <div className={className}>
            <div>{itemObj.value}</div>
        </div>
    )
}
export default Item
