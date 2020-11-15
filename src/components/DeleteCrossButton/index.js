import React from 'react'

const DeleteCrossButton = ({ className, src, id, deleteItemCheckbox }) => {
    return (
        <div className="item__cross" id={id} onClick={deleteItemCheckbox}>
            <img src={src} alt={className} className={className} />
        </div>
    )
}

export default DeleteCrossButton
