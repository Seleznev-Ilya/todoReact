import React, { useState } from 'react'

import select from '../../images/select.svg'
import unselect from '../../images/unselect.svg'
import Store from '../../store/index'

const SelectAllButton = ({ className }) => {
    const [ishide, setIsHide] = useState(true)
    const store = new Store('Storage')

    const handleSwitchImg = () => {
        setIsHide(!ishide)
    }

    return (
        <div
            className={store.getStore() ? className : className + ' opasity'}
            onClick={handleSwitchImg}
        >
            <img
                src={select}
                className={
                    ishide ? 'input_img select ' : 'input_img select hide'
                }
            />
            <img
                src={unselect}
                className={
                    ishide ? 'input_img unselect hide' : 'input_img unselect '
                }
            />
        </div>
    )
}

export default SelectAllButton
