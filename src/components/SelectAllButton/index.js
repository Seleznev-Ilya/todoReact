import React from 'react'

import select from '../../images/select.svg'
import unselect from '../../images/unselect.svg'
import Store from '../../store/index'

const SelectAllButton = ({ className, handleSwitchImg, ishide }) => {
    // const [ishide, setIsHide] = useState(true)
    const store = new Store('Storage')

    // const handleSwitchImg = () => {
    //     store.selectAllItems()
    //     setIsHide(!ishide)
    // }

    return (
        <div
            className={store.getStore() ? className : className + ' opasity'}
            onClick={handleSwitchImg}
        >
            <img
                src={select}
                alt="select"
                className={
                    ishide ? 'input__img select ' : 'input__img select hide'
                }
            />
            <img
                src={unselect}
                alt="unselect"
                className={
                    ishide ? 'input__img unselect hide' : 'input__img unselect '
                }
            />
        </div>
    )
}

export default SelectAllButton
