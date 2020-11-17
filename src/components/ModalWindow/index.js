import React from 'react'
import ModalConfirm from '../ModalConfirm/index'
const ModalWindow = ({
    closeModelWindow,
    answer,
    onButtonCansel,
    onButtonConfirm,
}) => {
    return (
        <div className="window">
            <ModalConfirm
                closeModelWindow={closeModelWindow}
                answer={answer}
                onButtonCansel={onButtonCansel}
                onButtonConfirm={onButtonConfirm}
            />
        </div>
    )
}

export default ModalWindow
