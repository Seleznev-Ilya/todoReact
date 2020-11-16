import React from 'react'

const Clear = ({ clearAll }) => {
    return (
        <div onClick={clearAll}>
            <p className="clear">Clear completed</p>
        </div>
    )
}

export default Clear
