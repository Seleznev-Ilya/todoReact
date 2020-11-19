import React from 'react'
import SubFilters from '../SubFilters'
import NumberItems from '../NumberItems'
import Clear from '../Clear'
import { FILTER } from '../../constants/filter'

const Filters = ({ className, clearAll, onSelect, conditionState }) => {
    return (
        <div className={className}>
            <NumberItems />
            <div className="filter__condition">
                {Object.values(FILTER).map((value) => (
                    <SubFilters
                        key={value}
                        item={value}
                        onSelect={onSelect}
                        conditionState={conditionState}
                    />
                ))}
            </div>

            <Clear clearAll={clearAll} />
        </div>
    )
}

export default Filters
