import React from 'react'

const SubFilters = ({ item, index, handleCondition, conditionState }) => {
    let getActiveState
    if (conditionState === index) {
        getActiveState = item + ' active'
    } else {
        getActiveState = item
    }

    return (
        <div className={getActiveState} id={index} onClick={handleCondition}>
            <p>{item}</p>
        </div>
    )
}
export default SubFilters
