import React, { useCallback } from 'react'
import Button from '../Button/index'

const Modal = ({ className, title, description, onClose, onConfirm }) => {
    const handleConfirm = useCallback(() => {
        onConfirm()
        onClose()
    }, [onConfirm, onClose])

    return (
        <div className="modal__wrapper">
            <div className="modal__background" onClick={onClose}></div>
            <div className={className}>
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="description">
                    <span>{description}</span>
                </div>
                <div>
                    <div className="modal__button">
                        <Button onClick={handleConfirm} title={'Yes'} />
                        <Button onClick={onClose} title={'No'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
