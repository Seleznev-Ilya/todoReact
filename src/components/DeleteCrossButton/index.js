import React from 'react'

const DeleteCrossButton = ({ className, src }) => {
    return (
        <div className="item__cross">
            <img src={src} alt={className} className={className} />
        </div>
    )
}

export default DeleteCrossButton
