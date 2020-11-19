import React, { useState, useCallback } from 'react'
import Store from '../../store/index'

const SubFilters = ({ item, onSelect }) => {
    const condition = new Store('Condition')

    const handleSelect = useCallback(() => {
        onSelect(item)
    }, [item])
    const currentStore = condition.getStore()

    return (
        <div
            className={currentStore === item ? 'active' : ''}
            onClick={handleSelect}
        >
            <p>{item}</p>
        </div>
    )
}
export default SubFilters
