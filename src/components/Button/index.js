import React from 'react'

const Button = ({ title, onClick }) => {
    return (
        <div className="button" onClick={onClick}>
            {title}
        </div>
    )
}
export default Button
