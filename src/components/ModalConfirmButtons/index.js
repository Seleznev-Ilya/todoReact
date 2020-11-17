import React from 'react'

const ModalConfirmButtons = ({ onButtonConfirm, onButtonCansel }) => {
    return (
        <div className="question__bittons">
            <input type="submit" value="Yes" onClick={onButtonConfirm} />
            <input type="submit" value="Nope" onClick={onButtonCansel} />
        </div>
    )
}

export default ModalConfirmButtons
