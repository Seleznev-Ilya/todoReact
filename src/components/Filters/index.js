import React from 'react'
import SubFilters from '../SubFilters/index'
import NumberItems from '../NumberItems/index'
import Clear from '../Clear/index'

const Filters = ({ className, clearAll, handleCondition, conditionState }) => {
    return (
        <div className={className}>
            <NumberItems />
            <div className="filter__condition">
                {['All', 'Active', 'Completed'].map((item, index) => (
                    <SubFilters
                        key={index}
                        item={item}
                        index={index}
                        handleCondition={handleCondition}
                        conditionState={conditionState}
                    />
                ))}
            </div>

            <Clear clearAll={clearAll} />
        </div>
    )
}

export default Filters
