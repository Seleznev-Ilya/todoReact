import React from 'react'
import SubFilters from '../SubFilters/index'
import NumberItems from '../NumberItems/index'
import Clear from '../Clear/index'

const Filters = ({ className, clearAll }) => {
    return (
        <div className={className}>
            <NumberItems />
            <SubFilters className="filter__condition" />
            <Clear clearAll={clearAll} />
        </div>
    )
}

export default Filters
