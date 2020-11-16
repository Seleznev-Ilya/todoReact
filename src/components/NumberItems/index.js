import React from 'react'
import Store from '../../store/index'
const NumberItems = () => {
    const store = new Store('Storage')

    return (
        <p className="numberItems">
            <b>{store.getNumberActiveItems().length} </b> items left
        </p>
    )
}
export default NumberItems
