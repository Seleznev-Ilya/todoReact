import React from 'react'
import ModalConfirmButtons from '../ModalConfirmButtons/index'
import crossImg from '../../images/cross.svg'

const ModalConfirm = ({
    closeModelWindow,
    onButtonConfirm,
    onButtonCansel,
    answer,
}) => {
    return (
        <div className="window__confirm">
            <img
                className="cross"
                src={crossImg}
                alt="cross"
                onClick={closeModelWindow}
            />
            <div className="question">
                <p>
                    <span>Are You sure?</span>
                    <br />
                    <span>Delete item: </span> {answer.value}
                </p>
            </div>
            <ModalConfirmButtons
                onButtonConfirm={onButtonConfirm}
                onButtonCansel={onButtonCansel}
            />
        </div>
    )
}

export default ModalConfirm
