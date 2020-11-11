import React from 'react'

const TaskItems = ({ className, items }) => {
    return (
        <div className={className}>
            {items.map((item) => (
                <Item item={item} />
            ))}
        </div>
    )
}

export default TaskItems
