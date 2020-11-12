import React, { useState } from 'react'

import InputMain from '../InputMain/index'
import DeleteCrossButton from '../DeleteCrossButton/index'
import check from '../../images/check.svg'
import uncheck from '../../images/uncheck.svg'
import cross from '../../images/cross.svg'
// import Store from '../../store/index'

const Item = ({ className, itemObj }) => {
    const [isHideCheckbox, setIsHideCheckbox] = useState(true)
    const [isHideForm, setIsHideForm] = useState(true)
    // const store = new Store('Storage')

    const handleSwitchImg = () => {
        setIsHideCheckbox(!isHideCheckbox)
    }
    const handleSwitchItemtoForm = () => {
        setIsHideForm(!isHideForm)
    }

    return (
        <div
            className={' item__' + className + ' border_bottom'}
            // onDoubleClick={handleSwitchItemtoForm}
        >
            <InputMain
                // className={'item__input hide'}
                className={isHideForm ? 'item__input hide' : 'item__input'}
                onSubmitInput={null}
                handleSubmit={null}
                value={"input's value"}
            />
            <div
                //  className="item"
                className={isHideForm ? 'item' : 'item hide'}
                onDoubleClick={handleSwitchItemtoForm}
            >
                <div className="item__checkbox-wrapper ">
                    <img
                        src={check}
                        alt="check"
                        className={
                            isHideCheckbox
                                ? 'check_' + className + ' checkbox'
                                : 'check_' + className + ' checkbox hide'
                        }
                        onClick={handleSwitchImg}
                    />
                    <img
                        src={uncheck}
                        alt="uncheck"
                        className={
                            isHideCheckbox
                                ? 'uncheck_' + className + ' checkbox hide'
                                : 'uncheck_' + className + ' checkbox'
                        }
                        onClick={handleSwitchImg}
                    />
                </div>
                <div className="item__value">{itemObj.value}</div>

                <DeleteCrossButton src={cross} className={'cross'} />
            </div>
        </div>
    )
}
export default Item
