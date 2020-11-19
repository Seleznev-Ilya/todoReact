import React from 'react'
import selectImg from '../../asset/images/select.svg'
import unselectImg from '../../asset/images/unselect.svg'
import Store from '../../store/index'

const SelectAllButton = ({ className, handleSwitchImg, ishide }) => {
    const store = new Store('Storage')

    return (
        <div
            className={`${className} 
            ${store.getStore() ? '' : ' opasity'}`}
            onClick={handleSwitchImg}
        >
            <img
                src={selectImg}
                alt="select"
                className={`input__img select 
                    ${ishide ? '' : ' hide'}`}
            />
            <img
                src={unselectImg}
                alt="unselect"
                className={`input__img unselect 
                   ${ishide ? ' hide' : ''}`}
            />
        </div>
    )
}

export default SelectAllButton
